let express = require('express');
let router = express.Router();
let authcontroller = require('../../controller/auth.ctrl');
let validate = require('../../middleware/validator');
const loginvalidation = require('../../validations/auth.validation');
let accesstoken = require('../../middleware/auth')

router.post('/login', authcontroller.login);
router.post('/register', accesstoken.auth, authcontroller.register);

module.exports = router;