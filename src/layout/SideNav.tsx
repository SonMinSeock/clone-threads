import React from "react";
import styled from "styled-components";
import { FaHome, FaSearch, FaPlusCircle, FaBell, FaUser } from "react-icons/fa";

const menuItems = [
  { icon: <FaHome />, label: "홈" },
  { icon: <FaSearch />, label: "검색" },
  { icon: <FaPlusCircle />, label: "작성" },
  { icon: <FaBell />, label: "알림" },
  { icon: <FaUser />, label: "프로필" },
];

function SideNav() {
  return (
    <Wrapper>
      <Logo>⌁</Logo>
      <Nav>
        {menuItems.map((item, index) => (
          <NavItem key={index}>
            {item.icon}
            <span>{item.label}</span>
          </NavItem>
        ))}
      </Nav>
    </Wrapper>
  );
}

export default SideNav;

const Wrapper = styled.nav`
  display: none;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 56px; /* TopNav height */
    height: calc(100vh - 56px);
    padding: 20px;
    gap: 24px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 16px;
  color: #333;

  &:hover {
    color: #000;
    font-weight: 600;
  }

  svg {
    font-size: 20px;
  }
`;
