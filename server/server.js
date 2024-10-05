const express = require("express");

const cors = require("cors");

const helmet = require("helmet");


const morgan = require("morgan");


const { connectDatabase } = require("../connectDb/connectDb");

require("dotenv").config()


const PORT = process.env.PORT || 8080;

const app = express()

app.use(express.json());


app.use(helmet())

app.use(morgan("dev"));





// app.use('/',(req,res)=>{

//     res.status(200).json({message:"The server has been connected"})

// })


// import routes



const AuthenticationRoutes = require("../routes/AuthenticationRoutes");



app.use('/api/auth',AuthenticationRoutes)




app.listen(PORT,async ()=>{

    try{

        await connectDatabase()

        console.log(`The server is running on PORT ${PORT}`);

    }catch(error){

        console.log(`An error occurred in connecting database`)

    }
    

})