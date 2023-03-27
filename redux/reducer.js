// * Reducer.js : 스토어의 기본 상태와 상태의 업데이트를 담당하는 코드
import * as types from './actionTypes';
const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGOUT_START:
    case types.GITHUB_SIGN_IN_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };

    case types.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };

    case types.GITHUB_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };

    case types.LOGOUT_FAIL:
    case types.GITHUB_SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
