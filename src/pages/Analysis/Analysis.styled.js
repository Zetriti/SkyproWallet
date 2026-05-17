import styled from "styled-components";

export const AnalysisWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
export const AnalysisTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  white-space: nowrap;
  color: #000000;
  margin-bottom: 32px;
  margin-top: 36px;
`;

export const AnalysisBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  width: 100%;

  margin: 0 auto;
`;
export const AnalysisCalendar = styled.div`
  overflow: hidden;
  grid-column: span 4;
  height: 540px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const AnalysisGraph = styled.div`
  overflow: hidden;
  grid-column: span 8;
  height: 540px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
`;
