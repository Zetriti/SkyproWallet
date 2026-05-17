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
`;

export const ExpenseTable = styled.div`
  overflow: hidden;
  grid-column: span 8;
  height: 618px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
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
`;

export const Table = styled.div``;

export const ColumnName = styled.div`
  display: flex;
  gap: 32px;
  border-bottom: 0.5px solid #999999;
  padding-left: 32px;
  padding-bottom: 6px;
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
`;

export const ColumnBody = styled.div`
  padding-left: 32px;
  padding-right: 34px;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const TableRow = styled.div`
  display: flex;
  gap: 32px;
`;
export const TableCell = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  white-space: nowrap;
  color: #000000;
`;

export const ActionButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const NewExpense = styled.div`
  overflow: hidden;
  grid-column: span 4;
  min-height: 618px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  padding: 32px;
`;

export const NewExpenseTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  white-space: nowrap;
  color: #000000;
  padding-bottom: 23px;
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
