import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logoutInitiate } from '../../redux/actions';

function Logout({ setIsLoggedIn }) {
  // const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleAuth = async () => {
    await dispatch(logoutInitiate());
    return setIsLoggedIn(false);
    // if (currentUser) {
    //   await dispatch(logoutInitiate());
    //   const loginStatus = false;
    //   localStorage.setItem('loginStatus', loginStatus);
    //   return setIsLoggedIn(false);
    // }
  };

  return <LogoutButton onClick={handleAuth}>Logout</LogoutButton>;
}

export default Logout;

const LogoutButton = styled.div`
  cursor: pointer;
`;
