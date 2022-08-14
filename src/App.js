import React, { useState, useRef, Suspense, createContext } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
export const ThemeContext = createContext('light');
// pages
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Home = React.lazy(() => import('./pages/Home'));
const Works = React.lazy(() => import('./pages/Works'));
const Testimonials = React.lazy(() => import('./pages/Testimonials'));
const ScrollToTop = React.lazy(() => import('./components/common/ScrollToTop'));
const Loading = React.lazy(() => import('./components/common/Loading'));

const App = () => {
  const home = useRef(null);
  const about = useRef(null);
  const works = useRef(null);
  const testimonials = useRef(null);
  const contact = useRef(null);

  const scrollToSection = elementRef => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  // * 테마의 state
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <Suspense fallback={<Loading />}>
      <ThemeContext.Provider value={(theme, toggleTheme)}>
        <div className="App" id={theme}>
          <GlobalStyle />
          <ScrollToTop />
          <NavContainer>
            <NavLists className="nav">
              <NavItem onClick={() => scrollToSection(home)}>Home</NavItem>
              <NavItem onClick={() => scrollToSection(about)}>About</NavItem>
              <NavItem onClick={() => scrollToSection(works)}>Works</NavItem>
              <NavItem onClick={() => scrollToSection(testimonials)}>
                Testimonials
              </NavItem>
              <NavItem onClick={() => scrollToSection(contact)}>
                Contact
              </NavItem>
            </NavLists>
          </NavContainer>

          <div ref={home}>
            <ThemeChangeBtn
              className="theme-change"
              onClick={() => {
                toggleTheme();
              }}
            >
              Change Theme
            </ThemeChangeBtn>
            <Home />
          </div>
          <div ref={about}>
            <About />
          </div>

          <div ref={works}>
            <Works />
          </div>
          <div ref={testimonials}>
            <Testimonials />
          </div>
          <div ref={contact}>
            <Contact />
          </div>
        </div>
      </ThemeContext.Provider>
    </Suspense>
  );
};

export default App;

const ThemeChangeBtn = styled.div`
  font-family: 'Oswald', sans-serif;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  left: 50px;
  z-index: 1;
  background-color: transparent;
  width: 100px;
  height: 25px;
  border-bottom: 3px solid #414141;
  cursor: pointer;
`;

const NavContainer = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  font-family: 'Oswald', sans-serif;
  text-decoration: none;
  color: #414141;
  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }
  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    right: 100px;
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
