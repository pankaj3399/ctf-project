import { Outlet } from "react-router-dom";
import { Header } from "../Components/Shared/Header";

const Main = () => {
    return (
        <div className="gap-2 w-full h-full min-h-screen relative font-poppins">
            <Header />

            <div>

                <Outlet></Outlet>
            </div>



        </div>
    );
};

export default Main;