const mclient = require('mongodb').mclient
const mongoose = require('mongoose');

const database = function(){
    console.log('databse function accessed.')
    try{
    mongoose.connect(process.env.MONGO_TOKEN,{useNewUrlParser: true});
    console.log("Sucessfully connected to the database!")
    }

    catch(error){
        console.log(error)
    }


}

module.exports = database
