const express=require("express");
const mongoose=require("mongoose")
const cors =require("cors")
const {createUser, getUsers, getUserById, updateUser, deleteUser} =require("./controllers/userController")
const app=express();

app.use(express.json())
app.use(cors())

const DB_URL='mongodb://localhost:27017/crud'
mongoose.connect(DB_URL).then(()=>{console.log("Successfuly connected database")}).catch((error)=>{console.log(error)});


app.post("/api/v1/createUser", createUser)
app.get("/api/v1/getUsers", getUsers)
app.get("/api/v1/getuser/:id", getUserById)
app.put("/api/v1/updateUser/:id", updateUser)
app.delete("/api/v1/deleteUser/:id", deleteUser)

app.listen(5000,()=>{

    console.log("Server is running on 5000 port")
})


