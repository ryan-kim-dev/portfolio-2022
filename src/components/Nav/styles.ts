import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  font-family: 'Oswald', sans-serif;
  text-decoration: none;

  @media all and (max-width: 479px) {
  }
`;

export const NavLists = styled.ul`
  list-style: none;

  @media all and (max-width: 479px) {
  }
`;

export const NavItem = styled.li`
  margin: 10px;
  cursor: pointer;
  font-size: 20px;

  @media all and (max-width: 479px) {
    margin: 5px;
    font-size: 15px;
  }
`;
