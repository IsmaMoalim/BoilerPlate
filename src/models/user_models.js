const database = require('../config/Database')

const getAllUsers =  async() =>{
    let query = 'select * from users'
    return await database.getAllUser(query)
}

const getUserEmailAndPasword = async (email, password) => {
    console.log("hello");
    let query = `SELECT U.USERID, U.FULLNAME, U.EMAIL, R.ROLENAME
    FROM USERS U
             INNER JOIN USERROLE UR on U.USERID = UR.userId
             INNER JOIN ROLES R on UR.roleId = R.ROLEID
    WHERE EMAIL = '${email}'
      AND PASSWORD = '${password}'
      AND ACTIVE = 1`
   return await database.getAllUser(query)                          
}

const getUserByID = async (userid) =>{
    let query = `select * from users where userid = ${userid}`
    return await database.getAllUser(query);
}

const create = async (user) =>{
    let email = user.email;
    let password = user.password;
    let fullName = user.fullName;
    let active = 1;

    let query = `INSERT INTO USERS (USERID, EMAIL, PASSWORD, FULLNAME, ACTIVE)
    VALUES (userid_sq.nextval, '${email}', '${password}', '${fullName}',${active})`
    return await database.getAllUser(query)
}

const isIDExist = async (userid) =>{
    let query = `select * from users where userid = ${userid}`
    return await database.getAllUser(query);
}

const isEmailExist = async (email) =>{
    let query = `select * from users where email = '${email}'`
    return await database.getAllUser(query);
}

const update = async (user) =>{
    let userid = user.userid
    let fullname = user.fullName;
    let email = user.email;
    let password = user.password;
    let query = `update users set fullname = '${fullname}', email = '${email}', password = '${password}'
                        where userid = ${userid} `
    return await database.getAllUser(query)
 
}

const del = async (userid) =>{
    let query = `delete from users where userid = ${userid}`
    return await database.getAllUser(query)
}

module.exports ={
    getAllUsers,
    getUserByID,
    create,
    isIDExist,
    update,
    del,
    getUserEmailAndPasword,
    isEmailExist
}