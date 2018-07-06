var express = require('express');
var router = express.Router();
var categoryModel = require.main.require('./models/category-model');
var validationRules = require.main.require('./validation-rules/rules');
var asyncValidator = require('async-validator');

router.get('/', function(req, res){
	categoryModel.getAll(function(result){
		res.render('category/list', {categoryList: result});
	});
});

router.get('/create', function(req, res){
	res.render('category/create', {errs: []});
});

router.post('/create', function(req, res){

	var rules = validationRules.category.create;

	var data = {
		catname: req.body.catname,
		desc: req.body.desc
	};

	var validator = new asyncValidator(rules);
	validator.validate(data, function(errors, fields){
		if(!errors)
		{
			categoryModel.insert(data, function(obj){
				res.redirect('/category');
			});
		}
		else
		{			
			res.render('category/create', {errs: errors});
		}
	});

		
});

router.get('/edit/:id', function(req, res){
	var id = req.params.id;
	categoryModel.get(id, function(obj){
		res.render('category/edit', obj);
	});
});
router.post('/edit/:id', function(req, res){
	var id = req.body.catid;
	var name = req.body.catname;
	var desc = req.body.desc;
	categoryModel.update(id, name, desc, function(obj){
		res.redirect('/category');
	});
});

module.exports = router;