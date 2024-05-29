import "./contactStyles.css";
import { FaMobileAlt, FaLocationArrow } from "react-icons/fa";

function Contact({ mobile, email, address1, address2, address3, location }) {
  return (
    <div className="contact">
      <div className="contactdetails">
        <span>
          <FaMobileAlt className="mobileicon" />
        </span>
        <h2>Contact Me</h2>
      </div>
      <div className="callme">
        <div className="calltext">Call Me</div>
        <div className="mobilenumber">
          <a href="#">{mobile}</a>
        </div>
      </div>
      <div className="emailme">
        <div className="emailtext">Email</div>
        <div className="email">
          <a href="#">{email}</a>
        </div>
      </div>
      <div className="address">
        <div className="addresstext">Address</div>
        <div className="fulladdress">
          <p>
            {address1} <br />
            {address2} <br />
            {address3}
          </p>
          <a className="mapbtn" href={location} target="_blank">
            <span>
              <FaLocationArrow className="locationarrow" />
            </span>
            Direction
          </a>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Contact;
