import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Resources = () => {

    const categories = useSelector((state) => state.categories.categories);
    const navigate = useNavigate();

    return (
        <div className='px-5 md:px-24 py-8 bg-black min-h-screen w-full text-white'>
            {/* braedcumbs */}
            <div className='flex items-center gap-2'>
                <p>Home</p>
                <p>/</p>
                <p>Resources</p>
            </div>

            <div className='mt-5'>
                <h1 className='text-3xl font-normal'>Categories</h1>

                {/* create card of categories in grid with short description */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                    {
                        categories && categories.map((category) => (
                            <div onClick={()=>navigate(`/dashboard/categories/${category?._id}`)} key={category?._id} className='bg-[#383838] p-5 rounded-md min-h-[120px] cursor-pointer'>
                                <h1 className='text-xl font-semibold'>{category?.name}</h1>
                                <p className='mt-5 text-gray-400 text-sm'>{category?.description}</p>
                            </div>
                        ))
                    }
                </div>

            </div>



        </div>
    );
};

export default Resources;