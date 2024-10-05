const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({

    studentId:{

        type:mongoose.Schema.Types.ObjectId,

        ref:'Student',

        required:true

    },

    courseId:{

        type:mongoose.Schema.Types.ObjectId,

        ref:'Course',

        required:true,

    },

    date:{

        type:Date,

        default:Date,now
    },


    present:{

        type:Boolean,

        required:true

    }

})

const Attendance = mongoose.model('Attendance',AttendanceSchema);

module.exports = Attendance;