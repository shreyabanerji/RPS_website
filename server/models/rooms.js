const mongoose=require('mongoose');
const multer = require('multer');
const Schema=mongoose.Schema;

const RoomSchema= new Schema({
    hotel_name:{type:Schema.ObjectId,ref:'Hotel'},
    type:{type:Schema.ObjectId,ref:'Type'},
    room_no:Number,
    booked:[Date],
    price:Number
});
module.exports=mongoose.model("Rooms",RoomSchema);

//mongodb+srv://root:<password>@hotel-zpt5h.mongodb.net/test?retryWrites=true&w=majority