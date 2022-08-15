import React from 'react';
// import styled from 'styled-components';
import { ModalBackdrop, ModalView } from '../../GlobalStyle';
import MessageForm from './MessageForm';

function AddMessage({ isOpen, setIsOpen, handleButtonClick }) {
  return (
    <ModalBackdrop>
      <ModalView onClick={e => e.stopPropagation()}>
        <button className={'closingBtn'} onClick={() => handleButtonClick()}>
          x
        </button>
        <div>
          <MessageForm method="추가하기" />
        </div>
      </ModalView>
    </ModalBackdrop>
  );
}

export default AddMessage;
