const { earningModel } = require("../models/earning.model");

const earningTaskAdd = async(req,res)=>{
    const {taskTitle,taskvalue} = req.body;

    const newTask = new earningModel({
        taskTitle:taskTitle,
        taskvalue:taskvalue
    })

    await newTask.save().then((task)=>{
        res.status(201).send({
            success: true,
            message: "task is created"
        })
    }).catch((err)=>{
        res.status(404).send({
            message: err,
            success:false
        })
        // console.log(err)
    })
}

const AllEarningTask = async(req,res)=>{
    const alltask = await earningModel.find();

    res.status(200).send({
        success: true,
        task : alltask
    })
}

const DeleteEarningTask = async(req,res)=>{
    const taskid = req.params.taskid;
    await earningModel.deleteOne({_id: taskid}).then(()=>{
        res.status(200).send({
            message : "task deleted",
            success: true
        })
    }).catch((err)=>{
        res.status(404).send({
            success: false,
            message: 'task deleted failed'
        })
    })
}
module.exports ={earningTaskAdd,AllEarningTask,DeleteEarningTask}