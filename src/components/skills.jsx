import { SkillsSection, SkillGrid, SkillCard } from "./SkillsStyle";

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <h2>My Skills</h2>

      <SkillGrid>
        <SkillCard>C</SkillCard>
        <SkillCard>C++</SkillCard>
        <SkillCard>Python</SkillCard>
        <SkillCard>Java</SkillCard>
        <SkillCard>HTML</SkillCard>
        <SkillCard>CSS</SkillCard>
        <SkillCard>JavaScript</SkillCard>
        <SkillCard>React</SkillCard>
      </SkillGrid>
    </SkillsSection>
  );
};

export default Skills;
