const User = require('../models/user.model');

const bcrypt = require('bcrypt')


const jwt = require('jsonwebtoken');



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



}



module.exports =  { register,login }