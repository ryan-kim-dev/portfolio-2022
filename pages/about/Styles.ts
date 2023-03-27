import styled from 'styled-components';
import { Layout, Container } from '../../src/GlobalStyle';

export const AboutLayout = styled(Layout)``;

export const AboutContainer = styled(Container)`
  z-index: 1;
  row-gap: 3rem;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(40px);
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 100%;
  }
`;

export const AboutSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(40px);

  @media all and (max-width: 479px) {
  }
`;

export const Cover = styled.div`
  width: 40%;
  /* background: rgba(255, 255, 255, 0.6);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4); */
  color: #000000;
  /* padding: 1rem; */
  @media all and (max-width: 479px) {
    width: 70%;
  }
`;

export const ProfileImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 80%;
    height: 80%;
  }
  margin-bottom: 1rem;
  @media all and (max-width: 479px) {
    /* img {
      width: 30%;
      height: 30%;
    } */
  }
`;

export const Greeting = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: 2rem 0;
  color: #000000;

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px;
    margin-top: 30px;
  }
`;

export const Intro = styled.div`
  width: 50%;
  height: 100%;
  padding: 1rem;
  color: black;

  h2 {
    font-family: 'Oswald', sans-serif;
  }

  hr {
    margin: 10px 0;
  }

  p {
    font-size: 1.3rem;
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    font-size: 13px;
    width: 100%;
    margin-top: 30px;

    p {
      font-size: 1rem;
    }
  }
`;

export const IntroHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Oswald', sans-serif;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 2rem;
  }

  .role {
    color: #374999;
    font-weight: 500;
    font-size: 1.3rem;
  }

  .mail {
    color: gray;
    font-size: 1.1rem;
    margin: 5px 0;
  }
`;

export const Section = styled.section`
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(40px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  padding: 30px;
`;

export const Title = styled.h2`
  font-family: 'Oswald', sans-serif;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 30px;
  color: #000000;
`;

// * Career: 별도 컴포넌트/ 커리어 패스 개별 항목 스타일링
export const Career = styled.article`
  z-index: 1;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(40px);
  display: flex;
  /* width: 80%; */
  height: auto;
  flex-direction: row;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);

  @media all and (max-width: 479px) {
    flex-direction: column;
  }
`;

export const CareerLeft = styled.div`
  width: 30%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    padding: 30px 0 30px 30px;
    @media all and (max-width: 479px) {
      padding: 0;
      width: 60px;
      height: 15px;
    }
  }
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 100%;
  }
`;

export const CareerRight = styled.div`
  padding: 25px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70%;
  row-gap: 10px;

  p {
    font-size: 14px;
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    text-align: center;
    padding: 10px;
    width: 100%;
  }
`;

export const Span = styled.span`
  &.title {
    font-weight: bold;
    font-size: 16px;
    @media all and (max-width: 479px) {
      font-size: 12px;
    }
  }
  &.date {
    color: gray;
    font-size: 10px;
    @media all and (max-width: 479px) {
    }
  }
  &.description {
    font-size: 13px;
  }
  @media all and (max-width: 479px) {
  }
`;
