import "./contactStyles.css";
import { FaMobileAlt, FaLocationArrow } from "react-icons/fa";

function Contact({ mobile, email, address1, address2, address3, location }) {
  return (
    <div className="contact">
      <div className="contactdetails">
        <h2>Contact Me</h2>
      </div>
      <div className="callme">
        <div className="calltext">Call Me</div>
        <div className="mobilenumber">
          <a href="#">+91 9403824889</a>
        </div>
      </div>
      <div className="emailme">
        <div className="emailtext">Email</div>
        <div className="email">
          <a href="#">ankar.pratik@gmail.com</a>
        </div>
      </div>
      <div className="address">
        <div className="addresstext">Address</div>
        <div className="fulladdress">
          <p>
            Samruddhi Isha, Pendse Colony, <br />
            Vikas Nagar, Kiwale, <br />
            Pimpri Chinchwad, Pune - 412101
          </p>
          {/* <a className="mapbtn" href="https://www.google.com/maps/@18.6666667,73.7345402,14z" target="_blank">
            <span>
              <FaLocationArrow className="locationarrow" />
            </span>
            Direction
          </a> */}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Contact;
