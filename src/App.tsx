import { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import './assets/css/app.css'

function App() {
  const [isLoginPage, setIsLoginPage] = useState(() => window.location.hash === '#login')

  useEffect(() => {
    function handleHashChange() {
      setIsLoginPage(window.location.hash === '#login')
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return isLoginPage ? <LoginPage /> : <LandingPage />
}

export default App
