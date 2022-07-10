import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  LIKE_REMOVE_VIDEO_REQUEST,
  LIKE_ADD_VIDEO_REQUEST,
  LIKE_REMOVE_VIDEO_SUCCESS,
  LIKE_ADD_VIDEO_SUCCESS,
  LIKE_REMOVE_VIDEO_FAIL,
  LIKE_ADD_VIDEO_FAIL,
  LIKES_REQUEST,
  LIKES_SUCCESS,
  LIKES_FAIL,
  WATCHLATER_REMOVE_VIDEO_REQUEST,
  WATCHLATER_ADD_VIDEO_REQUEST,
  WATCHLATER_REQUEST,
  WATCHLATER_REMOVE_VIDEO_SUCCESS,
  WATCHLATER_ADD_VIDEO_SUCCESS,
  WATCHLATER_SUCCESS,
  WATCHLATER_REMOVE_VIDEO_FAIL,
  WATCHLATER_ADD_VIDEO_FAIL,
  WATCHLATER_FAIL,
  HISTORY_REMOVE_VIDEO_REQUEST,
  HISTORY_ADD_VIDEO_REQUEST,
  HISTORY_REQUEST,
  HISTORY_REMOVE_VIDEO_SUCCESS,
  HISTORY_ADD_VIDEO_SUCCESS,
  HISTORY_SUCCESS,
  HISTORY_REMOVE_VIDEO_FAIL,
  HISTORY_ADD_VIDEO_FAIL,
  HISTORY_FAIL,
  CLEAR_HISTORY_REQUEST,
  CLEAR_HISTORY_SUCCESS,
  CLEAR_HISTORY_FAIL,
  GET_PLAYLISTS_REQUEST,
  GET_PLAYLISTS_SUCCESS,
  GET_PLAYLISTS_FAIL,
  CREATE_PLAYLIST_REQUEST,
  CREATE_PLAYLIST_SUCCESS,
  CREATE_PLAYLIST_FAIL,
  DELETE_PLAYLIST_REQUEST,
  DELETE_PLAYLIST_SUCCESS,
  DELETE_PLAYLIST_FAIL,
  ADD_TO_PLAYLIST_REQUEST,
  ADD_TO_PLAYLIST_SUCCESS,
  ADD_TO_PLAYLIST_FAIL,
  REMOVE_FROM_PLAYLIST_REQUEST,
  REMOVE_FROM_PLAYLIST_SUCCESS,
  REMOVE_FROM_PLAYLIST_FAIL,
} from '../constants/userConstants';

const initialState = {};

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

const likesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIKE_REMOVE_VIDEO_REQUEST:
    case LIKE_ADD_VIDEO_REQUEST:
    case LIKES_REQUEST:
      return { ...state, loading: true, error: false };
    case LIKE_REMOVE_VIDEO_SUCCESS:
    case LIKE_ADD_VIDEO_SUCCESS:
    case LIKES_SUCCESS:
      return { ...state, loading: false, likedVideos: payload };
    case LIKE_REMOVE_VIDEO_FAIL:
    case LIKE_ADD_VIDEO_FAIL:
    case LIKES_FAIL:
      return { loading: false, likedVideos: [], error: payload };
    default:
      return state;
  }
};

const watchLaterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case WATCHLATER_REMOVE_VIDEO_REQUEST:
    case WATCHLATER_ADD_VIDEO_REQUEST:
    case WATCHLATER_REQUEST:
      return { ...state, loading: true, error: false };
    case WATCHLATER_REMOVE_VIDEO_SUCCESS:
    case WATCHLATER_ADD_VIDEO_SUCCESS:
    case WATCHLATER_SUCCESS:
      return { ...state, loading: false, watchlater: payload };
    case WATCHLATER_REMOVE_VIDEO_FAIL:
    case WATCHLATER_ADD_VIDEO_FAIL:
    case WATCHLATER_FAIL:
      return { loading: false, watchlater: [], error: payload };
    default:
      return state;
  }
};

const historyReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLEAR_HISTORY_REQUEST:
    case HISTORY_REMOVE_VIDEO_REQUEST:
    case HISTORY_ADD_VIDEO_REQUEST:
    case HISTORY_REQUEST:
      return { ...state, loading: true, error: false };
    case CLEAR_HISTORY_SUCCESS:
    case HISTORY_REMOVE_VIDEO_SUCCESS:
    case HISTORY_ADD_VIDEO_SUCCESS:
    case HISTORY_SUCCESS:
      return { ...state, loading: false, history: payload };
    case CLEAR_HISTORY_FAIL:
    case HISTORY_REMOVE_VIDEO_FAIL:
    case HISTORY_ADD_VIDEO_FAIL:
    case HISTORY_FAIL:
      return { loading: false, history: [], error: payload };
    default:
      return state;
  }
};

const playlistReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PLAYLISTS_REQUEST:
    case CREATE_PLAYLIST_REQUEST:
    case DELETE_PLAYLIST_REQUEST:
    case ADD_TO_PLAYLIST_REQUEST:
    case REMOVE_FROM_PLAYLIST_REQUEST:
      return { ...state, loading: true, error: false };

    case GET_PLAYLISTS_SUCCESS:
    case CREATE_PLAYLIST_SUCCESS:
    case DELETE_PLAYLIST_SUCCESS:
      return { ...state, loading: false, playlists: payload };

    case REMOVE_FROM_PLAYLIST_SUCCESS:
    case ADD_TO_PLAYLIST_SUCCESS:
      const playlists = state.playlists;
      playlists.forEach((item) => {
        if (item._id === payload._id) {
          item.videos = payload.videos;
        }
      });
      return { ...state, loading: false, playlists };

    case GET_PLAYLISTS_FAIL:
    case CREATE_PLAYLIST_FAIL:
    case DELETE_PLAYLIST_FAIL:
    case ADD_TO_PLAYLIST_FAIL:
    case REMOVE_FROM_PLAYLIST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export {
  initialState,
  authReducer,
  likesReducer,
  watchLaterReducer,
  historyReducer,
  playlistReducer,
};
