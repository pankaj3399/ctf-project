import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Challanges from "../../models/challangesSchema.js";
import UserAttempts from "../../models/userAttemps.js";


const checkIfAllSolved = catchAsync(
    async (req, res) => {
        // get the user id
        const { _id } = req.user;

        const totalAdminChallenges = await Challanges.find({createdBy: 'admin',status:'published'}).countDocuments();

        const solvedChallenges = await UserAttempts.find({user: _id, isCorrect: true}).populate({
            path: 'challenge',
            match: {createdBy: 'admin',status:'published'}

        }).countDocuments();

        const isAllSolved = solvedChallenges >= totalAdminChallenges ? true : false;

        console.log(totalAdminChallenges,solvedChallenges)

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: isAllSolved,
            data: {
                isAllSolved
            }
        });
        
    }
)

export default checkIfAllSolved