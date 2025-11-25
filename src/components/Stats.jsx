import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <div className="Stats">
      <h1>Hosts nationwide have earned</h1>
      <div className="Stats-cards">
        <div className="Stats-card">
          <h2>$1,234,567</h2>
          <p>Total Payouts</p>
        </div>
        <div className="Stats-card">
          <h2>3,456</h2>
          <p>Active Hosts</p>
        </div>
        <div className="Stats-card">
          <h2>12,345</h2>
          <p>Sessions</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;