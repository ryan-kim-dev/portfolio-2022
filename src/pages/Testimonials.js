import React from 'react';
import MessageLists from '../components/testimonials/MessageLists';
import SectionTitle from '../components/common/SectionTitle';
import Auth from '../components/testimonials/Auth';
// import Links from '../components/testimonials/Links';
import { Container } from '../GlobalStyle';

const Testimonials = () => {
  return (
    <Container id="testimonials">
      <SectionTitle title={'Testimonials'} />
      <MessageLists />
      <Auth />
    </Container>
  );
};

export default Testimonials;
