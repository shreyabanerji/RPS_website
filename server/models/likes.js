const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const LikesSchema= new Schema({
    
    likes:Number,
    hotelID:{type:Schema.ObjectId,ref:"Hotel"},
    user:{type:Schema.ObjectId,ref:"User"}
});
module.exports=mongoose.model("Likes",LikesSchema);

