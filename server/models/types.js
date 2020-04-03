const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const TypeSchema= new Schema({
    
    type:{type:String,unique:true,required:true}
});
module.exports=mongoose.model("Types",TypeSchema);

//uxbpgdRUddSfWTDW