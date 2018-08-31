const express = require('express');
const morgan = require('morgan');
const request = require('request');
const path = require('path');

const app = express();
const port = 3000;

const demoTargetLink = 'http://localhost:3000/s1';

app.use(morgan('dev'));

app.get('/api/tmdt/label', (req, res) => {
	const {tracking_id} = req.query;

	//return res.json({demoTargetLink});
	request(demoTargetLink).pipe(res);
});

// https://s1.viettelpost.vn/report.do
app.get('/s1', (req, res) => {
	res.sendFile(path.resolve(__dirname, './label.html'));
})

app.listen(port, (err) => {
	if (err) throw err;
	console.log('server is listening on', port);	
});
