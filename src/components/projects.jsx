import { ProjectSection, Card } from "./ProjectsStyle";

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <h2>Projects</h2>

      <Card>
        <h3>ALLAY</h3>
        <p>Mental health platform with CBT tools</p>
      </Card>

      <Card>
        <h3>SOULSYNC</h3>
        <p>Emotional wellness tracking system</p>
      </Card>

      <Card>
        <h3>HEARTIFY</h3>
        <p>AI ECG health monitoring system</p>
      </Card>
    </ProjectSection>
  );
};

export default Projects;
