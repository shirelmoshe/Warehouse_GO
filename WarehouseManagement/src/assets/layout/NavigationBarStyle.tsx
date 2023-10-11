
import styled from '@emotion/styled';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
  height: 100px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  padding: 20px;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  margin-right: 100px;
  margin-left: 20px;

  &:hover {
    color: gray;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
