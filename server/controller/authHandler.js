const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const OTP = require("../models/OTP");
require("dotenv").config();

const sendOtpHandler = async (req, res) => {
  try {
    const email = req.body.email;

    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(403).json({
        message: "user already exists",
        success: false,
      });
    }
    const otp = await otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    const createOtp = await OTP.create({
      email: email,
      otp: otp,
    });
    if (createOtp) {
      return res.json({
        otp: otp,
        success: true,
      });
    } else console.log("error sending otp");
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Internal server error");
  }
};
const signupHandler = async (req, res) => {
  try {
    const {
      name,
      mobile_no,
      email,
      password,
      role,
      otp,
    } = req.body;
    if (
    name == "" ||
      mobile_no == "" ||
      email == "" ||
     
      password == "" ||
      
      role == "" ||
      otp == "" ||
      !(role == "patient" || role == "doctor" || role == "admin")
    ) {
      return res.status(400).json({
        message: "please fill all fields",
        success: false,
      });
    }
    let userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(403).json({
        message: "user already exists",
        success: false,
      });
    }
    //checking the OTP
    const validOtp = await OTP.findOne({ email: email });
    console.log(validOtp);
    if (!validOtp) {
      return res.status(400).json({
        message: "No OTP found",
        success: false,
      });
    } else if (otp !== validOtp.otp) {
      return res.status(400).json({
        message: "Invalid OTP",
        success: false,
      });
    } else {
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = await User.create({
        name,
  
        mobile_no,
        email,
       
        password: hashPassword,
     
        role,
      });
      if (!newUser) {
        return res.status(500).json({
          message: "user created",
          success: true,
        });
      }
      //deleting the OTP after creating a user
      await OTP.deleteMany({ email: email });
      const payload = {
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,

        role: newUser.role,
      };
      let token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });

      return res
        .cookie("token", token, {
          expires: new Date(Date.now() + 1000 * 60 * 60),
          httpOnly: true,
        })
        .json({
          message: "Account created",
          succes: true,
          user: {
            name,
          
            mobile_no,
            email,
          

            role,
          },
          token: token,
        });
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Internal server error");
  }
};
const loginHandler = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      res
        .status(400)
        .json({ message: "Please fill all fields", success: false });
    } else {
      let newUser = await User.findOne({ email });
      if (!newUser)
        return res.status(400).json({
          message: "Email is not registered.",
          success: false,
        });

      if (await bcrypt.compare(password, newUser.password)) {
        const payload = {
          id: newUser._id,
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
        };
        let token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
          expiresIn: "10h",
        });

        return res
          .cookie("token", token, {
            expires: new Date(Date.now() + 1000 * 60 * 60),
            httpOnly: true,
          })
          .json({
            message: "Account verified",
            succes: "true",
            user: {
              name: newUser.name,
              email: newUser.email,
              role: newUser.role,
            },
            token: token,
          });
      } else {
        return res.sendStatus(403).json({
          message: "Invalid credentials",
          success: "false",
        });
      }
    }
  } catch (err) {
    console.log("Error", err);
    return res.status(500).send("Internal server error");
  }
};
const userInfoHandler = async (req, res) => {
  try {
    res.send(req.body.userData);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};
const updateUser = async (req, res) => {
  try {
    const allowedFields = [
      "first_name",
      "last_name",
      "mobile_no",
      "email",
      "password",
      "dob",
    ];
    const userId = req.body.userData.id;
    const updates = req.body;

    delete updates?.userData;
    const isValidUpdate = Object.keys(updates).every((field) =>
      allowedFields.includes(field)
    );

    console.log(isValidUpdate);
    if (!isValidUpdate) {
      return res
        .status(400)
        .json({ message: "Invalid fields for update", success: false });
    }

    delete updates?.role;
    delete updates?.createdAt;

    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
    });

    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    return res
      .status(200)
      .json({
        message: "User details updated",
        success: true,
        user: updatedUser,
      });
  } catch (error) {
    console.error("Error updating user:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};
module.exports = {
  sendOtpHandler,
  signupHandler,
  loginHandler,
  userInfoHandler,
  updateUser,
};
