import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { Container } from '../GlobalStyle';
import styled from 'styled-components';
import ContactLinks from '../components/common/ContactLinks';
import Iframe from 'react-iframe';

// import axios from 'axios';
// import { axiosInstance } from '../config';
const Contact = () => {
  return (
    <ContactContainer id="contact">
      <SectionTitle title={'Contact'} />
      <FormContainer className="text-dark">
        <SocialTab>
          <SubTitle>Contact Me!</SubTitle>
          <Img
            src="https://avatars.githubusercontent.com/u/78180055?v=4"
            alt="profile"
          />
          <div>
            <h2>김현호</h2>
            <span>ryankim.h.dev@gmail.com</span>
          </div>
          <ContactLinks />
        </SocialTab>
        <Iframe
          url="https://micro-app-mailer.herokuapp.com/"
          width="800px"
          height="max-content"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled(Container)``;

const FormContainer = styled.div`
  z-index: 1;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(40px);
  padding: 3em 3em 3em 0;

  width: 800px;
  display: flex;

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
  }
`;

const SocialTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  width: 50%;
  text-align: center;

  h2 {
    letter-spacing: 0.1rem;
  }
`;

const SubTitle = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  color: #374999;
  letter-spacing: 0.1rem;
`;

const Img = styled.img`
  width: 50%;
  border-radius: 50%;
`;
