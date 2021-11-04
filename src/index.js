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