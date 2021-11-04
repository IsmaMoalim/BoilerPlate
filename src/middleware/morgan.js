const morgan = require('morgan');
const logger = require('../config/logger');

const morganmiddleware =  morgan (

    "tiny",
    {stream: logger.stream.write}
);


module.exports = morganmiddleware;