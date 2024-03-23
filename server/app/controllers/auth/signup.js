import User from "../../models/userSchema.js";
import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import ApiError from "../../../utils/errors/ApiError.js";
import sendMail from "../../../utils/helpers/sendMail.js";

const signup = catchAsync(
    async (req, res) => {

        // finding user if exists
        const user = await User.findOne({ email: req.body.email });
        if (user) throw new ApiError(httpStatus.BAD_REQUEST, 'Account already exists!');
        
        // creating user
        
        // create an otp and send it to the user email to verify the account
        const otp = Math.floor(100000 + Math.random() * 900000);

        await User.create({...req.body, verificationToken: otp});
        
        // send otp to the user email
        await sendMail(req.body.email, otp);

      


        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `OTP sent successfully!`,
        });
    }
)

export default signup