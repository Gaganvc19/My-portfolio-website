import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import instalitelaptop from "../../Assets/Projects/instalitelaptop.png";
import udupihotellaptop from "../../Assets/Projects/udupihotellaptop.png";

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
              imgPath={udupihotellaptop}
              isBlog={false}
              title="Udupi Hotel Website."
              description="It's a food ordering website which is built using React-js and other React packages."
              ghLink="https://github.com/Gaganvc19/Udupi-Hotel-website/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instalitelaptop}
              isBlog={false}
              title="Instalite."
              description="It's a Blog website which is built using React-js and other React packages."
              ghLink="https://github.com/Gaganvc19/Instalite-website/tree/master"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
