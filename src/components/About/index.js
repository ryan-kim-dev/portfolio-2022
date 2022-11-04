import React, { useState } from 'react';
import * as S from './Styles';
import ContactLinks from '../common/ContactLinks';
import Tab from './Tab';
import Career from './Career';
import Reference from './Reference';

function About({ scrollToSection, testimonials }) {
  const titles = ['SKILLS', 'PATH', 'PROJECTS'];
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <S.AboutContainer>
      <S.AboutSection>
        <S.Header>
          <S.Greeting>
            <S.Cover>
              <S.ProfileImgBox>
                <img
                  crossOrigin="anonymous"
                  src="https://avatars.githubusercontent.com/u/78180055?v=4"
                  alt="profile"
                />
              </S.ProfileImgBox>
              <S.IntroHeader>
                <h2>Hyeonho Kim</h2>
                <span className="role">Frontend Engineer</span>
                <span className="mail">ryankim.h.dev@gmail.com</span>
              </S.IntroHeader>
              <ContactLinks />
            </S.Cover>
            <S.Intro>
              <h2>About Me</h2>
              <hr />
              <p>
                다양한 사람들과의 협업 경험을 통해 개인과 팀 모두의 성장을
                꿈꿉니다. <br />
                부트캠프 프로젝트 기간 2번의 협업 프로젝트를 팀장으로 진행하며,
                <br />
                AWS 인프라 구축, https 통신 연결, SNS 기능 구현 등 작업 진행에
                병목이 생길 수 있는 부분들에서 먼저 나서서 학습하고 공유하며{' '}
                <br />
                프로젝트의 방향성을 제안하며 프로젝트를 진행하였습니다. 꾸준한
                노력의 힘을 믿습니다. <br />
                오늘보다 내일이 조금 더 나을수 있도록 기술 블로그 작성과 실제
                코드로 학습내용을 숙달하며 깃허브에 컨벤션을 준수하며 기록해오고
                있습니다.
              </p>
            </S.Intro>
          </S.Greeting>
          <Reference
            isOpen={isOpen}
            handleOpenModal={handleOpenModal}
            scrollToSection={scrollToSection}
            testimonials={testimonials}
          />
        </S.Header>
        <S.Title className="reverse">{titles[0]}</S.Title>
        <Tab />
        <S.Title className="reverse">{titles[1]}</S.Title>
        <S.LowerArea>
          <Career />
        </S.LowerArea>
      </S.AboutSection>
    </S.AboutContainer>
  );
}

export default About;
