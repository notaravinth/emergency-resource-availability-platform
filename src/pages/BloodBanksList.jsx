import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BloodBanksList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const bloodBanks = [
    {
      id: 1,
      name: 'Central City Blood Bank',
      address: '123 Medical Plaza, Central City',
      distance: '1.8 km',
      availability: 'Available',
      criticalTypes: 2,
      totalUnits: 450,
      status: 'open',
      phone: '(555) 123-4567'
    },
    {
      id: 2,
      name: 'Indraprastha Blood Bank',
      address: '456 Health Avenue, Delhi',
      distance: '2.3 km',
      availability: 'Available',
      criticalTypes: 0,
      totalUnits: 380,
      status: 'open',
      phone: '(555) 234-5678'
    },
    {
      id: 3,
      name: 'Red Cross Society Blood Bank',
      address: '789 Care Street, Delhi',
      distance: '3.1 km',
      availability: 'Limited',
      criticalTypes: 3,
      totalUnits: 220,
      status: 'open',
      phone: '(555) 345-6789'
    },
    {
      id: 4,
      name: 'Apollo Blood Bank',
      address: '321 Medical Road, Delhi',
      distance: '4.5 km',
      availability: 'Available',
      criticalTypes: 1,
      totalUnits: 520,
      status: 'open',
      phone: '(555) 456-7890'
    }
  ];

  const filteredBloodBanks = bloodBanks.filter(bank =>
    bank.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bank.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Blood Banks</h1>
          <p className="text-gray-600">Find nearby blood banks with real-time availability</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blood banks by name or location..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Blood Banks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBloodBanks.map((bank) => (
            <button
              key={bank.id}
              onClick={() => navigate(`/blood-banks/${bank.id}`)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-blue-300 cursor-pointer overflow-hidden text-left w-full"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{bank.name}</h3>
                      <p className="text-sm text-gray-600">{bank.distance} away</p>
                    </div>
                  </div>
                  <span 
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      bank.availability === 'Available' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {bank.availability}
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 mb-4">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 text-sm">{bank.address}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Total Units</p>
                    <p className="text-lg font-bold text-gray-900">{bank.totalUnits}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Critical Types</p>
                    <p className={`text-lg font-bold ${bank.criticalTypes > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {bank.criticalTypes}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Contact</p>
                    <button className="text-blue-500 hover:text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredBloodBanks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blood banks found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BloodBanksList;
