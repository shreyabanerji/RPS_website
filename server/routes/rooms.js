const router=require("express").Router();
const Room=require("../models/rooms");

//POST request
router.post('/rooms',async(req,res)=>{
    try{
        const room=new Room();
        //room.hotel_name=req.body.hotel_name;
        //room.type=req.body.type;
        room.price=req.body.price;
        room.room_no=req.body.room_no;
        //room.price=req.body.price;
        await room.save();
        res.json({
            sucess:true,
            message:"Created new room"
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        });
    }
});

router.get("/rooms",async(req,res)=>{
    try{
        let rooms=await room.find();
        res.json({
            success:true,
            rooms:rooms
        });
    }
        catch(err){
            res.status(500).json({
                success:false,
                message:err.message
            });
        }
});
module.exports=router;