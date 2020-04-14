const router=require('express').Router()
const Hotel=require('../models/hotels');
const upload=require("../middlewares/upload-photo");
const fs = require('fs');
const mongoose=require('mongoose');

//mongoose.model("cities", CitiesSchema)
router.post("/hotels",upload.single('photo'),async(req,res)=>{
    try{
        let hotel=new Hotel();
        hotel.name=req.body.name;
        hotel.description=req.body.description;
        //hotel.photo=req.file;
        hotel.address=req.body.address;
        hotel.photo.data = "http://localhost:3000/"+req.file.filename;
        hotel.photo.contentType = 'image/png';
        hotel.avg_price=req.body.avg_price;
        //hotel.photo=req.body.photo;
        await hotel.save();
        
        res.json({
            status:true,
            message:"Saved"
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
//get all hotels
router.get("/hotels",async(req,res)=>{
    try{
        let hotels=await Hotel.find()
        .populate("city")
        .exec();
        //res.setHeader('content-type','image/png');
        res.json({
            success:true,
            hotels:hotels,
        });
    }
        catch(err){
            res.status(500).json({
                success:false,
                message:err.message
            });
        }
});

//GET-get a single hotel
router.get("/hotels/:id",async(req,res)=>{
    try{
        let hotel=await Hotel.findOne({_id:req.params.id})
        .populate("city likes")
        .exec();

        res.json({
            success:true,
            hotel:hotel
        });
    }
        catch(err){
            res.status(500).json({
                success:false,
                message:err.message
            });
        }
});



//PUT-Update a single hotel
router.put("/hotels/:id",async(req,res)=>{
    try{
        let hotel=await Hotel.findOneAndUpdate(
        { _id:req.params.id },
        {
        $set:{
            name:req.body.name,
            price:req.body.price,
            photo:req.body.photo,
            description:req.body.description,
            city:req.body.cityID
            }
        },
        {upsert:true});


        res.json({
            success:true,
            updatedhotel:hotel
        });
    }
        catch(err){
            res.status(500).json({
                success:false,
                message:err.message
            });
        }
});



//DELETE-delete a single hotel

router.delete('/hotels:id',async(req,res)=>{
    try{
        let deletehotel=await hotel.findOneAndDelete({_id:req.params.id});
        if(deletehotel){
            res.json({
                status:true,
                msg:"Successfully deleted"
            });
        }

    }
    catch{
        res.status(500).json({
            success:false,
            message:err.message
        });
    }
})

    

    
module.exports=router;
