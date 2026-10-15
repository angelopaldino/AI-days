import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, signIn } = useAuth();
  const navigate = useNavigate();

  // Se l'utente è già autenticato, reindirizza alla home
  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error } = await signIn(formData.email, formData.password);
      if (error) throw error;
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lp-wrapper">
      {/* Subtle Background Texture */}
      <div className="lp-bg-noise"></div>

      {/* Header Section */}
      <header className="lp-header">
        <h1 className="lp-title">Accesso Sistema</h1>
        <p className="lp-subtitle">Autenticazione richiesta per procedere</p>
      </header>

      {/* Login Form Section */}
      <section className="lp-main-section">
        <form onSubmit={handleSubmit} className="lp-form">
          
          {/* Error Message */}
          {error && <div className="lp-error-message">{error}</div>}

          {/* Email Input */}
          <div className="lp-input-group">
            <div className="lp-status-bar"></div>
            <label className="lp-label" htmlFor="email">Email Aziendale</label>
            <input
              type="email"
              id="email"
              name="email"
              className="lp-input"
              placeholder="nome.cognome@azienda.it"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Password Input */}
          <div className="lp-input-group">
            <div className="lp-status-bar"></div>
            <label className="lp-label" htmlFor="password">Codice Accesso</label>
            <input
              type="password"
              id="password"
              name="password"
              className="lp-input"
              placeholder="••••••••"
              required
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="lp-btn" disabled={loading}>
            <span className="lp-btn-text">
              {loading ? 'Verifica in corso...' : 'Verifica Identità'}
            </span>
            <div className="lp-btn-overlay"></div>
          </button>

        </form>
      </section>

      {/* Footer Info */}
      <footer className="lp-footer">
        <span className="lp-footer-text">Secure Access Node // 0xAF32</span>
      </footer>
    </div>
  );
};

export default LoginPage;
