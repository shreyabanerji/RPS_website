const router=require("express").Router();
const City=require("../models/cities");


//POST request
router.post('/cities',async(req,res)=>{
    try{
        const city=new City();
        city.name=req.body.name;
        await city.save();
        res.json({
            sucess:true,
            message:"Created new city"
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        });
    }
});

router.get("/cities",async(req,res)=>{
    try{
        let cities=await City.find();
        res.json({
            success:true,
            cities:cities
        });
    }
        catch(err){
            res.status(500).json({
                success:false,
                message:err.message
            });
        }
});
module.exports=router;