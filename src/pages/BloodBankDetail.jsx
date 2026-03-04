import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const createCustomIcon = (color) => {
  const svgIcon = `
    <svg width="32" height="42" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg">
      <path fill="${color}" stroke="white" stroke-width="2" d="M16 0C9.373 0 4 5.373 4 12c0 8.75 12 28 12 28s12-19.25 12-28c0-6.627-5.373-12-12-12z"/>
      <circle cx="16" cy="12" r="6" fill="white"/>
    </svg>
  `;
  return L.divIcon({
    html: svgIcon,
    className: 'custom-marker',
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -42]
  });
};

const BloodBankDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample blood bank data - would come from API based on id
  const bloodBank = {
    id: id,
    name: 'Central City Blood Bank',
    description: 'Real-time inventory status and availability tracking for critical blood supplies.',
    coordinates: [28.6139, 77.209],
    address: '123 Medical Plaza, Central City, NY 10012',
    phone: '(555) 123-4567',
    email: 'specialists@ccbb.org',
    stats: {
      totalUnits: 450,
      criticalTypes: 2,
      inTransit: 25,
      lastUpdated: '10 mins ago'
    },
    inventory: [
      { type: 'A+', status: 'Stable', level: 75, units: 124, color: '#10B981' },
      { type: 'A-', status: 'Low', level: 35, units: 18, color: '#F59E0B' },
      { type: 'B+', status: 'Good', level: 65, units: 92, color: '#10B981' },
      { type: 'B-', status: 'Critical', level: 15, units: 5, color: '#EF4444' },
      { type: 'O+', status: 'Excess', level: 95, units: 156, color: '#3B82F6' },
      { type: 'O-', status: 'Critical', level: 10, units: 3, color: '#EF4444' },
      { type: 'AB+', status: 'Stable', level: 60, units: 42, color: '#10B981' },
      { type: 'AB-', status: 'Low', level: 30, units: 10, color: '#F59E0B' }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold">{bloodBank.name}</h1>
              <p className="text-gray-400 mt-1">{bloodBank.description}</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => navigate('/blood-banks')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Request Blood
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              View Map Location
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-gray-400 text-sm">Total Units</span>
            </div>
            <p className="text-3xl font-bold">{bloodBank.stats.totalUnits} Units</p>
            <p className="text-green-400 text-sm mt-1">+12 from yesterday</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-gray-400 text-sm">Critical/Low</span>
            </div>
            <p className="text-3xl font-bold">{bloodBank.stats.criticalTypes} Types</p>
            <p className="text-red-400 text-sm mt-1">Immediate attention needed</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-gray-400 text-sm">In Transit</span>
            </div>
            <p className="text-3xl font-bold">{bloodBank.stats.inTransit} Units</p>
            <p className="text-blue-400 text-sm mt-1">Arriving in ~45 mins</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-400 text-sm">Last Updated</span>
            </div>
            <p className="text-3xl font-bold">{bloodBank.stats.lastUpdated}</p>
            <p className="text-green-400 text-sm mt-1">Auto-sync enabled</p>
          </div>
        </div>

        {/* Live Inventory Status */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Live Inventory Status</h2>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
              Download Report
            </button>
          </div>

          <div className="space-y-4">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 pb-3 border-b border-slate-700 text-sm text-gray-400">
              <div className="col-span-2">Type</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-6">Availability Level</div>
              <div className="col-span-2 text-right">Units</div>
            </div>

            {/* Table Rows */}
            {bloodBank.inventory.map((item) => (
              <div key={item.type} className="grid grid-cols-12 gap-4 items-center py-3 border-b border-slate-700/50">
                <div className="col-span-2">
                  <span className="text-lg font-bold">{item.type}</span>
                </div>
                <div className="col-span-2">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ 
                      backgroundColor: item.color + '20',
                      color: item.color 
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="col-span-6">
                  <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full rounded-full transition-all"
                      style={{ 
                        width: `${item.level}%`,
                        backgroundColor: item.color 
                      }}
                    />
                  </div>
                </div>
                <div className="col-span-2 text-right">
                  <span className="text-lg font-semibold">{item.units}</span>
                  <button className="ml-2 text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Location & Contact */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Location & Contact</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-white">{bloodBank.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Emergency Line</p>
                  <p className="text-white">{bloodBank.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">{bloodBank.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden h-[300px]">
            <MapContainer
              center={bloodBank.coordinates}
              zoom={14}
              style={{ height: '100%', width: '100%' }}
              zoomControl={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={bloodBank.coordinates}
                icon={createCustomIcon('#EF4444')}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold text-gray-900">{bloodBank.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{bloodBank.address}</p>
                    <button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded transition-colors">
                      Get Directions
                    </button>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodBankDetail;
