const { app } = require("./app");
const { dbconnection } = require("./config/db");
const { PORT } = require("./secret");
// const {bconnection} = require('./config/db')
app.listen(PORT,()=>{
    console.log("server is running at http://localhost:"+PORT)
    dbconnection()
})