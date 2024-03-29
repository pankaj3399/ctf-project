import logo from '../../../assets/Logo/logo.png'
import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const LeftNavbar = () => {


    const categories = [
        {
            id: 1,
            name: 'web exploitation',
        },
        {
            id: 2,
            name: 'cryptography',
        },
        {
            id: 3,
            name: 'forensics',
        },
        {
            id: 4,
            name: 'reverse engineering',
        },

    ]


    return (
        <div className='pt-8 pb-8 px-3 w-full bg-[#FAFAFA] h-auto'>
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
                        categories.map((category, index) => (
                            <NavLink key={index} className={
                                ({ isActive }) => {
                                    return (
                                        isActive ? 'active' :''
                                    )
                                }
                            } to={'categories/' + category.id}>
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