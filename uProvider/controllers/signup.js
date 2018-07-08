var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');
router.get('/', function(req, res){
	console.log('ok signup');
	res.render('signup/index');
});

router.post('/', function(req, res){
	var data = {
		name: req.body.name,
		address: req.body.address,
		phoneno: req.body.phoneno,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	};
});

module.exports = router;