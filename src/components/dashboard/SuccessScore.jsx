import React from 'react';

const SuccessScore = ({ score, description }) => {
  return (
    <div className="dp-card dp-score-card">
      <h3 className="dp-label-sm dp-text-variant dp-mb-24">Success Score</h3>
      
      <div className="dp-progress-container">
        <div className="dp-progress-stats">
          <span className="dp-score-number">{score}%</span>
          <span className="dp-label-sm dp-text-variant">Target Match</span>
        </div>
        <div className="dp-progress-track">
          <div 
            className="dp-progress-fill" 
            style={{ width: `${score}%` }}
          ></div>
        </div>
      </div>

      <p className="dp-mt-24 dp-font-14-italic dp-text-variant">
        {description}
      </p>
    </div>
  );
};



export default SuccessScore;
