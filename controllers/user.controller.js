const { users } = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../secret");
const { completeTask } = require("../models/complete.model");
const { Depositmodel } = require("../models/deposit.model");
const { incomeModel } = require("../models/income.model");
const userRegister = async(req,res)=>{
    try {
        const {username,email,firstname,lastname,gender,password,userfarcode,wonrefarcode} = req.body;
        const user = await users.findOne({username: username});
        
        if(user) return res.send("username alrady axist.");
        const emailcheck = await users.findOne({email: email});
    
        if(emailcheck) return res.send("email already axist.");
    
        bcrypt.hash(password, 10, async(err,hash)=>{
            const newuser = new users({
                username: username,
                email: email,
                firstname: firstname,
                lastname: lastname,
                gender: gender,
                password: hash,
                wonrefarcode:wonrefarcode,
                userefarcode:userfarcode,
                refer:0
            })
            await newuser.save().then((user)=>{
                res.status(201).send({
                    message: {
                        id:user._id,
                        username: user.username,
                        userefarcode: user.userefarcode,
                        email: user.email
                    },
                    success: true,
                })
            }).catch(err=>{
                res.status(409).send({
                    success:false,
                    message:"user not create"
                })
            })
        })    
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }

}


const userLogin = async(req,res)=>{
    const {password,email} = req.body;
    const user =await users.findOne({email:email});
    if(!user) return res.status(400).send("Enter a valid email")
    if(!bcrypt.compareSync(password, user.password)) return res.status(401).send("Invalid password");

    const payload = {
        id : user._id,
        username : user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        lastname: user.lastname,
        gender: user.gender
    }
    const token = jwt.sign(payload, SECRET_KEY, {
        expiresIn: "3d"
    })


    return res.status(200).send({
        success:true,
        message: "user is logged in successfully",
        token: "Bearer "+token 
    })
}


const userDeletController =async (req,res)=>{
    const userid = req.params.userid;
    try {
        const user = await users.deleteOne({_id:userid}).then(async()=>{
            await completeTask.deleteMany({userid:userid}).then(async()=>{
                await Depositmodel.deleteMany({userid:userid}).then(()=>{
                    res.status(200).send({
                        success:true,
                        message: "user delete successfull"
                    })
                })
            })
        })
        } catch (error) {
                res.status(404).send({
                    success:false,
                    message:error.message
                })
    }
        
}

const updateusercontrollers = async(req,res)=>{
     try {
        await users.findOne({_id: req.params.userid})
     .then(async(user)=>{
        await users.findOne({ wonrefarcode : user.userefarcode})
        .then( async(response)=>{
           await incomeModel.findOne({userid: response._id}).then( async(user)=>{
            await incomeModel.updateOne({_id: user._id},{income: user.income+ 100}).then((update)=>{
                res.status(200).send({
                    success:true,
                    update: update
                })
            })
           })
        })
   }).catch((err)=>{
        res.status(409).send({
            success:false,
            message: "Did not use the refer code"
        })
   })
     } catch (error) {
        res.status(404).send({
            message: error.message,
            success:false,
        })
     }
}
module.exports ={userRegister,userLogin,userDeletController,updateusercontrollers}