let { ApiError } = require ('../payload/ApiErrors')
let jwt = require('jsonwebtoken')
let permissions = require ('../models/permissions')
let {handleAsync} = require('../utils/util')
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

const authen = (data) => handleAsync(async (req,res,next) =>{
      let token = myCache.get("myKey");
      let role = token.payload.role
      console.log("Role is "+role);
      let state = false;
      let usrPermissions = await permissions.getOneUserPermission(role)
      usrPermissions.forEach(d => {
        console.log("Data is"+data);
          if (d.PERMISSIONNAME == data) {
            
              state = true;
          }
      });
       if (state) {
           return next();
       }
       throw new ApiError(401,`you haven't any permission to ${data} `)
    });
    

const auth = (req, res, next) =>{
    let bearerHeader = req.headers['authorization'];
    
    const token = bearerHeader.split(' ')[1];
        console.log("AccessToken is :"+token);
    if (!token) {
        console.log(token);
        throw new ApiError(403,"Your authentication is forbiden")
    }
    
    let response = jwt.verify(token, process.env.JWT_SECRET_KEY)
    var decoded = jwt.decode(token, {complete: true});
    if (response){
        myCache.set("myKey", decoded);
        return next();
    }
    
        throw new ApiError(401,'you have not permission');
}

module.exports = {
    auth,
    authen
} 
