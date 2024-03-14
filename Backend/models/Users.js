const mongoose=require("mongoose")

const crudSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

module.exports=mongoose.model("userModel", crudSchema)