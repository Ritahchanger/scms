const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    userId:{

        type:mongoose.Schema.Types.ObjectId,

        ref:'User',

        required:true

    },

    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,

            ref:'Course'
        }
    ],
    dateOfBirth:{

        type:Date,

        required:true,

    },

    address:{

        type:String,

    },
    phone:{

        type:String,

    },

    enrollmentDate:{

        type:Date,

        default:Date.now

    }

})


module.exports = mongoose.model('Student',studentSchema);