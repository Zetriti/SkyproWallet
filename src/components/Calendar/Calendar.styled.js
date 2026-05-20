import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 379px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  border-radius: 30px;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CalendarHeader = styled.div`
  padding: 32px 32px 0 32px;
`;

export const CalendarTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin: 0;
`;

export const StickyWeekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: #ffffff;
  padding: 24px 24px 8px 24px;
  border-bottom: 0.5px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 2;
  margin-bottom: 24px;
`;

export const Weekday = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  white-space: nowrap;
  text-align: center;
  align-items: center;
  color: #999999;
`;

export const ScrollableBody = styled.div`
  max-height: 540px;
  overflow-y: auto;
  padding: 0 24px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 30px;
  }
  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 30px;
  }
`;

export const MonthBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MonthTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
`;

export const DayCell = styled.button`
  aspect-ratio: 1 / 1;
  display: flex;

  justify-content: center;
  border: none;
  border-radius: 60px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  transition: all 0.2s ease;
  font-family: "Montserrat";
  font-style: normal;
  line-height: 14px;
  white-space: nowrap;
  text-align: center;
  align-items: center;
  color: #000000;

  background: ${({ $isActive, $isInRange, $isOtherMonth }) =>
    $isActive
      ? "#7334EA"
      : $isInRange
        ? "#F1EBFD"
        : $isOtherMonth
          ? "transparent"
          : "#F4F5F6"};

  color: ${({ $isActive }) => ($isActive ? "#FFFFFF" : "#000000")};

  cursor: ${({ $isOtherMonth }) => ($isOtherMonth ? "default" : "pointer")};

  &:hover {
    background: ${({ $isOtherMonth, $isActive }) =>
      !$isOtherMonth && !$isActive ? "#E2D3FF" : ""};
  }
`;

export const CalendarFooter = styled.div`
  padding: 16px 24px 24px 24px;
  border-top: 0.5px solid #e0e0e0;
`;

export const SelectedPeriodText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #94a6be;
  margin: 0;

  span {
    color: #000000;
  }
`;
