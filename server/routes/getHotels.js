const router=require('express').Router()
const Hotel=require('../models/hotels');
const upload=require("../middlewares/upload-photo");
const fs = require('fs');
const mongoose=require('mongoose');

//mongoose.model("cities", CitiesSchema)
router.get("/hotels/:cityID",async(req,res)=>{
    try{
        let hotels=await Hotel.find({city:req.params.cityID}).populate("city")
        
        
        res.json({
            status:true,
            hotels:hotels
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
