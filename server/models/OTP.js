const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const mailSender= require("../utils/mailsender.js")
const OTPSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true,
  },
  otp:{
    type:Number,
    required:true
  },
  createdAt: { 
    type: Date,
    default: Date.now(),
    expires:2*60
  },
});
async function otpSender(email,otp){
    try{
      const body =`<html >

      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify your login</title>
        <!--[if mso]><style type="text/css">body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }</style><![endif]-->
      </head>
      
      <body style="font-family: Helvetica, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;">
        <table role="presentation"
          style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: rgb(239, 239, 239);">
          <tbody>
            <tr>
              <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
                <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;">
                  <tbody>
                    <tr>
                      <td style="padding: 40px 0px 0px;">
                        <div style="text-align: left;">
                         
                        </div>
                        <div style="padding: 20px; background-color: rgb(255, 255, 255);">
                          <div style="color: rgb(0, 0, 0); text-align: left;">
                            <h1 style="margin: 1rem 0">On-Doc</h1>
                            <h2 style="margin: 1rem 0">Verification code</h2>
                            <p style="padding-bottom: 16px">Please use the verification code below to sign in.</p>
                            <p style="padding-bottom: 16px"><strong style="font-size: 130%">${otp}</strong></p>
                            <p style="padding-bottom: 16px">If you didn't request this, you can ignore this email.</p>
                            <p style="padding-bottom: 16px">Thanks,<br>The JIIBS team</p>
                          </div>
                        </div>
                       
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
      
      </html>`
      
        const mailResponse =await mailSender(email,"verification mail from On-doc",body)
        console.log("mail sent",mailResponse)
    }catch(err){
        console.log(err.message)
    }

}

OTPSchema.pre("save", async function (next) {
  try {
   
    if (this && this.email) {
      await otpSender(this.email, this.otp);
    } else {
      console.log("Email is undefined");
    }
    next();
  } catch (err) {
    console.log(err.message);
  }
});
module.exports = mongoose.model("OTP", OTPSchema);