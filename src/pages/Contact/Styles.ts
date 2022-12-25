import styled from 'styled-components';
import { Layout, Container } from '../../GlobalStyle';

export const ContactLayout = styled(Layout)``;

export const ContactContainer = styled(Container)``;

export const FormContainer = styled.div`
  z-index: 1;
  color: black;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(40px);
  padding: 3em 3em 3em 0;
  width: 800px;
  display: flex;
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0;
  }
`;

export const SocialTab = styled.div`
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

export const SubTitle = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  color: #374999;
  letter-spacing: 0.1rem;
`;

export const Img = styled.img`
  width: 50%;
  border-radius: 50%;
`;
