// DECLARATION
var express = require('express');
var app = express();
var port = 1337;
var bodyParser = require('body-parser');
var expressSession = require('express-session');


var login = require('./controllers/login');
var user = require('./controllers/user');
var logout = require('./controllers/logout');
var category = require('./controllers/category');
var admin = require('./controllers/admin');
var index = require('./controllers/index');
var home = require('./controllers/home');
var signup = require('./controllers/signup');
var packages = require('./controllers/packages');







// CONFIGURATION
app.set('view engine', 'ejs');


// MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret: 'my top secret pass', saveUninitialized: true, resave: false}));

app.use(function(req, res, next) {
  res.locals.user = req.session.user;
  next();
});

app.use(express.static(__dirname + '/'));

app.use('*', function(req, res, next){
	if(req.url=='/' || req.originalUrl == '/login' || req.originalUrl == '/logout' || req.originalUrl == '/signup')
	{
		next();
		return;
	}
	else
	{
		if(!req.session.username)
		{
			//console.log("hello");
		   res.redirect('/home');
		   //console.log('req.session.username'); 
		  
	       return;
		}
		next();
	}
});

// ROUTES
app.use('/login', login);
app.use('/logout', logout);
app.use('/user', user);
app.use('/admin', admin);
app.use('/index', index);
app.use('/home', home);
app.use('/signup', signup);
app.use('/packages', packages);


app.get('/', function(req, res){
	//console.log(req.session);
	req.session.name = 'ABCD';
	 res.redirect('/home');
});


// SERVER START
app.listen(port, function(){
	console.log('Server started successfully ...');
});