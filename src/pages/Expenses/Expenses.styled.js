import styled from "styled-components";

export const ExpensesWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const ExpensesTitle = styled.div`
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

export const ExpensesBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 495px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    height: 100%;
  }
`;

export const ExpenseTable = styled.div`
  overflow: hidden;
  grid-column: span 8;
  height: 618px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);

  @media (max-width: 495px) {
    grid-column: span 4;
    height: 100%;
    box-shadow: none;
    border-radius: 0;
  }
`;

export const TableTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  white-space: nowrap;
  color: #000000;
  //margin-bottom: 32px;
  padding: 32px;
  @media (max-width: 495px) {
    display: flex;
    padding: 22px 16px 24px 16px;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const MobileAddButton = styled.button`
  width: 112px;
  height: 18px;
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
  text-align: center;
  align-items: center;
  color: #000000;
  background: transparent;
  border: none;

  img {
    width: 14px;
    height: 14px;

    margin: 2px 6px 2px 0px;
  }
`;

export const Table = styled.div``;

export const ColumnName = styled.div`
  display: flex;
  gap: 32px;
  border-bottom: 0.5px solid #999999;
  padding-left: 32px;
  padding-bottom: 6px;
  @media (max-width: 495px) {
    padding-left: 16px;
    padding-right: 16px;
    gap: 16px;
    justify-content: space-between;
  }
`;

export const TableHeader = styled.div`
  height: 15px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  white-space: nowrap;
  align-items: center;
  color: #999999;
  @media screen and (max-width: 495px) {
    display: none;
  }
`;

export const TableHeaderMobyle = styled.div`
  height: 12px;
  width: 74px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  white-space: nowrap;
  align-items: center;
  color: #999999;
  @media screen and (min-width: 495px) {
    display: none;
  }
`;

export const TableHeaderMobyleLeft = styled.div`
  display: flex;
  gap: 16px;
  @media screen and (min-width: 495px) {
    display: none;
  }
`;
export const TableHeaderMobyleRight = styled.div`
  display: flex;
  gap: 16px;
  text-align: right;
  @media screen and (min-width: 495px) {
    display: none;
  }
`;
export const ColumnBody = styled.div`
  padding-left: 32px;
  padding-right: 34px;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (max-width: 495px) {
    padding-left: 16px;
    padding-right: 16px;
    gap: 16px;
  }
`;
export const DeleteExpenseButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -20px 67px -12px rgba(0, 0, 0, 0.13);
  padding: 20px 16px;
  z-index: 10;
  display: flex;
  justify-content: center;
  @media (min-width: 495px) {
    position: sticky;
    bottom: 20px;
    width: auto;
    margin-top: 20px;
    box-shadow: none;
    background: transparent;
  }
`;

export const DeleteExpenseButton = styled.button`
  width: 100%;
  max-width: 375px;
  height: 39px;
  background: #7334ea;
  border: none;
  border-radius: 6px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #565eef;
  }
`;

export const TableRow = styled.div`
  display: flex;
  gap: 32px;
  padding-right: 16px;
  cursor: pointer;
  transition: background 0.2s;
  background: ${({ $isSelected }) => ($isSelected ? "#f1ebfd" : "transparent")};

  &:hover {
    background: #f1ebfd;
  }

  @media (max-width: 495px) {
    padding-right: 0px;
    gap: 16px;
    justify-content: space-between;
  }
`;
export const TableCell = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  white-space: nowrap;
  color: #000000;

  @media (max-width: 495px) {
    display: none;
  }
`;

export const TableCellMobile = styled.div`
  width: 74px;
  height: 12px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  white-space: nowrap;
  color: #000000;

  @media (min-width: 495px) {
    display: none;
  }
`;
export const TableCellMobileLeft = styled.div`
  display: flex;
  gap: 16px;
  @media screen and (min-width: 495px) {
    display: none;
  }
`;
export const TableCellMobileRight = styled.div`
  display: flex;
  gap: 16px;
  text-align: right;
  @media screen and (min-width: 495px) {
    display: none;
  }
`;
export const ActionButton = styled.button`
  border: none;
  background-color: transparent;
  @media (max-width: 495px) {
    display: none;
  }
`;

export const NewExpense = styled.div`
  overflow: hidden;
  grid-column: span 4;
  min-height: 618px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  padding: 32px;
  @media (max-width: 495px) {
    box-shadow: none;
    border-radius: 0;
    padding: 24px 16px;
  }
`;

export const NewExpenseTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  white-space: nowrap;
  color: #000000;
  padding-bottom: 24px;
`;

export const MobileBackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  margin-bottom: 12px;
  padding: 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
  text-align: center;
  align-items: center;
  color: #999999;
  img {
    width: 14px;
    height: 14px;
  }

  @media (min-width: 495px) {
    display: none;
  }
`;

export const SmallHeadline = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  white-space: nowrap;
  color: #000000;
  padding-bottom: 16px;
`;

export const Categories = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;
// Expenses.styled.js
export const CategoriesName = styled.button`
  padding: 8px 20px 8px 46px;
  border-radius: 30px;
  background: ${({ $isActive }) => ($isActive ? "#F1EBFD" : "#F4F5F6")};
  border: none;
  position: relative;
  cursor: pointer;
  color: ${({ $isActive }) => ($isActive ? "#7334EA" : "#000000")};
  transition: all 0.2s;

  p {
    margin: 0;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    white-space: nowrap;
    color: inherit;
  }

  img {
    position: absolute;
    top: 8.5px;
    left: 20px;
    filter: ${({ $isActive }) =>
      $isActive
        ? "invert(19%) sepia(97%) saturate(2823%) hue-rotate(261deg) brightness(92%) contrast(92%)"
        : "none"};
    transition: filter 0.2s;
  }
`;

export const ErrorAsteriskHeader = styled.span`
  color: #f25050;
  font-size: 14px;
  font-weight: bold;
`;

export const AddExpenseButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -20px 67px -12px rgba(0, 0, 0, 0.13);
  padding: 20px 16px;
  z-index: 10;
  display: flex;
  justify-content: center;
  @media (min-width: 451px) {
    display: none;
  }
`;

export const AddExpenseButton = styled.button`
  width: 100%;
  max-width: 375px;
  height: 39px;
  background: #7334ea;
  border: none;
  border-radius: 6px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #565eef;
  }
`;
