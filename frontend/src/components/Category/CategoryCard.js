import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from 'react-query';
import { getAllCategory } from '../../api/getAllCategory';

const CategoryCard = () => {
  const { data: categories } = useQuery('category', getAllCategory);
  return (
    <>
      <div className="container flex justify-center items-center clear-both mx-auto md:px-20">
        {categories?.data.map((category, key) => (
          <div className="p-10 m-4 bg-gray-50 w-1/4	 drop-shadow-sm" key={key}>
            <Link to={`/tour/category/${category.attributes.Slug}`}>
              <h1 className="text-lg font-semibold text-center">
                {category.attributes.Title}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryCard;
