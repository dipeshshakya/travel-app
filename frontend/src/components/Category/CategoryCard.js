import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from 'react-query';

const CategoryCard = () => {
  const { data: categories } = useQuery('category', () => {
    return axios
      .get('http://localhost:1337/api/categories', {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .then((res) => {
        return res.data;
      });
  });
  console.log(categories);
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
