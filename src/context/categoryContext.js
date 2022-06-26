import { createContext, useReducer, useContext } from 'react';
import { categoryReducer } from '../reducers/categoryReducer';

const initialState = { categories: [] };

const CategoryContext = createContext(initialState);

const CategoryProvider = ({ children }) => {
  const [categoryState, setCategory] = useReducer(
    categoryReducer,
    initialState
  );

  return (
    <CategoryContext.Provider value={{ categoryState, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
