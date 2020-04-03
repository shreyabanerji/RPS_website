const router=require("express").Router();
const Type=require("../models/types");


//POST request
router.post('/types',async(req,res)=>{
    try{
        const type=new Type();
        type.type=req.body.type;
        await type.save();
        res.json({
            sucess:true,
            message:"Created new type"
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        });
    }
});

router.get("/types",async(req,res)=>{
    try{
        let types=await type.find();
        res.json({
            success:true,
            types:types
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