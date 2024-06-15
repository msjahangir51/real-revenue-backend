const { withdrawController, withdrewAllFInd } = require("../controllers/Withdraw.Controller");

const WithdrawRouter = require("express").Router();


WithdrawRouter.post("/withdraw",withdrawController);
WithdrawRouter.get("/withdraw",withdrewAllFInd);

module.exports ={WithdrawRouter}

// http://localhost:3000/withdraw