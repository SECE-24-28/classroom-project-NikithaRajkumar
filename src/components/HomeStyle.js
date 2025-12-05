import styled from "styled-components";

  export const HomeSection = styled.section`
  width: 100vw;       ✅ FORCE FULL SCREEN WIDTH
  min-height: 100vh; ✅ FULL SCREEN HEIGHT

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #f2f2f2;
  text-align: center;
`;


export const Title = styled.h2`
  font-size: 36px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin: 10px 0 20px;
`;

export const Button = styled.button`
  padding: 10px 25px;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
`;
