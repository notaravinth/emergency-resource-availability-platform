import React, { useState } from 'react';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Search logic will be implemented later
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Find Critical Medical
          <br />
          Resources Instantly
        </h1>
        
        {/* Subheading */}
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Track real-time availability of hospital beds, blood banks, and ambulances in your area.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for hospitals, blood banks, location..."
              className="w-full pl-12 pr-4 py-4 rounded-lg text-white-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
