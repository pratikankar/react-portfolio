import "./linksStyles.css";
import { FaLink, FaChevronRight } from "react-icons/fa";

function Links({ website }) {
  return (
    <div className="links">
      <h2>Links</h2>
      <p>Find Us Here</p>
      <div className="company-link">
        <div>
          <FaLink className="link-icon" />
        </div>
        <div>
          <a href={website} target="_blank" className="link-name">
            Website
          </a>
        </div>
        <div>
          <FaChevronRight className="chevron" />
        </div>
      </div>
    </div>
  );
}

export default Links;
