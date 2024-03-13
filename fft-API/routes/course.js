import express from "express";
import {
  deleteCourse,
  getallCourse,
  updateCourse,
  uploadCourse,
} from "../controller/course.js";
import { authorize } from "../middleware/authorization.js";
import { authenticate } from "../middleware/authenticate.js";
const router = express.Router();

router.get("/get/course/", getallCourse);
router.post("/upload/:id", authenticate, uploadCourse);
router.put("/update/:id", authenticate, authorize, updateCourse);
router.delete("/delete/:id", authenticate, authorize, deleteCourse);
router.get("/get/upload/:id", authenticate, authorize, getallCourse);
export default router;
