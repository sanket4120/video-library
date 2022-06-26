import { createContext } from 'react';
import { VideosProvider } from './videosContext';
import { CategoryProvider } from './categoryContext';
import { MessageProvider } from './messageContext';
import { UserProvider } from './userContext';

const initialilState = {};
const GlobalContext = createContext(initialilState);

const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={initialilState}>
      <MessageProvider>
        <UserProvider>
          <CategoryProvider>
            <VideosProvider>{children}</VideosProvider>
          </CategoryProvider>
        </UserProvider>
      </MessageProvider>
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };
