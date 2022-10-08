import React from 'react';
import * as S from './Styles';
import SectionTitle from '../common/SectionTitle';
import ContactLinks from '../common/ContactLinks';
import Tab from './Tab';
import Career from './Career';

function About() {
  const titles = ['SKILLS', 'PATH', 'PROJECTS'];

  return (
    <S.AboutContainer>
      <SectionTitle title="about me" />
      <S.AboutSection>
        <S.Header>
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
          <S.Greeting>
            <span className="text-2">안녕하세요!</span> <br />
            <span className="text-1">김현호 입니다.</span> <br />
            <span className="text-3">프론트엔드 개발자에요.</span> <br />
            <S.Intro>
              3d와 애니메이션이 조화된 인터렉티브 웹에 관심이 많습니다. <br />
              단순한 데이터의 정렬된 나열이 아닌, 입체로 살아숨쉬는 웹앱을
              만들며,
              <br />
              기본기 또한 탄탄한 개발자가 되기 위해 공부하고 있습니다.
            </S.Intro>
          </S.Greeting>
        </S.Header>
        <S.Title>{titles[0]}</S.Title>
        <Tab />
        <S.Title>{titles[1]}</S.Title>
        <S.LowerArea>
          <Career />
        </S.LowerArea>
      </S.AboutSection>
    </S.AboutContainer>
  );
}

export default About;
