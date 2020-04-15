const router=require('express').Router()
const Likes=require('../models/likes');
const upload=require("../middlewares/upload-photo");
const fs = require('fs');
const mongoose=require('mongoose');

//mongoose.model("cities", CitiesSchema)
router.get("/getAvgRating/:hotelID",async(req,res)=>{
    try{
        let hotels=await Likes.find({hotelID:req.params.hotelID})
        var sum=0
        var count=0
        Object.keys(hotels).forEach(function(key) {
            sum=sum+parseInt(hotels[key]["likes"])
            count++
         })
        var lik=sum/count;
        res.json({
            status:true,
            avglike:lik
            //p: hotel.photo
        });

    }
    catch(err){
        res.status(500).json({
            sucess:false,
            message:err.message
        });

    }
});
    
module.exports=router;
