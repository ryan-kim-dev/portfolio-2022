import styled from 'styled-components';
import { Container } from '../../GlobalStyle';

export const WorksContainer = styled(Container)`
  z-index: 1;
  width: 100%;
  color: black;
  width: 70%;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  padding: 0;

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 100%;
  }
`;

export const SubTitle = styled.h2`
  color: #e5e5e5;
  margin-bottom: 30px;
`;

export const ProjectSection = styled.section`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
