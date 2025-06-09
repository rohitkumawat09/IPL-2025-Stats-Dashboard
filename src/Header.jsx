import React from 'react';

  const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-title">
          <span className="logo">🏏</span>
          <h1 className="title">IPL Stats Dashboard</h1>
        </div>

        <nav className="nav-tabs">
          <button className="tab">Orange Cap (Most Runs)</button>
          <button className="tab">Most Fours</button>
          <button className="tab">Most Sixes</button>
          <button className="tab">Most Centuries</button>
          <button className="tab active">Most Fifties</button>
        </nav>

        <div className="year-select">
          <select>
            <option>2024</option>
            <option>2025</option>
            
          </select>
        </div>
      </div>
    </header>

    
  );
};

export default Header;