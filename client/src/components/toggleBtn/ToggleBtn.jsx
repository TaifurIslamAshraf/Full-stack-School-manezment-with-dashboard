import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import { useContext } from "react";
import { NavToggle } from "../../context/navToggle";
import "./toggleBtn.css";

const ToggleBtn = () => {
  const data = useContext(NavToggle);
  const handleShow = () => {
    data.setIsShow(!data.isShow);
  };

  return (
    <div className="mobile-toggle">
      <button onClick={handleShow}>
        {data.isShow ? <GrClose size={30} /> : <FaBars size={30} />}
      </button>
    </div>
  );
};

export default ToggleBtn;
