

import Tour from '../models/Tour.js'

//create new tour
export const createTour = async(req,res) =>{
    const newTour = new Tour(req.body);
     try{
        const savedTour = await newTour.save();

        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: savedTour,
         });
     } catch (err){
        res.status(500).json({ 
            success: false, message: "Failed to created. Try again"});

     }
};


//update tour

export const updateTour = async(req, res) =>{

    const id = req.params.id
    try{
        const updateTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updateTour,
        });
    }catch(err){

        res.status(500).json({ 
            success: false, 
            message: "Failed to updated. Try again"});


    }
};

//delete tour

export const deleteTour = async(req, res) =>{
    const id = req.params.id
    try{
        await Tour.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Successfully deleted",
            
        });
    }catch(err){

        res.status(500).json({ 
            success: false, 
            message: "Failed to deleted. Try again"});


    }
};

//getSingle tour

export const getSingleTour = async(req, res) =>{
    
    const id = req.params.id
    try{
       const tour =  await Tour.findById(id).populate('reviews');

        res.status(200).json({
            success: true,
            message: "Successfully",
            data: tour,
        });
    }catch(err){

        res.status(404).json({ 
            success: false, 
            message: "Not found"});


    }
};

//getAll tour

export const getAllTour = async(req, res) =>{

    //for pagination
    const page = parseInt(req.query.page) || 0
   
    try{
       const tours = await Tour.find({})
       .populate('reviews')//Meken thm reviews dmmAM adala location eken okkom display wenv
       .skip(page * 8)
       .limit(8);

       res.status(200).json({
        success: true,
        count: tours.length,
        message: "Successfull",
        data: tours,
       })
    }catch(err){
        res.status(404).json({
            success:false,
            message:"Not found"
        })

    }
};

// get tour by search
//get TourBySearch ek call krnn oni route eken
export const getTourBySearch = async(req,res)=>{
   
    //here 'i' means case sensitive
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    
    try{
          //get means grater than equal
          const tours = await Tour.find({
            city, distance:{$gte:distance},
            maxGroupSize:{$gte:maxGroupSize}})
            .populate('reviews');
        res.status(200).json({
            success: true,
            message: "Successful",
            data: tours,
        });
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: "Not found",
        });
    }


}
///////////////////////////////////////////////////////////


//get featured tour

export const getFeaturedTour = async(req, res) =>{

   
    try{
       const tours = await Tour.find({ featured: true}).populate('reviews').limit(8);
      ;

       res.status(200).json({
        success: true,
        message: "Successfull",
        data: tours,
       })
    }catch(err){
        res.status(404).json({
            success:false,
            message:"Not found"
        })

    }
};


//get tour counts
export const getTourCount = async(req,res)=>{

    try{
        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({success:true, data:tourCount})

    }catch(err){
        res.status(500).json({success:false,message:"failed to fetch"});

    }
};