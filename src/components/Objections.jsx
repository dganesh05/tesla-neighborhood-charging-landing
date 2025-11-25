import React, { useEffect, useRef, useState } from "react";
import "./Objections.css";

const Objections = () => {
  const [activeObjection, setActiveObjection] = useState("Security");
  const [fadeState, setFadeState] = useState("in"); // 'in' | 'out'
  const [nextObjection, setNextObjection] = useState(null);
  const timerRef = useRef(null);

  const FADE_DURATION = 250;

  const buttons = [
    { key: "Security", label: "Security" },
    { key: "Install", label: "Install" },
    { key: "Time", label: "Time" },
    { key: "Costs", label: "Costs" },
  ];

  const handleSelect = (key) => {
    if (key === activeObjection && fadeState === "in") return;

    setNextObjection(key);
    if (fadeState === "in") {
      setFadeState("out");
    }
  };

  useEffect(() => {
    if (fadeState === "out" && nextObjection) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setActiveObjection(nextObjection);
        setFadeState("in");
        setNextObjection(null);
      }, FADE_DURATION);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [fadeState, nextObjection]);

  return (
    <div className="Objections">
      <h1 className="Objections-title">But what about...?</h1>
      <div className="Objections-list">
        {buttons.map((btn) => (
          <button
            key={btn.key}
            className={`objection-btn ${
              activeObjection === btn.key ? "active" : ""
            }`}
            onClick={() => handleSelect(btn.key)}
            aria-pressed={activeObjection === btn.key}
          >
            {btn.label}
          </button>
        ))}
      </div>
      <div
        className={`Objections-answers ${
          fadeState === "out" ? "fade-out" : "fade-in"
        }`}
        aria-busy={fadeState === "out"}
      >
        {activeObjection === "Security" && (
          <div className="Objections-answer-content">
            <h2>Security</h2>
            <p className="Objections-question">
              "Will strangers be hanging around my property?"
            </p>
            <p className="Objections-answer">
              Drivers stay in their car — average session is just 20 minutes.
              You approve every booking, set your own hours, and can block
              anyone instantly. Your address is only shared after you accept a
              request.
            </p>
          </div>
        )}
        {activeObjection === "Install" && (
          <div className="Objections-answer-content">
            <h2>Installation</h2>
            <p className="Objections-question">
              "Is installation complicated or expensive?"
            </p>
            <p className="Objections-answer">
              Tesla handles everything. Most installs take under 4 hours, and
              there's no upfront cost to you. We'll assess your electrical setup
              and take care of permits.
            </p>
          </div>
        )}
        {activeObjection === "Time" && (
          <div className="Objections-answer-content">
            <h2>Time</h2>
            <p className="Objections-question">
              "How much of my time does this take?"
            </p>
            <p className="Objections-answer">
              Almost none. Set your availability once, and the app handles
              bookings automatically. You'll get notifications but never need to
              be home or interact with drivers.
            </p>
          </div>
        )}
        {activeObjection === "Costs" && (
          <div className="Objections-answer-content">
            <h2>Costs</h2>
            <p className="Objections-question">
              "Are there hidden fees or costs?"
            </p>
            <p className="Objections-answer">
              No fees, no catches. Tesla covers installation and maintenance.
              You keep 85% of every charging session — we handle payment
              processing and customer support.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Objections;
