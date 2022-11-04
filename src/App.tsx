import React, { useState, useRef, Suspense } from 'react';
import { scrollToSection } from './utils/scrollToSection';
import SectionTitle from './components/common/SectionTitle';

import GlobalStyle, { Layout } from './GlobalStyle';

// component
const Nav = React.lazy(() => import('./components/common/Nav'));

// pages
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const MainPage = React.lazy(() => import('./pages/MainPage'));
const WorksPage = React.lazy(() => import('./pages/WorksPage'));
const TestimonialPage = React.lazy(() => import('./pages/TestimonialPage'));
const ScrollToTop = React.lazy(() => import('./components/common/ScrollToTop'));
const ToggleTheme = React.lazy(() => import('./components/common/ToggleTheme'));
const Loading = React.lazy(() => import('./components/common/Loading'));

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const works = useRef(null);
  const testimonials = useRef(null);
  const contact = useRef(null);

  const [theme, setTheme] = useState<string>(`${localStorage.theme}`);

  const switchTheme = () => {
    return setTheme(localStorage.theme);
  };

  return (
    <Suspense fallback={<Loading />}>
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
          <MainPage />
        </Layout>
        <Layout about ref={about} max>
          <SectionTitle title="about me" />
          <AboutPage
            scrollToSection={scrollToSection}
            testimonials={testimonials}
          />
        </Layout>

        <Layout ref={works} max>
          <SectionTitle title="works" />
          <WorksPage />
        </Layout>
        <Layout ref={testimonials}>
          <SectionTitle title="testimonials" />
          <TestimonialPage />
        </Layout>
        <Layout ref={contact}>
          <SectionTitle title="contact" />
          <ContactPage />
        </Layout>
      </div>
    </Suspense>
  );
}

export default App;