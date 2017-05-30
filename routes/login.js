var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('users', ['contactlist']);
var bodyparser = require('body-parser');
var mongoRapper = require('../utils/mongoRapper');


/* GET users listing. */
router.post('/', function(req, res, next) {
	console.log('Got the request in login');
	console.log(req.body);
	if (Object.keys(req.body).length == 0) {
		res.send('Query not found');
	} else {
		mongoRapper.select(req.body, function(err, data) {
			if (err) {
				res.json('error');
			} else {
				res.json(data);
			}
		});
	}
});

module.exports = router;