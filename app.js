const express = require('express');
const app = express();
const morgan = require('morgan');
const hotelRouter = require('./routes/hotelroutes');
const userRouter = require('./routes/userroutes');
app.use(express.json());
app.use(express.static('./public'));
const logger = (req, res,next)=>{
    console.log(`${req.method}${req.url}`);
    next();
}
app.use((req,res,next)=>{
    req.requestedAt= new Date().toISOString();
    next();
})
app.use(logger);
app.use(morgan('dev'));

//routes for hotels and users
app.use('/api/v1/hotels', hotelRouter);
app.use('/api/v1/users', userRouter);

app.param('id',(req,res,next,value)=>{
    console.log(`the value of id is ${value}`);
    next();
})
module.exports=app;