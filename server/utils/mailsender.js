const nodemailer =require("nodemailer")
require("dotenv").config()
const mailSender = async(email,subject,body)=>{
  try{
    let transporter =nodemailer.createTransport({
       host:process.env.MAIL_HOST,
       auth:{
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
       }
    })
    let sentMail= await transporter.sendMail(
        {
            from:'On-Doc',
            to: `${email}`,
            subject:`${subject}`,
            html:`${body}`,
            // attachments: [
            //   {
            //     filename: 'logo.png', 
            //     path: __dirname + '/logo.png', 
            //     cid: 'logo',
            //   },
            // ],
        }
    )
    return sentMail
  }
  catch(err){
    console.log(err.message)
  }
}
module.exports = mailSender