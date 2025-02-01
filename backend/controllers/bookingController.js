import Booking from "../models/Booking.js"


/////////Create booking/////
export const createBooking = async(req,res)=>{

    const newBooking = new Booking(req.body);

    try{
        const savedBooking = await newBooking.save();

        res 
          .status(200)
          .json({
            success:true,
            message: "Your tour is booked",
            data: savedBooking,
          });

    }catch(err){
        res.status(500).json({ success:true, message:"internal server error"});
          

    }
};

/////get single boooking////
export const getBooking = async(req,res)=>{
 // const id = req.params.id

  try{
      const bookings = await Booking.findById();

      res.status(200)
      .json({
        success: true,
        message:"successful",
        data: bookings,
      })
  }catch(err){
      res.status(404)
       .json({
         success:true,
         message:"not found",
         
       })
  }
}


/////get all boooking////
export const getAllBooking = async(req,res)=>{
  const id = req.params.id

  try{
      const book = await Booking.find(id)

      res.status(200)
      .json({
        success: true,
        message:"successful",
        data: book,
      })
  }catch(err){
      res.status(500)
       .json({
         success:false,
         message:"internal server error",
         
       })
  }
}
/////
