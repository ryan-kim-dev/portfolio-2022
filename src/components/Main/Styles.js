import styled from 'styled-components';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

import { Container } from '../../GlobalStyle';

export const HomeContainer = styled(Container)``;

export const SceneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
export const Scene = styled(Spline)`
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

export const TextSection = styled.div`
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

export const Text = styled(motion.span)`
  cursor: grab;
  /* display: flex;
  flex-direction: column; */
  max-width: 500px;
  flex-wrap: wrap;
  font-weight: 500;

  /* text animation */
  animation: animate 3s linear infinite;
  /* animation-delay: 0.1s; */
  @keyframes animate {
    0% {
      /* color: #fff; */
      filter: hue-rotate(0deg);
      text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
        0 0 80px #00b3ff, 0 0 120px #00b3ff, 0 0 200px #00b3ff,
        0 0 300px #00b3ff;
    }

    30%,
    70% {
      /* color: #fff; */
      filter: hue-rotate(360deg);
      text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
        0 0 80px #00b3ff, 0 0 120px #00b3ff, 0 0 200px #00b3ff,
        0 0 300px #00b3ff;
    }
    100% {
      color: transparent;
      box-shadow: none;
      filter: hue-rotate(0deg);
    }
  }

  @media all and (max-width: 479px) {
    font-size: 50px;
  }
`;
