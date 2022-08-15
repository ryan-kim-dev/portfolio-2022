import React from 'react';
// import styled from 'styled-components';
import { ModalBackdrop, ModalView } from '../../GlobalStyle';
import MessageForm from './MessageForm';
function DeleteMessage({ isOpen, setIsOpen, handleButtonClick }) {
  return (
    <ModalBackdrop>
      <ModalView onClick={e => e.stopPropagation()}>
        <button className={'closingBtn'} onClick={() => handleButtonClick()}>
          x
        </button>
        <div>
          <MessageForm method="삭제하기" />
        </div>
      </ModalView>
    </ModalBackdrop>
  );
}

export default DeleteMessage;
