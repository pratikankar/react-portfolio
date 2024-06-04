import "./certiStyles.css";

function Certifications() {
  return (
    <div className="certifications">
      <h2>Certifications</h2>
      <div className="certs">
      <ul>
        <li>
          <h3>Completed:</h3>
          <ul className="inner">
            <li>Certification Program in JavaScript Essentials (ITM, Lets Upgrade, NSDC)</li>
            <li>The Complete TypeScript Programming Guide for Web Developers (Eduonix)</li>
            <li>Angular Core Deep Dive Course (Eduonix)</li>
            <li>MongoDB Node.js Developer Path (MongoDB)</li>
            <li>MongoDB: Beginners to Professionals (Eduonix)</li>
          </ul>
        </li>
          <h3>Current Pursuits:</h3>
          <ul className="inner">
            <li>AWS EC2 – Be the best (Udemy)</li>
          </ul>
      </ul>
      </div>
    </div>
  );
}

export default Certifications;
