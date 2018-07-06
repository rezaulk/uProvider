var express = require('express');
var router = express.Router();
router.get('/', function(req, res){	
	//res.send("ok");
	res.render('admin/index');

});

router.get('/dashboard', function(req, res){	
	//res.send("ok");
	res.render('admin/dashboard');

});

router.get('/addPackage', function(req, res){	
	//res.send("ok");
	res.render('admin/dashboard');

});

router.get('/myPackageDetails', function(req, res){	
	//res.send("ok");
	res.render('admin/myPackageDetails');

});

router.get('/paymentList', function(req, res){	
	//res.send("ok");
	res.render('admin/paymentList');

});

router.get('/request', function(req, res){	
	//res.send("ok");
	res.render('admin/requests');

});


module.exports = router;