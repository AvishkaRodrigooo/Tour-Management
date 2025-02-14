import User from '../models/User.js'

//create new user
export const createUser = async(req,res) =>{
    const newUser = new User(req.body);
     try{
        const savedUser = await newUser.save();

        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: savedUser,
         });
     } catch (err){
        res.status(500).json({ 
            success: false, message: "Failed to created. Try again"});

     }
};


//update user

export const updateUser = async(req, res) =>{

    const id = req.params.id
    try{
        const updateUser = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updateUser,
        });
    }catch(err){

        res.status(500).json({ 
            success: false, 
            message: "Failed to updated. Try again"});


    }
};

//delete User

export const deleteUser = async(req, res) =>{
    const id = req.params.id
    try{
        await User.findByIdAndDelete(id);

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

//get Single User

export const getSingleUser = async(req, res) =>{
    
    const id = req.params.id
    try{
       const user =  await User.findById(id);

        res.status(200).json({
            success: true,
            message: "Successfully",
            data: user,
        });
    }catch(err){

        res.status(404).json({ 
            success: false, 
            message: "Not found"});


    }
};

//getAll user

export const getAllUser = async(req, res) =>{

    try{
       const users = await User.find({})
       

       res.status(200).json({
        success: true,
        message: "Successfull",
        data: users,
       })
    }catch(err){
        res.status(404).json({
            success:false,
            message:"Not found"
        })

    }
};
