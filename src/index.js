let express = require('express');
let status = require('http-status')
require('dotenv').config()
let database = require('./config/Database')
let app = express();
let port = process.env.PORT;
let catalog =  require('./route/v1/catalog')
let bodyparser = require('body-parser');
app.use(bodyparser.json());
let morganmiddleware = require('./middleware/morgan');
let {ApiError} = require('./payload/ApiErrors')
let cors = require('cors');
let helmet = require('helmet')
let i18n  = require('i18n')
let cookieParser = require('cookie-parser')

app.use(cookieParser());
app.use(i18n.init)

/**
 * Locale Configuration
 */
 i18n.configure({
    // setup some locales - other locales default to en silently
    locales: ['en', 'es', 'so'],

    // you may alter a site wide default locale
    defaultLocale: 'en',

    // sets a custom cookie name to parse locale settings from
    cookie: 'currentLocale',

    // where to store json files - defaults to './locales'
    directory: __dirname + '/locales'
});

//Middlewares 
app.use(morganmiddleware)
app.use('/v1', catalog);
app.use(cors())
app.use(helmet())

app.use((req,res,next) =>{

    let state = status.BAD_REQUEST;
    let message = "Not Found"
    let error = 'Not Found'

   res.status(404).send( new ApiError(state, message, error ));
});

// All error handaling exceptions
app.use((err, req, res, next) => {
    res.status(401).send(err)
})


app.listen(port, (req,res) =>{

    console.log('This app is running on '+process.env.LOCAL_HOST+process.env.PORT);

});