import React from 'react';
import { useFilterContext } from '../../contextApi/CategorypageContext';

const FilterCategoryPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { filterByAltitude } = useFilterContext();
  return (
    <>
      <div className="flex flex-col p-4">
        <input type="text" placeholder="Search" className="p-2 m-2" />
        <label className="m-2 font-semibold">Difficulty Level</label>
        <select className="p-2 m-2">
          <option value="">Easy</option>
          <option value="">Medium</option>
          <option value="">Hard</option>
        </select>
        <label className="m-2 font-semibold">Altitude</label>
        <select
          className="p-2 m-2"
          onChange={(e) => filterByAltitude(e.target.value)}
        >
          <option value="3000">3000</option>
          <option value="4000">4000</option>
          <option value="5000">5000+</option>
        </select>
      </div>
    </>
  );
};

export default FilterCategoryPage;
