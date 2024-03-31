import bcrypt from 'bcrypt';
import User from "../../models/userSchema.js";
import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import ApiError from "../../../utils/errors/ApiError.js";
import generateToken from "../../../utils/helpers/jwt/generateToken.js";
import UserAttempts from '../../models/userAttemps.js';

const signin = catchAsync(
    async (req, res) => {

        // checking email and password given
        if (!req.body.email || !req.body.password) throw new ApiError(httpStatus.BAD_REQUEST, 'Fields are not there!');

        // find user
        const user = await User.findOne({ email: req.body.email }).lean();
        if (!user) throw new ApiError(httpStatus.NOT_FOUND, 'Information mismatched!');
        // check if user is verified
        if (!user.verified) throw new ApiError(httpStatus.UNAUTHORIZED, 'User is not verified!');
        
        // checking is valid password
        const isValidPassword = await bcrypt.compare(req.body.password, user.password);
        if (!isValidPassword) throw new ApiError(httpStatus.UNAUTHORIZED, 'Credential mismatch!');

        

        // token
        const token = generateToken(user, false);

        // user data
        const { password, ...pwd } = user;

        // add the list of solved challenges to the user object
        const solvedChallenges = await UserAttempts.find({ user: user._id, isCorrect: true }).select('challenge').lean();
        pwd.solvedChallenges = solvedChallenges.map(challenge => challenge.challenge);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Login Success!',
            data: {
                accessToken: token,
                user: pwd
            },
        });
    }
)

export default signin