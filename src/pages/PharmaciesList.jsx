import React, { useState } from 'react';

const getTypeClassName = (type) => {
  if (type === '24x7') return 'bg-purple-50 text-purple-700';
  if (type === 'Hospital') return 'bg-blue-50 text-blue-700';
  return 'bg-gray-100 text-gray-700';
};

const PharmaciesList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const pharmacies = [
    {
      id: 1,
      name: 'Apollo Pharmacy 24x7',
      address: 'Connaught Place, New Delhi',
      distance: '1.5 km',
      availability: 'Open',
      timing: 'Open 24 hours',
      type: '24x7',
      status: 'open',
      phone: '(011) 4567-8900'
    },
    {
      id: 2,
      name: 'MedPlus Pharmacy',
      address: 'Saket, New Delhi',
      distance: '3.1 km',
      availability: 'Open',
      timing: 'Open till 11 PM',
      type: 'Regular',
      status: 'open',
      phone: '(011) 2345-6789'
    },
    {
      id: 3,
      name: 'Fortis Pharmacy',
      address: 'Vasant Kunj, Delhi',
      distance: '4.2 km',
      availability: 'Open',
      timing: 'Open till 10 PM',
      type: 'Hospital',
      status: 'open',
      phone: '(011) 4277-6222'
    },
    {
      id: 4,
      name: 'Guardian Pharmacy',
      address: 'Nehru Place, Delhi',
      distance: '2.8 km',
      availability: 'Open',
      timing: 'Open till 9 PM',
      type: 'Regular',
      status: 'open',
      phone: '(011) 3456-7890'
    }
  ];

  const filteredPharmacies = pharmacies.filter(pharmacy =>
    pharmacy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pharmacy.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Pharmacies</h1>
          <p className="text-gray-600">Find nearby pharmacies with current availability</p>
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
              placeholder="Search pharmacies by name or location..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            All
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100 border border-gray-300 transition-colors">
            24x7 Only
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100 border border-gray-300 transition-colors">
            Hospital Pharmacies
          </button>
        </div>

        {/* Pharmacies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPharmacies.map((pharmacy) => (
            <div
              key={pharmacy.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-blue-300 overflow-hidden"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{pharmacy.name}</h3>
                      <p className="text-sm text-gray-600">{pharmacy.distance} away</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                    {pharmacy.availability}
                  </span>
                </div>

                {/* Type Badge */}
                <div className="flex gap-2 mb-3">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${getTypeClassName(pharmacy.type)}`}>
                    {pharmacy.type}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {pharmacy.timing}
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 mb-4">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 text-sm">{pharmacy.address}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <a
                    href={`tel:${pharmacy.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call
                  </a>
                  <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-semibold border border-gray-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPharmacies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No pharmacies found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PharmaciesList;
