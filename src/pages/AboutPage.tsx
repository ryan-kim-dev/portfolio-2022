import React from 'react';
import About from '../components/About';
import { scrollToSection } from '../utils/scrollToSection';

interface Props {
  scrollToSection: (elementRef: {
    current: { offsetTop: number | undefined };
  }) => void;
  testimonials: unknown; // MutableRefObject<null>
}

function AboutPage({ testimonials }: Props) {
  return (
    <>
      <About scrollToSection={scrollToSection} testimonials={testimonials} />
    </>
  );
}
export default AboutPage;
