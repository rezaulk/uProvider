var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');
router.get('/', function(req, res){
	res.render('admin/myPackages');
	//res.send('Hello');
});

router.get('/myPackageDetails', function(req, res){	
	//res.send("ok");
	res.render('user/myPackageDetails');

});

module.exports = router;