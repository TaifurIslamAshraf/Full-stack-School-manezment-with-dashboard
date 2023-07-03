import { NavLink } from "react-router-dom";

import { BiMessageRoundedError, BiSolidDashboard } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GiTeacher } from "react-icons/gi";
import { MdCastForEducation, MdCreate, MdLogout } from "react-icons/md";
import { PiArticleMediumBold } from "react-icons/pi";
import { RiFileChartLine } from "react-icons/ri";
import { TbCalendarEvent } from "react-icons/tb";

const deshboardMenu = [
  {
    title: "Deshboard",
    path: "/",
    icon: <BiSolidDashboard size={25} />,
  },
  {
    title: "Students",
    path: "/admission",
    icon: <MdCastForEducation size={25} />,
  },
  {
    title: "Admits",
    path: "/admits",
    icon: <FaRegNewspaper size={25} />,
  },
  {
    title: "Results",
    path: "/results",
    spacing: true,
    icon: <RiFileChartLine size={25} />,
  },
  {
    title: "Events",
    path: "/events",
    icon: <TbCalendarEvent size={25} />,
  },
  {
    title: "Article",
    path: "/article",
    icon: <PiArticleMediumBold size={25} />,
  },
  {
    title: "Notice",
    path: "/notice",
    spacing: true,
    icon: <BiMessageRoundedError size={25} />,
  },
  {
    title: "Teachers",
    path: "/teacher",
    icon: <GiTeacher size={25} />,
  },
  {
    title: "Users",
    path: "/users",
    icon: <FiUsers size={25} />,
  },
  {
    title: "Creations",
    path: "/creations",
    spacing: true,
    icon: <MdCreate size={25} />,
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <MdLogout size={25} />,
  },
];

const Sidebar = () => {
  return (
    <div
      className="bg-background-dark hover:w-60 w-20
      h-screen absolute transition-all duration-150 group text-white hover:px-4 px-3 overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent py-6"
    >
      <div className="w-[40px] mb-4 flex items-center space-x-1 font-bold text-xl">
        <img src="images/Logo.png" alt="logo" />
        <p className="group-hover:block hidden">Govindapur</p>
      </div>
      <div className="menu">
        {deshboardMenu.map((menu, index) => {
          return (
            <nav key={index} className="">
              <NavLink
                to={menu.path}
                end
                className={`
                flex
                items-center
                gap-x-4
                px-2
                my-4
                hover:bg-[#4a6c8d]
                rounded
                ${menu.spacing && "mb-8"}
              `}
              >
                <div>{menu.icon}</div>
                <div className="hidden hover:inline-block text-base group-hover:block flex-1">
                  {menu.title}
                </div>
              </NavLink>
            </nav>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
