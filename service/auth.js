// this is the diary in which we store uuid of user
const jwt = require("jsonwebtoken");


function setUser (user){
   return jwt.sign({_id:user._id,
    email:user.email
   }, process.env.JWT_SECRET)
}

function getUser(token){
    if (!token) return null;
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
  
}

module.exports = {
    setUser,
    getUser,
}