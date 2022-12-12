import React from 'react';
import * as S from './Styles';
import ContactLinks from '../common/ContactLinks';
import Mailer from './Mailer';

function Contact() {
  return (
    <S.ContactContainer id="contact">
      <S.FormContainer className="text-dark">
        <S.SocialTab>
          <S.SubTitle>Contact Me!</S.SubTitle>
          <S.Img
            src="https://avatars.githubusercontent.com/u/78180055?v=4"
            alt="profile"
          />
          <div>
            <h2>김현호</h2>
            <span>ryankim.h.dev@gmail.com</span>
          </div>
          <ContactLinks />
        </S.SocialTab>
        <Mailer />
      </S.FormContainer>
    </S.ContactContainer>
  );
}

export default Contact;
