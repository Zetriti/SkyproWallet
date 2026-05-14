// shared.styled.js
import styled from "styled-components";

export const FormContainer = styled.div`
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
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
`;

export const PageTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #000000;
  margin-bottom: 32px;
  margin-top: 36px;
`;

export const CardTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  padding: 32px 32px 0 32px;
`;

export const Input = styled.input`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border: 0.5px solid ${({ $error }) => ($error ? "#f84d4d" : "#999999")};
  border-radius: 6px;
  background-color: #ffffff;
  color: #000000;

  &:focus {
    border-color: #565eef;
    outline: none;
  }
`;

export const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
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

// Сообщение об ошибке
export const ErrorMessage = styled.p`
  margin-top: 10px;
  width: 100%;
  font-family: "Arial", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #f84d4d;
`;

export const HelperText = styled.p`
  text-align: center;
  color: #999999;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledLink = styled.a`
  color: #999999;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #565eef;
  }
`;
