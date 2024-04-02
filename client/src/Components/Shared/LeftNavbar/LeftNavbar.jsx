import logo from '../../../assets/Logo/logo.png'
import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCategoriesQuery } from '../../../redux-rtk/features/category/categoryApi';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import { useEffect } from 'react';


const LeftNavbar = () => {



    useGetCategoriesQuery()
    const categories = useSelector((state) => state.categories.categories);


    return (
        <div className='pt-8 pb-8 px-3 w-full bg-[#383838] h-full text-white'>
            <div>
                <div className='flex items-center text-base	font-bold'>
                    <p className='ms-2'>Categories</p>
                </div>
                <ul className='mt-5 navitems'>
                    <NavLink className={
                        ({ isActive }) => {
                            return (
                                isActive ? 'active' : ''
                            )
                        }
                    } to={'categories/all'}>
                        <li className='flex font-medium gap-[16px] text-sm  p-3 rounded-md items-center'>
                            <p>All Challenges</p>
                        </li>
                    </NavLink >
                    {
                        categories &&
                        categories?.map((category, index) => (
                            <NavLink key={category?._id} className={
                                ({ isActive }) => {
                                    return (
                                        isActive ? 'active' :''
                                    )
                                }
                            } to={'categories/' + category?._id}>
                                <li className='flex font-medium gap-[16px] text-sm  p-3 rounded-md items-center'>
                                    <p>{category?.name}</p>
                                </li>
                            </NavLink >
                        ))
                    }


                </ul>
            </div>

        </div>
    );
};

export default LeftNavbar;