import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { Container } from '../GlobalStyle';
import styled from 'styled-components';
import ContactLinks from '../components/common/ContactLinks';
import { TbClipboardCheck } from 'react-icons/tb';
// import Iframe from 'react-iframe';

// import axios from 'axios';
// import { axiosInstance } from '../config';
const Contact = () => {
  // * 클립보드 API 사용
  // https://junjangsee.tistory.com/entry/React-리액트로-클립보드-복사-기능-만들어보기-feat-Custom-Hook [개발 여행:티스토리]
  const handleCopyClipBoard = async text => {
    try {
      await navigator.clipboard.writeText(text);

      alert('Copied!');
    } catch (error) {
      alert('Wrong action!');
    }
  };

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
          <div className="clipboard" onClick={handleCopyClipBoard}>
            <h2>김현호</h2>
            <TbClipboardCheck className="clipboard__icon" />
            <span className="clipboard__text">
              ryankim.h.dev@gmail.com
            </span>{' '}
            <br />
            <span className="clipboard__info-text">Click to copy</span>
          </div>
          <ContactLinks />
        </SocialTab>
        {/* <Mailer
          url="https://micro-app-mailer.herokuapp.com/"
          width="600px"
          height="max-content"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        /> */}
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
  justify-content: center;

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
  }
`;

const SocialTab = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  width: 300px;
  text-align: center;

  h2 {
    letter-spacing: 0.1rem;
  }

  .clipboard {
    cursor: pointer;
  }

  .clipboard__icon {
    position: relative;
    top: 3px;
    margin-right: 5px;
  }

  .clipboard__text {
    border-bottom: 1px solid black;
  }

  .clipboard__info-text {
    font-size: 12px;
    color: #374999;
  }
`;

const SubTitle = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  color: #374999;
  letter-spacing: 0.1rem;
`;

const Img = styled.img`
  width: 100px;
  border-radius: 50%;
`;

// const Mailer = styled(Iframe)``;
