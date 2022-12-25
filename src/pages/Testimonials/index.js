import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

import Message from './Message';
// import SectionTitle from '../common/SectionTitle';
import Auth from './Auth';
function Testimonials() {
  const [messages, setMessages] = useState([]);
  // const [index, setIndex] = useState(0);

  useEffect(() => {
    const messagesCollectionRef = collection(db, 'messages');
    const getMessages = async () => {
      const data = await getDocs(messagesCollectionRef);

      setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMessages();
  }, []);

  return (
    <S.ListLayout>
      <S.ListContainer>
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
      </S.ListContainer>
    </S.ListLayout>
  );
}

export default Testimonials;
