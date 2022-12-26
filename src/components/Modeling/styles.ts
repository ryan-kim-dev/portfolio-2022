import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

export const ModelLayout = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModelCanvas = styled(Canvas)`
  position: absolute;
  width: 50px;
  height: 50px;
`;

export const ModelManual = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  background-color: #202020;
  padding: 1rem;

  .caution {
    font-size: 13px;
    color: lightblue;
  }
`;
