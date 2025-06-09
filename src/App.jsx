// import React from 'react';
// import './App.css';
// import Header from './Header.jsx';
// import { Mostruns } from './Mostruns.jsx';

// const App = () => {
//   return (
//     <>
//       <Header />

       
//         <Mostruns />  
//     </>
//   );
// };
// export  default App;

import React, { useState } from "react";
import { statsData } from "./data.js";
import "./App.css";
function App() {
  const [year, setYear] = useState("2025");
  const [category, setCategory] = useState("orangeCap");

  const categories = {
    orangeCap: "Orange Cap (Most Runs)",
    mostFours: "Most Fours",
    mostSixes: "Most Sixes",
    mostCenturies: "Most Centuries",
    mostFifties: "Most Fifties",
  };

  const tableData = statsData[year][category];
console.log("Table Data:", tableData);

  return (
    <div>
      <h1>
        {categories[category]} - {year}
      </h1>

      <div>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          {Object.keys(statsData).map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>

      <div>
        {Object.entries(categories).map(([key, label]) => (
          <button key={key} onClick={() => setCategory(key)}>
            {label}
          </button>
        ))}
      </div>

      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>{Object.keys(tableData[0])[1]}</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((playerData, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{playerData.player}</td>
              <td>{playerData[Object.keys(playerData)[1]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
