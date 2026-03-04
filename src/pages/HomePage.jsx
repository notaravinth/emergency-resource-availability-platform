import React from 'react';
import HeroSection from '../components/HeroSection';
import QuickAccess from '../components/QuickAccess';
import NearbyFacilities from '../components/NearbyFacilities';
import LiveResourceMap from '../components/LiveResourceMap';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <QuickAccess />
      <NearbyFacilities />
      <LiveResourceMap />
    </>
  );
};

export default HomePage;
