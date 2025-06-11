import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedJobs from '../components/Home/FeaturedJobs';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedJobs />
    </div>
  );
};

export default HomePage;