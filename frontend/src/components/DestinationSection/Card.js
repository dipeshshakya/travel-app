import React from 'react';
import { Link } from 'react-router-dom';

import { useFilterContext } from '../../FilterProvider';
const Card = () => {
  const { data } = useFilterContext();
  // console.log(data);

  return (
    <div className="card flex flex-col md:flex-row md:justify-between items-center">
      {data?.data?.map((item, i) => (
        <Link to={`/tour/${item.attributes.Slug}`} key={i}>
          <div className="item my-2 md:mx-2">
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
