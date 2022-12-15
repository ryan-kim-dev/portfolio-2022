import React from 'react';
import * as S from './Styles';
import Modeling from './Modeling';

function Main() {
  return (
    <S.HomeContainer id="home">
      <S.SceneWrapper></S.SceneWrapper>

      <S.TextSection className="reverse">
        <S.Text>HI, I'M</S.Text>
        <br />
        <S.Text>RYAN</S.Text>
        <br />
        <S.Text>KIM</S.Text>
      </S.TextSection>
      <Modeling />
    </S.HomeContainer>
  );
}

export default Main;
