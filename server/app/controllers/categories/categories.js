import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Category from "../../models/categorySchema.js";

const getAllCategories = catchAsync(
    async (req, res) => {
        
        // get all the categories with populating their child challenges
        const categories = await Category.find().lean();

        

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Categories retrived successfully!`,
            data: categories
        });

    }
)

const getCategoryDetailsById = catchAsync(
    async (req, res) => {
        const { id } = req.params;

        // get all the challenges of the category also

        // also get all the challenges of the category
        const category = await Category.findById(id).populate({
            path: 'challenges',
        }).lean();


        if (!category) {
            sendResponse(res, {
                statusCode: httpStatus.NOT_FOUND,
                success: false,
                message: `Category not found!`,
            });
        }
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Category retrived successfully!`,
            data: category
        });
    }
)

export { getAllCategories, getCategoryDetailsById }

// export default getAllCategories