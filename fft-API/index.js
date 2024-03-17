import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./utils/db.js";
import authRoutes from "./routes/user.js";
import teachRoutes from "./routes/teacher.js";
import subjectRoutes from "./routes/subject.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,DELETE,PUT",
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the MERN app");
});
// Routes

app.use("/auth", authRoutes);
app.use("/auth/teacher", teachRoutes);
app.use("/subject/", subjectRoutes);

// Connectivity
const port = process.env.PORT || 500;
connectDb();
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

