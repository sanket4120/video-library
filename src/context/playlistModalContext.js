import { createContext, useReducer, useContext } from 'react';
import {
  playlistModalReducer,
  initialState,
} from '../reducers/playlistModalReducer';

const PlaylistModalContext = createContext(initialState);

const PlaylistModalProvider = ({ children }) => {
  const [playlistModalState, setPlaylistModal] = useReducer(
    playlistModalReducer,
    initialState
  );

  return (
    <PlaylistModalContext.Provider
      value={{ playlistModalState, setPlaylistModal }}
    >
      {children}
    </PlaylistModalContext.Provider>
  );
};

const usePlaylistModal = () => useContext(PlaylistModalContext);

export { PlaylistModalProvider, usePlaylistModal };
