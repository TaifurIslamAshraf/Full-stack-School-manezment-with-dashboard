import PropTypes from "prop-types";
import "./cards.css";

const Cards = ({ title, desc, icon }) => {
  return (
    <div className="card">
      {icon}
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Cards;
