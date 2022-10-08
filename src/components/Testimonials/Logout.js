import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logoutInitiate } from '../../redux/actions';

function Logout({ setIsLoggedIn }) {
  const dispatch = useDispatch();

  const handleAuth = async () => {
    await dispatch(logoutInitiate());
    window.localStorage.clear(); // 로컬스토리지 저장내용 전체삭제
    return setIsLoggedIn(prev => false);
  };

  return <LogoutButton onClick={handleAuth}>Logout</LogoutButton>;
}

export default Logout;

const LogoutButton = styled.div`
  font-family: 'Oswald', sans-serif;
  cursor: pointer;
  border-bottom: 2px solid #000000;
  &:hover {
    color: red;
  }
`;
