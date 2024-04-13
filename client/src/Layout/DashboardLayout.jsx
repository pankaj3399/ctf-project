import { Outlet } from "react-router-dom";
import LeftNavbar from "../Components/Shared/LeftNavbar/LeftNavbar";

const DashboardLayout = () => {
  return (
    <div className="gap-2 w-full h-screen -mt-16 pt-14 fixed flex">
      <div className="w-[300px] border-r border-r-gray-200 shadow-md overflow-auto">
        <LeftNavbar></LeftNavbar>
      </div>
      <div className="w-full h-full pb-12 pt-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
