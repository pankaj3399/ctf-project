import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useCheckIfUserSolvedAllChallengesQuery } from '../../redux-rtk/features/auth/authApi';
import { LoaderIcon } from 'react-hot-toast';
import { useCreateChallengeByUserMutation } from '../../redux-rtk/features/challenges/challengesApi';


const AddNewChallenge = () => {

    // use react-hook-form to submit the form

    const { data: response, isLoading, isFetching, isSuccess, isError } = useCheckIfUserSolvedAllChallengesQuery({},{
        refetchOnMountOrArgChange: true
    })

    const { register, reset, formState: { errors }, handleSubmit } = useForm()

    const categories = useSelector((state) => state.categories.categories);

    const [createChallenge,challengeCreateApi] = useCreateChallengeByUserMutation()

    const onSubmit = async (data) => {
        console.log(data)
        const res = await createChallenge(data);
        // console.log(res)
        // if success then redirect to dashboard
        if(res?.data?.success){
            reset()
            window.location.href = '/dashboard'
        }

    }



    return (
        (isLoading || isFetching) ? <LoaderIcon style={{
            width: '25px',
            height: '25px',
            margin: 'auto',
            marginTop: '20vh'
        }} /> :
            response && response?.data?.isAllSolved ? (

                <div className='p-5 relative w-full h-full pb-5 mt-5 overflow-y-auto pr-5'>


                    <div className="mx-4 relative h-full">

                        <div className="z-50">
                            <h1 className="flex justify-between w-full gap-[15px] items-center text-[25px]">
                                <span className="text-[25px] font-extrabold	text-white">
                                    Create New Challenge
                                </span>
                                <div>

                                    <span className='ml-5'>
                                        <Link to="/dashboard" className="border rounded-md border-red-600 text-white bg-black px-3 py-2 text-[14px] hover:bg-red-600 hover:text-white duration-300 ease-linear">Back to Dashboard</Link>
                                    </span>
                                </div>
                            </h1>

                        </div>

                        <div >
                            {/* Add a form of submitting new Challenges */}

                            <form onSubmit={handleSubmit(onSubmit)} className=" rounded px-8 pt-6 pb-16 my-4">
                                <div className="mb-4">
                                    <label className="block text-gray-300 text-sm mb-2" >
                                        Title
                                    </label>
                                    <input
                                        {...register("title", { required: true })}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Challenge Name"
                                    />
                                    {errors.title?.type === "required" && (
                                        <p role="alert" className='errorText'>Title is required</p>
                                    )}

                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-300 text-sm mb-2" >
                                        Description
                                    </label>
                                    <textarea {...register("description", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Description" />

                                    {errors.description?.type === "required" && (
                                        <p role="alert" className='errorText'>description is required</p>
                                    )}

                                </div>

                                <div className="flex items-center justify-between gap-4">
                                    {/* category selections */}
                                    <div className="mb-6 w-full">
                                        <label className="block text-gray-300 text-sm mb-2" >
                                            Category
                                        </label>
                                        <select {...register("category", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline">
                                            <option value="">Select Category</option>
                                            {
                                                categories && categories.map((category) => (
                                                    <option key={category._id} value={category._id}>{category.name}</option>
                                                ))
                                            }
                                        </select>
                                        {errors.category?.type === "required" && (
                                            <p role="alert" className='errorText'>Category is required</p>
                                        )}
                                    </div>

                                    {/* points */}
                                    <div className="mb-6 w-full">
                                        <label className="block text-gray-300 text-sm mb-2" >
                                            Points
                                        </label>
                                        <input {...register("points", { required: true, min: 0 })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" type="number" min={0} placeholder="Points" />
                                        {errors.points?.type === "required" && (
                                            <p role="alert" className='errorText'>Points is required</p>
                                        )}
                                    </div>

                                </div>
                                {/* solution */}
                                <div className="mb-6">

                                    <label className="block text-gray-300 text-sm mb-2" >
                                        Solution
                                    </label>
                                    <input {...register("solution", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Solution" />
                                    {errors.solution?.type === "required" && (
                                        <p role="alert" className='errorText'>Solution is required</p>
                                    )}
                                </div>

                                {/* image url */}

                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm mb-2" >
                                        Image URL
                                    </label>
                                    <input {...register("image", { required: false })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Image URL" />

                                </div>



                                <div className="flex items-center justify-between">
                                    <button className="bg-red-600 hover:bg-red-800 text-white py-1.5 px-3 rounded-full" type="submit">
                                        Create Challenge
                                    </button>
                                </div>
                            </form>


                        </div>



                    </div>

                </div>
            ) : <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
                <p className="text-center text-red-600">You need to solve All Challenged added by Admin</p>

                <Link className='bg-black text-white py-2 px-3 rounded' to="/dashboard">
                    Back to Dashboard
                </Link>
            </div>

    );
};

export default AddNewChallenge;