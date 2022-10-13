import React, { useMemo } from 'react';
import * as S from './Styles';

function Main() {
  const MemoizeSplineObj = useMemo(() => {
    return (
      <S.Scene scene="https://prod.spline.design/zo7-TU0uJWfVO-Ye/scene.splinecode" />
    );
  }, []);

  return (
    <S.HomeContainer id="home">
      <S.SceneWrapper>
        {window.screen.width > 400 && MemoizeSplineObj}
      </S.SceneWrapper>

      <S.TextSection>
        <S.Text className="text">HI, I'M</S.Text>
        <S.Text className="text">RYAN KIM.</S.Text>
      </S.TextSection>
    </S.HomeContainer>
  );
}

export default Main;
