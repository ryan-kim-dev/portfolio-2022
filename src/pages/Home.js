import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';
import { Container } from '../GlobalStyle';

const Home = () => {
  return (
    <HomeContainer id="home">
      <SceneWrapper>
        {window.screen.width > 400 && (
          <Scene scene="https://prod.spline.design/zo7-TU0uJWfVO-Ye/scene.splinecode" />
        )}
      </SceneWrapper>

      <TextSection>
        <Text>HI, I'M</Text>
        <Text>RYAN KIM.</Text>
      </TextSection>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled(Container)``;

const SceneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 0;
  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    transform: scale(0.7) translateX(600px);
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    transform: scale(0.5) translateX(-100px);
    right: auto;
    left: 50%;
    margin-left: -600px;
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    display: none;
  }
`;
const Scene = styled(Spline)`
  position: absolute;

  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    transform: scale(0.7) translateX(600px);
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    transform: scale(0.5) translateX(-100px);
    right: auto;
    left: 50%;
    margin-left: -600px;
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    display: none;
  }
`;

const TextSection = styled.div`
  /* z-index: 1; */
  position: absolute;
  left: 200px;
  font-size: 180px;
  font-family: 'Oswald', sans-serif;
  top: -10px;
  left: 50px;

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    top: 50px;
    left: 20px;
    font-size: 100px;
  }
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    top: 50px;
    left: 40px;
    font-size: 100px;
  }
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  flex-wrap: wrap;
  font-weight: 500;

  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    font-size: 50px;
  }
`;
