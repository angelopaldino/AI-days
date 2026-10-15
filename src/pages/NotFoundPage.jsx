import { Link, useLocation } from 'react-router-dom'
import '../styles/NotFoundPage.css'

function NotFoundPage() {
  const location = useLocation()

  return (
    <div className="not-found-page">
      {/* Ambient background glows */}
      <div className="not-found-page__ambient">
        <div className="not-found-page__ambient-blob--error"></div>
        <div className="not-found-page__ambient-blob--violet"></div>
      </div>

      <div className="not-found-page__card">
        {/* Status Pill */}
        <div className="not-found-page__status-pill">
          <span className="not-found-page__status-dot"></span>
          <span className="not-found-page__status-label">
            STATO TELEMETRICO: ROTTA NON TROVATA
          </span>
        </div>

        {/* 404 Metric Display */}
        <div className="not-found-page__code">404</div>

        {/* Headline */}
        <h1 className="not-found-page__title">Segmento di Percorso Non Rilevato</h1>

        {/* Description */}
        <p className="not-found-page__desc">
          La risorsa o l'indirizzo richiesto non è mappato nella matrice dell'applicazione.
          Verifica l'URL o torna all'area di validazione principale.
        </p>

        {/* Telemetry diagnostics panel */}
        <div className="not-found-page__details">
          <div className="not-found-page__detail-row">
            <span className="not-found-page__detail-label">ENDPOINT RICHIESTO:</span>
            <span className="not-found-page__detail-value">{location.pathname}</span>
          </div>
          <div className="not-found-page__detail-row">
            <span className="not-found-page__detail-label">RISOLUZIONE ROTTA:</span>
            <span className="not-found-page__detail-value not-found-page__detail-value--fail">FALLITA (ERR_ROUTE_UNDEFINED)</span>
          </div>
          <div className="not-found-page__detail-row">
            <span className="not-found-page__detail-label">SISTEMA:</span>
            <span className="not-found-page__detail-value">VALIDAI CORE v4.2</span>
          </div>
        </div>

        {/* Navigation triggers */}
        <div className="not-found-page__actions">
          <Link to="/" className="not-found-page__btn-primary">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              arrow_back
            </span>
            <span>Torna alla Home</span>
          </Link>
          <Link to="/dashboard" className="not-found-page__btn-secondary">
            <span>Vai alla Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage

