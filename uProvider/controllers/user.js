var express = require('express');
var router = express.Router();

var userModel = require.main.require('./models/user-model');
var dashboarduserModel = require.main.require('./models/dashboarduser-model');


router.get('/dashboard',function(req,res){
	if(req.session.username)
	{
		res.render('user/dashboard',{name:req.session.username});
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
	var k=req.session.username;
	dashboarduserModel.getPackageId(k,function(resul)
         {
         	console.log(resul.packageid);
         	var getPackageId=resul.packageid;
                
                dashboarduserModel.getPackageDetails(getPackageId,function(result){
                	console.log(result);
				        res.render('user/myPackageDetails',{packageDetails:result,name:req.session.username})
			});
         }
		)
	
});

router.get('/myPackages', function(req, res){
	dashboarduserModel.getAllPackages(function(result){
		res.render('user/myPackages',{packageList:result, name:req.session.username})
	});
});



router.get('/packageDetails/:packageid', function(req, res){
	//res.send('Hello');
	var packageid = req.params.packageid;
	var k=req.session.username;
	console.log(k);

	dashboarduserModel.get(packageid, function(obj){
		//console.log(req.params.packageid);
		console.log("get");
		res.render('user/packageDetails', {package: obj,name:req.session.username});
	});
	//res.render('packageDetails');
	//res.send('Hello');
});


router.post('/packageDetails/:packageid', function(req, res){
	//res.send('Hello');
	var packageid = req.params.packageid;

	var p=req.session.username;
    var update = new Object();
	dashboarduserModel.getUserId(p,function(abc)
	{
		console.log(abc.userid);
           var userid=abc.userid;
           update.userid=userid;
           update.packageid=packageid;
           dashboarduserModel.update(update, function(obj){
						console.log(req.params.packageid);
						console.log("post");

						res.redirect('../myPackageDetails');
		//res.redirect("../dashboard",{name: req.session.username});
	});

	})
	
	//res.render('packageDetails');
	//res.send('Hello');
});

router.get('myPackages/:packageid',function(req,res){
	console.log("update e jachche");
	var update={
		packageid:packageList[i].packageid
	}
	console.log('hoitese');
	dashboarduserModel.update(update, function(obj){
		console.log("teu");
		res.redirect('/user/myPackageDetails',{name:req.session.username});
	})
});







router.get('/payment', function(req, res){	
	//res.send("ok");
   var paymentview= new Object();
   var k=req.session.username;
	dashboarduserModel.getUserId(k,function(result1)
         {
         	//console.log(resul.packageid);
         	var getUserId=result1.userid;
                paymentview.name=result1.name;
                
                paymentview.address=result1.address;
                paymentview.phoneno=result1.phoneno;
                dashboarduserModel.getConnectionDetails(getUserId,function(result2){
                	//console.log(result);

                	  var packageid=result2.packageid;

                	  dashboarduserModel.getPackageDetails(packageid,function(result3)
                	  {
                           paymentview.packagename=result3.packagename;
                           paymentview.price=result3.price;
                           console.log(paymentview);
				          res.render('user/payment',{paymentview})

                	  });
			});
         });

});

router.get('/paymentList', function(req, res){	
	//res.send("ok");
	dashboarduserModel.getPaymentList(function(result){
		console.log(result);
		res.render('user/paymentList',{paymentList:result});
	});

});


module.exports = router;