"use client";

import React, { useState } from "react";
import "./BusSelector.css";
import MapDisplay from "../mapDesplay/MapDisplay";

const BusSelector: React.FC = () => {
  const [activeBus, setActiveBus] = useState<number>(1);

  const buses = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="bus-selector text-center ">
        <div className="border border-dark p-3 rounded mb-3 custom-bg">

        <h2 className="mb-3">Active Buses Map</h2>
        </div>

      <div className="row g-2">
        {buses.map((bus, index) => (
          <div key={bus} className="col-3">
            <button
              className={`btn w-100 ${
                activeBus === bus ? "btn-success" : "btn-secondary"
              }`}
              onClick={() => setActiveBus(bus)}
            >
              Bus {bus}
            </button>
          </div>
        ))}
        <MapDisplay />
      </div>
    </div>
  );
};

export default BusSelector;
