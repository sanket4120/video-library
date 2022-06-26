import { createContext, useReducer, useContext } from 'react';
import {
  initialState,
  videoDetailsReducer,
  videoListReducer,
} from '../reducers/videoReducer';
import { filterVideos } from '../utils/filter';

const VideosContext = createContext(initialState);

const VideosProvider = ({ children }) => {
  const [videoListState, setVideoList] = useReducer(
    videoListReducer,
    initialState.videoList
  );
  const [videoDetailsState, setVideoDetails] = useReducer(
    videoDetailsReducer,
    initialState.video
  );

  const { videos, filters } = videoListState;
  const filteredVideos = filterVideos(videos, filters);

  return (
    <VideosContext.Provider
      value={{
        videoListState,
        setVideoList,
        filteredVideos,
        videoDetailsState,
        setVideoDetails,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { useVideos, VideosProvider };
