import React, { useState, useRef } from 'react';
import { scrollToSection } from './utils/scrollToSection';

import GlobalStyle, { Layout } from './GlobalStyle';

// component
import SectionTitle from './components/common/SectionTitle';
import Nav from './components/common/Nav';
import Testimonials from './pages/Testimonials';
import ScrollToTop from './components/common/ScrollToTop';
import ToggleTheme from './components/common/ToggleTheme';

// pages
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Works from './pages/Works';

function App() {
  const home = useRef() as React.MutableRefObject<HTMLDivElement>;
  const about = useRef() as React.MutableRefObject<HTMLDivElement>;
  const works = useRef() as React.MutableRefObject<HTMLDivElement>;
  const testimonials = useRef() as React.MutableRefObject<HTMLDivElement>;
  const contact = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [theme, setTheme] = useState(`${localStorage.theme}`);

  const switchTheme = () => {
    return setTheme(localStorage.theme);
  };

  return (
    <div className="App" id={theme}>
      <GlobalStyle />
      <ToggleTheme
        theme={theme}
        setTheme={setTheme}
        switchTheme={switchTheme}
      />
      <ScrollToTop />
      {window.screen.width > 479 && (
        <Nav
          scrollToSection={scrollToSection}
          home={home}
          about={about}
          works={works}
          testimonials={testimonials}
          contact={contact}
        />
      )}

      <Layout ref={home}>
        <Main />
      </Layout>
      <Layout about="true" ref={about} max="true">
        <SectionTitle title="about me" />
        <About scrollToSection={scrollToSection} testimonials={testimonials} />
      </Layout>
      <Layout ref={works} max="true">
        <SectionTitle title="works" />
        <Works />
      </Layout>
      <Layout ref={testimonials}>
        <SectionTitle title="testimonials" />
        <Testimonials />
      </Layout>
      <Layout ref={contact}>
        <SectionTitle title="contact" />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
