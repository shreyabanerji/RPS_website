const mongoose=require('mongoose');
const multer = require('multer');
const Schema=mongoose.Schema;

const HotelSchema= new Schema({
    name:{type:String},
    city:{type:Schema.ObjectId,ref:'Cities'},
    photo:{ data: String, contentType: String },
    address:{type:String},
    description:{type:String},
    rating:[Number],
    avg_price:Number,
});
module.exports=mongoose.model("Hotel",HotelSchema);

//mongodb+srv://root:<password>@hotel-zpt5h.mongodb.net/test?retryWrites=true&w=majority