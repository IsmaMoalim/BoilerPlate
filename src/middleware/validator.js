const express = require('express');
const status = require('http-status');
let { ApiError } = require ('../payload/ApiErrors')

const validate = (schema) => (req, res, next) =>{

    let {value, error} = schema.validate(req.body);
  
    if (error){
        let message = error.details[0].message;
        let state = status.BAD_REQUEST
        return res.status(state).send(new ApiError(state,message));
    }
   
next();


}


module.exports = validate
