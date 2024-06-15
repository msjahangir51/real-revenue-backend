const { incomeController, GetincomeController } = require("../controllers/income.controller");

const incomeRouter = require("express").Router();
incomeRouter.post("/post",incomeController)
incomeRouter.get("/get/:userid",GetincomeController)

module.exports ={incomeRouter}