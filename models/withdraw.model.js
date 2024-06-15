const mongoose = require("mongoose");

const WithdrawSchema = mongoose.Schema({
    userid:{
        type:String,
        required: true
    },
    income:{
        type:Number,
        required: true
    },
    withdraw:{
        type:Number,
        required: true
    }
})


const withdrawModel = mongoose.model("withdrew",WithdrawSchema);

module.exports ={withdrawModel}