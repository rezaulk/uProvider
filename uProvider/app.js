// DECLARATION
var express = require('express');
var app = express();
var port = 1337;
var bodyParser = require('body-parser');
var expressSession = require('express-session');


var login = require('./controllers/login');
var user = require('./controllers/user');
var logout = require('./controllers/logout');
var home = require('./controllers/home');
var category = require('./controllers/category');
var admin = require('./controllers/admin');



// CONFIGURATION
app.set('view engine', 'ejs');


// MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret: 'my top secret pass', saveUninitialized: true, resave: false}));

app.use('*', function(req, res, next){
	if(req.originalUrl == '/login' || req.originalUrl == '/logout')
	{
		next();
	}
	else
	{
		if(req.session.username)
		{
			res.redirect('/edit');
			return;
		}
		next();
	}
});

// ROUTES
app.use('/home', home);
app.use('/login', login);
app.use('/logout', logout);

app.use('/user', user);
app.use('/admin', admin);



app.use('/category', category);

app.get('/', function(req, res){
	//res.redirect('user');
	
	res.redirect('index');
	console.log(req.session);
	req.session.name = 'ABCD';

});
var express = require('express');
var router = express.Router();
router.get('/index', function(req, res){	
	//res.send("ok");
	res.render('index');

});



// SERVER START
app.listen(port, function(){
	console.log('Server started successfully ...');
});