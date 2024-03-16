import teacher from "../model/teacher.js";

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const teacherExist = await teacher.findOne({ email });

    if (teacherExist) {
      return res.status(400).json({ msg: "Email Already Exists" });
    }

    const teachercreated = await teacher.create({
      username,
      email,
      password,
    });
    const userData = await User.findOne({ email }).select("-password -isadmin");

    res.status(201).json({
      message: "Registration Successfully",
      token: await teachercreated.generateToken(),
      userData: userData,
      userId: teachercreated._id.toString(),
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return res.status(400).json({ msg: "the invalid data" });
    }
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const UserExist = await teacher.findOne({ email });
    if (!UserExist) {
      return res.status(400).json({ message: "Invalid credantials" });
    }
    const validpswd = await UserExist.Comparepswd(password);
    const userData = await User.findOne({ email }).select("-password -isadmin");

    if (validpswd) {
      res.status(201).json({
        message: "Login Succesful",
        token: await UserExist.generateToken(),
        userData: userData,

        userId: UserExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Email or Password" });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

export { register, login };
