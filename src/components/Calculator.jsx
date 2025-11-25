import React, { useState, useMemo } from 'react';
import './Calculator.css';

// Simple earnings estimator: base rate range * hours * 4 weeks * location multiplier.
// This replaces the invalid JSX and adds interactivity without external libs.
const LOCATION_MULTIPLIERS = {
  'San Francisco': 1.3,
  'New York': 1.25,
  'Austin': 1.15,
  'Remote/Other': 1.0,
};

const BASE_LOW = 2.5; // hypothetical $ per charger-hour
const BASE_HIGH = 6;  // hypothetical upper bound

const formatMoney = v => `$${v.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

const Calculator = () => {
  const [hours, setHours] = useState(8);
  const [location, setLocation] = useState('San Francisco');

  const { lowMonthly, highMonthly } = useMemo(() => {
    const multiplier = LOCATION_MULTIPLIERS[location] || 1;
    const low = hours * BASE_LOW * 4 * multiplier;
    const high = hours * BASE_HIGH * 4 * multiplier;
    return { lowMonthly: Math.round(low), highMonthly: Math.round(high) };
  }, [hours, location]);

  return (
    <div id="calculator" className="Calculator">
      <h1 className="Calculator-title">Estimate Your Earnings</h1>
      <div className="Calculator-form">
        <div className="Hours-available Calculator-section">
          <h2 className="Section-heading">Hours Available per Week</h2>
          <input
            type="range"
            min="0"
            max="40"
            value={hours}
            onChange={e => setHours(Number(e.target.value))}
            aria-label="Hours available per week"
          />
          <div className="Hours-value">{hours} hrs/week</div>
        </div>
        <div className="Location Calculator-section">
          <h2 className="Section-heading">Your Location</h2>
          <select value={location} onChange={e => setLocation(e.target.value)} aria-label="Select location">
            {Object.keys(LOCATION_MULTIPLIERS).map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div className="Estimated-earnings">
          <p className="Earnings-label">You could earn approximately</p>
          <p className="Earnings-range">{formatMoney(lowMonthly)} – {formatMoney(highMonthly)}</p>
          <p className="Earnings-period">per month</p>
        </div>
        <button type="button" className="CTA-button">Get Started →</button>
      </div>
    </div>
  );
};

export default Calculator;