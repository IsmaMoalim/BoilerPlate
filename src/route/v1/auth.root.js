let express = require('express');
let router = express.Router();
let authcontroller = require('../../controller/auth.ctrl');
let validate = require('../../middleware/validator');
const loginvalidation = require('../../validations/auth.validation');
const { authvalidation } = require('../../validations');

router.post('/login', validate(loginvalidation.login), authcontroller.login);
router.post('/register', validate(authvalidation.register), authcontroller.register);
router.get('/getpermission', authcontroller.getAllPermission)

module.exports = router;