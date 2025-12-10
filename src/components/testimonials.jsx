import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "./cart";

const Container = styled.div`
  width: 85vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  padding: 2.5rem;
  transition: all 0.7s;
  border-radius: 0.375rem;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    width: 700px;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  font-size: 1.875rem;
  margin-top: 2.5rem;
  gap: 0.75rem;
  color: #a78bfa;
  font-weight: 700;
`;

const NavButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: inherit;
  display: flex;
  align-items: center;

  &:hover {
    color: #8b5cf6;
  }
`;

const SurpriseButtonContainer = styled.div`
  margin-top: 1.5rem;
`;

const SurpriseButton = styled.button`
  background-color: #a78bfa;
  cursor: pointer;
  padding: 0.5rem 2.5rem;
  border-radius: 0.375rem;
  font-weight: 700;
  color: white;
  font-size: 1.125rem;
  border: none;
  transition: all 0.2s;

  &:hover {
    background-color: #8b5cf6;
  }
`;

const Testimonials = ({ reviews }) => {
  const [index, setIndex] = useState(0);


  function leftShiftHandler() {
    setIndex(index === 0 ? reviews.length - 1 : index - 1);
  }


  function rightShiftHandler() {
    setIndex(index === reviews.length - 1 ? 0 : index + 1);
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index)
      randomIndex = (index + 1) % reviews.length;

    setIndex(randomIndex);
  }

  return (
    <Container>
      <Card review={reviews[index]} />

      <NavigationContainer>
        <NavButton onClick={leftShiftHandler}>
          <FiChevronLeft />
        </NavButton>

        <NavButton onClick={rightShiftHandler}>
          <FiChevronRight />
        </NavButton>
      </NavigationContainer>

      <SurpriseButtonContainer>
        <SurpriseButton onClick={surpriseHandler}>
          Surprise Me
        </SurpriseButton>
      </SurpriseButtonContainer>
    </Container>
  );
};

export default Testimonials;
