import React from 'react';

const CompetitorTable = ({ competitors }) => {
  return (
    <section className="dp-mb-64">
      <h3 className="dp-section-title dp-mb-32">Analisi Competitiva</h3>
      <div className="dp-table-container">
        <table className="dp-table">
          <thead>
            <tr>
              <th className="dp-label-sm">Nome</th>
              <th className="dp-label-sm">Core Business</th>
              <th className="dp-label-sm">Punto di Debolezza</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((competitor, index) => (
              <tr key={index}>
                <td className="dp-font-20-600">{competitor.name}</td>
                <td className="dp-text-variant dp-font-14-base">{competitor.coreBusiness}</td>
                <td>
                  <span className="dp-badge dp-badge-error">{competitor.weakPoint}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};


export default CompetitorTable;
