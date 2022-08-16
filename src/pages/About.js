import React from 'react';
import styled from 'styled-components';
import { Container } from '../GlobalStyle';
import SectionTitle from '../components/common/SectionTitle';
import ContactLinks from '../components/common/ContactLinks';

function About() {
  const titles = ['SKILLS', 'PATH', 'PROJECTS'];

  return (
    <AboutContainer>
      <SectionTitle title="about me" />
      <AboutSection>
        <Header className="text-dark">
          <Cover>
            <ProfileImg
              crossOrigin="anonymous"
              src="https://avatars.githubusercontent.com/u/78180055?v=4"
              alt="profile"
            />
            <ContactLinks />
          </Cover>
          <Greeting>
            <span className="text-2">안녕하세요!</span> <br />
            <span className="text-1">김현호 입니다.</span> <br />
            <span className="text-3">프론트엔드 개발자에요.</span> <br />
            <Intro>
              3d와 애니메이션이 조화된 인터렉티브 웹에 관심이 많습니다. <br />
              단순한 데이터의 정렬된 나열이 아닌, 입체로 살아숨쉬는 웹앱을
              만들며,
              <br />
              기본기 또한 탄탄한 개발자가 되기 위해 공부하고 있습니다.
            </Intro>
          </Greeting>
        </Header>
        <Divider />
        <Title>{titles[0]}</Title>
        <div>skills 들어갈 자리</div>
        <Divider />
        <Title>{titles[1]}</Title>
        <LowerArea>
          <Career>
            <CareerLeft className="career-left">
              <img
                crossOrigin="anonymous"
                src="https://i.imgur.com/y4l5KJG.png"
                alt="codestates-logo"
              />
            </CareerLeft>
            <CareerRight className="career-right text-dark">
              <Span className="title">코드스테이츠</Span>
              <Span className="date">2022.04.25 ~ 2022.10.19</Span>
              <Span className="description">
                프론트엔드 엔지니어링 부트캠프 1기 수료
              </Span>
            </CareerRight>
          </Career>
        </LowerArea>
      </AboutSection>
    </AboutContainer>
  );
}
export default About;

const AboutContainer = styled(Container)`
  /* 퍼센트나 vh로 하면 안먹음 */
  height: max-content;
`;

const AboutSection = styled.div`
  z-index: 1;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  padding: 3rem;

  display: flex;
  width: 70%;
  flex-direction: column;
  row-gap: 3rem;
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 2rem;
`;

const Cover = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  color: #000000;
  padding: 1rem;
`;

const ProfileImg = styled.img`
  width: 20rem;
  height: auto;
  margin-bottom: 1rem;
`;

const Greeting = styled.div`
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: #000000;
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
  }

  .text-1 {
    font-weight: bold;
    font-size: 3em;

    /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
    @media all and (max-width: 479px) {
    }
  }

  .text-2 {
    font-weight: bold;
    font-size: 2em;

    /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
    @media all and (max-width: 479px) {
    }
  }

  .text-3 {
    font-size: 1.5em;
    color: blueviolet;

    /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
    @media all and (max-width: 479px) {
    }
  }
`;

const Intro = styled.div`
  font-size: 1.2rem;
  font-weight: 500;

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
  }
`;

const Divider = styled.hr``;

const Title = styled.h2`
  font-family: 'Oswald', sans-serif;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const LowerArea = styled.section`
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

const Career = styled.article`
  z-index: 1;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(40px);
  padding: 3em;

  display: flex;
  border-radius: 15px;
  width: 100%;
  height: auto;
  flex-direction: row;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    border-radius: 7px;
  }
`;

const CareerLeft = styled.div`
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
const CareerRight = styled.div`
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

const Span = styled.span`
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
