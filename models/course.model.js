const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    name:{ 
        type:String,

        type:true
    },
    description:{

        type:String,

    },

    teacherId:{


        type:mongoose.Schema.Types.ObjectId,

        ref:'User',

        required:true,

    },

    students:[

        {
            type:mongoose.Schema.Types.ObjectId,

            ref:'Student',
        }

    ],

    createdAt:{

        type:Date,

        default:Date.now

    }

})

const Course = mongoose.model('Course',courseSchema);


module.exports =Course