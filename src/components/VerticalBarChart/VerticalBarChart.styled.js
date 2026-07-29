import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 100%;
  height: 540px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  border-radius: 30px;
  padding: 32px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 495px) {
    height: auto;
    padding: 24px 16px;
    box-shadow: none;
    background: #ffffff;
  }
`;

export const Header = styled.div`
  margin-bottom: 24px;
`;

export const ChartTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 24px;
`;

export const Total = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 12px;
`;

export const DateRange = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #999999;

  span {
    font-weight: 600;
  }
`;

export const BarsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 32px;
  margin-top: 16px;

  @media (max-width: 495px) {
    gap: 6px;
    flex-wrap: wrap;
  }
`;

export const BarColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  width: 94px;

  @media (max-width: 495px) {
    width: 52px;
    gap: 10px;
  }
`;

export const Amount = styled.div`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  white-space: nowrap;
  @media (max-width: 495px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const Bar = styled.div`
  width: 94px;
  border-radius: 12px;
  background-color: ${({ color }) => color};
  height: ${({ height }) => height}px;

  @media (max-width: 495px) {
    width: 52px;
    border-radius: 6px;
  }
`;

export const Label = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #000000;
  white-space: normal;
  overflow: visible;
  text-overflow: clip;

  @media (max-width: 495px) {
    max-width: 52px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
