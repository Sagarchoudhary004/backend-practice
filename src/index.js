// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js"; 

import dotenv from "dotenv";
dotenv.config({
    path: './.env'
});

import connectDB from "./db/index.js";

// console.log("URI:", process.env.MONGODB_URI);
connectDB()
.then (()=>{
    app.listen(process.env.PORT ||4000,()=>{
        console.log(`server is running at  port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("DB Connection Error",err);
    
})



// import express from "express"
// const app = express();


// (async()=>{
//     try{
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on ("error",(error)=>{
//         console.log("ERROR :",error);
//         throw error 
//       })

//       app.listen(process.env.PORT,()=>{
//         console.log(`app is running on PORT ${process.env.PORT}`);
//       })

//     }catch (error){
//             console.log("ERROR :",error)
//     }
    
// })()