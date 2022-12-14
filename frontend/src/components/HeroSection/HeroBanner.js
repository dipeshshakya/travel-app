import React from 'react';
import SearchBar from './SearchBar';

const HeroBanner = () => {
  return (
    <div className="container-fluid flex flex-col items-center bg-blend-darken justify-center  w-full h-[80vh] bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')] bg-cover bg-no-repeat bg-center">
      <h1 className=" mt-20 font-bold text-white text-center  text-5xl">
        Plan your Trip with Gokyo
      </h1>
      <SearchBar/>
    </div>
  );
};

export default HeroBanner;
