import { createContext } from 'react';
import { VideosProvider } from './videosContext';
import { CategoryProvider } from './categoryContext';

const initialilState = {};
const GlobalContext = createContext(initialilState);

const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={initialilState}>
      <CategoryProvider>
        <VideosProvider>{children}</VideosProvider>
      </CategoryProvider>
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };
