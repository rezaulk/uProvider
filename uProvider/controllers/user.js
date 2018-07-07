var express = require('express');
var router = express.Router();

var userModel = require.main.require('./models/user-model');

router.get('/',function(req,res){
	if(!req.session.username)
	{
		res.render('user/dashboard');
	}
});
/*
router.get('/dashboard', function(req, res){	
	//res.send("ok");
	res.render('user/dashboard');

});
*/
router.get('/myPackageDetails', function(req, res){	
	//res.send("ok");
	res.render('user/myPackageDetails');

});

router.get('/payment', function(req, res){	
	//res.send("ok");
	res.render('user/payment');

});

router.get('/paymentList', function(req, res){	
	//res.send("ok");
	res.render('user/paymentList');

});

router.get('/messages', function(req, res){
	res.render('user/messages');
});


module.exports = router;