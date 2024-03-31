import { Outlet } from "react-router-dom";
import { Header } from "../Components/Shared/Header";
import { LoaderIcon, Toaster } from "react-hot-toast";
import useAuthCheck from "../hooks/useAuthCheck";

const Main = () => {
    const authChecked = useAuthCheck();
    if (!authChecked) return <div className="flex justify-center items-center h-screen tracking-wider text-[32px] font-semibold"> <LoaderIcon style={{
        width: '25px',
        height: '25px'
    }} /></div> 
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