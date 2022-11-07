import React from 'react';
import * as S from './Styles';

function Career() {
  return (
    <S.Career>
      <S.CareerLeft className="career-left">
        <img
          crossOrigin="anonymous"
          src="https://i.imgur.com/y4l5KJG.png"
          alt="codestates-logo"
        />
        <S.Span className="title">코드스테이츠</S.Span>
        <S.Span className="description">
          프론트엔드 엔지니어링 부트캠프 수료
        </S.Span>
        <S.Span className="date">2022.04.25 ~ 2022.10.19</S.Span>
      </S.CareerLeft>
      <S.CareerRight className="career-right text-dark">
        <p>
          • 6주간 2번의 팀 프로젝트로 자바 스프링 백엔드 팀원들과 협업을 통한
          웹앱 개발 방법을 체득하였습니다.
        </p>
        <p>
          • React 클라이언트에서 Redux를 사용한 전역 상태관리 방법과 컴포넌트
          최적화 방법을 학습하였습니다.
        </p>
        <p>
          • Express를 사용하여 간단한 crud가 가능한 서버 구현과 쿠키, 세션,
          토큰을 사용한 인가 방법들을 학습하였습니다.
        </p>
        <p>
          • 자바스크립트의 자료형, 스코프, 클로저, ES6 주요 문법, 비동기
          프로그래밍 등 웹앱 개발을 위해 필요한 핵심 내용들을 학습하였습니다.
        </p>
        <p>
          • 웹 개발자가 반드시 알아야 할 네트워크, 자료구조, 알고리즘의 기초 CS
          지식을 학습하였습니다.
        </p>
      </S.CareerRight>
    </S.Career>
  );
}

export default Career;
