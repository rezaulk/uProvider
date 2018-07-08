var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');
var dashboardAdminModel = require.main.require('./models/dashboardAdmin-model');


router.get('/:packageid', function(req, res){
	//res.send('Hello');
	var packageid = req.params.packageid;
	dashboardAdminModel.get(packageid, function(obj){
		console.log(req.params.packageid);
		res.render('packageDetails', {package: obj});
	});
	//res.render('packageDetails');
	//res.send('Hello');
});

router.get('/myPackageDetails', function(req, res){	
	//res.send("ok");
	res.render('user/myPackageDetails');

});

module.exports = router;