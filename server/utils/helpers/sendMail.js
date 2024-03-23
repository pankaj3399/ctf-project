// create a sendMail helper function that will send an email to the user with the otp.

// Path: server/utils/helpers/sendMail.js
import nodemailer from "nodemailer";

import config from "./../server/config.js";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: config.SMTP_EMAIL,
    pass: config.SMTP_PASSWORD,
  },
});

const sendMail = async (to, otp) => {
  const mailOptions = {
    from: "vatwanipankaj74@gmail.com",
    to: to,
    subject: "Account Verification OTP",
    text: `Your OTP is ${otp}`,
  };

  const res = await transporter.sendMail(mailOptions);
};

export default sendMail;
