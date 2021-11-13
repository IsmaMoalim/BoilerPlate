const logger = require('../config/logger')
const usermodels = require('../models/user_models')
const { ApiError } = require('../payload/ApiErrors')
const status = require('http-status')
const jwt = require('jsonwebtoken')
const util = require('../utils/util')
const {permissions} = require('../models/permissions')
const login = async (email, password) => {
    // check the error and return
    logger.info(`Authenticating email ${email} and password ${password}`)
    let user = await usermodels.getUserEmailAndPasword(email, password)
    if (user.length == 0) {
        console.log(user.length);
        throw new ApiError(401, "Email or Password does not match")
    }

    var token = jwt.sign({ userid:user[0].USERID, role:user[0].ROLENAME }, process.env.JWT_SECRET_KEY, { expiresIn: '30s' });
    return { accesstoken: token }
}


const register = async (user) => {
    let err = '';
    let result = await usermodels.create(user);
    if (!result)
        err = 'Something went wrong';

    return {result, err};
}

const getpermission = async () =>{
    return await permissions.getAllPermission()
}


module.exports = {
    login,
    register,
    getpermission
}