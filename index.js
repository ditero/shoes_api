const express = require('express')
const exphbs = require('express3-handlebars')
const bodyParser = require('body-parser')
const flash = require('express-flash')
const session = require('express-session')
//MongoDB connections String
const mongoURL = process.env.MONGO_DB_URL || 'mongodb://localhost/shoesTest';

const ShoesRoutes = require('./controller/app')
const Models = require('./model/shoes')
const models = Models(mongoURL);

const  shoesRoutes = ShoesRoutes(models) //Instantiate the routes

const app = express() //Instantiate express server
app.engine('hbs', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'hbs')
app.use('/', express.static('public'))

// Catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    error:{
      message: err.message
    }
  })
})
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	if(req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE,GET");
		return res.status(200).json({});
	}
	next();
});
//prase application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

//parse application .json
app.use(bodyParser.json())

//Use the session middleware
app.use(session({secret: 'keyboard cat', cookie:{maxAge: 60000 * 20}}))
app.use(flash())



//Shoes api routes
app.get('/api/shoes', shoesRoutes.shoesInStock)
app.get('/api/shoes/brand/:brandname', shoesRoutes.listGivenBrand)
app.get('/api/shoes/size/:size', shoesRoutes.listGivenSize)
app.get('/api/shoes/brand/:brandname/size/:size', shoesRoutes.listGivenSizeAndBrand)
app.post('/api/shoes/sold/id', shoesRoutes.updateOnPurchase)
app.post('/api/shoes', shoesRoutes.addNewStock)


app.set('port', (process.env.PORT || 8000))
app.listen(app.get('port'), function(){
  console.log("Shoes API started on port:", app.get('port'))
})
