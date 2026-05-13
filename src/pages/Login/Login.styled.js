import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f5f6;
`;

export const Form = styled.form`
  background-color: #ffffff;
  padding: 34px 32px;
  border-radius: 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.6px;
    color: #000000;
  }
`;

export const Input = styled.input`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border: 0.5px solid ${({ $error }) => ($error ? "#f84d4d" : "#999999")};
  border-radius: 6px;
  background-color: #ffffff;
  color: #000000;
  &:focus {
    border-color: #565eef;
  }
`;

export const Button = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  white-space: nowrap;
  text-align: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  color: white;
  border: none;
  margin-top: 12px;
  margin-bottom: 24px;
  height: 39px;
  border-radius: 6px;
  background: #7334ea;
  cursor: pointer;
  &:hover {
    background-color: #565eef;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const P = styled.p`
  text-align: center;
  color: #999999;
  height: 40px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledLink = styled.a`
  color: #999999;
  text-decoration: underline;
  cursor: pointer;

  &:visited {
    color: #94a6be66;
  }

  &:hover {
    color: #565eef;
  }

  &:active {
    color: #94a6be66;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 10px;
  width: 100%;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  white-space: wrap;
  text-align: center;
  color: #f84d4d;
`;
