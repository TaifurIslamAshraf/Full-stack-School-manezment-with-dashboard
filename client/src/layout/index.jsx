import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

import "./index.css";

const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="contant">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
