import React from 'react';
import styled from 'styled-components';

function Message({ username, relation, bodyText, photoURL }) {
  return (
    <MsgContainer>
      <Left>
        <img src={photoURL} alt="user" />
        <h2>{username}</h2>
        <span>{relation}</span>
      </Left>
      <Right>
        <pre>{bodyText}</pre>
      </Right>
    </MsgContainer>
  );
}

export default Message;

const MsgContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  color: #000000;
`;

const Left = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    border-radius: 50%;
  }
  h2 {
    font-size: 14px;
  }
  span {
    font-size: 0.8rem;
    color: #414141;
  }
`;

const Right = styled.div`
  width: 80%;
  font-size: 13px;
  padding: 10px;
`;
