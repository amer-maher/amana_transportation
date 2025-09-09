"use client";

import React, { useState } from 'react';
import './MapDisplay.css';

interface BusStop {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  estimated_arrival: string;
  is_next_stop: boolean;
}

interface BusData {
  id: number;
  name: string;
  route_number: string;
  current_location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  status: string;
  passengers: {
    current: number;
    capacity: number;
    utilization_percentage: number;
  };
  driver: {
    name: string;
    id: string;
    shift_start: string;
    shift_end: string;
  };
  bus_stops: BusStop[];
  incidents: any[];
  vehicle_info: {
    license_plate: string;
    model: string;
    year: number;
    fuel_level: number;
    last_maintenance: string;
  };
  route_info: {
    total_distance: number;
    average_speed: number;
    estimated_completion: string;
    frequency_minutes: number;
  };
}

const MapDisplay: React.FC = () => {
  const [selectedBus, setSelectedBus] = useState<number | null>(null);

  // Bus data from your API response
  const busData: BusData[] = [
    {
      id: 1,
      name: "KLCC - Petaling Jaya Express",
      route_number: "B101",
      current_location: {
        latitude: 3.158,
        longitude: 101.711,
        address: "Jalan Ampang, near KLCC Twin Towers, Kuala Lumpur"
      },
      status: "Active",
      passengers: { current: 32, capacity: 45, utilization_percentage: 71 },
      driver: { name: "Ahmad Rahman", id: "DRV001", shift_start: "06:00", shift_end: "18:00" },
      bus_stops: [
        { id: 1, name: "KLCC Station", latitude: 3.1578, longitude: 101.7114, estimated_arrival: "14:20", is_next_stop: true },
        { id: 2, name: "Pavilion KL", latitude: 3.149, longitude: 101.7101, estimated_arrival: "14:28", is_next_stop: false },
        { id: 3, name: "Mid Valley Megamall", latitude: 3.1177, longitude: 101.6774, estimated_arrival: "14:42", is_next_stop: false },
        { id: 4, name: "KL Sentral", latitude: 3.1338, longitude: 101.6869, estimated_arrival: "14:50", is_next_stop: false },
        { id: 5, name: "Universiti Malaya", latitude: 3.1204, longitude: 101.6535, estimated_arrival: "15:05", is_next_stop: false },
        { id: 6, name: "Petaling Jaya SS2", latitude: 3.1147, longitude: 101.624, estimated_arrival: "15:18", is_next_stop: false },
        { id: 7, name: "1 Utama Shopping Centre", latitude: 3.1502, longitude: 101.6154, estimated_arrival: "15:35", is_next_stop: false }
      ],
      incidents: [],
      vehicle_info: { license_plate: "WKL 2891", model: "Scania K230UB", year: 2019, fuel_level: 75, last_maintenance: "2024-12-01" },
      route_info: { total_distance: 28.5, average_speed: 25, estimated_completion: "16:00", frequency_minutes: 20 }
    },
    {
      id: 2,
      name: "Old Town - Mont Kiara Connector",
      route_number: "B205",
      current_location: {
        latitude: 3.139,
        longitude: 101.6869,
        address: "KL Sentral Transportation Hub, Kuala Lumpur"
      },
      status: "Active",
      passengers: { current: 28, capacity: 40, utilization_percentage: 70 },
      driver: { name: "Siti Aminah", id: "DRV002", shift_start: "05:30", shift_end: "17:30" },
      bus_stops: [
        { id: 1, name: "KL Sentral", latitude: 3.1338, longitude: 101.6869, estimated_arrival: "14:15", is_next_stop: false },
        { id: 2, name: "Central Market", latitude: 3.1427, longitude: 101.6964, estimated_arrival: "14:25", is_next_stop: true },
        { id: 3, name: "Chinatown", latitude: 3.1436, longitude: 101.6958, estimated_arrival: "14:30", is_next_stop: false },
        { id: 4, name: "Titiwangsa LRT", latitude: 3.1729, longitude: 101.7016, estimated_arrival: "14:45", is_next_stop: false },
        { id: 5, name: "Mont Kiara", latitude: 3.1727, longitude: 101.6509, estimated_arrival: "15:00", is_next_stop: false },
        { id: 6, name: "Sri Hartamas", latitude: 3.1653, longitude: 101.6493, estimated_arrival: "15:10", is_next_stop: false }
      ],
      incidents: [],
      vehicle_info: { license_plate: "WKL 1547", model: "Mercedes-Benz Citaro", year: 2020, fuel_level: 60, last_maintenance: "2024-11-28" },
      route_info: { total_distance: 22.3, average_speed: 22, estimated_completion: "15:30", frequency_minutes: 25 }
    },
    {
      id: 3,
      name: "Airport - City Circle",
      route_number: "B350",
      current_location: {
        latitude: 2.7456,
        longitude: 101.7072,
        address: "KLIA Express Station, Sepang, Selangor"
      },
      status: "Active",
      passengers: { current: 15, capacity: 50, utilization_percentage: 30 },
      driver: { name: "Lim Wei Ming", id: "DRV003", shift_start: "04:00", shift_end: "16:00" },
      bus_stops: [
        { id: 1, name: "KLIA Terminal 1", latitude: 2.7456, longitude: 101.7072, estimated_arrival: "14:30", is_next_stop: false },
        { id: 2, name: "KLIA Terminal 2", latitude: 2.7389, longitude: 101.6997, estimated_arrival: "14:40", is_next_stop: false },
        { id: 3, name: "Putrajaya Central", latitude: 2.9264, longitude: 101.6964, estimated_arrival: "15:10", is_next_stop: true },
        { id: 4, name: "Cyberjaya", latitude: 2.9213, longitude: 101.6543, estimated_arrival: "15:25", is_next_stop: false },
        { id: 5, name: "Bandar Tun Razak", latitude: 3.0733, longitude: 101.7317, estimated_arrival: "15:55", is_next_stop: false },
        { id: 6, name: "KL City Centre", latitude: 3.1519, longitude: 101.7077, estimated_arrival: "16:20", is_next_stop: false },
        { id: 7, name: "Batu Caves", latitude: 3.2379, longitude: 101.684, estimated_arrival: "16:45", is_next_stop: false },
        { id: 8, name: "Gombak Terminal", latitude: 3.2642, longitude: 101.7003, estimated_arrival: "17:00", is_next_stop: false }
      ],
      incidents: [],
      vehicle_info: { license_plate: "WKL 3429", model: "Volvo B8RLE", year: 2018, fuel_level: 40, last_maintenance: "2024-12-03" },
      route_info: { total_distance: 85.2, average_speed: 35, estimated_completion: "17:30", frequency_minutes: 45 }
    },
    {
      id: 4,
      name: "University Express",
      route_number: "B410",
      current_location: {
        latitude: 3.1204,
        longitude: 101.6535,
        address: "Universiti Malaya Main Campus, Kuala Lumpur"
      },
      status: "Maintenance",
      passengers: { current: 0, capacity: 35, utilization_percentage: 0 },
      driver: { name: "Raj Kumar", id: "DRV004", shift_start: "06:30", shift_end: "18:30" },
      bus_stops: [
        { id: 1, name: "Universiti Malaya", latitude: 3.1204, longitude: 101.6535, estimated_arrival: "N/A", is_next_stop: false },
        { id: 2, name: "UCSI University", latitude: 3.0411, longitude: 101.7089, estimated_arrival: "N/A", is_next_stop: false },
        { id: 3, name: "Taylor's University", latitude: 3.0653, longitude: 101.6075, estimated_arrival: "N/A", is_next_stop: false },
        { id: 4, name: "Sunway University", latitude: 3.0653, longitude: 101.6037, estimated_arrival: "N/A", is_next_stop: false },
        { id: 5, name: "INTI International University", latitude: 3.0534, longitude: 101.5934, estimated_arrival: "N/A", is_next_stop: false },
        { id: 6, name: "Monash University Malaysia", latitude: 3.0653, longitude: 101.6016, estimated_arrival: "N/A", is_next_stop: false }
      ],
      incidents: [],
      vehicle_info: { license_plate: "WKL 7856", model: "Isuzu NPR", year: 2017, fuel_level: 85, last_maintenance: "2024-12-05" },
      route_info: { total_distance: 45.8, average_speed: 20, estimated_completion: "N/A", frequency_minutes: 30 }
    },
    {
      id: 5,
      name: "Shopping District Shuttle",
      route_number: "B520",
      current_location: {
        latitude: 3.149,
        longitude: 101.7101,
        address: "Pavilion Kuala Lumpur, Bukit Bintang"
      },
      status: "Active",
      passengers: { current: 42, capacity: 45, utilization_percentage: 93 },
      driver: { name: "Fatimah Zahra", id: "DRV005", shift_start: "07:00", shift_end: "19:00" },
      bus_stops: [
        { id: 1, name: "Pavilion KL", latitude: 3.149, longitude: 101.7101, estimated_arrival: "14:22", is_next_stop: false },
        { id: 2, name: "Lot 10 Shopping Centre", latitude: 3.1479, longitude: 101.71, estimated_arrival: "14:25", is_next_stop: true },
        { id: 3, name: "Times Square KL", latitude: 3.1427, longitude: 101.7105, estimated_arrival: "14:32", is_next_stop: false },
        { id: 4, name: "Suria KLCC", latitude: 3.158, longitude: 101.7123, estimated_arrival: "14:40", is_next_stop: false },
        { id: 5, name: "Avenue K", latitude: 3.1612, longitude: 101.7197, estimated_arrival: "14:48", is_next_stop: false },
        { id: 6, name: "Intermark Mall", latitude: 3.1606, longitude: 101.7209, estimated_arrival: "14:52", is_next_stop: false },
        { id: 7, name: "Ampang Park LRT", latitude: 3.1615, longitude: 101.713, estimated_arrival: "15:00", is_next_stop: false },
        { id: 8, name: "Low Yat Plaza", latitude: 3.1468, longitude: 101.7099, estimated_arrival: "15:08", is_next_stop: false },
        { id: 9, name: "Fahrenheit 88", latitude: 3.1472, longitude: 101.7097, estimated_arrival: "15:12", is_next_stop: false }
      ],
      incidents: [],
      vehicle_info: { license_plate: "WKL 9123", model: "BYD K9", year: 2021, fuel_level: 95, last_maintenance: "2024-11-30" },
      route_info: { total_distance: 12.7, average_speed: 15, estimated_completion: "15:30", frequency_minutes: 15 }
    }
  ];

  // Convert lat/lng to SVG coordinates (simplified mapping for KL area)
  const latToY = (lat: number) => 400 - ((lat - 2.7) / (3.3 - 2.7)) * 400;
  const lngToX = (lng: number) => ((lng - 101.5) / (101.8 - 101.5)) * 600;

  // Create curved route paths for more realistic bus routes
  const createCurvedRoute = (stops: BusStop[]) => {
    if (stops.length < 2) return '';
    
    let path = `M ${lngToX(stops[0].longitude)} ${latToY(stops[0].latitude)}`;
    
    for (let i = 1; i < stops.length; i++) {
      const prevStop = stops[i - 1];
      const currentStop = stops[i];
      
      const x1 = lngToX(prevStop.longitude);
      const y1 = latToY(prevStop.latitude);
      const x2 = lngToX(currentStop.longitude);
      const y2 = latToY(currentStop.latitude);
      
      // Calculate control points for smooth curves
      const dx = x2 - x1;
      const dy = y2 - y1;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Create control points offset perpendicular to the line
      const offset = Math.min(distance * 0.3, 20);
      const perpX = -dy / distance * offset;
      const perpY = dx / distance * offset;
      
      const cp1x = x1 + dx * 0.5 + perpX;
      const cp1y = y1 + dy * 0.5 + perpY;
      const cp2x = x2 - dx * 0.5 + perpX;
      const cp2y = y2 - dy * 0.5 + perpY;
      
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;
    }
    
    return path;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return '#28a745';
      case 'Maintenance': return '#ffc107';
      case 'Out of Service': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const selectedBusData = selectedBus ? busData.find(bus => bus.id === selectedBus) : null;

  return (
    <div className="map-display">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="map-container">
              <h4 className="mb-3">Amana Transportation Live Map</h4>
              <div className="map-svg-container">
                <svg width="100%" height="500" viewBox="0 0 600 400" className="map-svg">
                  {/* Draw realistic bus routes */}
                  {busData.map((bus) => (
                    <g key={`route-${bus.id}`}>
                      {/* Create curved route paths */}
                      <path
                        d={createCurvedRoute(bus.bus_stops)}
                        fill="none"
                        stroke={getStatusColor(bus.status)}
                        strokeWidth="4"
                        strokeOpacity="0.7"
                        strokeDasharray={bus.status === 'Maintenance' ? '8,4' : 'none'}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      
                      {/* Route direction arrows */}
                      {bus.bus_stops.slice(0, -1).map((stop, index) => {
                        const nextStop = bus.bus_stops[index + 1];
                        const midX = (lngToX(stop.longitude) + lngToX(nextStop.longitude)) / 2;
                        const midY = (latToY(stop.latitude) + latToY(nextStop.latitude)) / 2;
                        const angle = Math.atan2(
                          latToY(nextStop.latitude) - latToY(stop.latitude),
                          lngToX(nextStop.longitude) - lngToX(stop.longitude)
                        );
                        
                        return (
                          <g key={`arrow-${stop.id}`}>
                            <path
                              d={`M ${midX} ${midY} L ${midX - 8 * Math.cos(angle - 0.5)} ${midY - 8 * Math.sin(angle - 0.5)} M ${midX} ${midY} L ${midX - 8 * Math.cos(angle + 0.5)} ${midY - 8 * Math.sin(angle + 0.5)}`}
                              stroke={getStatusColor(bus.status)}
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </g>
                        );
                      })}
                      
                      {/* Bus stops with enhanced styling */}
                      {bus.bus_stops.map((stop, index) => (
                        <g key={`stop-${stop.id}`}>
                          {/* Stop circle */}
                          <circle
                            cx={lngToX(stop.longitude)}
                            cy={latToY(stop.latitude)}
                            r="6"
                            fill={stop.is_next_stop ? '#ff6b6b' : '#6c757d'}
                            stroke="#fff"
                            strokeWidth="2"
                            className="bus-stop"
                          />
                          
                          {/* Stop number */}
                          <text
                            x={lngToX(stop.longitude)}
                            y={latToY(stop.latitude) + 2}
                            textAnchor="middle"
                            fontSize="8"
                            fill="#fff"
                            fontWeight="bold"
                            className="stop-number"
                          >
                            {index + 1}
                          </text>
                          
                          {/* Stop name label */}
                          <text
                            x={lngToX(stop.longitude)}
                            y={latToY(stop.latitude) - 12}
                            textAnchor="middle"
                            fontSize="7"
                            fill="#333"
                            fontWeight="500"
                            className="stop-label"
                          >
                            {stop.name.split(' ')[0]}
                          </text>
                        </g>
                      ))}
                      
                      {/* Current bus location with enhanced styling */}
                      <g>
                        {/* Bus icon background */}
                        <circle
                          cx={lngToX(bus.current_location.longitude)}
                          cy={latToY(bus.current_location.latitude)}
                          r="12"
                          fill={getStatusColor(bus.status)}
                          stroke="#fff"
                          strokeWidth="3"
                          className="bus-location"
                          onClick={() => setSelectedBus(bus.id)}
                          style={{ cursor: 'pointer' }}
                        />
                        
                        {/* Bus icon */}
                        <rect
                          x={lngToX(bus.current_location.longitude) - 6}
                          y={latToY(bus.current_location.latitude) - 4}
                          width="12"
                          height="8"
                          fill="#fff"
                          rx="1"
                          className="bus-icon"
                        />
                        
                        {/* Bus windows */}
                        <rect
                          x={lngToX(bus.current_location.longitude) - 4}
                          y={latToY(bus.current_location.latitude) - 2}
                          width="2"
                          height="4"
                          fill={getStatusColor(bus.status)}
                          rx="0.5"
                        />
                        <rect
                          x={lngToX(bus.current_location.longitude) + 2}
                          y={latToY(bus.current_location.latitude) - 2}
                          width="2"
                          height="4"
                          fill={getStatusColor(bus.status)}
                          rx="0.5"
                        />
                        
                        {/* Bus number label */}
                        <text
                          x={lngToX(bus.current_location.longitude)}
                          y={latToY(bus.current_location.latitude) - 20}
                          textAnchor="middle"
                          fontSize="10"
                          fill="#fff"
                          fontWeight="bold"
                          className="bus-label"
                        >
                          {bus.route_number}
                        </text>
                        
                        {/* Passenger count indicator */}
                        <circle
                          cx={lngToX(bus.current_location.longitude) + 15}
                          cy={latToY(bus.current_location.latitude) - 10}
                          r="8"
                          fill="#fff"
                          stroke={getStatusColor(bus.status)}
                          strokeWidth="2"
                        />
                        <text
                          x={lngToX(bus.current_location.longitude) + 15}
                          y={latToY(bus.current_location.latitude) - 6}
                          textAnchor="middle"
                          fontSize="8"
                          fill={getStatusColor(bus.status)}
                          fontWeight="bold"
                        >
                          {bus.passengers.current}
                        </text>
                      </g>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="bus-info-panel">
              <h5>Bus Information</h5>
              {selectedBusData ? (
                <div className="bus-details">
                  <div className="card">
                    <div className="card-header bg-primary text-white">
                      <h6 className="mb-0">{selectedBusData.name}</h6>
                      <small>Route: {selectedBusData.route_number}</small>
                    </div>
                    <div className="card-body">
                      <div className="mb-2">
                        <strong>Status:</strong> 
                        <span className={`badge ms-2 ${selectedBusData.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                          {selectedBusData.status}
                        </span>
                      </div>
                      <div className="mb-2">
                        <strong>Driver:</strong> {selectedBusData.driver.name}
                      </div>
                      <div className="mb-2">
                        <strong>Passengers:</strong> {selectedBusData.passengers.current}/{selectedBusData.passengers.capacity} 
                        ({selectedBusData.passengers.utilization_percentage}%)
                      </div>
                      <div className="mb-2">
                        <strong>License Plate:</strong> {selectedBusData.vehicle_info.license_plate}
                      </div>
                      <div className="mb-2">
                        <strong>Fuel Level:</strong> {selectedBusData.vehicle_info.fuel_level}%
                      </div>
                      <div className="mb-2">
                        <strong>Next Stop:</strong> 
                        {selectedBusData.bus_stops.find(stop => stop.is_next_stop)?.name || 'N/A'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <h6>Route Stops:</h6>
                    <div className="route-stops">
                      {selectedBusData.bus_stops.map((stop, index) => (
                        <div key={stop.id} className={`stop-item ${stop.is_next_stop ? 'next-stop' : ''}`}>
                          <span className="stop-number">{index + 1}</span>
                          <span className="stop-name">{stop.name}</span>
                          <span className="stop-time">{stop.estimated_arrival}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted">
                  <p>Click on a bus icon to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapDisplay;
