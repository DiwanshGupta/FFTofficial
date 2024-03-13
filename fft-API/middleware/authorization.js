import Course from "../model/dataModel.js";
import Teacher from "../model/teacher.js";

const authorize = async (req, res, next) => {
  const courseId = req.params;
  const courseIdValue = courseId.id;
  try {
    if (req.user.isadmin) {
      const teacher = await Teacher.findById(req.user.userId);
      if (!teacher || Object.keys(teacher).length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "Teachersds not found s" });
      }

      const filteredCourses = teacher.courses.filter(
        (course) => course.toString() === courseIdValue
      );
      if (filteredCourses.length > 0) {
        next();
      } else {
        // Course not found in teacher's courses array
        return res
          .status(404)
          .json({ success: false, message: "Course not found" });
      }
    } else {
      // If the authenticated user is not an admin, return a 403 Forbidden error
      return res
        .status(403)
        .json({ success: false, message: "Authorization invalid" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { authorize };
