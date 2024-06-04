import "./socialStyle.css";
import { FaLinkedin, FaInstagram, FaChevronRight,FaGithub } from "react-icons/fa";

function Social({ linkedin, instagram }) {
  return (
    <div className="social">
      <h2>My Social Presence</h2>
      <ul className="social-links">
        <li>
          <a href="https://www.linkedin.com/in/pratik-ankar-80b4a630/" target="_blank">
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
          <a href="https://github.com/pratikankar" target="_blank">
            <div>
              <FaGithub className="social-icon" />
            </div>
            <div className="social-name">GitHub</div>
            <div>
              <FaChevronRight className="chevron" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/wayfarer_prat/" target="_blank">
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
