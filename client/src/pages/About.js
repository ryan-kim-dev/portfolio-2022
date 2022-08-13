import React from 'react';
import styled from 'styled-components';
import { Container } from '../GlobalStyle';

function About() {
  const titles = ['SKILLS', 'PATH', 'PROJECTS'];

  return (
    <AboutContainer>
      <AboutSection>
        <Header>
          <Greeting>
            <span className="text-2">안녕하세요!</span> <br />
            <span className="text-1">김현호 입니다.</span> <br />
            <span className="text-3">프론트엔드 개발자에요.</span> <br />
            <span>
              <a href="https://www.github.com/ryan-kim-dev">Contact Me</a>
            </span>
          </Greeting>
          <Cover>
            <img
              src="https://avatars.githubusercontent.com/u/78180055?v=4"
              alt="profile"
            />
          </Cover>
        </Header>
        <Intro>
          3d와 애니메이션이 조화된 인터렉티브 웹에 관심이 많습니다. <br />
          단순한 데이터의 정렬된 나열이 아닌, 입체로 살아숨쉬는 웹앱을 만들며,
          <br />
          기본기 또한 탄탄한 개발자가 되기 위해 공부하고 있습니다.
        </Intro>
        <Divider />
        <Title>{titles[0]}</Title>
        <Skills className="skills">
          <Skill>
            <SkillImg />
            <SkillName>JS</SkillName>
            <Comment>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              modi, natus minus fugit aut sed quis, quae qui iste est enim in
              magnam odio delectus, dignissimos exercitationem sunt dolor eius?
            </Comment>
          </Skill>
          <Skill>
            <SkillImg />
            <SkillName>JS</SkillName>
            <Comment>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              modi, natus minus fugit aut sed quis, quae qui iste est enim in
              magnam odio delectus, dignissimos exercitationem sunt dolor eius?
            </Comment>
          </Skill>
          <Skill>
            <SkillImg />
            <SkillName>JS</SkillName>
            <Comment>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              modi, natus minus fugit aut sed quis, quae qui iste est enim in
              magnam odio delectus, dignissimos exercitationem sunt dolor eius?
            </Comment>
          </Skill>
        </Skills>
        <Divider />
        <Title>{titles[1]}</Title>
        <LowerArea>
          <Career>
            <CareerLeft className="career-left">
              <img
                src="https://codestates.com/assets/codestates-ci.png"
                alt="codestates-logo"
              />
            </CareerLeft>
            <CareerRight className="career-right">
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
  display: flex;
  width: 600px;
  flex-direction: column;
  row-gap: 60px;
  padding: 60px 0;

  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 60vw;
    row-gap: 20px;
  }
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const Greeting = styled.div`
  line-height: 1;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    row-gap: 0;
  }

  .text-1 {
    font-weight: bold;
    font-size: 4em;

    /* 테블릿 세로 (해상도 768px ~ 1023px)*/
    @media all and (min-width: 768px) and (max-width: 1023px) {
    }

    /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
    @media all and (min-width: 480px) and (max-width: 767px) {
    }

    /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
    @media all and (max-width: 479px) {
      font-size: 20px;
    }
  }

  .text-2 {
    font-weight: bold;
    font-size: 2em;

    /* 테블릿 세로 (해상도 768px ~ 1023px)*/
    @media all and (min-width: 768px) and (max-width: 1023px) {
    }

    /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
    @media all and (min-width: 480px) and (max-width: 767px) {
    }

    /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
    @media all and (max-width: 479px) {
      font-size: 16px;
    }
  }

  .text-3 {
    font-size: 1.5em;
    color: blueviolet;

    /* 테블릿 세로 (해상도 768px ~ 1023px)*/
    @media all and (min-width: 768px) and (max-width: 1023px) {
    }

    /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
    @media all and (min-width: 480px) and (max-width: 767px) {
    }

    /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
    @media all and (max-width: 479px) {
      font-size: 12px;
    }
  }

  a {
    font-family: 'Oswald', sans-serif;
    color: inherit;
    text-decoration: none;
    border-bottom: 5px solid #414141;
  }
`;

const Cover = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

const Intro = styled.div`
  font-size: 1.2rem;
  font-weight: 500;

  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    font-size: 16px;
  }
`;

const Divider = styled.hr`
  border-top: 1px solid gray;
`;

const Title = styled.h2`
  font-family: 'Oswald', sans-serif;
`;

const Skills = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 30px;
`;

const Skill = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    font-size: 12px;
  }
`;

const SkillName = styled.h3``;

const SkillImg = styled.img``;

const Comment = styled.div``;

const LowerArea = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }
  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    padding: 0;
  }
`;

const Career = styled.article`
  display: flex;
  border-radius: 15px;
  width: 100%;
  height: auto;
  background-color: #fff;
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
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }
  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
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

  @media all and (min-width: 768px) and (max-width: 1023px) {
  }
  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }
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
