import teacher from "../model/teacher.js";

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const UserExist = await teacher.findOne({ email });
    if (UserExist) {
      return res.status(400).json({ msg: "Email Already exist" });
    }
    const teachercreated = await teacher.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      message: "Registration Succesfully",
      token: await teachercreated.generateToken(),
      userId: teachercreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
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
    if (validpswd) {
      res.status(201).json({
        message: "Login Succesful",
        token: await UserExist.generateToken(),
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
