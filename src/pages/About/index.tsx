import { useState } from 'react';
import * as S from './Styles';
import { ContactLinks } from '../../components';
import Archive from './Archive';
import Tab from './Tab';
import Career from './Career';
import Reference from './Reference';

function About() {
  const titles = ['ARCHIVE', 'SKILLS', 'EDUCATION'];
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <S.AboutLayout max="max">
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
                  꿈꿉니다.
                  <br />
                  부트캠프 기간 중 2개 스터디에 조원으로 참여, 1개 스터디를
                  운영하였고 6주간 2번의 협업 프로젝트에 팀장으로
                  참여하였습니다.
                  <br />
                  AWS 인프라 구축, https 통신 연결, SNS 기능 구현 등 작업 진행
                  중 병목이 생길 수 있는 부분들에서 먼저 나서서 학습하고
                  공유하며 팀 프로젝트를 진행하였습니다.
                  <br />
                  꾸준한 노력의 힘을 믿습니다.
                  <br />
                  오늘보다 내일이 조금 더 나을수 있도록 기술 블로그 작성과 실제
                  코드로 학습내용을 숙달하며 깃허브에 꾸준히 커밋을 이어가고
                  있습니다.
                </p>
              </S.Intro>
            </S.Greeting>
            <Reference isOpen={isOpen} handleOpenModal={handleOpenModal} />
          </S.Header>
          <S.Section>
            <S.Title>{titles[0]}</S.Title>
            <Archive />
          </S.Section>
          <S.Section>
            <S.Title>{titles[1]}</S.Title>
            <Tab />
          </S.Section>
          <S.Section>
            <S.Title>{titles[2]}</S.Title>
            <Career />
          </S.Section>
        </S.AboutSection>
      </S.AboutContainer>
    </S.AboutLayout>
  );
}

export default About;
