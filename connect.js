const mongoose = require('mongoose');

async function connectToMongoDB(url){
    console.log(url)
    return mongoose.connect(url)
}

module.exports ={
    connectToMongoDB,
}