const { default: mongoose } = require("mongoose");

const incomeSchema = mongoose.Schema({
    userid: {
        type:String,
        required:true,
    },
    income: {
        type:Number,
        required:true,
    },
    deposit: {
        type:Number,
        required:true,
    },
    withdraw: {
        type:Number,
        required:true,
    },
    task: {
        type:Number,
        required:true,
    }
})


const incomeModel = mongoose.model("income", incomeSchema);
module.exports= {incomeModel}