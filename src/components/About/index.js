import React from 'react';
import * as S from './Styles';
import ContactLinks from '../common/ContactLinks';
import Tab from './Tab';
import Career from './Career';

function About() {
  const titles = ['SKILLS', 'PATH', 'PROJECTS'];

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
              <ContactLinks />
            </S.Cover>
            <S.Intro>
              <h2 className="reverse">About Me</h2>
              <hr />
              <p>
                React, express 중심으로 Wep/App 개발이 가능한 프론트엔드 개발자
                김현호입니다. <br />
                Redux-toolkit, Three.js, 카카오 맵 api를 사용한 앱 개발 경험이
                있습니다. <br />
                Three.js로 웹에서 3d로 구현된 인터렉션을 접하고 프론트엔드 개발
                분야에 대한 직무적인 관심을 갖게되어, 20주 과정인 코드스테이츠
                프론트엔드 부트캠프를 수료했습니다. <br />
                부트캠프 프로젝트 기간 2번의 협업 프로젝트를 팀장으로 진행하며,{' '}
                <br />
                AWS 인프라 구축, https 통신 연결, SNS 기능 구현 등 작업 진행에
                병목이 생길 수 있는 부분들에서 먼저 나서서 학습하고 공유하며
                프로젝트의 방향성을 제안하며 프로젝트를 진행하였습니다
              </p>
            </S.Intro>
          </S.Greeting>
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
