import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Container } from '../../GlobalStyle';
import Message from './Message';
import SectionTitle from '../common/SectionTitle';
import Auth from './Auth';
function MessageLists() {
  const [messages, setMessages] = useState([]);
  // const [index, setIndex] = useState(0);

  useEffect(() => {
    const messagesCollectionRef = collection(db, 'messages');
    const getMessages = async () => {
      const data = await getDocs(messagesCollectionRef);

      setMessages(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getMessages();
  }, []);

  return (
    <ListContainer>
      <SectionTitle title={'Testimonials'} />
      <ListWrapper className="text-dark">
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
        <Auth />
      </ListWrapper>
    </ListContainer>
  );
}

export default MessageLists;

const ListContainer = styled(Container)``;

const ListWrapper = styled.div`
  z-index: 1;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(40px);
  padding: 3em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
