import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuickAccess from './components/QuickAccess';
import NearbyFacilities from './components/NearbyFacilities';
import LiveResourceMap from './components/LiveResourceMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <QuickAccess />
        <NearbyFacilities />
        <LiveResourceMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
