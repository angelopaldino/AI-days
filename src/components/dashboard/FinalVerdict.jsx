import React from 'react';

const FinalVerdict = ({ verdictText, actionText }) => {
  return (
    <div className="dp-card dp-span-2 dp-verdict-card">
      <h3 className="dp-label-sm dp-verdict-title">Verdetto Finale</h3>
      <div className="dp-verdict-big">{verdictText}</div>
      <div className="dp-verdict-btn">{actionText}</div>
    </div>
  );
};

export default FinalVerdict;
