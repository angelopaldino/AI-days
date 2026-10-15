import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import Loader from './components/Loader'
import { useIdea } from './context/IdeaContext'
import './App.css'

function App() {
  const { isLoading } = useIdea()

  return (
    <Router>
      {isLoading && <Loader />}
      <Routes>
        {/* Pagina di Login pubblica */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rotte protette da autenticazione */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>

        {/* Fallback 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
