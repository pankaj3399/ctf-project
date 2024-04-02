import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
    Collapse,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUrl } from "../../configs/constants";
import { userLoggedOut } from "../../redux-rtk/features/auth/authSlice";
import ctfLogo from "../../assets/Logo/ctflogo.png";
export function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const [openNav, setOpenNav] = React.useState(false);

    const handleLogout = () => {
        dispatch(userLoggedOut());
        navigate(loginUrl);
    }

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    // console.log(auth)

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"

                className="p-1 font-normal text-red-800"
            >
                <a href="#" className="flex items-center">
                    Resource
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"

                className="p-1 font-normal text-red-800"
            >
                <a href="#" className="flex items-center">
                    FAQ
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"

                className="p-1 font-normal text-red-800"
            >
                <a href="#" className="flex items-center">
                    About
                </a>
            </Typography>

        </ul>
    );

    const loggedOutMenu = (
        <div className="flex items-center gap-x-3">
            <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block text-red-800 border border-red-800 hover:bg-red-800 hover:text-white focus:bg-red-800 focus:text-white active:bg-red-800 active:text-white"
            >
                <Link to="/login">Log In</Link>
            </Button>
            <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block text-white bg-red-800 hover:bg-white hover:text-red-800 hover:border hover:border-red-800 focus:bg-white focus:text-red-800 active:bg-white active:text-red-800"
            >
                <Link to="/signup">Signup</Link>
            </Button>
        </div>
    )

    const loggedInMenu = (
        <div className="flex items-center gap-x-3">
            <Link to="/dashboard">
                <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block text-red-800 border border-red-800 hover:bg-red-800 hover:text-white focus:bg-red-800 focus:text-white active:bg-red-800 active:text-white"
                >
                    Dashboard
                </Button>
            </Link>
            <Button onClick={handleLogout}
                variant="text"
                size="sm"
                className="hidden lg:inline-block text-white bg-red-800 hover:bg-white hover:text-red-800 hover:border hover:border-red-800 focus:bg-white focus:text-red-800 active:bg-white active:text-red-800"
            >
                Logout
            </Button>
        </div>
    )

    return (

        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-8 py-2 lg:px-16 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography

                    className="mr-4 cursor-pointer py-1.5 font-medium text-2xl"
                >
                    <Link to="/" className="flex items-center gap-2 font-bold text-red-600">
                        <img src={ctfLogo} className="w-[60px]" alt="" />
                        CyberLand
                    </Link>
                </Typography>
                <div className="flex items-center gap-6">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    {
                        auth.isAuthenticated ? loggedInMenu : loggedOutMenu
                    }
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                {navList}
                <div className="flex items-center gap-x-1">
                    <Button fullWidth variant="text" size="sm" className="">
                        <span>Log In</span>
                    </Button>
                    <Button fullWidth variant="gradient" size="sm" className="">
                        <span>Sign in</span>
                    </Button>
                </div>
            </Collapse>
        </Navbar>

    );
}