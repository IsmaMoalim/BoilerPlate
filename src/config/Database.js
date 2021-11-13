const oracledb = require('oracledb');
const util = require('../utils/util')

const host  = '15.15.0.59:1521';
const database = 'students'
const username = 'ismael';
const password = 'ismael';


oracledb.initOracleClient({libDir:'D:\\Training course@Taaj\\Nodejs\\instantclient-basic-windows.x64-21.3.0.0.0\\instantclient_21_3'})

async function checkConnection (){
    try {    
         connection = await oracledb.getConnection({
        user: username,
        password: password,
        connectString: host + '/' + database

    });
    console.log('Connected to Database');

    return await connection
    }
    catch(err){
        console.error(err);
    }

}
// checkConnection();

async function getAllUser(query) {
  
    try {
     connection = await checkConnection();
    let result = await connection.execute(query);
    connection.commit();
    return await util.converObject(result)

    }
    catch(err) {
        console.error(err);
    }
    
}

module.exports = {
    getAllUser
}