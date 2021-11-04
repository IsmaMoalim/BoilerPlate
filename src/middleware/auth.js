const express = require('express');
const status = require('http-status');
let { ApiError } = require ('../payload/ApiErrors')
let jwt = require('jsonwebtoken')

const auth = (req, res, next) =>{
    let bearerHeader = req.headers['authorization'];
    
    const token = bearerHeader.split(' ')[1];
        console.log("AccessToken is :"+token);
    if (!token) {
        console.log(token);
        throw new ApiError(403,"Your authentication is forbiden")
    }
    
    let response = jwt.verify(token, process.env.JWT_SECRET_KEY)
    if (response) { 
        next()

    }
}


module.exports = {
    auth
} 
