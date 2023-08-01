import "./contact.css";

import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="contact-contant">
      <div className="contact-heading">
        <h1>Contact Us</h1>
        <h4>Contact for details about the school</h4>
      </div>
      <div className="contact-details">
        <div className="contact-card">
          <h3>Contact with below information</h3>
          <div className="contact-link">
            <a href="tel:+0881645120517">
              <BsFillTelephoneFill /> <span>+0881645120517</span>
            </a>
            <a href="tel:+0881645120517">
              <BsFillTelephoneFill /> <span>+0880170000000</span>
            </a>
            <a href="mailto:Taifurislamashraf.bd@gmail.com">
              <GrMail /> <span>Taifurislamashraf.bd@gmail.com</span>
            </a>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308.675084213284!2d90.12902498846547!3d23.663884091666425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37558e0bbc9d42b9%3A0x16d5c2686f72d130!2sGobindapur!5e0!3m2!1sen!2sbd!4v1690811477943!5m2!1sen!2sbd"
          width="500"
          height="250"
          allowfullscreen=""
          loading="lazy"
          className="map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
