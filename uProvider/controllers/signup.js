var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	//console.log('ok signup');
	res.render('signup/index', {errs:[]});
});

router.post('/', function(req, res){
	 var k= Date.now();
	 console.log(k);
	var data = {
		name: req.body.name,
		phoneno: req.body.phoneno,
		address: req.body.address,
		email: req.body.email,
		signuptime: k,
		username: req.body.username,
		password: req.body.password,
	};
	userModel.createUser(data, function(obj){
		res.redirect('/login');
	})
	console.log('string');
});

module.exports = router;