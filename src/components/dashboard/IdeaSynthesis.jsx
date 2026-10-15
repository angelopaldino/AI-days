import React from 'react';

const IdeaSynthesis = ({ description, badges }) => {
  return (
    <div className="dp-card dp-synthesis-card">
      <div className="dp-card-accent-bar"></div>
      <h3 className="dp-label-sm dp-text-accent dp-mb-16">Sintesi dell'Idea</h3>
      <p className="dp-headline-lg">

        {description}
      </p>
      <div className="dp-badge-container">
        {badges.map((badge, index) => (
          <span key={index} className={`dp-badge dp-badge-${badge.type}`}>
            {badge.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IdeaSynthesis;
