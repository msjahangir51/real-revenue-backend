const { completeTask } = require("../models/complete.model");
const { incomeModel } = require("../models/income.model");
const { users } = require("../models/users.model");

const complateTaskController = async (req,res)=>{
    try {
        const {userid,taskid,username,tasktitle,taskvalue,complate} = req.body;
        const task = await completeTask.findOne({
            $and: [{userid:userid}, {taskid: taskid}]
        });
        if(task) return res.status(409).send("true");
        
        const newTask = new completeTask({
            userid : userid,
            taskid:taskid,
            username:username,
            tasktitle: tasktitle,
            taskvalue: taskvalue,
            complate: complate
        })
    
        await newTask.save().then((task)=>{
           return res.status(201).send({
                success:true,
                message: task
            })
        }).catch((err)=>{
            res.status(409).send({
                success:false,
                message: "clameed failed"
            })
        })
    } catch (error) {
        console.error(error.message)
    } 
}


const taskvalueUpdate =async (req,res)=>{

   const updatedproduct = await incomeModel.findOneAndUpdate(
        {userid: req.body.userid},{
                income: req.body.income,
                task:req.body.task
            }

    )
    if(updatedproduct) return res.status(200).send({
        success: true,
        message:{
            income: req.body.income,
            task: req.body.task
        }
    })

}


const referandTaskvalueUpdateController = async(req,res)=>{
    const user = await users.findOne({wonrefarcode: req.body.userefarcode});

    if(user){
         await users.updateOne({_id: user._id},{
            refer: user.refer +1
         }).then(async()=>{
            await users.findOne({
                $and: [{userefarcode : user.wonrefarcode},{_id:req.body.id}],
            }).then(async(income)=>{
              await  incomeModel.findOneAndUpdate({userid : income._id},{income:25})
              .then((update)=>{
                  res.status(200).send({
                      update: "update success",
                      success: true
                  })
              })
            })
         }).catch((err)=>{
            res.status(404).send({
                message : err.message,
                success: false 
            })
         })
    }

    if(!user) return res.send("refer cdoe not found")
}



const completeTaskAll = async (req,res)=>{

    const task = await completeTask.find({userid : req.params.userid});
    if(task){
        res.status(200).send({
            message: task,
            success: true
        })
    }else{
        res.status(200).send({
            message: [
                {
                _id: "not task complete",
                taskvalue: "no",
                taskTitle:"not task complete",
                CLAIM:"CLAIMED"
        
                }
            ],
            success: false
        })
    }
}


// const EarningTaskClaimed = async (req,res)=>{
//    const earning=  await completeTask.findOne({$and :[{taskid: req.body.taskid},{userid: req.body.userid}]})
   
//    if(!earning) return res.status(200).send({
//         message :"claim not found",
//         success: true,
//    })
//       return  res.status(200).send({
//             message: "Claimed",
//             success: true
//         })
// }

// ,EarningTaskClaimed
module.exports ={complateTaskController,taskvalueUpdate,referandTaskvalueUpdateController,completeTaskAll}