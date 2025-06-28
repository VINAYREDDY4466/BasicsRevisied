
import productModel from "../models/product.js";


const upload= async(req,res)=>{
    try {
         const {name, location, price, rating }= req.body;
         const newProduct= await productModel.create({
            name,
            location,
            price,
            rating:rating || 0

         });
         newProduct.save();
         res.status(201).json({success:true, message: "Product added successfully", newProduct})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
const getProducts= async(req, res)=>{
      try {
         const products = await productModel.find();
         res.json(products)
      } catch (error) {
        res.status(400).json({message:error.message});
      }
}
const updateById= async(req, res)=>{
      try {
        const id= req.params.id;
        const {name} = req.body;
        const updatedProduct= await productModel.findByIdAndUpdate(id, {name},{new:true});
        updatedProduct.save();
        

      } catch (error) {
        res.status(400).json({message:error.message});
      }
}
const deletebyId= async(req, res)=>{
    try {
        const id= req.params.id;
        const deletedProduct= await productModel.findByIdAndDelete(id);
        deletedProduct.save();
     res.status(200).json({success:true})   
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
export {upload, getProducts, updateById, deletebyId};
