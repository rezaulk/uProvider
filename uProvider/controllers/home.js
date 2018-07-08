var express = require('express');
var router = express.Router();

var dashboardAdminModel = require.main.require('./models/dashboardAdmin-model');


router.get('/', function(req, res){

     dashboardAdminModel.getAllPackages(function(result)
	{
		console.log(result);
		res.render('index',{packageList:result})
	});
});

module.exports = router;
