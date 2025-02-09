const mongoose = require("mongoose");


const ownerSchema = new mongoose.Schema({
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

const Owner = mongoose.model('owner',ownerSchema);

module.exports =  Owner;