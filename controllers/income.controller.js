const { incomeModel } = require("../models/income.model");

const incomeController= async(req,res)=>{
    const {userid,income,deposit,withdraw,task,newtask} = req.body;
    const newIncome = incomeModel({
        userid: userid,
        income: income,
        deposit: deposit,
        withdraw: withdraw,
        task: task,
        newtask: newtask,
    })

    await newIncome.save().then((user)=>{
        res.status(201).send({
            success: true,
            message: "income section create",
            user: user
        })
    }).catch((err)=>{
        res.status(409).send({
            success: false,
            message : "income not created"
        })
    })
}


const GetincomeController = async (req,res)=>{
    const userid = req.params.userid;
    const allUserIncome = await incomeModel.findOne({userid: userid})
    res.status(200).send({
        success: true,
        message: allUserIncome
    })
}
module.exports ={incomeController,GetincomeController}