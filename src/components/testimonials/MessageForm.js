import React, { useState } from 'react';
import styled from 'styled-components';
// 파이어페에스 db에 글 추가하기위해 import
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

const MessageForm = () => {
  // const messagesCollectionRef = collection(db, 'messages');

  const [message, setMessage] = useState({
    username: '',
    relation: '',
    bodyText: '',
  });
  const onSubmit = async e => {
    e.preventDefault();
    // 참고 : https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko&authuser=0
    try {
      const res = await addDoc(collection(db, 'messages'), message);
      console.log(res);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = e => {
    const { name, value } = e.target;
    setMessage(prev => ({
      ...prev, // 기존 객체 복사 (spread)
      [name]: value,
      // input에 부여된 name 속성의 값을 key로, name 키를 가진 값을 value로 설정.
      // [] 로 감싸 key 값을 동적으로 받는다.
      // 참고 : https://kjhg478.tistory.com/27
    }));
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <div>
        <span>추천사 추가하기</span>
      </div>
      <div>
        <input
          onChange={onChange}
          type="text"
          name="username"
          placeholder="성함을 입력해주세요."
        />
      </div>
      <div>
        <input
          onChange={onChange}
          type="text"
          name="relation"
          placeholder="관계를 입력해주세요."
        />
      </div>
      <div>
        <input
          onChange={onChange}
          type="textarea"
          name="bodyText"
          placeholder="남겨주신 한글자 한글자가 큰 힘이 됩니다. 감사합니다!!"
        />
        <div>
          <input type="submit" value="추천사 추가하기" />
        </div>
      </div>
    </FormContainer>
  );
};

export default MessageForm;

const FormContainer = styled.form`
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
