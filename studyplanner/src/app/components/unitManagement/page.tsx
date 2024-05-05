"use client";
import React, { useState } from 'react';

interface Unit {
  id: number;
  name: string;
  description: string;
}

const Calendar: React.FC = () => {
  const [units, setUnits] = useState<Unit[]>([]);

  const addUnit = () => {
    const newUnit: Unit = {
      id: units.length + 1,
      name: `Unit ${units.length + 1}`,
      description: `Description for unit ${units.length + 1}`
    };
    setUnits([...units, newUnit]);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '10px', height: '100vh', width: '100vw' }}>
      <h1>Unit Management</h1>
      <button onClick={addUnit}>Add Unit</button>
      {units.map(unit => (
        <div key={unit.id} style={{ border: '1px solid black', padding: '10px', borderRadius: '5px' }}>
          <h2>{unit.name}</h2>
          <p>{unit.description}</p>
        </div>
      ))}
      {Array(4 - units.length).fill(null).map((_, index) => (
        <div key={`placeholder-${index}`} style={{ border: '1px solid transparent' }} />
      ))}
    </div>
  );
}

export default Calendar;