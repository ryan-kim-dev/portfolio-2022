import React from 'react';
import MessageLists from '../components/Testimonials/MessageLists';

// import Links from '../components/testimonials/Links';
import { Container } from '../GlobalStyle';

function TestimonialPage() {
  return (
    <Container id="testimonials">
      <MessageLists />
    </Container>
  );
}

export default TestimonialPage;
