var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){

   // console.log('set');
	 res.render('index');
		
});

module.exports = router;
