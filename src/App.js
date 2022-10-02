import React, { useRef, Suspense } from 'react';
import { scrollToSection } from './utils/scrollToSection';
import GlobalStyle from './GlobalStyle';

// component
const Nav = React.lazy(() => import('./components/common/Nav'));
// pages
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Home = React.lazy(() => import('./pages/Home'));
const Works = React.lazy(() => import('./pages/Works'));
const Testimonials = React.lazy(() => import('./pages/Testimonials'));
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

        <div ref={home}>
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
    </Suspense>
  );
};

export default App;
