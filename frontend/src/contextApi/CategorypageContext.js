// MyContext.js
import { createContext, useContext, useReducer } from 'react';
import filterReducer from '../Reducer/filterReducer';
const FilterContext = createContext();

const initialState = {
  filter_tours: [],
  all_tours: [],
  filters: {
    text: '',
  },
};

const CategorypageContext = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const filterByAltitude = (val) => {
    console.log(val);
  };

  const tourByCategory = (tour) => {
    dispatch({ type: 'LOAD_TOURS', payload: tour });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        filterByAltitude,
        tourByCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default CategorypageContext;
