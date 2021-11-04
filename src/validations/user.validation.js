let joi = require('joi');

const createUser = joi.object({
    id: joi.number().required(),
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    age: joi.number().required().min(18).max(120),
    email : joi.string().optional().email(),
    Password: joi.string().required
});


const updateUser = joi.object({
    id: joi.number().required(),
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    age: joi.number().required().min(18).max(120),
    email : joi.string().optional().email(),
});

module.exports = {

    createUser,
    updateUser
}