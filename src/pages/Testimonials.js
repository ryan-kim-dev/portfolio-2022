import React from 'react';
import MessageLists from '../components/testimonials/MessageLists';

// import Links from '../components/testimonials/Links';
import { Container } from '../GlobalStyle';

const Testimonials = () => {
  return (
    <Container id="testimonials">
      <MessageLists />
    </Container>
  );
};

export default Testimonials;
