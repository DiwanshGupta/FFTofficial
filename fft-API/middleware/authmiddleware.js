import jwt from "jsonwebtoken";
import User from "../model/user.js";
import teacher from "../model/teacher.js";
const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res
        .status(401)
        .json({ message: "Unauthorized HTTp ,Token not found" });
    }
    const jwtToken = token.replace("Bearer", "").trim();
    try {
        const isverified = jwt.verify(jwtToken, process.env.Jwtoken);
        const userdata = await User.findOne({ email: isverified.email }).select({
            password: 0,
        });
        const teacherdata = await teacher.findOne({ email: isverified.email }).select({
            password: 0,
        });
        if(userdata){
            req.user = userdata;
            req.token = token;
            req.userId = userdata._id;
        }else if(teacherdata){
            req.user = teacherdata;
            req.token = token;
            req.userId = teacherdata._id;
        }
        

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized.Invalid token" });
    }
};

export default authMiddleware;
