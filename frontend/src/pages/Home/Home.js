import React from 'react';
import CategoryCard from '../../components/Category/CategoryCard';
import FeatureDestination from '../../components/DestinationSection/FeatureDestination';
import HeroBanner from '../../components/HeroSection/HeroBanner';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <FeatureDestination />
      <CategoryCard />
    </div>
  );
};

export default Home;
