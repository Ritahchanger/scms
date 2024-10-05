const User = require('../models/user.model');

const bcrypt = require('bcrypt')


const jwt = require('jsonwebtoken');

require("dotenv").config();

const register = async (req,res) =>{


    const { firstName,lastName,email,password,role } = req.body;

    try{

        const existingUser = await User.findOne({email});

        if(existingUser){


            return res.status(400).json({success:false,message:'This user already exists'})

        }

        const salt= await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(password,salt);

        const user = new User({

            firstName,

            lastName,

            email,

            password:hashedPassword,

            role

        })

        await user.save();


        res.status(201).json({message:'User registered successfully'});


    }catch(error){


        res.status(500).json({success:false,message:'Internal server error', error:error.message})

    }



}


const login = async  (req,res) =>{


    const { email,password } = req.body;

    if(!email || !password){

        return res.status(400).json({message:"Email and password are required"});

    }
    try{

        const user = await User.findOne({email});

        if(!user){


            return res.status(400).json({message:"Invalid credentials",success:false})

        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){


            return res.status(400).json({message:"Invalid credentials"});

        }

        const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1h'});

        res.status(200).json({token})
        

    }catch(error){

        console.error("Error logging in user: ",error);


        res.status(500).json({message:"Internal server error"});

    }


}



module.exports =  { register,login }