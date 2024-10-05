// models/Grade.js
const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
  studentId: {
    
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },

  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },

  grade: { type: String, required: true },
  semester: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Grade", gradeSchema);
