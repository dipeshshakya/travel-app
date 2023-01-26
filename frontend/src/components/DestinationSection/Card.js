import React from 'react';
import { Link } from 'react-router-dom';

import { useFilterContext } from '../../FilterProvider';
const Card = () => {
  const { data: tour } = useFilterContext();

  return (
    <div className="card flex flex-col md:flex-row md:justify-between items-center">
      {tour?.data.map((item, key) => (
        <Link to={`/tour/${item.attributes.Slug}`}>
          <div className="item my-2 md:mx-2" id={++key}>
            <img
              src={
                process.env.REACT_APP_API_URL +
                item.attributes.Image.data.attributes.formats.thumbnail.url
              }
              alt=""
              className="aspect-square w-full  object-fit rounded-t-lg mb-2 md:mb-8"
            />
            <div className=" flex items-center justify-between">
              <span className="text-5xl"></span>
              <h2 className="text-xl font-bold ">{item.attributes.Title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
