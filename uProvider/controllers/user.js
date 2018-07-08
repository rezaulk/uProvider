var express = require('express');
var router = express.Router();

var userModel = require.main.require('./models/user-model');

router.get('/dashboard',function(req,res){
	if(req.session.username)
	{
		res.render('user/dashboard');
		//res.send("ok");
	}
	console.log("ok");
});

router.get('/dashboard',function(req,res){
	if(req.session.username)
	{
		//res.render('user/dashboard');
		res.send("ok");
	}
	console.log("ok");
});
/*
router.get('/dashboard', function(req, res){	
	//res.send("ok");
	res.render('user/dashboard');

});
*/
router.get('/myPackageDetails', function(req, res){	
	//res.send("ok");
	dashboardUserModel.getPackageDetails(function(result){
		res.render('user/myPackageDetails',{packageDetails:result})
	});
});

router.get('/payment', function(req, res){	
	//res.send("ok");
	res.render('user/payment');

});

router.get('/paymentList', function(req, res){	
	//res.send("ok");
	res.render('user/paymentList');

});


module.exports = router;