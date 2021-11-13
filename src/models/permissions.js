let database = require('../config/Database')


const getAllPermission  = async () =>{
    let query = `select * from permissions`
    return await database.getAllUser(query)
}

const getOneUserPermission  = async (rolename) =>{
    let query = ` select distinct r.roleid,r.rolename,p.permissionname from roles r,permissions p,rolepermissions rp
    where  r.roleid=rp.roleid and p.permissionid=rp.permissionid and r.rolename = '${rolename}' `
    console.log(query)
    return await database.getAllUser(query)
}



module.exports = {
    getAllPermission,
    getOneUserPermission
}