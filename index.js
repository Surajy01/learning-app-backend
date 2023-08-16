const express = require("express");
const app=express();
require("dotenv").config();
const cors=require("cors");
const connection =require("./config/db");
const courseRouter=require("./routes/courseRoute");
const { userRouter } = require("./routes/user.route");
const adminrouter=require("./routes/adminRoute");
const admincourseRouter = require("./routes/adminCourseRoute");
const adminUserRouter = require("./routes/adminUserRoute");
const adminmiddleware=require("./middleware/adminmiddleware");

app.use(cors());
app.use(express.json());


app.use("/course",courseRouter);
app.use("/users",userRouter);
app.use("/admin",adminrouter);
app.use("/admincourse",adminmiddleware,admincourseRouter);
app.use("/adminuser",adminmiddleware,adminUserRouter); 


app.listen(process.env.PORT,async()=>{
    try{
    console.log(`Port ${process.env.PORT} is Running`)
    await connection
    console.log("Database Connected");
    }
    catch(err){
        console.log(err);
    }
})