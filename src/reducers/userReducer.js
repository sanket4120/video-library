import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
} from '../constants/userConstants';

const initialState = {
  auth: {},
};

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST:
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
    case USER_LOGIN_SUCCESS:
      localStorage.setItem('token', payload.encodedToken);
      return { loading: false, userInfo: payload.user, isAuthenticated: true };
    case USER_SIGNUP_FAIL:
    case USER_LOGIN_FAIL:
      return { loading: false, error: payload };
    case USER_LOGOUT:
      localStorage.removeItem('token');
      return {};
    default:
      return state;
  }
};

export { initialState, authReducer };
