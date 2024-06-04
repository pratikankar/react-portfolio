import React from "react";
import "./headerStyles.css";
import banner from "../../assets/bgbanner.jpg";
import profile from "../../assets/profilepicture.png";
import stripes from "../../assets/stripes.svg";
import {
  FaMobileAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Header({ name, post, mobile_link, email_link, whatsapp, location }) {
  return (
    <section id="header">
      <div className="banner">
        {/* <img src={banner} alt="banner" /> */}
        <div>
          <img className="profile" src={profile} alt="profile picture" />
        </div>
        <div className="intro">
          <h1>Pratik Ankar</h1>
          <h4>Junior Software Enginner</h4>
        </div>

        {/* <div className="contact-buttons">
          <ul>
            <li>
              <div>
              <a href={mobile_link} target="_blank">
                <FaMobileAlt className="fa-icons" />
              </a>
              </div>
            </li>
            <li>
              <a href={email_link} target="_blank">
                <FaEnvelope className="fa-icons" />
              </a>
            </li>
            <li>
              <a href={whatsapp} target="_blank">
                <FaWhatsapp className="fa-icons" />
              </a>
            </li>
            <li>
              <a href={location} target="_blank">
                <FaMapMarkerAlt className="fa-icons" />
              </a>
            </li>
          </ul>
        </div> */}
        {/* <div className="strip">
          <img src={stripes} alt="" />
        </div> */}
      </div>
    </section>
  );
}

export default Header;
