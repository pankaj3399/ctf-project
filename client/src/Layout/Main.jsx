import { Outlet } from "react-router-dom";
import { Header } from "../Components/Shared/Header";
import { Toaster } from "react-hot-toast";
import useAuthCheck from "../hooks/useAuthCheck";

const Main = () => {
    const authChecked = useAuthCheck();
    if (!authChecked) return <div className='text-center'>Checking authentication....</div>
    return (
        <div className="gap-2 w-full h-full min-h-screen relative font-poppins">
            <Header />

            <div>

                <Outlet></Outlet>
            </div>
        <Toaster/>


        </div>
    );
};

export default Main;