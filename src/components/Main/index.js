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
        <S.Text className="reverse">H</S.Text>
        <S.Text className="reverse">I</S.Text>
        <S.Text className="reverse">,</S.Text>
        <S.Text className="reverse"> </S.Text>
        <S.Text className="reverse">I</S.Text>
        <S.Text className="reverse">'</S.Text>
        <S.Text className="reverse">M</S.Text>
        <br />
        <S.Text className="reverse">R</S.Text>
        <S.Text className="reverse">Y</S.Text>
        <S.Text className="reverse">A</S.Text>
        <S.Text className="reverse">N</S.Text>
        <br />
        <S.Text className="reverse">K</S.Text>
        <S.Text className="reverse">I</S.Text>
        <S.Text className="reverse">M</S.Text>
      </S.TextSection>
    </S.HomeContainer>
  );
}

export default Main;
