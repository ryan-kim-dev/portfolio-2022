import styled from 'styled-components';
import { Container } from '../../GlobalStyle';

export const ListContainer = styled(Container)`
  padding: 0;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(40px);
  padding: 3em;
  width: 50%;
`;

export const ListWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
