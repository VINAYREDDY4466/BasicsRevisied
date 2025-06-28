import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import appRouter from "./routes/route.js";
import 'dotenv/config';
import productRouter from "./routes/productroute.js";
connectDB();
const app= express();


app.use(express.json());
app.use(cors(
    {
        credentials:true,
        origin:["http://localhost:5173", "http://localhost:5175"],
        methods:["GET", "POST","PUT", "DELETE"],
        allowedHeaders:["content-type", "authorization", 'token'],
    }
));

app.get('/', (req, res)=>{
      res.send("I'm vinay");
})
app.use('/api',appRouter);
app.use('/api',productRouter);

const port= process.env.PORT;


app.listen(port, ()=> {
   
    console.log('Frontend URL:', `http://localhost:${port}`)
})