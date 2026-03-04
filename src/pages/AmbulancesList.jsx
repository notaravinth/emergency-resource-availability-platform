import React, { useState } from 'react';

const AmbulancesList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const ambulances = [
    {
      id: 1,
      name: 'Delhi 102 Ambulance Service',
      address: 'Central Delhi Station',
      distance: '1.2 km',
      availability: 'Available',
      eta: '5-7 min',
      type: 'Emergency',
      status: 'active',
      phone: '102'
    },
    {
      id: 2,
      name: 'GVK EMRI Ambulance',
      address: 'South Delhi Hub',
      distance: '2.5 km',
      availability: 'Busy',
      eta: '20+ min',
      type: 'Emergency',
      status: 'busy',
      phone: '108'
    },
    {
      id: 3,
      name: 'Apollo Ambulance Service',
      address: 'Sarita Vihar',
      distance: '3.1 km',
      availability: 'Available',
      eta: '10-12 min',
      type: 'Private',
      status: 'active',
      phone: '(011) 2692-5858'
    },
    {
      id: 4,
      name: 'Max Healthcare Ambulance',
      address: 'Saket Medical Hub',
      distance: '3.8 km',
      availability: 'Available',
      eta: '12-15 min',
      type: 'Private',
      status: 'active',
      phone: '(011) 2651-5050'
    }
  ];

  const filteredAmbulances = ambulances.filter(ambulance =>
    ambulance.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ambulance.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Ambulance Services</h1>
          <p className="text-gray-600">Find nearest ambulances with real-time availability</p>
        </div>

        {/* Emergency Banner */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="font-semibold text-red-800">For immediate emergency, dial 102 or 108</p>
              <p className="text-sm text-red-600">Free government ambulance services available 24/7</p>
            </div>
          </div>
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
              placeholder="Search ambulance services..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Ambulances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAmbulances.map((ambulance) => (
            <div
              key={ambulance.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-blue-300 overflow-hidden"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${ambulance.status === 'active' ? 'bg-orange-500' : 'bg-gray-400'} rounded-lg flex items-center justify-center`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/>
                        <path d="M1.047 5.494A.5.5 0 011.5 5h6a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-6a.5.5 0 01-.453-.706l1.5-3zM1 15v-3h5v3H1zm7 0v-3h5v1a2 2 0 104 0v-1h2a.5.5 0 01.5.5V16h-15.5a.5.5 0 01-.5-.5V12h2v3h3zm8-7h3.5L21 12h-4V8z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{ambulance.name}</h3>
                      <p className="text-sm text-gray-600">{ambulance.distance} away</p>
                    </div>
                  </div>
                  <span 
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      ambulance.availability === 'Available' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {ambulance.availability}
                  </span>
                </div>

                {/* Type Badge */}
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded mb-3 ${
                  ambulance.type === 'Emergency' 
                    ? 'bg-red-50 text-red-700' 
                    : 'bg-blue-50 text-blue-700'
                }`}>
                  {ambulance.type}
                </span>

                {/* Address */}
                <div className="flex items-start gap-2 mb-4">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 text-sm">{ambulance.address}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Estimated Time</p>
                    <p className={`text-lg font-bold ${ambulance.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>
                      {ambulance.eta}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">Call Now</p>
                    <a 
                      href={`tel:${ambulance.phone}`}
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAmbulances.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No ambulance services found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmbulancesList;
