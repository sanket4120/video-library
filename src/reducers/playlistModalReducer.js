import {
  CLOSE_PLAYLIST_MODAL,
  SHOW_PLAYLIST_MODAL,
} from '../constants/playlistModalConstants';

const initialState = { isOpen: false };

const playlistModalReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SHOW_PLAYLIST_MODAL:
      return { isOpen: true, video: payload };
    case CLOSE_PLAYLIST_MODAL:
      return {
        isOpen: false,
      };
    default:
      return state;
  }
};

export { playlistModalReducer, initialState };
