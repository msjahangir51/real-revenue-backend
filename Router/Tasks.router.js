const { complateTaskController, taskvalueUpdate, referandTaskvalueUpdateController, completeTaskAll } = require("../controllers/Tasks.Controller")
const completeTaskRouter = require("express").Router() 
// , EarningTaskClaimed

completeTaskRouter.post("/complete", complateTaskController)
completeTaskRouter.post("/taskupdate", taskvalueUpdate)
completeTaskRouter.post("/refar/update", referandTaskvalueUpdateController)
completeTaskRouter.get("/single/user/all/task/:userid", completeTaskAll)
// completeTaskRouter.post("/earning/claim", EarningTaskClaimed)
module.exports ={completeTaskRouter}