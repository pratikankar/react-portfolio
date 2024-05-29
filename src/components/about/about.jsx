import "./aboutStyles.css";

function About({ aboutData }) {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>{aboutData}</p>
    </div>
  );
}

export default About;
