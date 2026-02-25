import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import PropTypes from 'prop-types';

// Fix for default marker icons in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icon creator
const createCustomIcon = (color, type) => {
  const svgIcon = `
    <svg width="32" height="42" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg">
      <path fill="${color}" stroke="white" stroke-width="2" d="M16 0C9.373 0 4 5.373 4 12c0 8.75 12 28 12 28s12-19.25 12-28c0-6.627-5.373-12-12-12z"/>
      <circle cx="16" cy="12" r="6" fill="white"/>
      <text x="16" y="16" font-size="12" font-weight="bold" text-anchor="middle" fill="${color}">${type}</text>
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

// Location centering component
function RecenterMap({ center }) {
  const map = useMap();
  
  useEffect(() => {
    if (center) {
      map.flyTo(center, 13, { duration: 1.5 });
    }
  }, [center, map]);
  
  return null;
}

RecenterMap.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired
};

const LiveResourceMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState([28.6139, 77.209]); // Default: New Delhi, India

  // Auto-request location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(newLocation);
          setMapCenter([newLocation.lat, newLocation.lng]);
        },
        (error) => {
          console.error('Error getting location:', error);
          // Continue with default India location if geolocation fails
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    }
  }, []);

  // Sample resource data - Indian hospitals and facilities
  const resources = [
    {
      id: 1,
      name: 'AIIMS Delhi',
      type: 'Hospital',
      category: 'H',
      position: [28.5672, 77.21],
      status: 'Available',
      color: '#10B981',
      details: '15 ICU beds available',
      distance: '2.1 km'
    },
    {
      id: 2,
      name: 'Apollo Hospital',
      type: 'Hospital',
      category: 'H',
      position: [28.5494, 77.2736],
      status: 'Limited',
      color: '#F97316',
      details: '4 beds available',
      distance: '3.5 km'
    },
    {
      id: 3,
      name: 'Fortis Hospital Vasant Kunj',
      type: 'Hospital',
      category: 'H',
      position: [28.5244, 77.158],
      status: 'Available',
      color: '#10B981',
      details: '8 emergency beds',
      distance: '4.2 km'
    },
    {
      id: 4,
      name: 'IndRaprastha Apollo Blood Bank',
      type: 'Blood Bank',
      category: 'B',
      position: [28.5428, 77.2827],
      status: 'Available',
      color: '#EF4444',
      details: 'All blood types available',
      distance: '1.8 km'
    },
    {
      id: 5,
      name: 'Red Cross Society Blood Bank',
      type: 'Blood Bank',
      category: 'B',
      position: [28.6328, 77.2197],
      status: 'Low Stock',
      color: '#F97316',
      details: 'Type O+, B+ only',
      distance: '2.9 km'
    },
    {
      id: 6,
      name: 'Delhi Ambulance Service - 102',
      type: 'Ambulance',
      category: 'A',
      position: [28.6289, 77.2065],
      status: 'Available',
      color: '#3B82F6',
      details: '5-7 minutes ETA',
      distance: '1.2 km'
    },
    {
      id: 7,
      name: 'GVK EMRI Ambulance Service',
      type: 'Ambulance',
      category: 'A',
      position: [28.5989, 77.2295],
      status: 'Busy',
      color: '#EF4444',
      details: '20+ minutes wait',
      distance: '2.5 km'
    },
    {
      id: 8,
      name: 'Apollo Pharmacy 24x7',
      type: 'Pharmacy',
      category: 'P',
      position: [28.6219, 77.2273],
      status: 'Open',
      color: '#10B981',
      details: 'Open 24 hours',
      distance: '1.5 km'
    },
    {
      id: 9,
      name: 'MedPlus Pharmacy',
      type: 'Pharmacy',
      category: 'P',
      position: [28.5355, 77.2495],
      status: 'Open',
      color: '#10B981',
      details: 'Open till 11 PM',
      distance: '3.1 km'
    },
    {
      id: 10,
      name: 'Max Super Speciality Hospital',
      type: 'Hospital',
      category: 'H',
      position: [28.5672, 77.1909],
      status: 'Available',
      color: '#10B981',
      details: '10 beds available',
      distance: '3.8 km'
    }
  ];

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(newLocation);
          setMapCenter([newLocation.lat, newLocation.lng]);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your location. Please enable location services in your browser.');
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Live Resource Map</h2>
          <button 
            onClick={handleUseMyLocation}
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Use My Location
          </button>
        </div>
        
        {/* Interactive Map Container */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[500px] bg-gray-100 relative">
          <MapContainer
            center={mapCenter}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            zoomControl={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RecenterMap center={mapCenter} />
            
            {/* Resource Markers */}
            {resources.map((resource) => (
              <Marker
                key={resource.id}
                position={resource.position}
                icon={createCustomIcon(resource.color, resource.category)}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold text-gray-900 mb-1">{resource.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{resource.type}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span 
                        className="px-2 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: resource.color }}
                      >
                        {resource.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">{resource.details}</p>
                    <p className="text-xs text-gray-500">{resource.distance} away</p>
                    <button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded transition-colors">
                      Get Directions
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
            
            {/* User Location Marker */}
            {userLocation && (
              <Marker
                position={[userLocation.lat, userLocation.lng]}
                icon={createCustomIcon('#3B82F6', '📍')}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold text-blue-600">Your Location</h3>
                    <p className="text-sm text-gray-600">You are here</p>
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>

          {/* Legend - Now positioned over the map */}
          <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs z-[1000]">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Legend</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Limited/Low Stock</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Busy/Critical</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Ambulance/Your Location</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-700 mb-1">Resource Types:</p>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <span className="text-gray-600">H - Hospital</span>
                <span className="text-gray-600">B - Blood Bank</span>
                <span className="text-gray-600">A - Ambulance</span>
                <span className="text-gray-600">P - Pharmacy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveResourceMap;
