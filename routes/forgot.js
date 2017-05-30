var express = require('express');
var router = express.Router();
var mongoRapper = require('../utils/mongoRapper');
var mail = require('../utils/mailer');

/* GET users listing. */
router.post('/', function(req, res, next) {


	mongoRapper.select(req.body, function(err, data) {


		if (err) {
			console.log(err);
		} else {

			if (data == undefined) {
				res.json('Error');
			} else {

				var mailOptions = {
					from: 'nitin.sharma@bookmyshow.com', // sender address
					to: 'ravi.jaisawal@bookmyshow.com', // list of receivers
					subject: 'Hello ✔', // Subject line
					text: 'Hello world ?', // plain text body
					html: '<b>Your password is </b>'+data.password // html body
				};
				console.log('checking ', mailOptions);
				mail.sent(mailOptions, function(err, data) {
					if (err) {
						console.log(err);
					} else {
						//res.render('login');
					}
				});

			}
		}
	});

});

module.exports = router;