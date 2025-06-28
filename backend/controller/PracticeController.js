

const first= async(req,res)=>{
    try{
    
    res.json({success:true, message: "Successfully fetched"})
    }
    catch(error){
         res.json({success:false, message: "failed"})
    }
}
const second= async(req, res)=>{
    res.send("Im the second controller");
}
export {first, second};