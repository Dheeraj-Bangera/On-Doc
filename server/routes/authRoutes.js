const express = require("express");
const {sendOtpHandler,signupHandler,loginHandler,userInfoHandler,updateUser} =  require("../controller/authHandler")
const authRouter = express.Router();
const {auth} =require("../middleware/auth")

authRouter.post( "/getOtp", sendOtpHandler);
authRouter.post( "/signup", signupHandler);
authRouter.post("/login", loginHandler)
authRouter.get("/userInfo",auth,userInfoHandler)
// authRouter.put("/updateUser",auth,updateUser)
module.exports = authRouter;