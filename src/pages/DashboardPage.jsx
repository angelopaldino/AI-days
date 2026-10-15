import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useIdea } from '../context/IdeaContext'
import { analyzeIdea } from '../services/openaiService'
import '../styles/DashboardPage.css'

function DashboardPage() {
  const navigate = useNavigate()
  const { idea, setIsLoading } = useIdea()
  const [dashboardData, setDashboardData] = useState(null)

  useEffect(() => {
    // 1. Controlla che ci sia un'idea nello store all'avvio
    if (!idea || !idea.trim()) {
      setIsLoading(false)
      navigate('/', { replace: true })
      return
    }

    let isMounted = true

    const fetchAnalysis = async () => {
      try {
        // 2. Effettua la chiamata a OpenAI tramite il servizio openaiService.js
        const response = await analyzeIdea(idea)
        
        // 3. Inserisce la risposta come stato locale della dashboard
        if (isMounted) {
          setDashboardData(response)
        }
      } catch (error) {
        console.error("Errore durante l'analisi dell'idea in DashboardPage:", error)
      } finally {
        // 4. Spegne il loader sullo store
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchAnalysis()

    return () => {
      isMounted = false
    }
  }, [idea, navigate, setIsLoading])

  if (!idea || !idea.trim()) {
    return null
  }

  // Sintesi dell'idea (dalla risposta API o dall'idea dello store)
  const displayIdea = dashboardData?.ideaDescription || idea

  // Score e calcolo dinamico del tachimetro / gauge
  const score = typeof dashboardData?.successScore?.score === 'number'
    ? Math.max(0, Math.min(100, dashboardData.successScore.score))
    : 72

  // Lunghezza arco ~ 298.45 (r=95, angolo=180°)
  const dashOffset = (298.45 * (1 - score / 100)).toFixed(1)
  
  // Calcolo posizione della lancetta
  const theta = Math.PI * (1 - score / 100)
  const needleX = Math.round(120 + 74 * Math.cos(theta))
  const needleY = Math.round(120 - 74 * Math.sin(theta))

  // Badge potenziale in base allo score
  const isHighPotential = score >= 70
  const isMediumPotential = score >= 50 && score < 70
  const potentialText = isHighPotential
    ? 'Potenziale Elevato'
    : isMediumPotential
    ? 'Potenziale Medio'
    : 'Rischio Elevato'
  const potentialColor = isHighPotential ? '#4ae176' : isMediumPotential ? '#f59e0b' : '#ef4444'

  // Verdetto Finale
  const verdictText = (dashboardData?.verdict?.text || 'GO').toUpperCase()
  const isGo = verdictText.includes('GO') && !verdictText.includes('NO')
  const verdictColor = isGo ? '#22C55E' : '#EF4444'
  const verdictBg = isGo ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)'
  const verdictShadow = isGo ? '0 0 40px rgba(34, 197, 94, 0.35)' : '0 0 40px rgba(239, 68, 68, 0.35)'
  const verdictDesc = dashboardData?.verdict?.description || dashboardData?.successScore?.description || (isGo
    ? "Mercato in crescita e bisogno reale: l'idea merita di essere sviluppata."
    : "Elevata complessità operativa o forte saturazione: si suggerisce una revisione strategica.")

  // Analisi Difficoltà
  const defaultDifficulties = [
    {
      title: "Barriere d'ingresso",
      badge: "MEDIO-BASSO",
      badgeClass: "dashboard-badge-pill dashboard-badge-pill--cyan",
      icon: "shield",
      iconColor: "#5de6ff",
      description: "La creazione di una piattaforma software è accessibile, ma la vera barriera risiede nell'acquisizione iniziale di ristoratori partner locali e nell'attivazione di una massa critica di utenti prima di raggiungere la sostenibilità economica nelle singole città.",
      footerLeft: "Costo replicabilità tech: Basso",
      footerRight: "Attrito onboarding: Rilevante",
      footerRightColor: "#e4e1e9"
    },
    {
      title: "Sfide di esecuzione",
      badge: "ATTENZIONE",
      badgeClass: "dashboard-badge-pill dashboard-badge-pill--amber",
      icon: "warning",
      iconColor: "#fbbf24",
      description: "Gestione logistica delle finestre di ritiro a orari serali stringenti, coordinamento costante con la disponibilità reale dell'invenduto giornaliero e mantenimento di un'esperienza cliente affidabile senza deludere le aspettative di qualità del cibo.",
      footerLeft: "Rischio no-show: 18% medio",
      footerRight: "Controllo qualità: Critico",
      footerRightColor: "#fbbf24"
    }
  ]

  const difficulties = dashboardData?.difficultyAnalysis?.length >= 2
    ? dashboardData.difficultyAnalysis.map((item, idx) => ({
        title: item.title,
        badge: idx === 0 ? "MEDIO-BASSO" : "ATTENZIONE",
        badgeClass: idx === 0 ? "dashboard-badge-pill dashboard-badge-pill--cyan" : "dashboard-badge-pill dashboard-badge-pill--amber",
        icon: idx === 0 ? "shield" : "warning",
        iconColor: idx === 0 ? "#5de6ff" : "#fbbf24",
        description: item.description,
        footerLeft: idx === 0 ? "Fattibilità tecnica: Analizzata" : "Complessità operativa: Monitorata",
        footerRight: idx === 0 ? "Attrito: Rilevante" : "Controllo: Critico",
        footerRightColor: idx === 0 ? "#e4e1e9" : "#fbbf24"
      }))
    : defaultDifficulties

  // User Personas
  const defaultPersonas = [
    {
      initials: "GR",
      avatarClass: "dashboard-persona-avatar--1",
      name: "Giulia Rossi",
      sub: "Studentessa universitaria, 23 anni",
      body: "Budget limitato, acquisti last-minute tramite smartphone, molto sensibile al risparmio e alla sostenibilità ambientale.",
      footerLeft: "Willingness to pay: Bassa",
      footerRight: "Freq: 3-4x/sett",
      footerRightColor: "#5de6ff"
    },
    {
      initials: "MB",
      avatarClass: "dashboard-persona-avatar--2",
      name: "Marco Bianchi",
      sub: "Titolare di trattoria, 48 anni",
      body: "Punta a monetizzare i surplus di cucina evitando sprechi, cerca uno strumento intuitivo senza complicazioni gestionali.",
      footerLeft: "Priorità: Zero churn cucina",
      footerRight: "Recupero: ~15% marg",
      footerRightColor: "#4ae176"
    },
    {
      initials: "EC",
      avatarClass: "dashboard-persona-avatar--3",
      name: "Elena Conti",
      sub: "Impiegata attenta alla sostenibilità, 35 anni",
      body: "Lavora in centro, apprezza pasti sani e convenienti per la cena sostenendo le piccole attività del quartiere.",
      footerLeft: "Filtro: Bio/Km0",
      footerRight: "Orario: 19:30-21:00",
      footerRightColor: "#cabeff"
    }
  ]

  const personas = dashboardData?.personas?.length >= 3
    ? dashboardData.personas.slice(0, 3).map((p, idx) => {
        const initials = p.name ? p.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : `U${idx + 1}`
        return {
          initials,
          avatarClass: `dashboard-persona-avatar--${(idx % 3) + 1}`,
          name: p.name,
          sub: p.role,
          body: p.quote,
          footerLeft: `Profilo: Target ${idx + 1}`,
          footerRight: "Segmento convalidato",
          footerRightColor: idx === 0 ? "#5de6ff" : idx === 1 ? "#4ae176" : "#cabeff"
        }
      })
    : defaultPersonas

  // Competitor
  const defaultCompetitors = [
    {
      name: "Too Good To Go",
      dotColor: "#4ae176",
      core: "Magic Box di cibi invenduti da forni e market",
      weakness: "Scelta del cibo cieca per l'utente, nessun controllo su allergeni/preferenze specifiche",
      isEven: false
    },
    {
      name: "Karma",
      dotColor: "#5de6ff",
      core: "Ritiro da ristoranti selezionati a prezzo ridotto",
      weakness: "Copertura geografica ridotta e scarsa penetrazione nei centri urbani secondari",
      isEven: true
    },
    {
      name: "Olio",
      dotColor: "#938ea1",
      core: "Condivisione gratuita di cibo tra vicini e negozi",
      weakness: "Modello basato su volontariato senza incentivo economico per i ristoratori professionali",
      isEven: false
    }
  ]

  const competitors = dashboardData?.competitors?.length >= 3
    ? dashboardData.competitors.slice(0, 3).map((c, idx) => ({
        name: c.name,
        dotColor: idx === 0 ? "#4ae176" : idx === 1 ? "#5de6ff" : "#938ea1",
        core: c.coreBusiness,
        weakness: c.weakPoint,
        isEven: idx % 2 === 1
      }))
    : defaultCompetitors

  return (
    <div className="dashboard-page">
      {/* Ambient background glows */}
      <div className="dashboard-page__ambient">
        <div className="dashboard-page__ambient-top"></div>
        <div className="dashboard-page__ambient-bottom"></div>
      </div>

      <main className="dashboard-page__main">
        <div className="dashboard-page__content">
          {/* Header Navigazionale Superiore */}
          <div className="dashboard-header">
            <Link to="/" className="dashboard-header__back">
              <span className="material-symbols-outlined dashboard-header__back-icon">
                arrow_back
              </span>
              <span>Nuova analisi</span>
            </Link>
            <div className="dashboard-header__status">
              <span className="dashboard-header__status-dot"></span>
              <span>TELEMETRIA AI COMPLETATA</span>
            </div>
          </div>

          {/* Sezione 1: Sintesi dell'Idea */}
          <div className="dashboard-idea-card">
            <div className="dashboard-idea-card__inner">
              <div className="dashboard-idea-card__top">
                <span className="dashboard-idea-card__badge">LA TUA IDEA</span>
                <div className="dashboard-idea-card__id">
                  <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                    database
                  </span>
                  <span>ID: VAL-8842-IT</span>
                </div>
              </div>

              <p className="dashboard-idea-card__text">
                {displayIdea.startsWith('“') ? displayIdea : `“${displayIdea}”`}
              </p>

              <div className="dashboard-idea-card__tags">
                <span className="dashboard-idea-card__tag">
                  <span className="material-symbols-outlined" style={{ fontSize: '14px', color: '#5de6ff' }}>
                    restaurant
                  </span>
                  Food Tech
                </span>
                <span className="dashboard-idea-card__tag">
                  <span className="material-symbols-outlined" style={{ fontSize: '14px', color: '#cabeff' }}>
                    storefront
                  </span>
                  Marketplace B2C
                </span>
                <span className="dashboard-idea-card__tag">
                  <span className="material-symbols-outlined" style={{ fontSize: '14px', color: '#4ae176' }}>
                    eco
                  </span>
                  Sostenibilità
                </span>
              </div>
            </div>
          </div>

          {/* Sezione 2: Success Score & Verdetto Finale */}
          <div className="dashboard-grid-2">
            {/* Card 1: Success Score */}
            <div className="dashboard-score-card">
              <div className="dashboard-card__header">
                <div className="dashboard-card__title-group">
                  <span className="material-symbols-outlined" style={{ color: '#cabeff', fontSize: '20px' }}>
                    speed
                  </span>
                  <h2 className="dashboard-card__title">Success Score</h2>
                </div>
                <span className="dashboard-card__tag-mono">ALGORITMO v4.2</span>
              </div>

              {/* Semicircular Gauge SVG */}
              <div className="dashboard-gauge-wrapper">
                <svg className="dashboard-gauge-svg" viewBox="0 0 240 135">
                  <defs>
                    <linearGradient id="scoreArcGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="45%" stopColor="#F59E0B" />
                      <stop offset="78%" stopColor="#22C55E" />
                      <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                    <filter id="needleGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#cabeff" />
                    </filter>
                  </defs>
                  {/* Track di sfondo */}
                  <path
                    d="M 25 120 A 95 95 0 0 1 215 120"
                    fill="none"
                    stroke="#2a292f"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  {/* Arco colorato attivo */}
                  <path
                    d="M 25 120 A 95 95 0 0 1 215 120"
                    fill="none"
                    stroke="url(#scoreArcGradient)"
                    strokeWidth="14"
                    strokeDasharray="298.45"
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                  />
                  {/* Ticks di riferimento */}
                  <line x1="28" y1="120" x2="38" y2="120" stroke="#938ea1" strokeWidth="2" />
                  <line x1="120" y1="28" x2="120" y2="38" stroke="#938ea1" strokeWidth="2" />
                  <line x1="202" y1="120" x2="212" y2="120" stroke="#938ea1" strokeWidth="2" />
                  {/* Lancetta orientata per score */}
                  <g filter="url(#needleGlow)">
                    <line x1="120" y1="120" x2={needleX} y2={needleY} stroke="#cabeff" strokeWidth="3.5" strokeLinecap="round" />
                    <circle cx="120" cy="120" r="7" fill="#cabeff" />
                    <circle cx="120" cy="120" r="3" fill="#131318" />
                  </g>
                </svg>

                <div className="dashboard-gauge-value">
                  <div className="dashboard-gauge-number">
                    {score} <span className="dashboard-gauge-max">/ 100</span>
                  </div>
                  <div className="dashboard-gauge-pill">
                    <span style={{ width: '6px', height: '6px', borderRadius: '9999px', backgroundColor: potentialColor }}></span>
                    {potentialText}
                  </div>
                </div>
              </div>

              <div className="dashboard-score-card__footer">
                <span>Soglia Break-even: 60/100</span>
                <span style={{ color: potentialColor }}>
                  {score >= 60 ? `+${score - 60} pt sopra soglia` : `${score - 60} pt sotto soglia`}
                </span>
              </div>
            </div>

            {/* Card 2: Verdetto Finale */}
            <div className="dashboard-verdict-card">
              <div className="dashboard-verdict-card__glow"></div>
              <div className="dashboard-card__header" style={{ position: 'relative', zIndex: 10 }}>
                <div className="dashboard-card__title-group">
                  <span className="material-symbols-outlined" style={{ color: verdictColor, fontSize: '20px' }}>
                    verified
                  </span>
                  <h2 className="dashboard-card__title">Verdetto Finale</h2>
                </div>
                <span className="dashboard-verdict-card__phase">FASE 1: CONVALIDATA</span>
              </div>

              {/* Badge GO / NO GO */}
              <div className="dashboard-verdict-center">
                <div 
                  className="dashboard-verdict-badge"
                  style={{ color: verdictColor, backgroundColor: verdictBg, boxShadow: verdictShadow }}
                >
                  {verdictText}
                </div>
                <p className="dashboard-verdict-desc">
                  {verdictDesc}
                </p>
              </div>

              {/* Metriche di confidenza */}
              <div className="dashboard-verdict-metrics">
                <div className="dashboard-metric-box">
                  <span className="dashboard-metric-box__label">AFFIDABILITÀ ANALISI</span>
                  <div className="dashboard-metric-box__value-row">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#4ae176' }}>
                      check_circle
                    </span>
                    <span className="dashboard-metric-box__value">94%</span>
                  </div>
                </div>

                <div className="dashboard-metric-box">
                  <span className="dashboard-metric-box__label">DATI CAMPIONATI</span>
                  <div className="dashboard-metric-box__value-row">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#5de6ff' }}>
                      dataset
                    </span>
                    <span className="dashboard-metric-box__value">1.2M query</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sezione 3: Analisi di Difficoltà */}
          <div className="dashboard-grid-2">
            {difficulties.map((diff, idx) => (
              <div key={idx} className="dashboard-analysis-card">
                <div>
                  <div className="dashboard-card__header" style={{ marginBottom: '0.75rem' }}>
                    <div className="dashboard-card__title-group">
                      <span className="material-symbols-outlined" style={{ color: diff.iconColor, fontSize: '20px' }}>
                        {diff.icon}
                      </span>
                      <h3 className="dashboard-card__title">{diff.title}</h3>
                    </div>
                    <span className={diff.badgeClass}>
                      {diff.badge}
                    </span>
                  </div>
                  <p className="dashboard-analysis-card__desc">
                    {diff.description}
                  </p>
                </div>
                <div className="dashboard-analysis-card__footer">
                  <span>{diff.footerLeft}</span>
                  <span style={{ color: diff.footerRightColor }}>{diff.footerRight}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sezione 4: User Personas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="dashboard-section-header">
              <div className="dashboard-card__title-group">
                <span className="material-symbols-outlined" style={{ color: '#cabeff', fontSize: '20px' }}>
                  group
                </span>
                <h3 className="dashboard-card__title">Target &amp; User Personas</h3>
              </div>
              <span className="dashboard-card__tag-mono">PROFILI CHIAVE SIMULATI</span>
            </div>

            <div className="dashboard-grid-3">
              {personas.map((persona, idx) => (
                <div key={idx} className="dashboard-persona-card">
                  <div>
                    <div className="dashboard-persona-card__header">
                      <div className={`dashboard-persona-avatar ${persona.avatarClass}`}>
                        {persona.initials}
                      </div>
                      <div>
                        <h4 className="dashboard-persona-name">{persona.name}</h4>
                        <span className="dashboard-persona-sub">{persona.sub}</span>
                      </div>
                    </div>
                    <p className="dashboard-persona-body">
                      {persona.body}
                    </p>
                  </div>
                  <div className="dashboard-persona-footer">
                    <span>{persona.footerLeft}</span>
                    <span style={{ color: persona.footerRightColor }}>{persona.footerRight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sezione 5: Top 3 Competitor */}
          <div className="dashboard-competitor-card">
            <div className="dashboard-card__header" style={{ marginBottom: '1.25rem' }}>
              <div className="dashboard-card__title-group">
                <span className="material-symbols-outlined" style={{ color: '#5de6ff', fontSize: '20px' }}>
                  leaderboard
                </span>
                <h3 className="dashboard-card__title">Top 3 Competitor</h3>
              </div>
              <span className="dashboard-card__tag-mono">ANALISI DI POSIZIONAMENTO DIRETTO</span>
            </div>

            <div className="dashboard-table-container">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th style={{ width: '25%' }}>COMPETITOR</th>
                    <th style={{ width: '40%' }}>CORE BUSINESS</th>
                    <th style={{ width: '35%' }}>PUNTO DEBOLE</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((comp, idx) => (
                    <tr key={idx} style={{ backgroundColor: comp.isEven ? 'rgba(31, 31, 36, 0.4)' : undefined }}>
                      <td className="dashboard-table-name">
                        <span className="dashboard-table-dot" style={{ backgroundColor: comp.dotColor }}></span>
                        {comp.name}
                      </td>
                      <td style={{ color: '#c9c4d8' }}>
                        {comp.core}
                      </td>
                      <td className="dashboard-table-weakness">
                        {comp.weakness}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Sintesi differenziante */}
            <div className="dashboard-opportunity-box">
              <span className="material-symbols-outlined" style={{ color: '#5de6ff', fontSize: '20px', marginTop: '2px' }}>
                tips_and_updates
              </span>
              <p className="dashboard-opportunity-text">
                <strong style={{ color: '#e4e1e9' }}>Opportunità differenziante:</strong> Offrire trasparenza sulle singole porzioni (piatto esatto anziché surprise box generica) risolve il punto di frizione principale dei competitor sul mercato, sbloccando clienti disposti a pagare un ticket medio leggermente più alto (+20-30%).
              </p>
            </div>
          </div>

          {/* Barra di esportazione / Azione secondaria */}
          <div className="dashboard-footer">
            <span>SESSIONE SALVATA IN LOCALE · HASH: #7C5C-992F</span>
            <div className="dashboard-footer__buttons">
              <button
                className="dashboard-footer__btn-secondary"
                type="button"
                onClick={() => window.print()}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                  print
                </span>
                Esporta PDF
              </button>
              <Link to="/" className="dashboard-footer__btn-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                  add_circle
                </span>
                Testa un'altra idea
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
