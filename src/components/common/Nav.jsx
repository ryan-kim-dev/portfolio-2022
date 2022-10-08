import React from 'react';
import styled from 'styled-components';

function Nav({ scrollToSection, home, about, works, testimonials, contact }) {
  return (
    <NavContainer>
      <NavLists className="nav">
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
  color: #e5e5e5;
  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }
  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
  }
`;

const NavLists = styled.ul`
  list-style: none;
  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }
  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
`;

const NavItem = styled.li`
  margin: 10px;
  cursor: pointer;
  font-size: 20px;
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }
  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    margin: 5px;
    font-size: 15px;
  }
`;
