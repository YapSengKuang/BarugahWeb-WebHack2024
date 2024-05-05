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
    <div>
      <h1>Unit Management</h1>
      <button onClick={addUnit}>Add Unit</button>
      {units.map(unit => (
        <div key={unit.id}>
          <h2>{unit.name}</h2>
          <p>{unit.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Calendar;