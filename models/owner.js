const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
   name:{
    type:String,
    requred:true,
   },
   email:{
    type:String,
    required:true,
    unique:true,
   },
   password:{
    type:String,
    required:true,
   },
},{timestamps:true});

userSchema.methods.generateAuthToken = function(){
   const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET,{expiresIn:'24h'});
   return token;  
}


const Owner = mongoose.model('owner',userSchema);

module.exports =  Owner;