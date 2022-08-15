import React from 'react';
import styled from 'styled-components';

function Message({ username, relation, bodyText, photoURL }) {
  return (
    <MsgContainer>
      <Left>
        <img src={photoURL} alt="user" />
      </Left>
      <Right>
        <div>{username}</div>
        <div>{relation}</div>
        <div>{bodyText}</div>
      </Right>
    </MsgContainer>
  );
}

export default Message;

const MsgContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: #e5e5e5;
  padding: 1.5rem;
`;

const Left = styled.div`
  width: 20%;

  img {
    width: 80%;
    border-radius: 50%;
  }
`;

const Right = styled.div`
  width: 80%;
`;
