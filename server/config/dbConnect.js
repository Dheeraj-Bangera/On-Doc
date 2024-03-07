const mongoose = require("mongoose")
require('dotenv').config()
const dbConnect=async ()=>{
   const connect = await mongoose.connect(process.env.MONGO_URL,{
   //  useNewUrlParser:true,
   //  useUnifiedTopology : true ,
   
   }).then(()=>{
    console.log(`MongoDB connected`)
   })
   .catch((err)=>{
    console.log(err)
   })
}
module.exports = dbConnect