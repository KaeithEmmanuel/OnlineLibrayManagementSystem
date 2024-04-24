import mongoose from "mongoose";
import dotnev from "dotenv";
dotnev.config();
const Connection = async () => {
  try{
  mongoose.connect(process.env.URL);
  console.log("Connected to DB");
  }catch(err){
    console.log(err)
  }
}

Connection()