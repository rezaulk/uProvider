var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');
router.get('/', function(req, res){
	res.render('login/index');
	//res.send('Hello');
});

router.post('/', function(req, res){
	var un = req.body.username;
	var ps = req.body.password;
	userModel.validateUser(un, ps, function(status){
		console.log(status);
		if(status)
		{
			req.session.username = un;
			res.redirect('/user/dashboard');
		}
		else
		{
			res.send('Invalid');
		}
	});
	
});

module.exports = router;