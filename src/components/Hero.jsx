import React from "react";
import "./Hero.css";

const Hero = ({ title, subtitle, backgroundImage }) => {
  const heroStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${backgroundImage})`,
      }
    : {
        backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.35), rgba(0,0,0,0.6))`,
      };

    function navigateToCalculator() {
      const calculatorSection = document.querySelector('#calculator, .Calculator, .calculator, [data-section="calculator"]');
      if (!calculatorSection) return;

      try {
        calculatorSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      } catch (_) {
        const top = calculatorSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }

  return (
    <div
      className="Hero"
      style={{
        ...heroStyle,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div className="Hero-content">
        <h1>{title || "Turn Your Driveway Into Passive Income"}</h1>
        <p>{subtitle || "Host a Tesla micro-charger. Earn while you sleep."}</p>
      </div>
      <div className="Calculator-nav-button">
        <button
          type="button"
          onClick={navigateToCalculator}
          style={{
            backgroundColor: "var(--tesla-blue)",
            color: "var(--white)",
            border: "none",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            padding: "1rem 3rem",
          }}
        >
          See your earnings potential
        </button>
      </div>
    </div>
  );
};

export default Hero;
