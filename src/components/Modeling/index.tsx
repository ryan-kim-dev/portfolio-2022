import * as S from './styles';
import { Scene } from './Scene';
import { Physics } from '@react-three/cannon';

function Modeling() {
  return (
    <S.ModelLayout>
      <S.ModelCanvas>
        <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
          <Scene />
        </Physics>
      </S.ModelCanvas>
      <S.ModelManual>
        <p>조작키: W A S D</p>
        <p>카메라 시점 변경: K</p>
        <p>리셋: R</p>
        <p>뒤집기: 화살표</p>
      </S.ModelManual>
    </S.ModelLayout>
  );
}

export default Modeling;
