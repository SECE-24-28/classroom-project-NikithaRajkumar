import styled from "styled-components";
export const TrustedByStyle = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
  .parent {
    display: flex;
    justify-content: space-evenly;
    flex-wrap:wrap
    gap: ${(props)=>props.gap};
  }
  .numbers {
    text-align: center;
    font-size: ${(props)=>props.numberSize};
    font-weight: 700;
    color: ${(props)=>props.numbersColor};
  }
  .details {
    text-align: center;
    font-size: ${(props) => props.detailSize};
    color: ${(props) => props.detailColor};
    font-weight: 500;
  }
  .child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
    width: 230px;
    height: 200px;
  }
`;
