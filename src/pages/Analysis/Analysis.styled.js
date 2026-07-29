import styled from "styled-components";

export const AnalysisWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 0;
  @media (max-width: 495px) {
    background: #ffffff;
    padding-bottom: 87px;
  }
`;

export const AnalysisBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 495px) {
    display: block;
  }
`;

export const AnalysisCalendar = styled.div`
  overflow: hidden;
  grid-column: span 4;
  height: 540px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  @media (max-width: 495px) {
    display: none;
  }
`;

export const AnalysisGraph = styled.div`
  overflow: hidden;
  grid-column: span 8;
  height: 540px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  @media (max-width: 495px) {
    width: 100%;
    height: auto;
    min-height: 500px;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const MobileBackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  margin: 24px 0 12px 16px;
  padding: 0;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #999999;
  img {
    width: 14px;
    height: 14px;
  }
`;
