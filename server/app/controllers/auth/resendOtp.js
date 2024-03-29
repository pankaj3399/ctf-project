import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import sendMail from "../../../utils/helpers/sendMail.js";
import User from "../../models/userSchema.js";

const resendOtp = catchAsync(
    async (req, res) => {
        // resend otp to the user
        const { email } = req.body;

        // find user
        const user = await User.findOne({ email:email, verified:false }).lean();
        if (!user) throw new ApiError(httpStatus.NOT_FOUND, 'User not found!');

        // generate otp
        const otp = Math.floor(100000 + Math.random() * 900000);
        // update user
        await User.findOneAndUpdate({ email }, { verificationToken: otp });

        // send otp to the user
        await sendMail(req.body.email, otp);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `OTP sent successfully!`,
        });


    }
)

export default resendOtp