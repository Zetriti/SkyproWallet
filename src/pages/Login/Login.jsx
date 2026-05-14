import React, { useContext, useState } from "react";
import * as S from "../../components/styles/shared.styled";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { signIn } from "../../servives/auth";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiError, setApiError] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {
      email: !email.trim() || !validateEmail(email),
      password: !password.trim(),
    };
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const getValidationMessage = () => {
    if (errors.email || errors.password) {
      return "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    if (!validateForm()) return;

    setLoading(true);
    try {
      const data = await signIn({ email, password });
      const token = data.user?.token;
      if (token) {
        localStorage.setItem("user", JSON.stringify(data.user));
        login(token);
        navigate("/expenses");
      } else {
        setApiError(
          "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.",
        );
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setApiError(
        "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.",
      );
    } finally {
      setLoading(false);
    }
  };

  const errorMessage = apiError || getValidationMessage();

  return (
    <S.FormContainer>
      <S.Form onSubmit={handleSubmit}>
        <S.FormTitle>Вход</S.FormTitle>
        <S.Input
          type="email"
          placeholder="Эл. почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          $error={errors.email}
        />
        <S.Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          $error={errors.password}
        />
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <S.Button type="submit" disabled={loading}>
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
