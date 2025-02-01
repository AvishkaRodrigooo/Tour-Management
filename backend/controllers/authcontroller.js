
import User from "../models/User.js";
import bcrypt from 'bcryptjs' ;///npm install bcryptjs
import jwt from 'jsonwebtoken';



// user registration
export const register = async(req, res)=>{
    try{
        // Validate input
    const { username, email, password, photo } = req.body;
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already registered" });
    }
         //hashing password
         const salt = bcrypt.genSaltSync(10);
         const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username,
            email,
            password: hash, //save the hash password
            photo:photo || "",
        });

        await newUser.save();

        res.status(200).json({success:true, message: 'Succefully created'})
    }catch(err){
        console.error(err);//error ek hoynn gththtee
        res.status(500).json({success:false, message: 'Fail to create, try again'});
    }
};
//////////////////// User login/////////////////
export const login = async (req, res) => {
    const email = req.body.email
    try {

        const user = await User.findOne({email})
        ////if user doesn't exist
        if(!user){
            return res.status(404).json({success:false, message:'User not found'})

        }
        //if user is exist then check the passowrd or compare the passowrd
  const CheckCorrectPassword = await bcrypt.compare(req.body.password, user.password)
    
       //if password is incorrect
   if(!CheckCorrectPassword){
    return res.status(401).json({success:false, message:'Incorrect email or password'});
   }

    const {password, role, ...rest} = user._doc
    
    ////create jwt token
    const token = jwt.sign(
        {id:user._id,role:user.role}, process.env.JWT_SECRET_KEY,  //JWT_secretkey ekk ENV DILE EKE DMM LOGIN EKT
         { expiresIn: "15d"});

        
        
     ////set token in the browser cookies and send  response to the client
    
    res.cookie("accessToken", token,{
        httpOnly:true,
        expires: token.expiresIn,
    })
    .status(200).json({
        token,
        data:{ ...rest},
        role,
    });
    
        } catch (err) {
        
 res.status(500).json({success:false, message:'failes to login'});
    }
};