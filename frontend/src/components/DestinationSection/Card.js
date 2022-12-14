import React from 'react';

const Card = () => {
  return (
    <div className="container w-full md:w-[300px] clear-both">
      <img
        src="https://images.unsplash.com/photo-1670987117206-6b5328d6c126"
        alt=""
        className="aspect-square object-fit rounded-t-lg mb-8"
      />
      <div className="container flex items-center justify-between">
        <span className="text-5xl">01</span>
        <h2 className="text-xl font-bold ">Pokhara</h2>
      </div>
    </div>
  );
};

export default Card;
