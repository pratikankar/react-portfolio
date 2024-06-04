import "./projectStyles.css";

function Project() {
  return (
    <div className="projects">
      <h2>I Worked On</h2>

      <div className="project-data">
        <h3>Patient Engagement Solution</h3>
        <h4>Duration: 1 year and 6 months</h4>
        <h4>Description: </h4>
        <p>
          This is healthcare application to engage patients and consumers which
          captures data for creating marketing campaigns, getting insights of
          the patients, and analysis of all the campaign data.
        </p>
        <h4>Technologies Used: </h4>
        <p>
          Angular 13, Bootstrap, JavaScript, Node.js, Express.js, Elasticsearch,
          AWS services
        </p>
      </div>

      <div className="project-data">
        <h3>Medevantage CRM</h3>
        <h4>Duration: 6 months</h4>
        <h4>Description: </h4>
        <p>
          This project provides end to end solution for Hospital call center
          department like creating call encounters, request medication refills,
          getting test results, fill form records, ask medical questions, etc.
        </p>
        <h4>Technologies Used: </h4>
        <p>Angular 13, Node.js, NestJS,</p>
      </div>

      <div className="project-data">
        <h3>PatientConnect360</h3>
        <h4>Duration: 2 months</h4>
        <h4>Description: </h4>
        <p>
          This is a web platform where user manages day to day life and health
          care as per plans subscribed.
        </p>
        <h4>Technologies Used: </h4>
        <p>Drupal</p>
      </div>

      <div className="project-data">
        <h3>Tennis Wizard</h3>
        <h4>Duration: 2 months</h4>
        <h4>Description: </h4>
        <p>
          This is a web platform where information regarding Tennis is given
          along with plans for physical fitness, mental preparation, etc. for
          the players.
        </p>
        <h4>Technologies Used: </h4>
        <p>Drupal</p>
      </div>
      <div className="project-data">
        <h3>My Portfolio</h3>
        <h4>Duration: 10 days</h4>
        <h4>Description: </h4>
        <p>
          This is a simple portfolio website which has information about me,
          projects I did, and contact details. It has further implementations
          like addding Tailwind CSS rather than using CSS3.
        </p>
        <h4>Technologies Used:</h4>
        <p>React.js, CSS</p>
      </div>
    </div>
  );
}

export default Project;
