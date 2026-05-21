import React, { useContext, useState } from "react";
import * as S from "../../components/styles/shared.styled";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { signUp } from "../../services/auth";

const Register = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiError, setApiError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isNameValid = name.trim().length > 0;
  const isEmailValid = email.trim() && validateEmail(email);
  const isPasswordValid = password.trim().length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    const newErrors = {
      name: !isNameValid,
      email: !isEmailValid,
      password: !isPasswordValid,
    };
    setFieldErrors(newErrors);
    setSubmitted(true);

    if (newErrors.name || newErrors.email || newErrors.password) {
      return;
    }

    setLoading(true);
    try {
      const data = await signUp({ name, email, password });
      const token = data.user?.token;
      if (token) {
        localStorage.setItem("user", JSON.stringify(data.user));
        login(token);
        navigate("/");
      } else {
        setApiError("Неверный ответ сервера");
        setSubmitted(false);
        setFieldErrors({ name: false, email: false, password: false });
      }
    } catch (err) {
      setApiError(err.message);
      setSubmitted(false);
      setFieldErrors({ name: false, email: false, password: false });
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (field, value) => {
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    setApiError("");
    setSubmitted(false);
    setFieldErrors({ name: false, email: false, password: false });
  };

  const errorMessage =
    apiError ||
    (submitted &&
    (fieldErrors.name || fieldErrors.email || fieldErrors.password)
      ? "Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку."
      : "");

  const isButtonDisabled =
    loading ||
    (submitted &&
      (fieldErrors.name || fieldErrors.email || fieldErrors.password));

  return (
    <S.FormContainer>
      <S.Form onSubmit={handleSubmit}>
        <S.FormTitle>Регистрация</S.FormTitle>

        <S.InputWrapper>
          <S.Input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
            $error={fieldErrors.name}
          />
          {fieldErrors.name && <S.ErrorAsterisk>*</S.ErrorAsterisk>}
        </S.InputWrapper>

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
          {loading ? "Регистрация..." : "Зарегистрироваться"}
        </S.Button>

        <S.HelperText>
          Уже есть аккаунт?{" "}
          <S.StyledLink onClick={() => navigate("/login")}>
            Войдите здесь
          </S.StyledLink>
        </S.HelperText>
      </S.Form>
    </S.FormContainer>
  );
};

export default Register;
