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
      </S.CareerLeft>
      <S.CareerRight className="career-right text-dark">
        <S.Span className="title">코드스테이츠</S.Span>
        <S.Span className="date">2022.04.25 ~ 2022.10.19</S.Span>
        <S.Span className="description">
          프론트엔드 엔지니어링 부트캠프 1기 수료
        </S.Span>
      </S.CareerRight>
    </S.Career>
  );
}

export default Career;
