import express from "express";
import { login, register, user } from "../controller/user.js";
import { authenticate } from "../middleware/authenticate.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/user", authenticate, user);

export default router;
