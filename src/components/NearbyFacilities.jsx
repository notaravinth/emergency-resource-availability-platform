import React from 'react';

const getStatusTextColor = (statusColor) => {
  if (statusColor === 'bg-green-500') return 'text-green-600';
  if (statusColor === 'bg-orange-500') return 'text-orange-600';
  return 'text-red-600';
};

const NearbyFacilities = () => {
  const facilities = [
    {
      id: 1,
      name: 'AIIMS Delhi',
      type: 'ICU BEDS',
      distance: '2.1 km away',
      time: '6-9 min',
      status: 'Available',
      statusColor: 'bg-green-500',
      info: '15 Free',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      name: 'Indraprastha Blood Bank',
      type: 'TYPE O+',
      distance: '1.8 km away',
      time: 'All types available',
      status: 'Available',
      statusColor: 'bg-green-500',
      info: 'Available',
      image: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      name: 'Delhi 102 Ambulance',
      type: 'WAIT TIME',
      distance: '1.2 km away',
      time: 'Rapid Response',
      status: 'Available',
      statusColor: 'bg-green-500',
      info: '5-7 min',
      image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400&h=250&fit=crop'
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Nearby Facilities Status</h2>
          <button className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-1">
            View All
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-200 hover:border-blue-300"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-3 right-3 ${facility.statusColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {facility.status}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{facility.distance} • {facility.time}</p>
                
                {/* Info Grid */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{facility.type}</p>
                    <p className={`text-lg font-bold ${getStatusTextColor(facility.statusColor)}`}>
                      {facility.info}
                    </p>
                  </div>
                  <button className="text-blue-500 hover:text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyFacilities;
