import styled from 'styled-components';
import { Container } from '../../GlobalStyle';

export const AboutContainer = styled(Container)`
  z-index: 1;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(40px);
  width: 70%;
  row-gap: 3rem;
  display: flex;
  justify-content: center;
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
  justify-content: center;
  align-items: center;
  column-gap: 2rem;

  @media all and (max-width: 479px) {
    width: 100%;
    flex-direction: column;
    column-gap: 0;
  }
`;

export const Cover = styled.div`
  width: max-content;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  color: #000000;
  padding: 1rem;
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
  width: max-content;
  background: rgba(255, 255, 255, 0.6);

  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: #000000;
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 100%;
    padding: 30px;
    margin-top: 30px;
  }
  .text-1 {
    font-weight: bold;
    font-size: 3em;
    /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
    @media all and (max-width: 479px) {
      font-size: 1.5rem;
    }
  }
  .text-2 {
    font-weight: bold;
    font-size: 2em;
    /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
    @media all and (max-width: 479px) {
      font-size: 12px;
    }
  }
  .text-3 {
    font-size: 1.5em;
    color: #374999;
    font-weight: 500;
    /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
    @media all and (max-width: 479px) {
      font-size: 13px;
    }
  }
`;

export const Intro = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    font-size: 13px;
  }
`;

export const Title = styled.h2`
  font-family: 'Oswald', sans-serif;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 30px;
`;

export const LowerArea = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
  }
`;

// * Career: 별도 컴포넌트/ 커리어 패스 개별 항목 스타일링
export const Career = styled.article`
  z-index: 1;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(40px);
  display: flex;
  width: 80%;
  height: auto;
  flex-direction: row;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    border-radius: 7px;
  }
`;

export const CareerLeft = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    padding: 30px 0 30px 30px;
    @media all and (max-width: 479px) {
      padding: 0;
      width: 60px;
      height: 15px;
    }
  }
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
  }
`;

export const CareerRight = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    text-align: center;
    padding: 10px;
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
    @media all and (max-width: 479px) {
      font-size: 10px;
    }
  }
  &.description {
  }
  @media all and (max-width: 479px) {
    font-size: 11px;
  }
`;