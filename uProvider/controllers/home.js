var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

   //console.log('set');
	 res.render('index');
		
});

module.exports = router;
