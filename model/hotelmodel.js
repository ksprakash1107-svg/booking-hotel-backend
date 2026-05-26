const mongoose = require('mongoose');
const hotelSchema =  mongoose.Schema({
    name:{
        required:[true, 'Name is required'],
        type:String,
        unique:true
      
    },
  price:{
   type:Number,
   required:true,
   min:1000,
   max:10000
},
    city:{
        required:true,
        type:String,
    },
    description:String,
    rating:{
        type:Number,
        default:3
    }
})
module.exports = mongoose.model('Hotel', hotelSchema);