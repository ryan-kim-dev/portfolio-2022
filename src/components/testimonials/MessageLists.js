import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Container } from '../../GlobalStyle';
import Message from './Message';
import Auth from './Auth';
function MessageLists() {
  const [messages, setMessages] = useState([]);
  // const [index, setIndex] = useState(0);

  useEffect(() => {
    const messagesCollectionRef = collection(db, 'messages');
    const getMessages = async () => {
      const data = await getDocs(messagesCollectionRef);
      console.log('db get요청 횟수 체크용');
      setMessages(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getMessages();
  }, []);

  return (
    <ListContainer>
      <ListWrapper>
        {messages.map((message, idx) => {
          return (
            <Message
              idx={idx}
              key={message.id}
              username={message.username}
              relation={message.relation}
              bodyText={message.bodyText}
              photoURL={message.photoURL}
            />
          );
        })}
      </ListWrapper>
      <Auth />
    </ListContainer>
  );
}

export default MessageLists;

const ListContainer = styled(Container)`
  border: 1px solid black;
`;

const ListWrapper = styled.div``;
