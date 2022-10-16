import styled from 'styled-components';
import {
  ModalContainer,
  ModalBackdrop,
  ModalBtn,
  ModalView,
} from '../../GlobalStyle';

export const ReviewLayout = styled(ModalContainer)``;

export const ReviewBackDrop = styled(ModalBackdrop)`
  flex-direction: column;
`;

export const ReviewCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
`;

export const ReviewContent = styled(ModalView)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const ReviewChangeBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 40px;
`;
