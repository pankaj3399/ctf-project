import httpStatus from "http-status";
import User from "../../models/userSchema.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import ApiError from "../../../utils/errors/ApiError.js";
import sendResponse from "../../../utils/helpers/SendResponse.js";

const verifyOtp = catchAsync(
    async (req, res) => {

        // verify the otp and if it matches then make the user verified
        const { email, otp } = req.body;

        // find user
        const user = await User.findOne({ email }).lean();
        if (!user) throw new ApiError(httpStatus.NOT_FOUND, 'Information mismatched!');

        // checking otp
        if (user.verificationToken !== otp) throw new ApiError(httpStatus.UNAUTHORIZED, 'OTP mismatched!');

        // update user
        await User.findOneAndUpdate({ email }, { verified: true, verificationToken: null });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Verification Success!',
        });
    }
)

export default verifyOtp