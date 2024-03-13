import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const teacherSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    courses: [],
    isadmin: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

teacherSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashpswd = await bcrypt.hash(user.password, salt);
    user.password = hashpswd;
  } catch (error) {
    next(error);
  }
});

teacherSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isadmin: this.isadmin,
      },
      process.env.Jwtoken,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};
teacherSchema.methods.Comparepswd = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const teacher = new mongoose.model("teacher", teacherSchema);
export default teacher;
