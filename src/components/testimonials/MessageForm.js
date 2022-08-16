import React, { useState } from 'react';
import styled from 'styled-components';
// 파이어페에스 db에 글 추가하기위해 import
import { db } from '../../firebase';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';

const MessageForm = ({ method }) => {
  console.log(localStorage.uid);

  const [message, setMessage] = useState({
    username: '',
    relation: '',
    bodyText: '',
    photoURL: localStorage.photoURL,
    uid: localStorage.uid,
  });
  const onSubmit = async e => {
    // 참고 : https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko&authuser=0
    e.preventDefault();

    const createMessage = async () => {
      const newRef = doc(db, 'messages', `${message.uid}`);
      try {
        const res = await setDoc(newRef, message);
        console.log(res);
        // TODO: 팝업창 닫기 props로 받아 실행시키고 새로고침 대신 모달창만 닫도록 개선할것
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    };

    const updateMessage = async () => {
      try {
        const targetDoc = doc(db, 'messages', `${message.uid}`);
        const res = await setDoc(targetDoc, message);
        console.log(res);
        // TODO: 새로고침 대신 모달창만 닫도록 개선할것
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    };

    const deleteMessage = async () => {
      try {
        const targetDoc = doc(db, 'messages', `${message.uid}`);
        await deleteDoc(targetDoc);
        // TODO: 새로고침 대신 모달창만 닫도록 개선할것
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    };

    if (method === '추가하기') {
      return createMessage();
    }

    if (method === '수정하기') {
      return updateMessage();
    }
    if (method === '삭제하기') {
      return deleteMessage();
    }
  };

  const onChange = e => {
    let { name, value } = e.target;
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
      {method === '삭제하기' ? (
        <div>
          <input type="submit" value={method} />
        </div>
      ) : (
        <>
          <div>
            <span>{`추천사 ${method}`}</span>
          </div>
          <div>
            <Input
              onChange={onChange}
              type="text"
              name="username"
              placeholder="성함을 입력해주세요."
            />
          </div>
          <div>
            <Input
              onChange={onChange}
              type="text"
              name="relation"
              placeholder="관계를 입력해주세요."
            />
          </div>
          <div>
            <Textarea
              onChange={onChange}
              name="bodyText"
              placeholder="남겨주신 한글자 한글자가 큰 힘이 됩니다. 감사합니다!!"
            />
          </div>
          <div>
            <Input type="submit" value={method} />
          </div>
        </>
      )}
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

const Input = styled.input`
  width: 400px;
`;

const Textarea = styled.textarea`
  width: 400px;
  height: 150px;
`;
