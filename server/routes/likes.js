const router=require("express").Router();
const Liked=require("../models/likes");
const User=require("../models/user");
const Hotel=require("../models/hotels");
const verifyToken=require("../middlewares/verify-token");
//POST request
router.post('/likes/:hotelID/:likes',verifyToken,async(req,res)=>{
    try{
        const like=new Liked();
        like.likes=req.params.likes;
        like.user=req.decoded._id;
        like.hotelID=req.params.hotelID;
        await Hotel.update({_id:req.params.hotelID},{$push:{likes:like._id}});
        await User.update({_id:req.decoded._id},{$push:{likes:like._id}});
        const savedlike=await like.save();
        res.json({
            success:true,
            message:"Created new like"
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        });
    }
});

router.get("/likes/:hotelID",async(req,res)=>{
    try{
        let like=await Liked.find({hotelID:req.params.hotelID})
        .populate("user")
        .exec();
        res.json({
            success:true,
            likes:like
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