const { depositController, depositgetController, depositUpdateController ,UpdateDepositModleController, DepositmodelController} = require("../controllers/deposit.controller");

const depositRouter = require("express").Router();
depositRouter.post("/deposit",depositController)
depositRouter.post("/depositupdate",depositUpdateController)
depositRouter.post("/deposit/update/modelController",UpdateDepositModleController)
depositRouter.get("/deposit",depositgetController)
depositRouter.delete("/deposit/delete/:id",DepositmodelController)

module.exports ={depositRouter};