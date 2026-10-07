import Banner from '@/components/homepage/Banner';
import Workout from '@/components/homepage/Workout';
import React from 'react';

const HomePage = () => {
  return (
    <div className='container mx-auto px-5 md:px-0'>
      <Banner></Banner>
      <Workout></Workout>
    </div>
  );
};

export default HomePage;