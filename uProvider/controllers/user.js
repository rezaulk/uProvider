var express = require('express');
var router = express.Router();
router.get('/', function(req, res){	
	//res.send("ok");
	res.render('index');

});

router.get('/dashboard', function(req, res){	
	//res.send("ok");
	res.render('user/dashboard');

});

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


module.exports = router;