import React from 'react';
// import styled from 'styled-components';
import {
  ModalContainer,
  ModalBackdrop,
  ModalView,
} from '../../src/GlobalStyle';
import MessageForm from './MessageForm';

function AddMessage({ isOpen, setIsOpen, handleButtonClick }) {
  return (
    <ModalContainer>
      <ModalBackdrop>
        <ModalView onClick={(e) => e.stopPropagation()}>
          <button className={'closingBtn'} onClick={() => handleButtonClick()}>
            x
          </button>
          <div>
            <MessageForm method="추가하기" />
          </div>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
}

export default AddMessage;
