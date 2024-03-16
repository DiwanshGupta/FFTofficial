import User from "../model/user.js";

const register = async (req, res) => {
  try {
    const { username, email, password, college, semester, branch } = req.body;
    const UserExist = await User.findOne({ email });
    const userData = await User.findOne({ email }).select("-password -isadmin");

    if (UserExist) {
      return res.status(400).json({ msg: "Email Already exist" });
    }
    const Usercreated = await User.create({
      username,
      branch,
      email,
      password,
      college,
      semester,
    });
    res.status(201).json({
      message: "Registration Succesfully",
      token: await Usercreated.generateToken(),
      userdata: userData,
      userId: Usercreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const UserExist = await User.findOne({ email });
    if (!UserExist) {
      return res.status(400).json({ message: "Invalid credantials" });
    }

    const validpswd = await UserExist.Comparepswd(password);
    const userData = await User.findOne({ email }).select("-password -isadmin");

    if (validpswd) {
      res.status(201).json({
        message: "Login Succesful",
        userData: userData,
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

const user = async (req, res) => {
  try {
    const userdata = req.user;
    console.log(userdata);
    // const payments = await Payment.find({ userid: userdata._id });

    // return res.status(200).json({ userdata, payments });
  } catch (error) {
    console.log(error);
  }
};
export { register, login, user };
