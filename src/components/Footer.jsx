import react from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <ul data-region="footer">
        <li>
          <a
            href="/about"
            title="About Tesla"
            data-gtm-listener-attached="true"
          >
            Tesla © 2025
          </a>
        </li>
        <li>
          <a href="/legal" data-gtm-listener-attached="true">
            Privacy &amp; Legal
          </a>
        </li>
        <li>
          <a
            href="https://www.tesla.com/vin-recall-search"
            data-gtm-listener-attached="true"
          >
            Vehicle Recalls
          </a>
        </li>
        <li>
          <a href="/contact" data-gtm-listener-attached="true">
            Contact
          </a>
        </li>
        <li>
          <a href="/blog" data-gtm-listener-attached="true">
            News
          </a>
        </li>
        <li>
          <a href="/updates" data-gtm-listener-attached="true">
            Get Updates
          </a>
        </li>
        <li>
          <a href="/findus/list" data-gtm-listener-attached="true">
            Locations
          </a>
        </li>
        <li>
          <a href="/learn" data-gtm-listener-attached="true">
            Learn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
