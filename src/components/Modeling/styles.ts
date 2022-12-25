import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

export const ModelLayout = styled.div`
  width: 100%;
  height: 100%;
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
