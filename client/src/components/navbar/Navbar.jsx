import "./navbar.css";

import axios from "axios";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../../assets/images/education.png";
import { NavToggle } from "../../context/navToggle";
import { useGetUserQuery } from "../../features/api/userSlice";
import { baseUrl } from "../../utils/baseUrl";
import ToggleBtn from "../toggleBtn/ToggleBtn";

const Navbar = () => {
  const navigate = useNavigate();
  const { isSuccess: isMeSuccess } = useGetUserQuery();
  const data = useContext(NavToggle);

  const handleLogout = async () => {
    const { data } = await axios.get(`${baseUrl}/api/logout`, {
      withCredentials: true,
    });
    if (data.success) {
      toast.success(data.message);
      navigate("/", { replace: true });
      window.location.reload();
    } else {
      toast.error("Logout faild");
    }
  };

  return (
    <nav className={`navbar ${data.isShow ? "show-nav" : ""}`}>
      <div className="navTo">
        <ToggleBtn />
      </div>
      <div className="nav-contant">
        <Link to="/" className="logo">
          <img loading="eager" src={Logo} alt="logo" />
        </Link>
        <div className="all-link">
          <NavLink end to={"/"}>
            Home
          </NavLink>
          <NavLink to={"/notice"}>Notice</NavLink>
          <NavLink to={"/article"}>Article</NavLink>
          <NavLink to={"/result"}>Result</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
        {isMeSuccess ? (
          <div className="login-btn">
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to={"/login"} className="login-btn">
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
