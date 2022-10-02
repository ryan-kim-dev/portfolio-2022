import React, { useRef } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { Container } from '../GlobalStyle';
import styled from 'styled-components';
import ContactLinks from '../components/common/ContactLinks';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const onSubmit = async e => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_jukedjo',
        'template_lizhqth',
        form.current,
        'RneFkwHFvOdgSjiT8'
      )
      .then(
        result => {
          console.log(result.text);
          alert('메일을 전송하였습니다. 감사합니다!');
          e.target.reset();
        },
        error => {
          console.log(error.text);
        }
      );
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
          <div>
            <h2>김현호</h2>
            <span>ryankim.h.dev@gmail.com</span>
          </div>
          <ContactLinks />
        </SocialTab>
        <Form ref={form} action="/mail" method="post" onSubmit={onSubmit}>
          <Div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="user_name" id="name" placeholder="성함" />
          </Div>
          <Div>
            <Label htmlFor="email">Address</Label>
            <Input
              type="email"
              name="user_email"
              id="email"
              placeholder="메일주소"
            />
          </Div>

          <Div>
            <Label htmlFor="message">Message</Label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="본문을 입력해주세요"
            />
          </Div>
          <Input type="submit" className="submit-btn" value="Send Email" />
        </Form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled(Container)``;

const FormContainer = styled.div`
  z-index: 1;
  color: black;
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

const Form = styled.form`
  background: rgba(255, 255, 255, 0.2);
  width: 70%;
  display: flex;
  row-gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 1rem;
  textarea {
    background: inherit;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1.5px solid #414141;
    width: 400px;
    height: 150px;
  }
`;

const Div = styled.div``;

const Label = styled.label`
  display: block;
  font-family: 'Oswald', sans-serif;
`;

const Input = styled.input`
  background: inherit;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1.5px solid #414141;
  width: 400px;
  &.submit-btn {
    width: max-content;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    color: inherit;
    text-decoration: none;
    border: 2px solid #414141;
    padding: 2px 10px;
    background-color: transparent;
    :hover {
      color: #bebebe;
      border: 2px solid #bebebe;
    }
  }
`;
