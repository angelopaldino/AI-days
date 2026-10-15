import React from 'react';

const AnalysisCard = ({ title, description }) => {
  return (
    <div className="dp-card">
      <h4 className="dp-font-20-600 dp-text-primary dp-mb-12">{title}</h4>
      <p className="dp-font-14-base dp-text-variant">
        {description}
      </p>
    </div>
  );
};


export default AnalysisCard;
