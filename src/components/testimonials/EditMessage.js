import React from 'react';
// import styled from 'styled-components';
import { ModalBackdrop, ModalView } from '../../GlobalStyle';
import MessageForm from './MessageForm';

function EditMessage({ isOpen, setIsOpen, handleButtonClick }) {
  return (
    <ModalBackdrop>
      <ModalView onClick={e => e.stopPropagation()}>
        <button className={'closingBtn'} onClick={() => handleButtonClick()}>
          x
        </button>
        <div>
          <MessageForm method={'수정하기'} />
        </div>
      </ModalView>
    </ModalBackdrop>
  );
}

export default EditMessage;
