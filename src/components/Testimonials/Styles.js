import styled from 'styled-components';
import { Container } from '../../GlobalStyle';

export const ListContainer = styled(Container)``;

export const ListWrapper = styled.div`
  z-index: 1;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(40px);
  padding: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
