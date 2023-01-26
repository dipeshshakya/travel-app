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

  const { data: tour } = useQuery('tour', getAllTour, { onSuccess: onSuccess });
  console.log(tour);

  const onChangeLocation = () => {
    console.log('first');
  };
  const onChangePrice = () => {
    console.log('second');
  };
  const onChangeGroupSize = () => {
    console.log('third');
  };

  return (
    <>
      <FilterContext.Provider
        value={{
          data,
          setData,
          filterData,
          setFilterData,
          onChangeLocation,
          onChangePrice,
          onChangeGroupSize,
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
