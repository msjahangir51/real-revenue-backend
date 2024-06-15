const mongoose = require("mongoose");
const earningSchema = mongoose.Schema({
    collect:{
        type: String,
        default: "CLAIM"
    },
    taskTitle:{
        type: String,
        required: [true, "title"]
    },
    taskvalue:{
        type: Number,
        required: [true, "amount"]
    }
})

const earningModel = new mongoose.model("earning",earningSchema)
module.exports = {earningModel}