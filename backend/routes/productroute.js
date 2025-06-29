import express from "express";
import { deletebyId, getProducts, getProductsByratinggreaterthan20, updateById, upload } from "../controller/Product.js";

const productRouter= express.Router();

productRouter.post('/upload', upload);
productRouter.get('/getProducts', getProducts);
productRouter.put('/update/:id', updateById);
productRouter.delete('/delete', deletebyId);
productRouter.get('/gt', getProductsByratinggreaterthan20);

export default productRouter;