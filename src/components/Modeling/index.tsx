import React from 'react';
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
    </S.ModelLayout>
  );
}

export default Modeling;
