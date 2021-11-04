let express = require('express');
let router = express.Router()
let { usercontroller } = require('../../controller')
let validate = require('../../middleware/validator');
let {uservalidation} = require('../../validations');
let accesstoken = require('../../middleware/auth')

router.get('/',accesstoken.auth,usercontroller.getAllUsers);
router.get('/getuserByID',usercontroller.getuserByID);
router.get('/getDataFromdb',usercontroller.getDataFromdb);
router.post('/create',validate(uservalidation.createUser),usercontroller.createUser);
router.patch('/update',validate(uservalidation.updateUser),usercontroller.updateUser);
router.delete('/delete',usercontroller.deleteUser);

module.exports = router;
