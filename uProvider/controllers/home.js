var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
	
		res.render('index');
		//res.send("ok");
		
});

module.exports = router;

