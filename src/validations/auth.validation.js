const joi = require('joi');

const login = joi.object({
    email : joi.string().required(),
    password : joi.string().required(),

});

const register = joi.object({
    fullName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password'),

});

module.exports = {
    login,
    register
}