const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
    },
    userEmail:{
        type :String,
        required:true
    }
})
//Always watch out fo the spelling of model,it starts with a small letter 'm'
module.exports = mongoose.model("User",userSchema)