const logger = require('../config/logger')
const usermodels = require('../models/user_models')
const {ApiError} = require('../payload/ApiErrors')
const status = require('http-status')
const jwt = require('jsonwebtoken')
const util = require('../utils/util')
const login =  async (userid, username) =>{
    // check the error and return
    logger.info (`Authenticating email ${userid} and password ${username}`)

    let user = await usermodels.getUserIdAndUserName(userid , username)
    console.log(user)
    if(user.length <= 0) {
        console.log(user.length);
          throw new ApiError(401,"Email or Password does not match")
    }

    var token = jwt.sign({user},  process.env.JWT_SECRET_KEY, { expiresIn: '30s' });

    return {accesstoken: token}
}

module.exports = {
    login
}