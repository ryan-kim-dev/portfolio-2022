import React from 'react';
import About from '../components/About';

function AboutPage({ scrollToSection, testimonials }) {
  return (
    <>
      <About scrollToSection={scrollToSection} testimonials={testimonials} />
    </>
  );
}
export default AboutPage;
