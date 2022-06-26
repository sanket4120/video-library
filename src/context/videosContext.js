import { createContext, useReducer, useContext } from 'react';
import { initialState, videoListReducer } from '../reducers/videoReducer';
import { filterVideos } from '../utils/filter';

const VideosContext = createContext(initialState);

const VideosProvider = ({ children }) => {
  const [videoListState, setVideoList] = useReducer(
    videoListReducer,
    initialState
  );

  const { videos, filters } = videoListState;
  const filteredVideos = filterVideos(videos, filters);

  return (
    <VideosContext.Provider
      value={{
        videoListState,
        setVideoList,
        filteredVideos,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { useVideos, VideosProvider };
