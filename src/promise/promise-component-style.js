import styled from "styled-components";

export const PromiseStyle = styled.div`
  width: 100%;
  padding: 80px 20px;
  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 1200px;
  }


  .title {
    font-weight: 700;
    font-size: 48px;
    text-align: center;
    margin-bottom: 10px;
  }

  .subtitle {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    color: rgb(86, 102, 131);
    margin-bottom: 60px;
    padding: 0 10px;
  }


  .element {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }


  .sub-element {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    border-top: 4px solid;
    background: #ffffff;
  }


  .sub-element:nth-child(1) { border-top-color: #2bb0a8; }
  .sub-element:nth-child(2) { border-top-color: #f4b040; }
  .sub-element:nth-child(3) { border-top-color: #00b2ff; }
  .sub-element:nth-child(4) { border-top-color: #7c4dff; }
  .sub-element:nth-child(5) { border-top-color: #ff2b3a; }
  .sub-element:nth-child(6) { border-top-color: #24c768; }


  .item {
    font-size: 20px;
    font-weight: 700;
    color: #6b6b6b;
    display: flex;
    align-items: center;
    gap: 10px;
  }


  .item-content {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    color: rgb(86, 102, 131);
  }


  @media (max-width: 900px) {
    .element {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    .title {
      font-size: 38px;
    }

    .subtitle {
      font-size: 16px;
      margin-bottom: 40px;
    }
  }

  @media (max-width: 600px) {
    .element {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .title {
      font-size: 32px;
    }

    .subtitle {
      font-size: 15px;
    }

    .item {
      font-size: 18px;
    }

    .item-content {
      font-size: 15px;
    }

    .sub-element {
      padding: 20px;
    }
  }
`;
