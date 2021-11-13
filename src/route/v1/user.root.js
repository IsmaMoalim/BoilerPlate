let express = require('express');
let router = express.Router()
let { usercontroller } = require('../../controller')
let validate = require('../../middleware/validator');
let {uservalidation} = require('../../validations');
let accesstoken = require('../../middleware/auth')
let authentication = require('../../middleware/auth')

router.get('/',accesstoken.auth,authentication.authen('viewAllUsers'),usercontroller.getAllUsers);
router.get('/getuserByID/:userid',usercontroller.getuserByID);
router.post('/create',accesstoken.auth,authentication.authen('Create'),validate(uservalidation.createUser),usercontroller.createUser);
router.patch('/update',accesstoken.auth,authentication.authen('Update'),validate(uservalidation.updateUser),usercontroller.updateUser);
router.delete('/delete/:userid',accesstoken.auth,authentication.authen('deleteUser'),usercontroller.deleteUser);

module.exports = router;
