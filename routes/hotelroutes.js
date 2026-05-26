const express = require('express');
const hotelController = require('../controllers/hotelcontroller');
const hotelRouter = express.Router();

hotelRouter.route('/').get(hotelController.getallHotels)
                      .post( hotelController.createHotel)

hotelRouter.route('/:id')
                         .get(hotelController.gethotelbyid)
                         .patch(hotelController.updatehotel) 
                         .delete(hotelController.deletehotel)

module.exports=hotelRouter;