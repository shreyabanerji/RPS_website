const router=require('express').Router()
const Hotel=require('../models/hotels');
const Room=require('../models/rooms')
const Booking=require('../models/bookings')
const verifyToken=require("../middlewares/verify-token");
const fs = require('fs');
const mongoose=require('mongoose');

//mongoose.model("cities", CitiesSchema)
router.post("/book/:hotelID:number",verifyToken,async(req,res)=>{
    try{
        for(var i=0;i<parseInt(number);i++)
        {
        let book_room=Room.findOne({hotel_name:req.params.hotelID})
        let booking=new Booking()
        booking.hotel_name=req.params.hotelID
        booking.room=book_room._id
        booking.user=req.decoded._id
        booking.checkin=req.body.checkin
        booking.checkout=req.body.checkout
        await booking.save();
        }
        res.json({
            status:true,
            message:"Added booking"
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
