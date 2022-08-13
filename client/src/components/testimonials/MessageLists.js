import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Container } from '../../GlobalStyle';
import Message from './Message';

function MessageLists() {
  const [messages, setMessages] = useState([]);

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
    <Container>
      {messages.map(message => {
        return (
          <Message
            key={message.id}
            username={message.username}
            relation={message.relation}
            bodyText={message.bodyText}
          />
        );
      })}
    </Container>
  );
}

export default MessageLists;
