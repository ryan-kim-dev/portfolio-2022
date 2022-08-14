import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { Container } from '../GlobalStyle';
import styled from 'styled-components';
import axios from 'axios';
// import { axiosInstance } from '../config';
const Contact = () => {
  const [data, setData] = useState({
    yourname: '',
    youremail: '',
    yoursubject: '',
    yourmessage: '',
  });

  const onChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setData(prev => ({
      ...prev, // 기존 객체 복사 (spread)
      [name]: value,
      // input에 부여된 name 속성의 값을 key로, name 키를 가진 값을 value로 설정.
      // [] 로 감싸 key 값을 동적으로 받는다.
      // 참고 : https://kjhg478.tistory.com/27
    }));
  };

  const onSubmit = async e => {
    e.preventDefault();
    axios
      .post('/mail', {
        data: {
          ...data,
        },
      })
      .then(res => {
        console.log(res.data);
      });
  };

  return (
    <ContactContainer id="contact">
      <SectionTitle title={'Contact'} />
      <FormContainer>
        <SocialTab>링크들어갈자리</SocialTab>
        <Form
          action="/mail"
          method="post"
          onChange={onChange}
          onSubmit={onSubmit}
        >
          <Div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="yourname" id="name" placeholder="성함" />
          </Div>
          <Div>
            <Label htmlFor="email">Address</Label>
            <Input
              type="email"
              name="youremail"
              id="email"
              placeholder="메일주소"
            />
          </Div>
          <Div>
            <Label htmlFor="subject">Title</Label>
            <Input
              type="text"
              name="yoursubject"
              id="subject"
              placeholder="제목"
            />
          </Div>
          <Div>
            <Label htmlFor="message">Message</Label>
            <Input
              type="textarea"
              name="yourmessage"
              id="message"
              required
              placeholder="본문을 입력해주세요"
            />
          </Div>
          <Input type="submit" className="submit-btn" value="Send Message" />
        </Form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled(Container)``;

const FormContainer = styled.div`
  border: 1px solid black;
  width: 800px;
  display: flex;
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
  }
`;

const SocialTab = styled.div`
  width: 50%;
`;

const Form = styled.form`
  background-color: #fff;
  width: 70%;
  display: flex;
  row-gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;

const Div = styled.div``;

const Label = styled.label`
  display: block;
  font-family: 'Oswald', sans-serif;
`;

const Input = styled.input`
  background-color: #fff;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1.5px solid #414141;
  width: 100%;

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
    }
  }
`;
