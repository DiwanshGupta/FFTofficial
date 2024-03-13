import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import authRoutes from "./routes/user.js";
import teachRoutes from "./routes/teacher.js";
import courseRoutes from "./routes/course.js";
dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  3;
  23;
  res.status(200).send("Welcome to the MERN app");
});
// Routes

app.use("/auth", authRoutes);
app.use("/auth/teacher", teachRoutes);
app.use("/course/", courseRoutes);

// Connectivity
const port = process.env.PORT || 500;
connectDb();
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
