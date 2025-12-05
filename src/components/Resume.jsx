import { ResumeSection, ResumeFrame } from "./ResumeStyle";

const Resume = () => {
  return (
    <ResumeSection id="resume">
      <ResumeFrame src="/resume.pdf" title="Resume" />
    </ResumeSection>
  );
};

export default Resume;
