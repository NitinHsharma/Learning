var express = require('express');
var router = express.Router();
var mongoRapper = require('../utils/mongoRapper');

/* GET users listing. */
router.post('/', function(req, res, next) {
	console.log('Got the request in signUp');
	console.log(req.body);

	mongoRapper.work();
	mongoRapper.insert(req.body, function(err, data) {
		console.log('return value ',data);

		if (err) {
			console.log(err);
		}
		else{
		console.log('Return values %j', data);
		if (data == undefined) {
			res.json('Error');
		} else {
			res.render('login');
		}
	}
	});



	// if (req.body.firstname == undefined || req.body.password == undefined) {
	// 	res.json('Please send the username and password');
	// } else {
	// 	db.contactlist.insert(req.body,function(err,data){
	// 		if (err) {
	// 			res.json(err);
	// 		}
	// 		else{
	// 		res.render('login');

	// 		}
	// 	});
	// }

});

module.exports = router;