const mongoose = require("mongoose");
const completeTaskSchema = mongoose.Schema({
    userid:{
        type:String,
        required: true
    },
    taskid:{
        type:String,
        required:true
    },
    username: {
        type:String,
        required: true
    },
    tasktitle:{
        type:String,
        required: true
    },
    taskvalue:{
        type:Number,
        required: true
    },
    complate:{
        type:String,
        required: true
    }
     
})
 

const completeTask = mongoose.model("complatetask", completeTaskSchema);
module.exports = {completeTask}