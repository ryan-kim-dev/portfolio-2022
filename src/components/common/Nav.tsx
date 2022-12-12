import React from 'react';
import styled from 'styled-components';

type NavProps = {
  scrollToSection: (elementRef: {
    current: {
      offsetTop: number | undefined;
    };
  }) => void;
  home: React.MutableRefObject<HTMLDivElement>;
  about: React.MutableRefObject<HTMLDivElement>;
  works: React.MutableRefObject<HTMLDivElement>;
  testimonials: React.MutableRefObject<HTMLDivElement>;
  contact: React.MutableRefObject<HTMLDivElement>;
};

function Nav({
  scrollToSection,
  home,
  about,
  works,
  testimonials,
  contact,
}: NavProps) {
  return (
    <NavContainer>
      <NavLists className="reverse">
        <NavItem onClick={() => scrollToSection(home)}>Home</NavItem>
        <NavItem onClick={() => scrollToSection(about)}>About</NavItem>
        <NavItem onClick={() => scrollToSection(works)}>Works</NavItem>
        <NavItem onClick={() => scrollToSection(testimonials)}>
          Testimonials
        </NavItem>
        <NavItem onClick={() => scrollToSection(contact)}>Contact</NavItem>
      </NavLists>
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  font-family: 'Oswald', sans-serif;
  text-decoration: none;

  @media all and (max-width: 479px) {
  }
`;

const NavLists = styled.ul`
  list-style: none;

  @media all and (max-width: 479px) {
  }
`;

const NavItem = styled.li`
  margin: 10px;
  cursor: pointer;
  font-size: 20px;

  @media all and (max-width: 479px) {
    margin: 5px;
    font-size: 15px;
  }
`;
