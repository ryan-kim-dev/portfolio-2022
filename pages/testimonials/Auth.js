import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { githubSignInInitiate } from '../../redux/actions';
import Logout from './Logout';
// import AddMessage from './AddMessage';
import Links from './Links';
// import { getAuth, onAuthStateChanged } from 'firebase/auth'; // 추가
import { auth } from '../../firebase';

function Auth() {
  const dispatch = useDispatch();

  // * 로그인 상태 state
  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const loginStatus = 'true';
        localStorage.setItem('loginStatus', loginStatus);
        setIsLoggedIn(true);
      } else {
        const loginStatus = 'false';
        localStorage.setItem('loginStatus', loginStatus);
        setIsLoggedIn(false);
      }
    });
  }, []);

  // * 로그인버튼
  const handleGithubSignIn = async () => {
    dispatch(githubSignInInitiate());
    console.log(isLoggedin ? 'true' : 'false'); // 불필요한 코드인데 린트 에러때문에 임시로 넣음
  };

  return (
    <AuthWrapper>
      {localStorage.loginStatus === 'true' ? (
        <>
          <UserInfoArea>
            <div>
              <UserPic
                crossOrigin="anonymous"
                src={localStorage.getItem('photoURL')}
                alt="profile"
              />
            </div>
            <div>{localStorage.displayName}님, 반갑습니다!</div>
          </UserInfoArea>
          <Links />
          <Logout setIsLoggedIn={setIsLoggedIn} />
        </>
      ) : (
        <SignUpArea>
          <LoginButton name="github">
            <ButtonTextWrapper>
              <AiFillGithub />
              <span onClick={handleGithubSignIn}>깃허브 로그인</span>
            </ButtonTextWrapper>
          </LoginButton>
        </SignUpArea>
      )}
    </AuthWrapper>
  );
}

export default Auth;

const AuthWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* justify-content: space-between; */
  width: max-content;
  /* height: 50px; */
`;

const UserInfoArea = styled.div`
  display: flex;
  column-gap: 0.7rem;
`;

const UserPic = styled.img`
  width: 30px;
  border-radius: 50%;
`;

const LoginButton = styled.button`
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: black;
  outline: none;
  border: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:before {
    background: #fff;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

const ButtonTextWrapper = styled.div`
  font-size: 16px;
  svg {
    position: relative;
    top: 2px;
    right: 6px;
  }
`;

const SignUpArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
