import React from 'react';
import FilterCategoryPage from '../components/Filter/FilterCategoryPage';

const CategoryPageLayout = ({ children }) => {
  return (
    <>
      <div className="container-fluid flex flex-row ">
        <div className="filter__container container w-1/4  bg-slate-50 p-4 h-[100vh]">
          <FilterCategoryPage />
        </div>
        <div className="container w-3/4 p-10">{children}</div>
      </div>
    </>
  );
};

export default CategoryPageLayout;
