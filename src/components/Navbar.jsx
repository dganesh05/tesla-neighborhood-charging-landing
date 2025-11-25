import React from "react";
import { HelpCircle, Globe, User } from "lucide-react";
import "./Navbar.css";

const Navbar = ({ title, onLoginClick }) => {
  return (
    <nav className="Navbar">
      <div className="Navbar-section Navbar-left">
        <a
          className="Navbar-logo"
          aria-label="Tesla Logo"
          href="/"
          data-gtm-listener-attached="true"
        >
          <svg viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
            ></path>
          </svg>
        </a>
      </div>

      <div className="Navbar-section Navbar-center">
        <ul className="Navbar-links">
          <li>
            <button type="button" id="dx-nav-item--vehicles">
              Vehicles
            </button>
          </li>
          <li>
            <button type="button" id="dx-nav-item--energy">
              Energy
            </button>
          </li>
          <li>
            <button type="button" id="dx-nav-item--charging">
              Charging
            </button>
          </li>
          <li>
            <button type="button" id="dx-nav-item--discover">
              Discover
            </button>
          </li>
          <li>
            <a href="https://shop.tesla.com" id="dx-nav-item--shop">
              Shop
            </a>
          </li>
        </ul>
      </div>

      <div className="Navbar-section Navbar-right">
        <button className="icon" aria-label="Support" title="Support">
          <HelpCircle size={24} />
        </button>
        <button
          className="icon"
          aria-label="Region & Language"
          title="Region & Language"
        >
          <Globe size={24} />
        </button>
        <button className="icon" aria-label="Account" title="Account">
          <User size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
