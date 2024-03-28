import logo from '../../../assets/Logo/logo.png'
import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { NavLink } from 'react-router-dom';


const LeftNavbar = () => {

    const categories = [
        {
            id:1,
            name:'web exploitation',
        },
        {   
            id:2,
            name:'cryptography',
        },
        {
            id:3,
            name:'forensics',
        },
        {   
            id:4,
            name:'reverse engineering',
        }
    ]


    return (
        <div className='pt-5 ps-3 w-1/5 bg-[#FAFAFA] h-auto'>
            <div>
                <div className='flex items-center text-base	font-bold'>
                    <p className='ms-2'>Categories</p>
                </div>
                <ul className='mt-5 navitems'>
                   {
                        categories.map((category, index) => (
                            <NavLink className={
                                ({ isActive }) => {
                                    return (
                                        isActive && 'active'
                                    )
                                }
                            } to={'categories/'+category.id}>
                                <li className='flex font-medium gap-[16px] text-sm  p-3 rounded-md items-center'>
                                    <a>{category?.name}</a>
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