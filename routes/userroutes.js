const express = require('express');
const userRouter = express.Router();

userRouter.userParam=(req,res,next,value)=>{
    console.log(`the value of id is ${value}`);
    next();
}
userRouter.param('id',userRouter.userParam);

userRouter.get('/', (req,res)=>{
    res.send("all users are fetched");
})
userRouter.get('/:id', (req,res)=>{
    res.send("a user is fetched:");
})

module.exports=userRouter;