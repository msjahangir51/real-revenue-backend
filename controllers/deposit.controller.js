const { Depositmodel } = require("../models/deposit.model");
const { incomeModel } = require("../models/income.model");

const depositController = async(req,res)=>{

    try {
        const {userid,username,fullname,BkashNumber,TrxID,Amount} = req.body;

        const newDeposit = new Depositmodel({
            userid: userid,
            username:username,
            fullname:fullname,
            BkashNumber:BkashNumber,
            TrxID:TrxID,
            Amount:Amount
        })
    
        await newDeposit.save().then((depositres)=>{
            res.status(201).send({
                message: "deposit successfull",
                success:true,
                depositres:depositres
            })
        })
        
    } catch (error) {
        res.status(404).send({
            message:error.message,
            success:false
        })
    }
}

const depositgetController = async(req,res)=>{
    const allDeposit = await Depositmodel.find();
    res.status(200).send({
        success:true,
        message: allDeposit
    })

}


const depositUpdateController = async (req,res)=>{
    try {
        const EarningUpdate = await incomeModel.findOneAndUpdate(
            {userid: req.body.userid},
            {
                income: req.body.income,
                deposit: req.body.deposit
            })
    
            if(EarningUpdate) return res.status(200).send({
                success:true,
                message:{
                    income: req.body.income,
                    deposit:req.body.deposit
                }
            })
    } catch (error) {
        res.status(404).send({
            success:false,
            message: error.message
        })
    }
}



const UpdateDepositModleController = async (req,res)=>{
    try {
        const depositModelUpdate = await Depositmodel.findOneAndUpdate(
            {_id: req.body.id},
            {
                complate: req.body.complate,
            })
    
            if(depositModelUpdate) return res.status(200).send({
                success:true,
                message:{
                    income: req.body.complate
                }
            })
    } catch (error) {
        res.status(404).send({
            success:false,
            message: error.message
        })
    }
}

const DepositmodelController = async(req,res)=>{
    try {
        const id = req.params.id;
    await Depositmodel.deleteOne({_id : id}).then(()=>{
        res.status(200).send({
            success:true,
            message: "deposit deleted"
        })
    }).catch((err)=>{
        res.status(409).send({
            success: false,
            message: "deposit not deleted"
        })
    })
    } catch (error) {
      res.status(404).send({
        success:false,
        message: error.message
      })  
    }
}
module.exports ={depositController,depositgetController,depositUpdateController,UpdateDepositModleController,DepositmodelController}