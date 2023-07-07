import PropTypes from "prop-types";
import CountUp, { useCountUp } from "react-countup";

import "./mySchool-info.css";

const MySchoolInfo = ({ image, endNum, text }) => {
  useCountUp({
    ref: "counter",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div className="mySchool-info">
      <img src={image} alt="my school info" />
      <div className="info">
        <h3>
          <CountUp duration={1} end={endNum} enableScrollSpy />+
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

MySchoolInfo.propTypes = {
  image: PropTypes.element.isRequired,
  endNum: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default MySchoolInfo;
