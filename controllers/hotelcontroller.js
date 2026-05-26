const Hotel = require('./../model/hotelmodel');

  

//get method to return all hotels
exports.getallHotels = async (req, res) => {
    try{
        const hotels = await Hotel.find();
        res.status(200).json({
            status: 'success',
            count: hotels.length,
            data: hotels
        })
    }
    catch(err){
        res.status(500).json({
            status:'fail',
            message:'failed to get data'
        })
    }
}

//post method to create a new hotel
exports.createHotel=async (req, res) => {
try{
    const hotel = Hotel(req.body);
    await hotel.save();
    res.status(201).json({
        status:'success',
        data:[
            hotel
        ]
    })
}catch(err){
        console.error(err);
        res.status(500).json({
            status:'fail',
            message:  'failed to create data',
            error: err
        })
}
}

//get method to return a hotel by id
exports.gethotelbyid= async(req, res) => {
    try{
        const id = req.params.id;
        const hotel = await Hotel.findById(id);
        res.status(200).json({
            status:'success',
            data:[
                hotel
            ]
        })
    }
         catch(err){
            console.error(err);
            res.status(500).json({
                status:'fail',
                message:  'failed to get data',
                error: err
            })
        }
    }

//patch method to update a hotel by id
exports.updatehotel=async (req, res) => {
    try{
        const id = req.params.id;
        const hotel = await Hotel.findOneAndUpdate({_id:id}, req.body, {
            new:true,
            runValidators:true
        });
        res.status(200).json({
            status:'success',
            data:[
                hotel
            ]
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            status:'fail',
            message: err.message || 'failed to update data',
            error: err
        })
    }
}

//delete method to delete a hotel by id
exports.deletehotel= async(req, res) => {
    try{
        const id = req.params.id;
       await Hotel.deleteOne({_id:id});
        res.status(200).json({
            status:'success',
            message:'hotel deleted successfully'
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            status:'fail',
            message: err.message || 'failed to delete data',
            error: err
        })
    }
}