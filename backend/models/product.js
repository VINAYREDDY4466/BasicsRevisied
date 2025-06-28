import mongoose from "mongoose";

const productSchema= new mongoose.Schema(
    {
      name:{
        type:String,
        required:true,
      },
      location:{
        type:String,
        required:true,
      },
     price:{
        type:Number,
        required:true,
     },
     rating:{
        type:Number,
        required:true,
     }
    },
    {
        timestamps:true,
    }
)
const productModel= mongoose.model("product", productSchema);

export default productModel;