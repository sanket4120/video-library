import {
  CLOSE_PLAYLIST_MODAL,
  SHOW_PLAYLIST_MODAL,
} from '../constants/playlistModalConstants';

const openPlaylistModal = (dispatch, video) => {
  dispatch({ type: SHOW_PLAYLIST_MODAL, payload: video });
};

const closePlaylistModal = (dispatch) => {
  dispatch({ type: CLOSE_PLAYLIST_MODAL });
};

export { openPlaylistModal, closePlaylistModal };
