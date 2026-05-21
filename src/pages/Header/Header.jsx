import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./Header.styled";
import { AuthContext } from "../../context/AuthContext";
import { useSearchParams } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [searchParams] = useSearchParams();
  const isExpensesPage = location.pathname === "/expenses";
  const isAnalysisPage = location.pathname === "/analysis";
  const mobileActiveLabel = isExpensesPage
    ? searchParams.get("view") === "new"
      ? "Новый расход"
      : "Мои расходы"
    : isAnalysisPage
      ? "Анализ расходов"
      : "Мои расходы";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <S.HeaderWrapper>
      <div className="container">
        <S.HeaderBlock>
          <S.HeaderLogo>
            <Link to="/">
              <img src="/images/Logo.svg" alt="logo" />
            </Link>
          </S.HeaderLogo>

          <S.DesktopNav>
            <S.NavContainer>
              <S.StyledNavLink to="/expenses">Мои расходы</S.StyledNavLink>
              <S.StyledNavLink to="/analysis">Анализ расходов</S.StyledNavLink>
            </S.NavContainer>
            <S.StyledNavLink to="/login" onClick={handleLogout}>
              Выйти
            </S.StyledNavLink>
          </S.DesktopNav>

          <S.MobileNav>
            <div style={{ position: "relative" }}>
              <S.MobileMenuButton
                onClick={toggleMobileMenu}
                $isActive={
                  location.pathname === "/expenses" ||
                  location.pathname === "/analysis"
                }
              >
                <span className="menu-text">{mobileActiveLabel}</span>
                <S.ArrowIcon
                  src="/images/Arrow.svg"
                  alt=""
                  $isOpen={isMobileMenuOpen}
                />
              </S.MobileMenuButton>
              {isMobileMenuOpen && (
                <S.MobileDropdown ref={mobileMenuRef}>
                  <S.MobileDropdownLink
                    as="div"
                    onClick={() => {
                      navigate("/expenses?view=expenses");
                      closeMobileMenu();
                    }}
                    $isActive={
                      location.pathname === "/expenses" &&
                      searchParams.get("view") !== "new"
                    }
                  >
                    Мои расходы
                  </S.MobileDropdownLink>
                  <S.MobileDropdownLink
                    as="div"
                    onClick={() => {
                      navigate("/expenses?view=new");
                      closeMobileMenu();
                    }}
                    $isActive={
                      location.pathname === "/expenses" &&
                      searchParams.get("view") === "new"
                    }
                  >
                    Новый расход
                  </S.MobileDropdownLink>
                  <S.MobileDropdownLink
                    as="div"
                    onClick={() => {
                      navigate("/analysis");
                      closeMobileMenu();
                    }}
                    $isActive={location.pathname === "/analysis"}
                  >
                    Анализ расходов
                  </S.MobileDropdownLink>
                </S.MobileDropdown>
              )}
            </div>
            <S.MobileNavLink to="/login" onClick={handleLogout}>
              Выйти
            </S.MobileNavLink>
          </S.MobileNav>
        </S.HeaderBlock>
      </div>
    </S.HeaderWrapper>
  );
};

export default Header;
