import React, { useState } from 'react';
import './App.css';
import { statsData } from './data';

export const Mostruns = () => {

  const [selectedYear, setSelectedYear] = useState('2025');
  const [stats, setStats] = useState(statsData[selectedYear].orangeCap);
  
  
  

  return (
    <> 
      <div className='Stats'>
        <h1>IPL 2025 Stats Dashboard</h1>
      </div>

      <div className='IplStats'>
        <h2>Orange Cap</h2>
        <ul>
          {stats.map((player, index) => (
            <li key={index}>
              {player.player}: {player.runs}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
