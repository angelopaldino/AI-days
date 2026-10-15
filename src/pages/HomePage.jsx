import { useState } from 'react'
import '../styles/HomePage.css'

function HomePage() {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDone, setIsDone] = useState(false)

  const charLength = text.trim().length

  let densityLabel = 'DENSITÀ ARGOMENTO: IN ATTESA'
  let densityClass = 'home-page__density-text'

  if (charLength > 0 && charLength < 80) {
    densityLabel = 'DENSITÀ: SINTETICA'
    densityClass = 'home-page__density-text home-page__density-text--synthetic'
  } else if (charLength >= 80 && charLength < 250) {
    densityLabel = 'DENSITÀ: OTTIMALE'
    densityClass = 'home-page__density-text home-page__density-text--optimal'
  } else if (charLength >= 250) {
    densityLabel = 'DENSITÀ: APPROFONDITA'
    densityClass = 'home-page__density-text home-page__density-text--deep'
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) return

    setIsLoading(true)
    setIsDone(false)

    setTimeout(() => {
      setIsLoading(false)
      setIsDone(true)
    }, 1800)
  }

  return (
    <div className="home-page">
      {/* Ambient background glow */}
      <div className="home-page__ambient">
        <div className="home-page__ambient-blob--top"></div>
        <div className="home-page__ambient-blob--bottom"></div>
      </div>

      <main className="home-page__main">
        <div className="home-page__main-inner">
          <div className="home-page__hero">
            {/* Center ambient glow field */}
            <div className="home-page__center-glow">
              <div className="home-page__center-glow-large"></div>
              <div className="home-page__center-glow-small"></div>
            </div>

            {/* Content stage */}
            <div className="home-page__stage">
              {/* Status pill */}
              <div className="home-page__status-pill">
                <span className="home-page__status-dot"></span>
                <span className="home-page__status-label">
                  SISTEMA DI AUDIT PREDITTIVO v4.2
                </span>
              </div>

              {/* Title */}
              <div className="home-page__title-wrapper">
                <h1 className="home-page__title">
                  Valid<span className="home-page__title-gradient">AI</span>
                </h1>
              </div>

              {/* Slogan */}
              <p className="home-page__slogan">
                Scopri in pochi secondi se la tua idea di business ha futuro.
              </p>

              {/* Form */}
              <form className="home-page__form" onSubmit={handleSubmit}>
                <div className="home-page__textarea-wrapper">
                  <div className="home-page__textarea-container">
                    <textarea
                      className="home-page__textarea"
                      placeholder="Descrivi la tua idea di business: cosa offri, a chi e perché è diversa…"
                      required
                      rows={6}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    ></textarea>
                    {/* Footer bar */}
                    <div className="home-page__textarea-footer">
                      <div className="home-page__density">
                        <span className="material-symbols-outlined home-page__density-icon">
                          neurology
                        </span>
                        <span className={densityClass}>
                          {densityLabel}
                        </span>
                      </div>
                      <span className="home-page__char-count">
                        {charLength}/500 MIN
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  className={`home-page__submit-btn${isLoading ? ' home-page__submit-btn--loading' : ''}`}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="home-page__submit-btn-content">
                      <span className="material-symbols-outlined home-page__submit-btn-spinner">
                        sync
                      </span>
                      <span>Elaborazione Matrice Strategica...</span>
                    </span>
                  ) : isDone ? (
                    <span className="home-page__submit-btn-content">
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        check_circle
                      </span>
                      <span>Audit Generato</span>
                    </span>
                  ) : (
                    <>
                      <span className="home-page__submit-btn-content">
                        <span>Valida la mia idea</span>
                        <span className="material-symbols-outlined home-page__submit-btn-arrow">
                          arrow_forward
                        </span>
                      </span>
                      <div className="home-page__submit-btn-hover-overlay"></div>
                    </>
                  )}
                </button>
              </form>

              {/* Footer indicators */}
              <div className="home-page__indicators">
                <div className="home-page__indicator">
                  <span className="material-symbols-outlined home-page__indicator-icon home-page__indicator-icon--primary">
                    verified
                  </span>
                  <span>VALUTAZIONE TAM / SAM / SOM</span>
                </div>
                <div className="home-page__indicator">
                  <span className="material-symbols-outlined home-page__indicator-icon home-page__indicator-icon--secondary">
                    radar
                  </span>
                  <span>SATURAZIONE CONCORRENZIALE</span>
                </div>
                <div className="home-page__indicator">
                  <span className="material-symbols-outlined home-page__indicator-icon home-page__indicator-icon--tertiary">
                    speed
                  </span>
                  <span>TEMPO MEDIO: 4.8s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
