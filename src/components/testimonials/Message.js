import React from 'react';

function Message({ username, relation, bodyText }) {
  return (
    <div>
      <div>{username}</div>
      <div>{relation}</div>
      <div>{bodyText}</div>
    </div>
  );
}

export default Message;
