// Like Mongo DB/ Database
 const database = require('../config/Database')

const users = [{
    id: 100,
    first_name: "ismail",
    last_name: "Ahmed",
    age: 50,
    email: "isma@gmail.com",
    password: 123456
},
{

    id: 101,
    first_name: "shayan",
    last_name: "mohan",
    age: 25,
    email: "shayan@gmail.com",
    password: 1234
}
]

// get All users 
const getAllUsers =  async() =>{
    return await database.getAllUser(`SELECT *  FROM users`);
}

const getUserIdAndUserName =  async(userid, username) =>{
    return await database.getAllUser(`SELECT *  FROM users where userid = ${userid} and username = '${username}'`);
}

// get userById
const getUserByID = (id) =>{
    return users.filter(u => u.id == id);
}

// getUserByEmailAndPassword
const getUserByEmailAndPassword = (email, password) =>{
    return users.filter(u => u.email == email && u.password == password);

    // erro accures here
}

/* Adding or creating new user */
const create = (user) =>{
    users.push(user)
    return true
}

// making filter the exist user id's
const isIDExist = (id) =>{
    return users.filter(u=> u.id == id).length
}

// update user by using filter with map
const update = (data) =>{
    new_user = users.filter(u=> u.id === data.id)
    new_user.map((value,index) => { 
        new_user[index].first_name = data.first_name;
        new_user[index].last_name = data.last_name;
        new_user[index].age = data.age;
        new_user[index].email = data.email;
    });
    return true
}

// delete the user using filter with map to get the index you want to delete
const del = (id) =>{
    new_user = users.filter(u=> u.id == id.id)
    new_user.map(function (value, index){
        users.splice(index, 1);
    });
    return true;
}

// Exporting the functions
module.exports ={
    getAllUsers,
    getUserByID,
    create,
    isIDExist,
    update,
    del,
    getUserByEmailAndPassword,
    getUserIdAndUserName
}