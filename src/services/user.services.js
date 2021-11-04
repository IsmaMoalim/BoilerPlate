const jwt = require('jsonwebtoken')

// requiring the models 
let { modeldata } = require('../models')

// cheks weather userid id is exist or not 
const isIDExist = (id) =>{
    if (modeldata.isIDExist(id)){
        return true;
    }
        return false;
}

// get getall fucntion in the model 
const getAllUsers = async () => {
    return modeldata.getAllUsers();
}

// get getuser fucntion in the model by passing userId
const getuser = (id) =>{
    result = modeldata.getUserByID(id);
    return result;
    
}

// get create fucntion in the model by passing user parameter 
const createuser = (user) =>{
    result = modeldata.create(user);
    return result;
}

// get update fucntion in the model by passing user as parameter 
const updateU = (data) => {
    result = modeldata.update(data);
    return result;
}

// get delete fucntion in the model by passing id as parameter 
const deleteuser = (id) =>{
    result = modeldata.del(id);
    return result;
}

// Exporting the functions
module.exports = {
    isIDExist,
    getAllUsers,
    getuser,
    createuser,
    updateU,
    deleteuser
}