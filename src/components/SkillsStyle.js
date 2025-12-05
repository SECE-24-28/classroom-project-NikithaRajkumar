import styled from "styled-components";

export const SkillsSection = styled.section`
  padding: 60px 10%;
  background: #f5f5f5;
  text-align: center;
`;

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

export const SkillCard = styled.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
`;
