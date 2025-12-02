import styled from "styled-components";

export const HelloWorldStyle = styled.div`
  padding: 20px;

  .element {
    border: 2px solid black;
    border-collapse: collapse;
    width: 80%;
    margin: auto;
    background-color: white;
  }

  .element th,
  .element td {
    border: 2px solid black;
    padding: 10px;
    text-align: center;
  }

  .element th {
    background-color: lightgray;
  }
`;
