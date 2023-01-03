import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getSingleTour } from '../../api/getSingleTour';
const Detail = () => {
  const { Slug } = useParams();
  const { data } = useQuery(['singleTour', Slug], () => getSingleTour(Slug));
  // console.log(data);

  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                NEW
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                {data?.Title}
              </h1>

              <p class="leading-relaxed mb-4">{data?.Description}</p>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Group Size</span>
                <span class="ml-auto text-gray-900">{data?.Group}</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Difficulty Level</span>
                <span class="ml-auto text-gray-900">{data?.Difficulty}</span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">Altitude</span>
                <span class="ml-auto text-gray-900">{data?.Altitude}ft</span>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Book Now
                </button>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={
                process.env.REACT_APP_API_URL + data?.Image?.data.attributes.url
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
