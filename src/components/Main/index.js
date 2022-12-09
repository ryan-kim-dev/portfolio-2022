import React, { useMemo } from 'react';
import * as S from './Styles';

function Main() {
  const MemoizeSplineObj = useMemo(() => {
    if (window.screen.width < 400) return;
    return (
      <S.Scene scene="https://prod.spline.design/zo7-TU0uJWfVO-Ye/scene.splinecode" />
    );
  }, []);

  const createText = time => {
    const text = [
      'H',
      'I',
      ',',
      ' ',
      'I',
      "'",
      'M',
      '\n',
      'R',
      'Y',
      'A',
      'N',
      '\n',
      'K',
      'I',
      'M',
    ];
    const result = [];
    const $br = React.createElement('br');
    text.forEach((item, index) => {
      if (item === '\n') result.push($br);
      else
        result.push(
          <S.Text
            key={Math.random()}
            className="reverse"
            time={(index + 1) / time}
          >
            {item}
          </S.Text>
        );
    });
    return result;
  };

  return (
    <S.HomeContainer id="home">
      <S.SceneWrapper>
        {window.screen.width > 400 ? MemoizeSplineObj : null}
      </S.SceneWrapper>

      <S.TextSection>{createText(5)}</S.TextSection>
    </S.HomeContainer>
  );
}

export default Main;
