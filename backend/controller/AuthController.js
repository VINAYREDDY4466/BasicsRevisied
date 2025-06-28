
import User from "../models/user.js";
import jwt from 'jsonwebtoken';
const register= async(req, res)=>{
    const{name, email, password}= req.body;
    if(!name || !email ||!password){
        res.send("All fields are required");;
    }
    try{
    const user= new User({
        name, 
        email, 
        password,
        isVerified:true
    })
    user.save();
    res.json({success:true, user});
}
  catch(err){
    res.status(500).json({success:false, error:err.message})
  }
}

const login = async(req, res)=>{
     const {email, password} =req.body;
     try{
     const user= await User.findOne({email});
     if(password !==user.password){
        return res.status(401).send("Invalid credentials");
     }
    const token = jwt.sign(
      { userId: user._id },         // payload
      "vinay",                      // secret key (use process.env.JWT_SECRET in prod)
      { expiresIn: "1h" }           // optional: token expiry
    );
     res.json({success:true, token});
    }
    catch(err){
        res.status(500).json({success:false,error:err.message});
    }
}
export {login, register}