/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useMemo } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getSingleCategory } from '../../api/getSingleCategory';
import CategorypageContext from '../../contextApi/CategorypageContext';
import CategoryPageLayout from '../../Layout/CategoryPageLayout';

const ListTourByCategory = () => {
  const { tour, setTours } = useContext(CategorypageContext);
  const { Slug } = useParams();

  const fetchtour = useMemo(() => getSingleCategory(Slug), [Slug]);
  console.log(fetchtour);
  setTours(fetchtour);
  return (
    <CategoryPageLayout>
      <div className="card flex flex-col md:flex-row md:justify-between items-center">
        {tour?.map((item, key) => (
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
    </CategoryPageLayout>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export, no-undef
export default ListTourByCategory;
