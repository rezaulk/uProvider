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
	res.render('index');

});

router.get('/dashboard', function(req, res){	
	
	var dashboard= new Object();
	var k=req.session.username;
	console.log("kfkf");
	dashboardAdminModel.getAllUser(function(result1){
					
	          dashboard.TotalUser=result1.length;
	          console.log(dashboard.TotalUser);
			});

	dashboardAdminModel.getUserNamebyuname(k,function(result4){
					
	          dashboard.name=result4.name;
	          console.log(dashboard.name);
	          //console.log(dashboard.TotalUser);
			});
	
	dashboardAdminModel.getAllPackages(function(result2){

	          dashboard.TotalPackage=result2.length;
	          console.log(dashboard.TotalPackage);
	        
			});
	dashboardAdminModel.getAllAdmin(function(result3){

	          dashboard.TotalAdmin=result3.length;

	           console.log(dashboard.TotalAdmin);
	//console.log(dashboard);

	res.render('admin/dashboard', {dashboard});
	        
			});
    
	//dashboard.name=req.session.username;
	
    
});



router.get('/myPackages', function(req, res){
	dashboardAdminModel.getAllPackages(function(result)
	{
		res.render('admin/myPackages',{packageList:result,name:req.session.username})
	});
	//res.render('admin/addPackage');

});

router.get('/addPackage', function(req, res){	
	
		res.render('admin/addPackage',{errs:[],name:req.session.username});

});


router.post('/addPackage', function(req, res){	

	console.log("add package post form");
 
	var package={
		packagename:req.body.packagename,
		price:req.body.price,
		speed:req.body.speed,
		description:req.body.description

	}
	console.log("add package post form");
	
	dashboardAdminModel.insert(package,function(obj)
	{
		console.log('okkdddddddd');
		res.redirect('/admin/myPackages');
	});
		


});

router.get('/paymentList', function(req, res){
	
	dashboardAdminModel.getAllPayment(function(obj)
    {

           res.render('admin/paymentList',{paymentList:obj});
    });
  

});

router.get('/requests', function(req, res){	
	//res.send("ok");
	res.render('admin/requests');

});


router.get('/packageDetails/:packageid', function(req, res){
	//res.send('Hello');
	var packageid = req.params.packageid;
	dashboardAdminModel.get(packageid, function(obj){
		//console.log(req.params.packageid);
		console.log("get");
		res.render('admin/packageDetails', {package: obj,name:req.session.username});
	});
	//res.render('packageDetails');
	//res.send('Hello');
});

router.post('/packageDetails/:packageid', function(req, res){
	//res.send('Hello');
	var packageid = req.params.packageid;
	dashboardAdminModel.deletepackage(packageid, function(obj){
		console.log(req.params.packageid);
		console.log("post");

		res.redirect('../myPackages');
		//res.redirect("../dashboard",{name: req.session.username});
	});
	//res.render('packageDetails');
	//res.send('Hello');
});



router.get('/report', function(req, res){	
	

   
   /*dashboardAdminModel.getAllPackages(function(result)
   {

   	   var name;
   	   for(var i=0;i<result.length;i++)
   	   {
                var k=result[i].packageid;
                
                 console.log("payment id");
                 console.log(result[i].packageid);
                  //array[i].name=result[i].packagename;
                 console.log(result[i].packagename);
                name=result[i].packagename;
                 dashboardAdminModel.getPackageCount(k,function(resul)
                 {
                     console.log(resul.length);
                     //array[i].name=resul.length;
                     array.push([name,resul.length])
                     setTimeout(getPackageCount(),1000);
                 });

}


console.log(array);
	res.render('admin/report');

});*/

   });


module.exports = router;