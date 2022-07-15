import axios from 'axios';
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  LIKE_ADD_VIDEO_REQUEST,
  LIKE_ADD_VIDEO_SUCCESS,
  LIKE_ADD_VIDEO_FAIL,
  LIKE_REMOVE_VIDEO_REQUEST,
  LIKE_REMOVE_VIDEO_FAIL,
  LIKE_REMOVE_VIDEO_SUCCESS,
  LIKES_REQUEST,
  LIKES_SUCCESS,
  LIKES_FAIL,
  WATCHLATER_ADD_VIDEO_REQUEST,
  WATCHLATER_ADD_VIDEO_SUCCESS,
  WATCHLATER_ADD_VIDEO_FAIL,
  WATCHLATER_REMOVE_VIDEO_REQUEST,
  WATCHLATER_REMOVE_VIDEO_SUCCESS,
  WATCHLATER_REMOVE_VIDEO_FAIL,
  WATCHLATER_REQUEST,
  WATCHLATER_SUCCESS,
  WATCHLATER_FAIL,
  HISTORY_REQUEST,
  HISTORY_SUCCESS,
  HISTORY_FAIL,
  HISTORY_ADD_VIDEO_REQUEST,
  HISTORY_ADD_VIDEO_SUCCESS,
  HISTORY_ADD_VIDEO_FAIL,
  HISTORY_REMOVE_VIDEO_REQUEST,
  HISTORY_REMOVE_VIDEO_SUCCESS,
  HISTORY_REMOVE_VIDEO_FAIL,
  CLEAR_HISTORY_REQUEST,
  CLEAR_HISTORY_SUCCESS,
  CLEAR_HISTORY_FAIL,
} from '../constants/userConstants';
import { setMessage } from './messageActions';

const signup = async (dispatch, setMessages, userDetails) => {
  dispatch({ type: USER_SIGNUP_REQUEST });

  try {
    const res = await axios.post('/api/auth/signup', {
      ...userDetails,
    });

    const { createdUser: user, encodedToken } = res.data;

    setMessage(setMessages, 'Signed Up successfully', 'success');

    dispatch({ type: USER_SIGNUP_SUCCESS, payload: { user, encodedToken } });
  } catch (e) {
    const errors = e.response.data.errors;

    if (errors) {
      errors.map((error) => setMessage(setMessages, error, 'danger'));
    }

    dispatch({ type: USER_SIGNUP_FAIL, payload: errors });
  }
};

const login = async (dispatch, setMessages, loginCredentials) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  try {
    const res = await axios.post('/api/auth/login', {
      ...loginCredentials,
    });

    const { foundUser: user, encodedToken } = res.data;

    setMessage(setMessages, 'Logged in successfully', 'success');

    dispatch({ type: USER_LOGIN_SUCCESS, payload: { user, encodedToken } });
  } catch (e) {
    const errors = e.response.data.errors;
    if (errors) {
      errors.map((error) => setMessage(setMessages, error, 'danger'));
    }

    dispatch({ type: USER_LOGIN_FAIL, payload: errors });
  }
};

const logout = (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  document.location.href = '/';
};

const addToLikedVideos = async (dispatch, setMessages, video) => {
  dispatch({ type: LIKE_ADD_VIDEO_REQUEST });
  try {
    const res = await axios.post('/api/user/likes', { video });
    dispatch({
      type: LIKE_ADD_VIDEO_SUCCESS,
      payload: res.data.likes,
    });
    setMessage(setMessages, `Added to liked videos`, 'success');
  } catch (e) {
    const errors = e.response.data.errors;
    if (errors) {
      errors.map((error) => setMessage(setMessages, error, 'danger'));
    }

    dispatch({ type: LIKE_ADD_VIDEO_FAIL, payload: errors });
  }
};

const removeFromLikedVideos = async (dispatch, setMessages, video) => {
  dispatch({ type: LIKE_REMOVE_VIDEO_REQUEST });
  try {
    const res = await axios.delete(`/api/user/likes/${video._id}`);
    dispatch({
      type: LIKE_REMOVE_VIDEO_SUCCESS,
      payload: res.data.likes,
    });
    setMessage(setMessages, `Removed from liked videos`, 'success');
  } catch (e) {
    const errors = e.response.data.errors;
    if (errors) {
      errors.map((error) => setMessage(setMessages, error, 'danger'));
    }

    dispatch({ type: LIKE_REMOVE_VIDEO_FAIL, payload: errors });
  }
};

