import React from 'react';
import MessageLists from '../components/testimonials/MessageLists';
import SectionTitle from '../components/common/SectionTitle';
// import Links from '../components/testimonials/Links';
import { Container } from '../GlobalStyle';

const Testimonials = () => {
  return (
    <Container id="testimonials">
      <SectionTitle title={'Testimonials'} />
      <MessageLists />
    </Container>
  );
};

export default Testimonials;
