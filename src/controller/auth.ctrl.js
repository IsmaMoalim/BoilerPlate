let logger = require('../config/logger');
let status = require('http-status');
let {ApiResponses} = require('../payload/ApiResponses')
let {authServices} = require('../services/index')
let  util =require ('../utils/util')

exports.login = util.handleAsync (async(req,res) =>{
    let userid = req.body.userid
    let username =  req.body.username
   
    let loginResponse = await authServices.login(userid, username);
   

res.status(status.OK).send(new ApiResponses(status.OK,'Login succesfully', loginResponse))

});

exports.register = (req,res) =>{

    state = status.OK
    res.status(status.OK).send(new ApiResponses(state , 'Registered'))

    
}