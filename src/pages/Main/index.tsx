import React, { useMemo } from 'react';
import * as S from './Styles';
import SplineBundle from './spline-bundle.js';

function createText(time: number) {
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
  const result: JSX.Element[] = [];
  const $br = React.createElement('br');
  text.forEach((item, index) => {
    if (item === '\n') result.push($br);
    else
      result.push(
        <S.Text
          key={`${index}-${Date.now()}`}
          className="reverse"
          time={(index + 1) / time}
        >
          {item}
        </S.Text>
      );
  });
  return result;
}

function Main() {
  const MemoizeSplineObj = useMemo(() => {
    if (window.screen.width < 400) return;
    return <SplineBundle />;
  }, []);

  const memoizedText = useMemo(() => createText(5), []);

  return (
    <S.HomeContainer id="home">
      <S.SceneWrapper>
        {window.screen.width > 400 ? MemoizeSplineObj : null}
      </S.SceneWrapper>

      <S.TextSection>
        {memoizedText.map(text => (
          <S.Text key={Math.random()}>{text}</S.Text>
        ))}
      </S.TextSection>
    </S.HomeContainer>
  );
}

export default Main;
