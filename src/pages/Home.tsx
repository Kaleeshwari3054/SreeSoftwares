import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import GlobalStats from '../components/GlobalStats';

const Home = () => {
  return (
    <div>
      <Hero />
      <GlobalStats />
      <Features />
    </div>
  );
};

export default Home;