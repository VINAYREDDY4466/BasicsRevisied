import mongoose from "mongoose";

const connectDB= async(req, res)=>{
    try{
      await mongoose.connect(process.env.MONGO_URL)
      console.log("Db connected succesfully")
    }
    catch(error){
      console.log("Db Not connected");
    }
    
}
export default connectDB;