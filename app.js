const express = require("express");
const { userRouter } = require("./Router/user.router");
const cors = require("cors");
const passport = require("passport");
const { incomeRouter } = require("./Router/income.router");
const { incomeModel } = require("./models/income.model");
const { earningRouter } = require("./Router/Earning.router");
const { completeTaskRouter } = require("./Router/Tasks.router");
const { depositRouter } = require("./Router/deposit.Router");
const { users } = require("./models/users.model");
const { WithdrawRouter } = require("./Router/WithdrawRouter");
const app = express();
const corsOptions ={
    origin: "*", 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(express.static("uploads"))
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(passport.initialize());
require("./config/passport")
app.use("/user",userRouter)
app.use("/income",incomeRouter)
app.use(earningRouter)
app.use(depositRouter)
app.use(WithdrawRouter)
app.use("/task",completeTaskRouter)




app.get("/profile",passport.authenticate('jwt', { session: false }),async(req,res)=>{
    const incomeID = await incomeModel.findOne({userid:req.user._id})
    return res.status(200).send({
        success: true,
        user: req.user,
        income : incomeID
    })
})

app.get("/user/details", async(req,res)=>{
    const userincome = await users.find();
    res.status(200).send({
        message:userincome,
        success:true
    })
})

module.exports = {app}