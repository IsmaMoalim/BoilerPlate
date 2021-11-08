let status = require('http-status');
let logger = require('../config/logger');
let handleAsync = require('../utils/util')
const { userServices } = require('../services');
let { ApiError } = require('../payload/ApiErrors');
let { ApiResponses } = require('../payload/ApiResponses');
let database = require('../config/Database');

/** 
 *This fucntion calls getAll in the services that carry getAllUsers directelly without passing any parameter.
 */
const getAllUsers = async (req, res) => {
  let result = await userServices.getAllUsers();
  res.status(status.OK).send(new ApiResponses(status.OK, "OK", result));
};

const getDataFromdb = async (req, res) => {
  let query = 'select * from users'
  let result = await database.getAllUsers(query);
  console.log(result);
  res.status(status.OK).send(new ApiResponses(status.OK, 'get it', result))
}

// id req from the body and get all info about specific user
const getuserByID = (req, res) => {
  let userid = req.body;
  data = userServices.getuser(userid.id)
  res.status(status.OK).send(new ApiResponses(status.OK, 'get it', data))
}

const createUser = (req, res) => {
  let user = req.body;
  logger.info('creating the user...')
  if (userServices.isIDExist(user.id)) {

    return res.status(status.NOT_ACCEPTABLE)
      .send(new ApiError(status.NOT_ACCEPTABLE, 'this userID is already exist'))

  }

  data = userServices.createuser(user)
  if (data) {
    return res.status(status.OK).send(new ApiResponses(status.OK, 'Created successfully', data))

  }

  return res.status(status.OK).send("something went wrong");

}

// before it update check the id existance, if its exist the update.
const updateUser = (req, res) => {
  let id = req.body;
  console.log(id);
  if (!userServices.isIDExist(id.id)) {

    return res.status(status.NOT_ACCEPTABLE)
      .send(new ApiError(status.NOT_ACCEPTABLE, 'This ID Does not exist', 'This ID Does not exist'))

  }

  result = userServices.updateU(id)
  if (result) {
    return res.status(status.OK).send(new ApiResponses(status.OK, 'Updated Successfully', result))

  }

}

// before you delete check the id existance, if it exist the delete.
const deleteUser = (req, res) => {
  data = req.body;
  if (!userServices.isIDExist(data.id)) {

    return res.status(status.NOT_ACCEPTABLE)
      .send(new ApiError(status.NOT_ACCEPTABLE, ' This ID Does not exist', 'This ID Does not exist'))
  }

  result = userServices.deleteuser(data)
  if (result) {
    return res.status(status.OK).send(new ApiResponses(status.OK, 'Deleted Succesfully', result))

  }
}

// exporting the functions
module.exports = {

  getAllUsers,
  getuserByID,
  createUser,
  updateUser,
  deleteUser,
  getDataFromdb
}
