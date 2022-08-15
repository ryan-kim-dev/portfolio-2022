import * as types from './actionTypes';

import { auth, provider } from '../firebase';
import {
  signInWithPopup,
  getAuth,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';

provider.addScope(
  'https://62ea948909db4a0061aa95a2--neon-kleicha-5f51ad.netlify.app'
);

const logoutStart = () => ({
  type: types.LOGOUT_START,
});
const logoutSuccess = user => ({
  type: types.LOGOUT_SUCCESS,
});
const logoutFail = error => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

// * 깃허브
const githubSignInStart = () => ({
  type: types.GITHUB_SIGN_IN_START,
});
const githubSignInSuccess = user => ({
  type: types.GITHUB_SIGN_IN_SUCCESS,
  payload: user,
});
const githubSignInFail = error => ({
  type: types.GITHUB_SIGN_IN_FAIL,
  payload: error,
});

export const setUser = user => ({
  type: types.SET_USER,
  payload: user,
});

// * 로그아웃 버튼 클릭시 실행
export const logoutInitiate = () => {
  return async function (dispatch) {
    dispatch(logoutStart);
    const auth = getAuth();
    await signOut(auth)
      .then(res => {
        // Sign-out successful.
        const loginStatus = false;
        localStorage.setItem('loginStatus', loginStatus);
        return dispatch(logoutSuccess());
      })
      .catch(error => {
        // An error happened.
        return dispatch(logoutFail(error.message));
      });
  };
};

// * 깃허브 로그인 버튼 클릭시 실행
export const githubSignInInitiate = () => {
  return async function (dispatch) {
    dispatch(githubSignInStart);

    await setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithPopup(auth, provider);
      })
      .then(({ user }) => {
        if (user) {
          // console.log(user);
          const displayName = user.displayName;
          const photoURL = user.photoURL;
          const uid = user.uid;
          const loginStatus = true;
          localStorage.setItem('displayName', displayName);
          localStorage.setItem('photoURL', photoURL);
          localStorage.setItem('loginStatus', loginStatus);
          localStorage.setItem('uid', uid);
          return dispatch(githubSignInSuccess(user));
        }
      })
      .catch(error => dispatch(githubSignInFail(error.message)));
  };
};
