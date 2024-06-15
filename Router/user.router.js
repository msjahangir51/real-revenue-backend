const { userRegister, userLogin, userDeletController, updateusercontrollers } = require("../controllers/user.controller");

const userRouter = require("express").Router();
userRouter.post("/register", userRegister)
userRouter.post("/login",userLogin)
userRouter.delete("/delete/:userid",userDeletController)
userRouter.get("/deposit/update/:userid",updateusercontrollers)
module.exports ={userRouter}