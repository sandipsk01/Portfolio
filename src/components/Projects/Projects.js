import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tracker from "../../Assets/Projects/tracker.png";
import uploader from "../../Assets/Projects/uploader.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tracker}
              isBlog={false}
              title="Habit Tracker"
              description="Developed an intuitive Habit Tracker application with a user-friendly interface.
              • The application offers a seamless experience for managing and tracking habits contributing to 20% improved habit adherence.
              • Tech Stack: EJS, CSS, JavaScript, Node.js, Express.js, MongoDB"
              ghLink="https://github.com/sandipsk01/Habit-Tracker"
              demoLink="https://habit-tracker-jyt6.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uploader}
              isBlog={false}
              title="CSV Uploader"
              description="The application offers an intuitive interface for efficient management of CSV files, supported by a backend
              processing system.
              • Users experience a simplified and time-saving method for handling data uploads.
              • Resulted in a 30% reduction in data processing time, improving overall user efficiency.
              • Tech Stack: EJS, CSS, JavaScript, Node.js, Express.js, MongoDB"
              ghLink="https://github.com/sandipsk01/CSV_UPLOAD_WEB_APP"
              demoLink="https://csv-upload-noo2.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="BuyBusy E-Com"
              description="Developed a feature-rich E-Commerce WebApp with advanced user authentication for secure account creation
              and login.
              • The app ensures a smooth shopping experience with a user-friendly interface, allowing seamless product
              exploration, account creation, and order management.
              • Tech Stack: JSX, CSS, JavaScript, React.js, Redux Toolkit, Firebase"
              ghLink="https://github.com/sandipsk01/BuyBusy_React_App"
              demoLink="https://buybusy-sk.netlify.app/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
