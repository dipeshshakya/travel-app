import React, { createContext, useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { getAllTour } from './api/getAllTour';

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const onSuccess = (data) => {
    setData(data);
  };

  // eslint-disable-next-line no-unused-vars
  const { data: tour, isLoading } = useQuery('tour', getAllTour, {
    onSuccess: onSuccess,
  });

  return (
    <>
      <FilterContext.Provider
        value={{
          data,
          setData,
          filterData,
          setFilterData,
        }}
      >
        {children}
      </FilterContext.Provider>
    </>
  );
};

export default FilterProvider;
export const useFilterContext = () => {
  return useContext(FilterContext);
};
