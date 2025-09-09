"use client";

import React, { useState } from 'react';
import './ScheduleTable.css';

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

const ScheduleTable: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

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

  const filteredBuses = busData.filter(bus => {
    const routeMatch = selectedRoute === 'all' || bus.route_number === selectedRoute;
    const statusMatch = selectedStatus === 'all' || bus.status.toLowerCase() === selectedStatus.toLowerCase();
    return routeMatch && statusMatch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <span className="badge bg-success">Active</span>;
      case 'Maintenance':
        return <span className="badge bg-warning text-dark">Maintenance</span>;
      case 'Out of Service':
        return <span className="badge bg-danger">Out of Service</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  const getUtilizationColor = (percentage: number) => {
    if (percentage >= 90) return 'text-danger';
    if (percentage >= 70) return 'text-warning';
    return 'text-success';
  };

  return (
    <div className="schedule-table">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="schedule-header mb-4">
              <h2 className="text-center mb-4">Amana Transportation Bus Schedule</h2>
              
              {/* Filters */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <label htmlFor="routeFilter" className="form-label">Filter by Route:</label>
                  <select 
                    id="routeFilter" 
                    className="form-select" 
                    value={selectedRoute} 
                    onChange={(e) => setSelectedRoute(e.target.value)}
                  >
                    <option value="all">All Routes</option>
                    <option value="B101">B101 - KLCC to Petaling Jaya</option>
                    <option value="B205">B205 - Old Town to Mont Kiara</option>
                    <option value="B350">B350 - Airport to City Circle</option>
                    <option value="B410">B410 - University Express</option>
                    <option value="B520">B520 - Shopping District Shuttle</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="statusFilter" className="form-label">Filter by Status:</label>
                  <select 
                    id="statusFilter" 
                    className="form-select" 
                    value={selectedStatus} 
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="out of service">Out of Service</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Bus Schedule Table */}
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Route</th>
                    <th>Bus Name</th>
                    <th>Status</th>
                    <th>Driver</th>
                    <th>Passengers</th>
                    <th>Next Stop</th>
                    <th>ETA</th>
                    <th>Fuel Level</th>
                    <th>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBuses.map((bus) => {
                    const nextStop = bus.bus_stops.find(stop => stop.is_next_stop);
                    return (
                      <tr key={bus.id}>
                        <td>
                          <strong className="text-primary">{bus.route_number}</strong>
                        </td>
                        <td>
                          <div>
                            <div className="fw-bold">{bus.name}</div>
                            <small className="text-muted">{bus.vehicle_info.license_plate}</small>
                          </div>
                        </td>
                        <td>{getStatusBadge(bus.status)}</td>
                        <td>
                          <div>
                            <div>{bus.driver.name}</div>
                            <small className="text-muted">{bus.driver.id}</small>
                          </div>
                        </td>
                        <td>
                          <div>
                            <span className={getUtilizationColor(bus.passengers.utilization_percentage)}>
                              {bus.passengers.current}/{bus.passengers.capacity}
                            </span>
                            <div className="progress mt-1" style={{ height: '6px' }}>
                              <div 
                                className={`progress-bar ${bus.passengers.utilization_percentage >= 90 ? 'bg-danger' : bus.passengers.utilization_percentage >= 70 ? 'bg-warning' : 'bg-success'}`}
                                style={{ width: `${bus.passengers.utilization_percentage}%` }}
                              ></div>
                            </div>
                            <small className="text-muted">{bus.passengers.utilization_percentage}%</small>
                          </div>
                        </td>
                        <td>
                          {nextStop ? (
                            <div>
                              <div className="fw-bold">{nextStop.name}</div>
                              <small className="text-muted">{nextStop.estimated_arrival}</small>
                            </div>
                          ) : (
                            <span className="text-muted">N/A</span>
                          )}
                        </td>
                        <td>
                          <div>
                            <div className="fw-bold">{bus.route_info.estimated_completion}</div>
                            <small className="text-muted">Completion</small>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="progress me-2" style={{ width: '60px', height: '8px' }}>
                              <div 
                                className={`progress-bar ${bus.vehicle_info.fuel_level >= 50 ? 'bg-success' : bus.vehicle_info.fuel_level >= 25 ? 'bg-warning' : 'bg-danger'}`}
                                style={{ width: `${bus.vehicle_info.fuel_level}%` }}
                              ></div>
                            </div>
                            <span className="small">{bus.vehicle_info.fuel_level}%</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-info">{bus.route_info.frequency_minutes} min</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Summary Statistics */}
            <div className="row mt-4">
              <div className="col-md-3">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title text-primary">{busData.length}</h5>
                    <p className="card-text">Total Buses</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title text-success">{busData.filter(bus => bus.status === 'Active').length}</h5>
                    <p className="card-text">Active Buses</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title text-warning">{busData.filter(bus => bus.status === 'Maintenance').length}</h5>
                    <p className="card-text">In Maintenance</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title text-info">
                      {Math.round(busData.reduce((sum, bus) => sum + bus.passengers.utilization_percentage, 0) / busData.length)}%
                    </h5>
                    <p className="card-text">Avg. Utilization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTable;
