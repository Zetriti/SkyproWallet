import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./Header.styled";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, logout } = useContext(AuthContext);
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <S.HeaderWrapper>
      <div className="container">
        <S.HeaderBlock>
          <S.HeaderLogo>
            <Link to="/">
              <img src="/images/Logo.svg" alt="logo" />
            </Link>
          </S.HeaderLogo>

          {token && !isAuthPage && (
            <S.HeaderNav>
              <S.NavContainer>
                <S.StyledNavLink to="/expenses">Мои расходы</S.StyledNavLink>
                <S.StyledNavLink to="/analysis">
                  Анализ расходов
                </S.StyledNavLink>
              </S.NavContainer>
              <S.StyledNavLink to="/login" onClick={handleLogout}>
                Выйти
              </S.StyledNavLink>
            </S.HeaderNav>
          )}
        </S.HeaderBlock>
      </div>
    </S.HeaderWrapper>
  );
};

export default Header;
