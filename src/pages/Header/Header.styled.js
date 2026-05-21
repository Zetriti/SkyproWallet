import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 100;
  @media (max-width: 495px) {
    background: #f4f5f6;
  }
`;

export const HeaderBlock = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 10px;
  @media (max-width: 495px) {
    padding: 0 16px;
    height: 54px;
  }
`;

export const HeaderLogo = styled.div`
  img {
    width: 143.68px;
    height: 19px;
    @media (max-width: 495px) {
      width: 109px;
      height: 14px;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  color: #000000;

  &:hover {
    font-weight: 600;
    color: #7334ea;
  }

  &.active {
    font-weight: 600;
    color: #7334ea;
    border-bottom: 1px solid #7334ea;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 48px;
`;

export const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 413px;

  @media (max-width: 495px) {
    display: none;
  }
`;

export const MobileNav = styled.div`
  display: none;
  align-items: center;
  gap: 20px;
  @media (max-width: 495px) {
    display: flex;
  }
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;

  .menu-text {
    font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
    color: ${({ $isActive }) => ($isActive ? "#7334ea" : "#000000")};
    border-bottom: ${({ $isActive }) =>
      $isActive ? "1px solid #7334ea" : "none"};
  }

  &:hover .menu-text {
    font-weight: 600;
    color: #7334ea;
  }
`;

export const ArrowIcon = styled.img`
  width: 6px;
  height: 5.25px;
  transition: transform 0.2s;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const MobileNavLink = styled(NavLink)`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
  text-decoration: none;

  &:hover {
    font-weight: 600;
    color: #7334ea;
  }
`;

export const MobileDropdown = styled.div`
  position: absolute;
  align-items: flex-start;
  top: calc(100% + 8px);
  right: 0;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  border: 0.5px solid #999999;
  z-index: 200;
  display: flex;
  flex-direction: column;
  min-width: 140px;
  overflow: hidden;
  padding: 10px;
  gap: 6px;
`;

export const MobileDropdownLink = styled(NavLink)`
  display: inline-flex;
  padding: 7px 14px;
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  line-height: 12px;
  text-decoration: none;
  background-color: #f4f5f6;
  color: #000000;
  border-radius: 24px;
  font-weight: 400;

  white-space: nowrap;
  transition:
    background 0.2s,
    color 0.2s;

  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }

  &:hover {
    background-color: #e2d3ff;
    color: #7334ea;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
   
    background-color: #f1ebfd;
    color: #7334ea;
    font-weight: 400;
  `}
`;
