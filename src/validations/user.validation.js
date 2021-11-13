let joi = require('joi');

const createUser = joi.object({
    fullName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password'),
});


const updateUser = joi.object({
    userid: joi.string().required(),
    fullName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
});

module.exports = {

    createUser,
    updateUser
}