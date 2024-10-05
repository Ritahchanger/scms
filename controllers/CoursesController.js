const Course = require("../models/course.model");

const createCourse = async (req, res) => {
  const { name, description, teacherId } = req.body;

  try {
    const newCourse = new Course({
      name,

      description,

      teacherId,
    });

    await newCourse.save();

    res
      .status(201)
      .json({ message: "Course created successfully", course: newCourse });
  } catch (error) {
    console.log(error);

    res
      .status(500)
      .json({ message: "Error creating course", error: error.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find()
      .populate("teacherId", "name email")
      .populate("students", "name email");

    res.status(200).json(courses);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ message: "Error fetching the courses", error: error.message });
  }
};

const getCourseById = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findById(id)
      .populate("teacherId", "name email")
      .populate("students", "name email");

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ message: "Error fetching course", error: error.message });
  }
};

const updateCourse = async (req, res) => {
  const { id } = req.params;

  const { name, description } = req.body;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      id,

      { name, description },

      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res
      .status(200)
      .json({ message: "Courses updated successfully", course: updatedCourse });
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ message: "Error updating course", error: error.message });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ message: "Error deleting the course", error: error.message });
  }
};

module.exports = { createCourse,getAllCourses,getCourseById,updateCourse,deleteCourse
 }