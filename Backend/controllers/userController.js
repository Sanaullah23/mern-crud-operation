const userModel =require("../models/Users")

exports.createUser = async(req, res)=>{
    try {
        const usersData=  await userModel.create(req.body);
        res.status(200).json({ success: true,  usersData}); 
    } catch (error) {

        console.log(error)
        
    }    
};

exports.getUsers = async(req, res)=>{
    try {
        const usersData=  await userModel.find({});
        res.status(200).json({ success: true,  usersData}); 
    } catch (error) {

        console.log(error)
        
    }    
};


exports.getUserById = async(req, res)=>{
    try {
        const {id}=req.params
        const userId=  await userModel.findById({_id:id});
        res.status(200).json({ success: true, userId}); 
    } catch (error) {

        console.log(error)
        
    }    
};

exports.updateUser= async(req, res)=>{
    try {
        const {id}=req.params
        const updataUserData= await userModel.findByIdAndUpdate({_id:id},
            {name:req.body.name,
            email:req.body.email,
            age:req.body.age,})
        res.status(200).json({ success: true, updataUserData}); 
    } catch (error) {
        console.log(error)
    }
}

exports.deleteUser=async(req, res)=>{
    try {
        const {id}=req.params
        const deletedUser= await userModel.findByIdAndDelete( {_id : id})
        res.status(200).json({success:true, deletedUser})
    } catch (error) {
        console.log(error)
    }
}