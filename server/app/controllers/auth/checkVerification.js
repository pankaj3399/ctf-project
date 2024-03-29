import httpStatus from "http-status";
import ApiError from "../../../utils/errors/ApiError.js";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import User from "../../models/userSchema.js";

const checkVerification = catchAsync(
    async (req, res) => {
        // check if the user is verified or not
        const { email } = req.body;

        const user = await User.findOne({ email }).lean();
        if (!user) throw new ApiError(httpStatus.NOT_FOUND, 'User not found!');

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            data:{
                isVerified: user.verified,
            }
         
        });

    }
)

export default checkVerification