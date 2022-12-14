import React from 'react';
import Card from './Card';

const FeatureDestination = () => {
  return (
    <div className="container relative p-8 md:p-32">
      <h1 className="text-black font-bold text-2xl md:text-4xl mb-1 ">Popular Destinations</h1>
      <p className='mb-8 text-inherit text-base'>
        From historical cities to natural spendours come see the best of the
        world!
      </p>
      <Card />
    </div>
  );
};

export default FeatureDestination;
