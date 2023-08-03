import FooterLogo from "../../assets/images/education.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-contant">
      <div className="main-footer">
        <div className="footer-desc">
          <img src={FooterLogo} alt="footer logo" />
          <p>
            Let the path of education light always shine, so we are progressing
            on the bright path of education. We are moving in a completely
            reliable and trustworthy way to provide a complete all education
            preparation.
          </p>
        </div>
        <div className="footer-link1">
          <a href="/">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-link2">
          <a href="#">Articale</a>
          <a href="#">Notice</a>
          <a href="#">Result</a>
        </div>
      </div>
      <div className="copyright">
        <small>&copy; copyright by MD. Taifur</small>
        <small>Develop by MD. Taifur</small>
      </div>
    </div>
  );
};

export default Footer;
