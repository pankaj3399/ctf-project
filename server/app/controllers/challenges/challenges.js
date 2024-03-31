import httpStatus from "http-status";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Challanges from "../../models/challangesSchema.js";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import UserAttempts from "../../models/userAttemps.js";
import UserRankings from "../../models/userRankings.js";

const getAllChallenges = catchAsync(
    async (req, res) => {
        // get all the challenges
        const challenges = await Challanges.find().populate("category").lean();

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Challenges retrived successfully!`,
            data: challenges
        });

    }
)


const submitChallenge = catchAsync(
    async (req, res) => {
        // get the challenge id
        const { id } = req.params;
        // get the user id
        const { _id } = req.user;

        // find the challenge
        const challenge = await Challanges.findById(id);
        if (!challenge) throw new ApiError(httpStatus.NOT_FOUND, 'Challenge not found!');

        // check if the user has already submitted the challenge
        // const isSubmitted = challenge.submissions.find(sub => sub.user == _id);
        // if (isSubmitted) throw new ApiError(httpStatus.BAD_REQUEST, 'You have already submitted this challenge!');

        // check if the challenge is already solved by the user
        const isSolved = await UserAttempts.findOne({ user: _id, challenge: id, isCorrect: true }).lean();
        const alreadySolved = isSolved ? true : false

        // add the in UserAttempts Model also before adding check if the submission is correct or not
        const submission = new UserAttempts({
            user: _id,
            challenge: id,
            submission: req.body.submission
        });

        // check if the submission is correct or not
        if (challenge.solution === req.body.submission) {
            submission.isCorrect = true;
            submission.points = alreadySolved ? 0 : challenge.points;
        }

        await submission.save();

        // now add the points to the UserRanking Model if the submission is correct
        if (submission.isCorrect && !alreadySolved) {
            const userRanking = await
                UserRankings.findOneAndUpdate({ user: _id }, { $inc: { points: challenge.points, totalCorrectAttempts: 1 } }, { new: true, upsert: true });
            
        }

        // send message about the submission if it is correct or not
        const message = submission.isCorrect ? `Accepted` : `Wrong Answer`;
        const success = submission.isCorrect ? true : false;

        

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: success,
            message: message,
        });

    }
)


const getUserRankings = catchAsync(
    async (req, res) => {
        // get all the users ranking
        const rankings = await UserRankings.find().populate("user").sort({
            points: -1,
        }).limit(10).lean();

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Rankings retrived successfully!`,
            data: rankings
        });

    }
)
export {
    getAllChallenges,
    submitChallenge,
    getUserRankings
}