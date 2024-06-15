const mongoose = require("mongoose");

const depostiSchema = new mongoose.Schema({
    userid: {
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true
    },
    fullname: {
        type:String,
        required:true
    },
    BkashNumber: {
        type:Number,
        required:true
    },
    TrxID: {
        type:String,
        required:true
    },
    Amount: {
        type:Number,
        required:true
    },
    complate: {
        type:String,
        default:"Panding"
    },
})


const Depositmodel = mongoose.model("deposit", depostiSchema);

module.exports ={Depositmodel};