// const nodemailer = require("nodemailer");
// const User = require('../../Models/schemaModel.js')
// const multer = require('multer');


//  // Create a transporter using SMTP
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   port: 587,
//   secure: false, 
//   auth: {
//     user:'islamjanat956@gmail.com',
//     pass:'zpcsiuhgvoigqkei',
//   },
// });

//  let registrationController =(async (req, res) => {
//     console.log(req.file)
//     let { name, email } = req.body
//     let existingMail = await User.findOne({ email: email });

//     if (existingMail) {
//         return res.status(409).send("Email already exists");
//     }
//     console.log(name, email)
//      if(!name){
//           return res.status(400).send('give me a name')
//      }
//     let user  = new User({
//         name: name,
//         email: email
//     })

//     await user.save()

//     let verificationLink = "http://localhost:5000/verify"

//     try {
//      const info = await transporter.sendMail({
//        from: '"EcoBazaar" <islamjanat956@gmail.com>', // sender address
//        to: email, // list of recipients
//        subject: "Welcome to EcoBazaar! Verify Your Email", // subject line
//        html: `<body style=margin:0;padding:0;background-color:#f5f7f5;font-family:Arial,Helvetica,sans-serif><table border=0 cellpadding=0 cellspacing=0 width=100% style="background-color:#f5f7f5;padding:30px 15px"><tr><td align=center><table border=0 cellpadding=0 cellspacing=0 width=600 style="max-width:600px;width:100%;background-color:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb"><tr><td style="padding:30px 20px"align=center><h1 style=margin:0;font-size:32px;font-weight:800;letter-spacing:-1px><span style=color:#00b207>Eco</span><span style=color:#1a1a1a>Bazaar</span></h1><p style="margin:8px 0 0;color:#777;font-size:13px">Shop Smart • Live Better<tr><td style="background-color:#e9f9e9;padding:35px 25px"align=center><div style=font-size:50px;margin-bottom:15px>✉️</div><h2 style=margin:0;color:#1a1a1a;font-size:28px;font-weight:800>Welcome to EcoBazaar!</h2><p style="margin:15px 0 0;color:#555;font-size:15px;line-height:1.7">We're excited to have you join our community. Let's get your account ready!<tr><td style="padding:35px 30px"><h3 style="margin:0 0 15px;color:#1a1a1a;font-size:20px">Hello ${name} 👋</h3><p style=margin:0;color:#666;font-size:15px;line-height:1.8>Thank you for registering with <strong>EcoBazaar</strong>! To complete your registration and start shopping, please verify your email address by clicking the button below.<table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td style="padding:30px 0"align=center><a href=${verificationLink} style="display:inline-block;background-color:#00b207;color:#fff;text-decoration:none;font-size:16px;font-weight:700;padding:16px 40px;border-radius:8px">Verify My Email →</a></table><table border=0 cellpadding=0 cellspacing=0 width=100% style=background-color:#f0faf0;border-radius:8px><tr><td style=padding:18px><p style=margin:0;color:#555;font-size:14px;line-height:1.7>⏰ <strong style=color:#008a05>Important:</strong> This verification link will expire in <strong>15 minutes</strong>.</table><p style="margin:25px 0 10px;color:#777;font-size:13px;line-height:1.7">If the button doesn't work, copy and paste this link into your browser:</p><a href=${verificationLink} style=color:#00b207;font-size:13px;word-break:break-all>${verificationLink}</a><table border=0 cellpadding=0 cellspacing=0 width=100% style=margin-top:25px;background-color:#fff8ed;border-radius:8px><tr><td style=padding:15px><p style=margin:0;color:#777;font-size:13px;line-height:1.7>🔒 If you didn't create an EcoBazaar account, you can safely ignore this email.</table><p style="margin:30px 0 5px;color:#555;font-size:14px">Best regards,<p style=margin:0;color:#00b207;font-size:17px;font-weight:700>EcoBazaar Team 💚<tr><td style="background-color:#f8faf8;padding:25px 20px;border-top:1px solid #eee"align=center><p style=margin:0;color:#999;font-size:12px;line-height:1.8>© 2026 EcoBazaar. All rights reserved.<p style="margin:8px 0 0;color:#999;font-size:12px">This is an automated email. Please do not reply.</table></table>`,
//      });
   
//      console.log("Message sent: %s", info.messageId);
//      // Preview URL is only available when using an Ethereal test account
//      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//    } catch (err) {
//      console.error("Error while sending mail:", err);
//    }

//     res.status(201).json({
//      message:'Done'
//     })

// })

// module.exports = {registrationController}
