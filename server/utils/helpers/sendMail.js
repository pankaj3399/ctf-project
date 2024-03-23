// create a sendMail helper function that will send an email to the user with the otp.

// Path: server/utils/helpers/sendMail.js
import nodemailer from 'nodemailer';
import config from './../server/config.js';

const transporter = nodemailer.createTransport({

    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: config.EMAIL,
        pass: config.EMAIL_PASSWORD
    }
   
});

const sendMail = async (to, otp) => {


    const mailOptions = {
        from: config.EMAIL,
        to: to,
        subject: 'Account Verification OTP',
        text: `Your OTP is ${otp}`
    };

    const res = await transporter.sendMail(mailOptions);
}



export default sendMail;