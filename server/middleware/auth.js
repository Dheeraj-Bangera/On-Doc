const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config;

const auth = async (req, res, next) => {
  try {
    const cookie = req.cookies.token;
    if (!cookie) {
      res.status(401).json({ message: "unathorized", success: false });
    } else {
      const verify = jwt.verify(cookie, process.env.JWT_SECRET_KEY);
      if (!verify ) {
        return res.json({ message: "unathorized", success: false }).status(401);
      }
      req.body.userData = verify;
      next();
    }
  } catch (err) {
    console.log("error", err);
  }
};

const isPatient = async (req, res, next) => {
  try {
    const cookie = req.cookies.token;
    if (!cookie) {
      res.status(401).json({ message: "unathorized", success: false });
    } else {
      const verify = jwt.verify(cookie, process.env.JWT_SECRET_KEY);
      if (!verify || verify.role !== "patient") {
        return res.json({ message: "unathorized", success: false }).status(401);
      }
      req.body.userData = verify;
      next();
    }
  } catch (err) {
    console.log("error", err);
  }
};

const isDoctor = async (req, res, next) => {
  try {
    const cookie = req.cookies.token;
    if (!cookie) {
      res.status(401).json({ message: "unathorized", success: false });
    } else {
      const verify = jwt.verify(cookie, process.env.JWT_SECRET_KEY);
      if (!verify || verify.role !== "doctor") {
        return res.json({ message: "unathorized", success: false }).status(401);
      }
      req.body.userData = verify;
      next();
    }
  } catch (err) {
    console.log("error", err);
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const cookie = req.cookies.token;
    if (!cookie) {
      res.status(401).json({ message: "unathorized", success: false });
    } else {
      const verify = jwt.verify(cookie, process.env.JWT_SECRET_KEY);
      if (!verify || verify.role !== "admin") {
        return res.json({ message: "unathorized", success: false }).status(401);
      }
      req.body.userData = verify;
      next();
    }
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = { isPatient, isDoctor, isAdmin, auth };
