import React, { useState } from 'react';

const HospitalsList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const hospitals = [
    {
      id: 1,
      name: 'AIIMS Delhi',
      address: 'Ansari Nagar, New Delhi',
      distance: '2.1 km',
      availability: 'Available',
      icuBeds: 15,
      generalBeds: 45,
      status: 'open',
      type: 'Multi-Speciality',
      phone: '(011) 2658-8500'
    },
    {
      id: 2,
      name: 'Apollo Hospital',
      address: 'Sarita Vihar, Delhi',
      distance: '3.5 km',
      availability: 'Limited',
      icuBeds: 4,
      generalBeds: 12,
      status: 'open',
      type: 'Multi-Speciality',
      phone: '(011) 2692-5858'
    },
    {
      id: 3,
      name: 'Fortis Hospital Vasant Kunj',
      address: 'Sector B, Vasant Kunj',
      distance: '4.2 km',
      availability: 'Available',
      icuBeds: 8,
      generalBeds: 25,
      status: 'open',
      type: 'Multi-Speciality',
      phone: '(011) 4277-6222'
    },
    {
      id: 4,
      name: 'Max Super Speciality Hospital',
      address: 'Press Enclave Road, Saket',
      distance: '3.8 km',
      availability: 'Available',
      icuBeds: 10,
      generalBeds: 30,
      status: 'open',
      type: 'Super-Speciality',
      phone: '(011) 2651-5050'
    }
  ];

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hospital.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Hospitals</h1>
          <p className="text-gray-600">Find nearby hospitals with real-time bed availability</p>
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
              placeholder="Search hospitals by name or location..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredHospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-blue-300 cursor-pointer overflow-hidden"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{hospital.name}</h3>
                      <p className="text-sm text-gray-600">{hospital.distance} away</p>
                    </div>
                  </div>
                  <span 
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      hospital.availability === 'Available' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {hospital.availability}
                  </span>
                </div>

                {/* Type Badge */}
                <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded mb-3">
                  {hospital.type}
                </span>

                {/* Address */}
                <div className="flex items-start gap-2 mb-4">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 text-sm">{hospital.address}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">ICU Beds</p>
                    <p className={`text-lg font-bold ${hospital.icuBeds > 5 ? 'text-green-600' : 'text-orange-600'}`}>
                      {hospital.icuBeds}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">General Beds</p>
                    <p className="text-lg font-bold text-gray-900">{hospital.generalBeds}</p>
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
            </div>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hospitals found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalsList;
