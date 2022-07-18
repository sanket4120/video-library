import { createContext } from 'react';
import { VideosProvider } from './videosContext';
import { CategoryProvider } from './categoryContext';
import { MessageProvider } from './messageContext';
import { UserProvider } from './userContext';
import { PlaylistModalProvider } from './playlistModalContext';

const initialilState = {};
const GlobalContext = createContext(initialilState);

const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={initialilState}>
      <MessageProvider>
        <VideosProvider>
          <UserProvider>
            <CategoryProvider>
              <PlaylistModalProvider>{children}</PlaylistModalProvider>
            </CategoryProvider>
          </UserProvider>
        </VideosProvider>
      </MessageProvider>
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };
