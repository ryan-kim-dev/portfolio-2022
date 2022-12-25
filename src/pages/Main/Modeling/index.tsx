import React from 'react';
import * as S from './styles';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';
import { Physics } from '@react-three/cannon';

function Modeling() {
  return (
    <div
      style={{
        margin: '0',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Canvas>
        <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
          <Scene />
        </Physics>
      </Canvas>
    </div>
  );
}

export default Modeling;
