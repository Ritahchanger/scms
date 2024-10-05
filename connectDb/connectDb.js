const mongoose = require("mongoose");

require("dotenv").config();


const connectDatabase = () =>{

    mongoose.connect(process.env.MONGO_URI).then(()=>{

        console.log('MongoDB connected');

    }).catch(error=>{

        console.log(err);

    })

}


module.exports = { connectDatabase }