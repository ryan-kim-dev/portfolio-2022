import React, { useRef, Suspense } from 'react';
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
// const ScrollToTop = React.lazy(() => import('./components/common/ScrollToTop'));
const Loading = React.lazy(() => import('./components/common/Loading'));

const App = () => {
  const home = useRef(null);
  const about = useRef(null);
  const works = useRef(null);
  const testimonials = useRef(null);
  const contact = useRef(null);

  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <GlobalStyle />

        {/* <ScrollToTop /> */}
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
        <Layout about ref={about}>
          <SectionTitle title="about me" />
          <AboutPage />
        </Layout>

        <Layout ref={works}>
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
};

export default App;
