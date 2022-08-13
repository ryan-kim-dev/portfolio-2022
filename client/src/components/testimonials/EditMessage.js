import React from 'react';
// import styled from 'styled-components';
import { ModalBackdrop, ModalView } from '../../GlobalStyle';

function EditMessage({ isOpen, setIsOpen, handleButtonClick }) {
  return (
    <ModalBackdrop>
      <ModalView onClick={e => e.stopPropagation()}>
        <button className={'closingBtn'} onClick={() => handleButtonClick()}>
          x
        </button>
        <div>
          <p>추천사 수정하기</p>
        </div>
      </ModalView>
    </ModalBackdrop>
  );
}

export default EditMessage;
