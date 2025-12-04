import styled from "styled-components";
export const ImpactAtGlanceStyle = styled.div`
  width: 100%;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  background: #fff;

  .parent {
    width: 90%;
    max-width: 1200px;
  }

  h2 {
    text-align: center;
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 60px;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
  }

  .card {
    border-radius: 20px;
    padding: 20px 28px;
    min-height: 100px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: flex-start;
    gap:2px;
  }

  .details {
    font-size: 19px;
    margin:0;
    padding:0;
    padding-top:20px;
    line-height:1.1;
  }

  .numbers{
    font-size: 32px;
    margin:0;
    padding:0;
    line-height:1.1;
    font-weight: bold;
    padding-bottom:10px;
  }

  /* Colors */
  .pink {
    background: #fde7eb;
  }

  .blue {
    background: #eaf4ff;
  }

  .green {
    background: #eafff1;
  }

  .orange {
    background: #fff1d9;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .row {
      grid-template-columns: 1fr;
    }

    h2 {
      font-size: 32px;
    }

    .card h5 {
      font-size: 28px;
    }
  }
`;
