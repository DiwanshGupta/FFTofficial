import express from "express";
import {
  deleteCourse,
  getallCourse,
  updateCourse,
  uploadCourse,
} from "../controller/course.js";
import { authorize } from "../middleware/authorization.js";
import authMiddleware from "../middleware/authmiddleware.js";
const router = express.Router();

router.get("/get/course/", getallCourse);
router.post("/upload/:id", authMiddleware, uploadCourse);
router.put("/update/:id", authMiddleware, authorize, updateCourse);
router.delete("/delete/:id", authMiddleware, authorize, deleteCourse);
router.get("/get/upload/:id", authMiddleware, authorize, getallCourse);
export default router;
