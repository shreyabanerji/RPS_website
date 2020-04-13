const mongoose=require('mongoose');
const multer = require('multer');
const Schema=mongoose.Schema;

const BookingSchema= new Schema({
    hotel_name:{type:Schema.ObjectId,ref:'Hotel'},
    room:{type:Schema.ObjectId,ref:'Room'},
    user:{type:Schema.ObjectId,ref:'User'},
    checkin:Date,
    checkout:Date
  
});
module.exports=mongoose.model("Booking",BookingSchema);