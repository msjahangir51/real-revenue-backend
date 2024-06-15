const { earningTaskAdd, AllEarningTask,DeleteEarningTask } = require("../controllers/earning.controller");

const earningRouter = require("express").Router();

earningRouter.post("/earning", earningTaskAdd)
earningRouter.get("/earning", AllEarningTask)
earningRouter.delete("/earning/delete/task/:taskid", DeleteEarningTask)
module .exports ={earningRouter}