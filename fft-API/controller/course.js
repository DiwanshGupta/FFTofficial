import Course from "../model/dataModel.js";
import Teacher from "../model/teacher.js";

const uploadCourse = async (req, res) => {
  try {
    const { subject, pyq, mustdo, mostRepeated, units, price, img } = req.body;

    const { id: teacherId } = req.params;

    // Check if the teacher exists
    const teacher = await Teacher.findById(teacherId);
    if (!teacher) {
      return res
        .status(404)
        .json({ success: false, message: "Teacher not found" });
    }

    // Create a new course instance
    const newCourse = new Course({
      subject,
      pyq,
      mustdo,
      mostRepeated,
      units,
      img,
      price,
    });

    // Save the course to the database
    await newCourse.save();

    // Associate the course with the teacher
    teacher.courses.push(newCourse._id);
    await teacher.save();

    // Send a success response
    res
      .status(201)
      .json({ success: true, message: "Course uploaded successfully" });
  } catch (error) {
    // If there's an error, send an error response
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to upload course" });
  }
};

const updateCourse = async (req, res) => {
  try {
    const { subject, pyq, mustdo, mostRepeated, units, price } = req.body;
    const courseId = req.params.id;

    // Check if the course exists
    const existingCourse = await Course.findById(courseId);
    if (!existingCourse) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }

    // Update course fields with new data from request body
    existingCourse.subject = subject;
    existingCourse.pyq = pyq;
    existingCourse.mustdo = mustdo;
    existingCourse.mostRepeated = mostRepeated;
    existingCourse.units = units;
    existingCourse.price = price;

    // Save the updated course to the database
    await existingCourse.save();

    // Send a success response
    res
      .status(200)
      .json({ success: true, message: "Course updated successfully" });
  } catch (error) {
    // If there's an error, send an error response
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update course" });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    // Check if the course exists
    const existingCourse = await Course.findById(courseId);
    if (!existingCourse) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }

    // Delete the course from the database
    await existingCourse.deleteOne();

    // Send a success response
    res
      .status(200)
      .json({ success: true, message: "Course deleted successfully" });
  } catch (error) {
    // If there's an error, send an error response
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete course" });
  }
};
const getallCourse = async (req, res) => {
  try {
    // Search all course
    const users = await Course.find();
    // Send a success response
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { uploadCourse, getallCourse, updateCourse, deleteCourse };
