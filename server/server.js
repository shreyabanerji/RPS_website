const express=require('express');
//for http methodes
const morgan=require('morgan');
//shows that request has been made
const bodyParser=require('body-parser');
//extract form data from front end and show in proper format

const mongoose=require('mongoose');
//const dotenv=require('dotenv');
const multer = require('multer');
const User= require('./models/user');

//dotenv.config();

//Middlewares----ability to parse data from front end 
const app=express();

mongoose.connect("mongodb+srv://root:nU1dm3BZvCMZrH7V@hotel-zpt5h.mongodb.net/test?retryWrites=true&w=majority",
{ useNewUrlParser: true ,useUnifiedTopology: true },
err => {
    if(err){
        console.log(err);
        console.log("Error");
    }
    else{
        console.log("Connected");
    }
}
);

//middlewares
app.use(morgan('dev'));
app.use(express.static('upload'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//get data from the server

//require apis

const hotelRoutes=require('./routes/hotels');
const cityRoutes=require('./routes/cities');
const roomRoutes=require('./routes/rooms');
const typeRoutes=require('./routes/types');
const userRoutes=require('./routes/auth');
const likeRoutes=require('./routes/likes');
const reccomendationRoutes=require('./routes/recommendation');

app.use('/api',hotelRoutes);
app.use('/api',cityRoutes);
app.use('/api',roomRoutes);
app.use('/api',typeRoutes);
app.use('/api',userRoutes);
app.use('/api',likeRoutes);
app.use('/api',reccomendationRoutes);

app.listen(3000,(err)=>{
    if(err){
        console.log(err);

    }
    else{
        console.log("Not an error");
    }
});
