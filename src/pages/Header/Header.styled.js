import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderBlock = styled.div`
  height: 64px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  img {
    width: 143.68px;
    height: 19px;
  }
`;

export const HeaderNav = styled.nav`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 413px;

  a {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 23px;
    white-space: nowrap;
    text-align: center;
    color: #000000;
    &:hover {
      color: #7334ea;
    }
  }
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 48px;
`;

// Компонент для ссылок с активным состоянием
export const StyledNavLink = styled(NavLink)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  white-space: nowrap;
  text-align: center;
  color: #000000;
  text-decoration: none;

  &:hover {
    font-weight: 600;
    color: #7334ea;
  }

  &.active {
    font-weight: 600;
    color: #7334ea;
    text-decoration: underline;
  }
`;
