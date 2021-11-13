let { modeldata } = require('../models')
let {ApiError} = require('../payload/ApiErrors')

const isIDExist = async(userid) => {
    let resp = await modeldata.isIDExist(userid);
    if(resp.length <= 0){
        throw new ApiError (401, 'This ID is not Exist')
    }
    return true
}

const isEmailExist = async(email) => {
    let resp = await modeldata.isEmailExist(email);
    if(resp.length > 0){
        throw new ApiError (401, 'This Email Has been Already Exist')
    }
    return true
}

const getAllUsers = async () => {
    let resp = modeldata.getAllUsers()
    return await resp;
}

const getuser = async (userid) => {
    result =  modeldata.getUserByID(userid);
    return await result;
}

const createuser = (user) => {
    result = modeldata.create(user);
    return result;
}

const updateUser = async (data) => {
    result = await modeldata.update(data);
    return  await result;
}

const deleteuser = async (userid) => {
    result = await modeldata.del(userid);
    return await result;
}

module.exports = {
    isIDExist,
    getAllUsers,
    getuser,
    createuser,
    updateUser,
    deleteuser,
    isEmailExist
}