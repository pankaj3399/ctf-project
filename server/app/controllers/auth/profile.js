import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import User from "../../models/userSchema.js";
import UserAttempts from "../../models/userAttemps.js";

const profile = catchAsync(
    async (req, res) => {

        // finding profile
        const user = await User.findOne({ _id: req.user._id });

        // removing password from the user object
        const { password, ...data } = user._doc;
        
        // get the list of ids of the challenges user has solved
        const solvedChallenges = await UserAttempts.find({ user: req.user._id, isCorrect: true }).select('challenge').lean();
        // console.log(solvedChallenges)
        // add the list of solved challenges to the user object
        data.solvedChallenges = solvedChallenges.map(challenge => challenge.challenge);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Profile retrived successfully!`,
            data: data
        });
    }
)

export default profile