import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/common/SectionTitle';
import { Container } from '../GlobalStyle';

const Works = () => {
  return (
    <Container>
      <SectionTitle title={'works'} />
      <Projects>
        <Project>
          <ProjectImgArea>
            <img
              crossorigin="anonymous"
              src="https://i.imgur.com/WwQFDbz.png"
              alt="portfolio-cover"
            />
          </ProjectImgArea>
          <ProjectDetail className="project-detail">
            <ProjectName>개인 프로젝트 - 포트폴리오 웹사이트</ProjectName>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum
            adipisci quidem animi explicabo tenetur nihil quasi
          </ProjectDetail>
        </Project>
      </Projects>
    </Container>
  );
};

export default Works;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 200px;
  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    padding: 20px;
  }
`;

const Project = styled.div`
  background-color: #fff;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

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

const ProjectImgArea = styled.div`
  width: 60%;
  height: min-content;
  background-color: lightgray;

  img {
    width: 100%;
  }

  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 100%;
  }
`;

const ProjectDetail = styled.div`
  padding: 10px;

  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    display: none;
  }
`;

const ProjectName = styled.div`
  font-weight: 500;
`;
