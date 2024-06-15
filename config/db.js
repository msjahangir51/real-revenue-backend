const { default: mongoose } = require("mongoose")
const { MONGODB_URL } = require("../secret")

const dbconnection = async()=>{
    await mongoose.connect(MONGODB_URL).then(()=>{
        console.log("mongodb is connected")
    }).catch((err)=>{
        console.log(err.message)
    })
}

module.exports ={dbconnection}