const getLikedVideos = async (dispatch) => {
  dispatch({ type: LIKES_REQUEST });
  try {
    const res = await axios.get('/api/user/likes');
    dispatch({ type: LIKES_SUCCESS, payload: res.data.likes });
  } catch (e) {
    dispatch({ type: LIKES_FAIL, payload: 'Server Error' });
  }
};

const addToWatchLater = async (dispatch, setMessages, video) => {
  dispatch({ type: WATCHLATER_ADD_VIDEO_REQUEST });
  try {
    const res = await axios.post('/api/user/watchlater', { video });
    dispatch({
      type: WATCHLATER_ADD_VIDEO_SUCCESS,
      payload: res.data.watchlater,
    });
    setMessage(setMessages, `Added to watch later`, 'success');
  } catch (e) {
    const errors = e.response.data.errors;
    if (errors) {
      errors.map((error) => setMessage(setMessages, error, 'danger'));
    }

    dispatch({ type: WATCHLATER_ADD_VIDEO_FAIL, payload: errors });
  }
};

const removeFromWatchLater = async (dispatch, setMessages, video) => {
  dispatch({ type: WATCHLATER_REMOVE_VIDEO_REQUEST });
  try {
    const res = await axios.delete(`/api/user/watchlater/${video._id}`);
    dispatch({
      type: WATCHLATER_REMOVE_VIDEO_SUCCESS,
      payload: res.data.watchlater,
    });
    setMessage(setMessages, `Removed from watch later`, 'success');
  } catch (e) {
    const errors = e.response.data.errors;
    if (errors) {
      errors.map((error) => setMessage(setMessages, error, 'danger'));
    }

    dispatch({ type: WATCHLATER_REMOVE_VIDEO_FAIL, payload: errors });
  }
};

const getWatchLater = async (dispatch) => {
  dispatch({ type: WATCHLATER_REQUEST });
  try {
    const res = await axios.get('/api/user/watchlater');
    dispatch({ type: WATCHLATER_SUCCESS, payload: res.data.watchlater });
  } catch (e) {
    dispatch({ type: WATCHLATER_FAIL, payload: 'Server Error' });
  }
};

const getHistory = async (dispatch) => {
  dispatch({ type: HISTORY_REQUEST });
  try {
    const res = await axios.get('/api/user/history');
    dispatch({ type: HISTORY_SUCCESS, payload: res.data.history });
  } catch (e) {
    dispatch({ type: HISTORY_FAIL, payload: 'Server Error' });
  }
};

const addToHistory = async (dispatch, setMessages, video) => {
  dispatch({ type: HISTORY_ADD_VIDEO_REQUEST });
  try {
    const res = await axios.post('/api/user/history', { video });
    dispatch({
      type: HISTORY_ADD_VIDEO_SUCCESS,
      payload: res.data.history,
    });
  } catch (e) {
    const errors = e.response.data.errors;
    if (errors) {
      errors.map((error) => setMessage(setMessages, error, 'danger'));
    }

    dispatch({ type: HISTORY_ADD_VIDEO_FAIL, payload: errors });
  }
};

const removeFromHistory = async (dispatch, setMessages, video) => {
  dispatch({ type: HISTORY_REMOVE_VIDEO_REQUEST });
  try {
    const res = await axios.delete(`/api/user/history/${video._id}`);
    dispatch({
      type: HISTORY_REMOVE_VIDEO_SUCCESS,
      payload: res.data.history,
    });
    setMessage(setMessages, `Removed from history`, 'success');
  } catch (e) {
    const errors = e.response.data.errors;
    if (errors) {
      errors.map((error) => setMessage(setMessages, error, 'danger'));
    }

    dispatch({ type: HISTORY_REMOVE_VIDEO_FAIL, payload: errors });
  }
};

const clearHistory = async (dispatch, setMessages) => {
  dispatch({ type: CLEAR_HISTORY_REQUEST });
  try {
    const res = await axios.delete('/api/user/history/all');
    dispatch({ type: CLEAR_HISTORY_SUCCESS, payload: res.data.history });
    setMessage(setMessages, `History cleared`, 'success');
  } catch (e) {
    console.log(e);
    const errors = e.response.data.errors;
    if (errors) {
      errors.map((error) => setMessage(setMessages, error, 'danger'));
    }

    dispatch({ type: CLEAR_HISTORY_FAIL, payload: 'Server Error' });
  }
};

export {
  signup,
  login,
  logout,
  addToLikedVideos,
  removeFromLikedVideos,
  getLikedVideos,
  addToWatchLater,
  removeFromWatchLater,
  getWatchLater,
  getHistory,
  addToHistory,
  removeFromHistory,
  clearHistory,
};
