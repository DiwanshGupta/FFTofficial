import express from "express";
import {
    CreateSubject, 
    getallSubject, 
    updateSubject, 
    deleteSubject,
    addUnits,
    getUnits,
    updateUnits,
    deleteUnits,
    getTopics,
    addTopics,
    updateTopic,
    deleteTopic,
} from "../controller/subject.js";
import { authorize } from "../middleware/authorization.js";
import authMiddleware from "../middleware/authmiddleware.js";
const router = express.Router();

// router.get("/get/course/", getallCourse);
// router.post("/upload/:id", authMiddleware, uploadCourse);
// router.put("/update/:id", authMiddleware, authorize, updateCourse);
// router.delete("/delete/:id", authMiddleware, authorize, deleteCourse);
// router.get("/get/upload/:id", authMiddleware, authorize, getallCourse);


router.get("/get/", getallSubject);
router.post("/create/:id", authMiddleware, CreateSubject);
router.put("/update/:id", authMiddleware, authorize, updateSubject);
router.delete("/delete/:id", authMiddleware, authorize, deleteSubject);
router.get("/get/:id", authMiddleware, authorize, getallSubject);

router.get("/get/:id/units/", getUnits);
router.put("/create/units/:id", authMiddleware, addUnits);
router.put("/update/units/:id", authMiddleware, authorize, updateUnits);
router.delete("/delete/units/:id", authMiddleware, authorize, deleteUnits);
router.get("/get/units/:id", authMiddleware, authorize, getUnits);

router.get("/get/topic/:id", getTopics);
router.put("/create/topic/:id", authMiddleware, addTopics);
router.put("/update/topic/:id", authMiddleware, authorize, updateTopic);
router.delete("/delete/topic/:id", authMiddleware, authorize, deleteTopic);
router.get("/get/topic/:id", authMiddleware, authorize, getTopics);

export default router;