var express = require('express');
var router = express.Router();

var userModel = require.main.require('./models/user-model');
var dashboardAdminModel = require.main.require('./models/dashboardAdmin-model');


router.get('/dashboard', function(req, res){	
	//res.send("ok");
	var dashboard={};
	var k;
	dashboardAdminModel.getAll(function(result){
		//console.log(result);
		
		console.log(result.length);
       k=result.length;
		dashboard["package"]=convert.toInt(result.length);
});
	dashboard.package=k;
	console.log(typeof(k));
	res.render('admin/dashboard', {dashboard});
    
});




router.get('/addPackage', function(req, res){	
	//res.send("ok");
	res.render('admin/addPackage');

});

router.get('/myPackages', function(req, res){	
	//res.send("ok");
	res.render('admin/myPackages');

});

router.get('/paymentList', function(req, res){	
	//res.send("ok");
	res.render('admin/paymentList');

});

router.get('/requests', function(req, res){	
	//res.send("ok");
	res.render('admin/requests');

});

router.get('/report', function(req, res){	
	//res.send("ok");
	res.render('admin/requests');

});


module.exports = router;