import "./socialStyle.css";
import { FaLinkedin, FaInstagram, FaChevronRight } from "react-icons/fa";

function Social({ linkedin, instagram }) {
  return (
    <div className="social">
      <h2>My Social Presence</h2>
      <ul className="social-links">
        <li>
          <a href={linkedin} target="_blank">
            <div>
              <FaLinkedin className="social-icon" />
            </div>
            <div className="social-name">LinkedIn</div>
            <div>
              <FaChevronRight className="chevron" />
            </div>
          </a>
        </li>
        <li>
          <a href={instagram} target="_blank">
            <div>
              <FaInstagram className="social-icon" />
            </div>
            <div className="social-name">Instagram</div>
            <div>
              <FaChevronRight className="chevron" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
