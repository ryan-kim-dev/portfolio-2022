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
        <p>{bodyText}</p>
      </Right>
    </MsgContainer>
  );
}

export default Message;

const MsgContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  color: #000000;

  @media screen and (max-width: 479px) {
    width: 100%;
  }
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
    font-size: 1.3rem;
  }
  span {
    font-size: 0.8rem;
    color: #414141;
    width: 80px;
    text-align: center;
  }
`;

const Right = styled.div`
  padding: 10px;

  p {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 479px) {
    padding: 5px;
  }
`;
