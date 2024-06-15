const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique: true,
    },
    email: {
        type:String,
        required:true,
        unique: true,
    },
    firstname: {
        type:String,
        required:true,
    },
    lastname: {
        type:String,
        required:true,
    },
    gender: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    },
    wonrefarcode:{
        type:String,
        required:true
    },
    userefarcode:{
        type:String
    },
    refer:{
        type:Number,
        required:true
    },
    
})


const users = mongoose.model("user", userSchema);
module.exports= {users}