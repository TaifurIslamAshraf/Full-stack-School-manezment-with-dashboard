import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="lg:ml-[5rem] mt-[5rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
