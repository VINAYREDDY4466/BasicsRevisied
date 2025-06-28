import express from "express";
import { deletebyId, getProducts, updateById, upload } from "../controller/Product.js";

const productRouter= express.Router();

productRouter.post('/upload', upload);
productRouter.get('/getProducts', getProducts);
productRouter.put('/update/:id', updateById);
productRouter.delete('/delete/:id', deletebyId);

export default productRouter;