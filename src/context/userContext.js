import { createContext, useContext, useReducer, useEffect } from 'react';
import {
  getHistory,
  getLikedVideos,
  getWatchLater,
} from '../actions/userActions';
import {
  initialState,
  authReducer,
  likesReducer,
  watchLaterReducer,
  historyReducer,
} from '../reducers/userReducer';
import { setAuthToken } from '../utils/setAuthToken';

const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [authState, setAuth] = useReducer(authReducer, initialState);
  const [likesState, setLikes] = useReducer(likesReducer, initialState);
  const [watchLaterState, setWatchLater] = useReducer(
    watchLaterReducer,
    initialState
  );
  const [historyState, setHistory] = useReducer(historyReducer, initialState);

  useEffect(() => {
    if (authState.isAuthenticated) {
      const encodedToken = localStorage.getItem('token');
      setAuthToken(encodedToken);
      getLikedVideos(setLikes);
      getWatchLater(setWatchLater);
      getHistory(setHistory);
    } else {
      localStorage.removeItem('token');
    }
  }, [authState]);

  return (
    <UserContext.Provider
      value={{
        authState,
        setAuth,
        likesState,
        setLikes,
        watchLaterState,
        setWatchLater,
        historyState,
        setHistory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
