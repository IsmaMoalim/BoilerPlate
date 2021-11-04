const joi = require('joi');

const login = joi.object({
    email : joi.string().optional().email(),
    password : joi.string().required(),

});

const register = joi.object({
    username : joi.string().required(),
    password : joi.string().required(),
    age : joi.number().required().max(120),
    email : joi.string().optional().email(),

});

module.exports = {
    login,
    register
}