import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [loadingText, setLoadingText] = useState('INITIALIZING BUSINESS ENGINE');
  const messages = [
    'ANALYZING MARKET TRENDS',
    'VALIDATING REVENUE MODELS',
    'SCANNIG COMPETITOR LANDSCAPE',
    'CALCULATING SUCCESS PROBABILITY',
    'GENERATING STRATEGIC INSIGHTS',
    'OPTIMIZING BUSINESS LOGIC'
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % messages.length;
      setLoadingText(messages[currentIndex]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fullscreen-loader">
      <div className="loader-content">
        <div className="scanner-container">
          <div className="scanning-line"></div>
          <div className="hex-grid"></div>
          <div className="loader-circle">
            <div className="inner-pulse"></div>
          </div>
        </div>
        
        <div className="loader-info">
          <span className="status-label">SYSTEM_STATUS</span>
          <h2 className="loading-text">{loadingText}</h2>
          <div className="progress-bar-container">
            <div className="progress-bar-fill"></div>
          </div>
          <span className="version-tag">STITCH_OS v2.4.0</span>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="bg-noise"></div>
      <div className="corner-decor top-left"></div>
      <div className="corner-decor top-right"></div>
      <div className="corner-decor bottom-left"></div>
      <div className="corner-decor bottom-right"></div>
    </div>
  );
};

export default Loader;
