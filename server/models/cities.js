const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CitiesSchema= new Schema({
    
    name:{type:String,unique:true,required:true}
});
module.exports=mongoose.model("Cities",CitiesSchema);

//uxbpgdRUddSfWTDW