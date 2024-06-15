const { incomeModel } = require("../models/income.model");
const { withdrawModel } = require("../models/withdraw.model");

const withdrawController =async (req,res)=>{
    const {userid,income,withdraw,email,username,number} = req.body;


    await incomeModel.updateOne({userid: userid}, {income: income - 1000, withdraw:withdraw+1000}).then(async()=>{
        const newWithdraw = new withdrawModel( {
            userid,
            income,
            withdraw:1000,
            email,
            username,
            number
        })
    
        await newWithdraw.save().then((withdraw)=>{
            res.status(201).send({
                success:true,
                message: withdraw
            })
        })
    })
    
}



const withdrewAllFInd = async(req,res)=>{
    await withdrawModel.find().then((withdraw)=>{
        res.status(200).send({
            message: withdraw,
            success: true
        })
    })
}
module.exports ={withdrawController,withdrewAllFInd}