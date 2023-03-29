import { Modeling, Nav } from '@component/components';
import * as S from './Styles';

export default function Home() {
  return (
    <S.HomeContainer id="home">
      <S.SceneWrapper>
        <Modeling />
      </S.SceneWrapper>

      <S.TextSection className="reverse">
        <S.Text>HI, I'M</S.Text>
        <br />
        <S.Text>RYAN</S.Text>
        <br />
        <S.Text>KIM</S.Text>
      </S.TextSection>
    </S.HomeContainer>
  );
}
