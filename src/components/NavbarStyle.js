import styled from "styled-components";

export const Nav = styled.nav`
  background: #111;
  color: white;
  padding: 15px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1``;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

export const MenuItem = styled.li``;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    color: #00bcd4;
  }
`;
