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
export const DescriptionInput = styled.input`
  width: 100%;
  height: 38.63px;
  border-radius: 6px;
  border: 0.5px solid #999999;
  margin-bottom: 24px;
  padding: 12px;
`;
export const Categories = styled.div`
  display: flex;
  column-gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;
export const CategoriesName = styled.button`
  padding: 8px 20px 8px 46px;
  border-radius: 30px;
  background: #f4f5f6;
  border: none;
  position: relative;

  p {
    height: 15px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    white-space: nowrap;
    text-align: left;
    align-items: left;
    color: #000000;
  }
`;
export const DataInput = styled.input`
  width: 100%;
  height: 38.63px;
  border-radius: 6px;
  border: 0.5px solid #999999;
  margin-bottom: 24px;
  padding: 12px;
`;
export const SumInput = styled.input`
  width: 100%;
  height: 38.63px;
  border-radius: 6px;
  border: 0.5px solid #999999;
  margin-bottom: 24px;
  padding: 12px;
`;
export const AddButton = styled.button`
  width: 100%;
  height: 39px;
  border-radius: 6px;
  background: #7334ea;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  white-space: nowrap;
  text-align: center;
  align-items: center;
  color: #ffffff;
  border: none;
`;
