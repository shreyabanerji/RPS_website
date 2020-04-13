const router=require('express').Router()
const Hotel=require('../models/hotels');
const upload=require("../middlewares/upload-photo");
const fs = require('fs');
const mongoose=require('mongoose');

//mongoose.model("cities", CitiesSchema)
router.get("/read/:start/:end",async(req,res)=>{
    /*
    try 
    {
    const file = `${__dirname}/text.txt`;
    var data = fs.readFileSync(file, 'utf8')
    res.json({
        filecontent:data
    });
    
    } 
    catch(e) 
    {
    console.log(e);
    }*/

    try 
    {
    const file = `${__dirname}/text.txt`;
  
    
    var data = '';
    var start=parseInt(req.params.start, 10);
    var end=parseInt(req.params.end, 10);
    
    
    function partialFSReadSync(path, start, end) {
        if (start < 0 || end < 0 || end < start || end - start > 0x3fffffff)
          throw new Error('bad start, end');
        if (end - start === 0)
          return new Buffer(0);
      
        var buf = new Buffer(end - start);
        var fd = fs.openSync(path, 'r');
        fs.readSync(fd, buf, 0, end - start, start);
        fs.closeSync(fd);
        return buf;
      }
    var readStream=partialFSReadSync(file,start,end)
    res.send(readStream)

    
    
    } 
    catch(e) 
    {
    console.log(e);
    }
})
module.exports=router;