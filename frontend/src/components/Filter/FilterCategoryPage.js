import React, { useContext } from 'react';
import CategorypageContext from '../../contextApi/CategorypageContext';

const FilterCategoryPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { tour, setTours } = useContext(CategorypageContext);
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
        <select className="p-2 m-2">
          <option value="">3000</option>
          <option value="">4000</option>
          <option value="">5000+</option>
        </select>
      </div>
    </>
  );
};

export default FilterCategoryPage;
