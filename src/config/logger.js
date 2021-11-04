const winston = require('winston');
const { combine, timestamp, label, printfs,printf, prettyPrint} = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });

  const logger = winston.createLogger({
    
    format: combine(
        winston.format.colorize(),
       myFormat
       
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
      ]
  });


  module.exports = logger;