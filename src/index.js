// require("dotenv").config({path:"./env"});

import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

console.log("DNS Servers:", dns.getServers());

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

console.log("MONGODB_URI =", process.env.MONGODB_URI);

import connectDB from "./db/index.js";
import { app } from "./app.js";   // <-- ADD THIS

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on PORT ${process.env.PORT || 8000}...`);
    });
  })
  .catch((err) => {
    console.error("MONGO db connection failed !!!", err);
  });


/*
import express from "express";
const app = express();

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR :",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on PORT ${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR :",error)
        throw err
    }
})()
*/