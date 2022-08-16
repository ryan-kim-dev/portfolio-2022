import React, { useState } from 'react';
import styled from 'styled-components';
import AddMessage from './AddMessage';
import EditMessage from './EditMessage';
import DeleteMessage from './DeleteMessage';
function Links() {
  const [isOpen, setIsOpen] = useState(false);
  const [toBeOpened, setToBeOpened] = useState('');

  const handleButtonClick = e => {
    setIsOpen(!isOpen);

    if (e.target.value === 'add') {
      setToBeOpened('add');
    }
    if (e.target.value === 'edit') {
      setToBeOpened('edit');
    }
    if (e.target.value === 'delete') {
      setToBeOpened('delete');
    }
  };

  return (
    <>
      {isOpen && toBeOpened === 'add' && (
        <AddMessage
          handleButtonClick={handleButtonClick}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      {isOpen && toBeOpened === 'edit' && (
        <EditMessage
          handleButtonClick={handleButtonClick}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      {isOpen && toBeOpened === 'delete' && (
        <DeleteMessage
          handleButtonClick={handleButtonClick}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      <LinkWrapper onClick={handleButtonClick}>
        <LinkDivider>
          <button value={'add'}>추천사 추가</button>
        </LinkDivider>
        <LinkDivider>
          <button value={'edit'}>추천사 수정</button>
        </LinkDivider>
        <LinkDivider>
          <button value={'delete'}>추천사 삭제</button>
        </LinkDivider>
      </LinkWrapper>
    </>
  );
}

export default Links;

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const LinkDivider = styled.div`
  button {
    border: none;
    cursor: pointer;
    border-radius: 70px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    padding: 5px 10px;
    margin: 5px;
  }
`;
