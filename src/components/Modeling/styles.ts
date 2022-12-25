import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

export const ModelLayout = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModelCanvas = styled(Canvas)`
  position: absolute;
  width: 50px;
  height: 50px;
`;
