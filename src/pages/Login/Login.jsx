import React, { useContext, useState } from "react";
import * as S from "../../components/styles/shared.styled";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { signIn } from "../../services/auth";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiError, setApiError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    email: false,
    password: false,
  });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isEmailValid = email.trim() && validateEmail(email);
  const isPasswordValid = password.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    const newErrors = {
      email: !isEmailValid,
      password: !isPasswordValid,
    };
    setFieldErrors(newErrors);
    setSubmitted(true);

    if (newErrors.email || newErrors.password) {
      return;
    }

    setLoading(true);
    try {
      const data = await signIn({ email, password });
      const token = data.user?.token;
      if (token) {
        localStorage.setItem("user", JSON.stringify(data.user));
        login(token);
        navigate("/expenses");
      } else {
        setApiError("Неверный ответ сервера");
        setSubmitted(false);
        setFieldErrors({ email: false, password: false });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setApiError(
        "Введенные вами данные не распознаны. Проверьте логин и пароль.",
      );
      setSubmitted(false);
      setFieldErrors({ email: false, password: false });
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (field, value) => {
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    setApiError("");
    setSubmitted(false);
    setFieldErrors({ email: false, password: false });
  };

  const errorMessage =
    apiError ||
    (submitted && (fieldErrors.email || fieldErrors.password)
      ? "Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку."
      : "");

  const isButtonDisabled =
    loading || (submitted && (fieldErrors.email || fieldErrors.password));

  return (
    <S.FormContainer>
      <S.Form onSubmit={handleSubmit}>
        <S.FormTitle>Вход</S.FormTitle>

        <S.InputWrapper>
          <S.Input
            type="email"
            placeholder="Эл. почта"
            value={email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
            $error={fieldErrors.email}
          />
          {fieldErrors.email && <S.ErrorAsterisk>*</S.ErrorAsterisk>}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => handleFieldChange("password", e.target.value)}
            $error={fieldErrors.password}
          />
          {fieldErrors.password && <S.ErrorAsterisk>*</S.ErrorAsterisk>}
        </S.InputWrapper>

        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}

        <S.Button type="submit" disabled={isButtonDisabled}>
          {loading ? "Вход..." : "Войти"}
        </S.Button>

        <S.HelperText>
          Нужно зарегистрироваться?{" "}
          <S.StyledLink onClick={() => navigate("/register")}>
            Регистрируйтесь здесь
          </S.StyledLink>
        </S.HelperText>
      </S.Form>
    </S.FormContainer>
  );
};

export default Login;
