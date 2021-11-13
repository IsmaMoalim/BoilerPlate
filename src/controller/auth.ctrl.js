let status = require('http-status');
let { ApiResponses } = require('../payload/ApiResponses')
let { authServices, userServices } = require('../services/index')
let {ApiError} = require('../payload/ApiErrors')
let util = require('../utils/util')
let {permissions} = require ('../models/permissions')
exports.login = util.handleAsync(async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let loginResponse = await authServices.login(email, password);
    console.log(email,password);
    // let message = res.__('loginSuccess', email);
    res.status(status.OK).send(new ApiResponses(status.OK, 'login successfully', loginResponse))
});

exports.register = util.handleAsync( async (req, res) => {

    let user = req.body;
    console.log("register user" + user);
    let {result, err} = await authServices.register(user);
    if (err){
        return res.status(status.INTERNAL_SERVER_ERROR)
            .send(new ApiError(status.INTERNAL_SERVER_ERROR, err));
    }

    res.status(status.OK).send(new ApiResponses(status.OK, res.__('registerSuccess'),result));
});


exports.getAllPermission = async (req, res) => {
    let result = await authServices.getpermission();
    res.status(status.OK).send(new ApiResponses(status.OK, "ALl Permissions", result));
  };

