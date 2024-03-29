import httpStatus from "http-status";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Challanges from "../../models/challangesSchema.js";
import sendResponse from "../../../utils/helpers/SendResponse.js";

const getAllChallenges = catchAsync(
    async (req, res) => {
        // get all the challenges
        const challenges = await Challanges.find().lean();

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Challenges retrived successfully!`,
            data: challenges
        });

    }
)

export {
    getAllChallenges
}