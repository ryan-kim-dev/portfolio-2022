import React from 'react';
import { OrbitControls, Float } from '@react-three/drei';
import Lambo from './Lambo';
import * as S from './styles';

function Modeling() {
  return (
    <S.ModelLayout>
      <S.ModelCanvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
          <Lambo />
        </Float>
      </S.ModelCanvas>
    </S.ModelLayout>
  );
}

export default Modeling;
