import React from 'react';

const PersonaCard = ({ name, role, quote, icon }) => {
  return (
    <div className="dp-card">
      <div className="dp-persona-header">
        <div className="dp-persona-icon">
          <span className="material-symbols-outlined">{icon || 'person'}</span>
        </div>
        <div>
          <h5 className="dp-font-20-600">{name}</h5>
          <p className="dp-label-sm dp-text-accent">{role}</p>
        </div>
      </div>

      <p className="dp-persona-quote">
        "{quote}"
      </p>
    </div>
  );
};

export default PersonaCard;
