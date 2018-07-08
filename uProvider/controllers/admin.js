var express = require('express');
var router = express.Router();

var userModel = require.main.require('./models/user-model');
var dashboardAdminModel = require.main.require('./models/dashboardAdmin-model');

router.get('/', function(req, res){	
	
	if(!req.session.username)
		{
			var dashboard={'package': null};
			var k;
			dashboardAdminModel.getAll(function(result){

				//console.log(result.length);
			    k=result.length;
					//dashboard["package"]=convert.toInt(result.length);
		    });

			dashboard.package=k;
			dashboard.username=req.session.username;
			res.render('admin/dashboard', {name: req.session.username});
        }
	res.render('index/index');

});

router.get('/dashboard', function(req, res){	
	//res.send("ok");
	//var dashboard = {package:'0'};
	var dashboard= new Object();
	var k;
	dashboardAdminModel.getAll(function(result){
					
				console.log(result.length);
			    k=result.length;
	          
	          dashboard.package=k;
	          //console.log(dashboard.package);


					//dashboard["package"]=convert.toInt(result.length);
			});

	dashboard.name=req.session.username;
	res.render('admin/dashboard', {dashboard});
    
});



router.get('/myPackages', function(req, res){
	dashboardAdminModel.getAllPackages(function(result)
	{
		res.render('admin/myPackages',{packageList:result})
	});
	//res.render('admin/addPackage');

});

router.get('/addPackage', function(req, res){	
	
	
		res.render('admin/addPackage',{errs:[]});

});


router.post('/addPackage', function(req, res){	

	var package={
		packagename:req.body.packagename,
		packageprice:req.body.packageprice,
		packagespeed:req.body.packagespeed,
		packagedescription:req.body.packagedescription

	}
	console.log("add package post form");
	
	dashboardAdmin-model.insert(data,function(obj)
	{
		console.log('okkdddddddd');
		res.redirect('/admin');
	});
		


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