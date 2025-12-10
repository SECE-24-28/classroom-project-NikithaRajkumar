import styled from "styled-components";

export const HeroStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 5%;
  background: #fff;

  .left {
    width: 50%;
  }

  .title {
    font-size: 58px;
    font-weight: bold;
    line-height: 1.2;
    margin: 0;
  }

  .title span {
    color: #e49a2f; /* highlight color matching your reference */
  }

  .subtitle {
    font-size: 20px;
    color: #444;
    margin: 25px 0 40px 0;
  }

  .btn-row {
    display: flex;
    gap: 20px;
  }

  .shop-btn {
    padding: 14px 32px;
    background: #111;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
  }

  .arrivals-btn {
    padding: 14px 32px;
    background: transparent;
    border: 2px solid #111;
    color: #111;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
  }

  .right {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .hero-img {
    width: 90%;
    border-radius: 30px;
    object-fit: cover;
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    flex-direction: column;

    .left,
    .right {
      width: 100%;
      text-align: center;
    }

    .hero-img {
      width: 100%;
      margin-top: 30px;
    }

    .title {
      font-size: 40px;
    }
  }
`;
