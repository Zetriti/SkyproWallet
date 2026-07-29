// shared.styled.js
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f5f6;
  @media screen and (max-width: 495px) {
    background-color: #ffffff;
  }
`;

export const Form = styled.form`
  background-color: #ffffff;
  padding: 34px 32px;
  border-radius: 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 150px 16px;
  }
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
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
  @media (max-width: 495px) {
    display: none;
  }
`;

export const CardTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  padding: 32px 32px 0 32px;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  background-color: #ffffff;
  border: 0.5px solid #999999;
  color: #000000;
  transition: all 0.2s;
  outline: none;

  ${({ $error }) =>
    $error &&
    `
    background-color: #FFEBEB;
    border-color: #F25050;
  `}

  &:focus {
    border-color: #565eef;
  }
`;

export const ErrorAsterisk = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #f84d4d;
  font-size: 14px;
  font-weight: bold;
  pointer-events: none;
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
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 1;
  }
`;

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

export const FloatingButtonContainer = styled.div`
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

  @media (min-width: 496px) {
    display: none;
  }
`;

export const FloatingButton = styled.button`
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
