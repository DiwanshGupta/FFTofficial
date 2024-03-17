import Subject from "../model/dataModel.js";
import Teacher from "../model/teacher.js";

const authorize = async (req, res, next) => {
  const subjectId = req.params;
  const subjectIdValue = subjectId.id;
  try {
    if (req.user.isadmin) {
      const teacher = await Teacher.findById(req.user._id);
      if (!teacher || Object.keys(teacher).length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "Teacher data not found" });
      }
      next();
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
