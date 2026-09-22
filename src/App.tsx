import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import './assets/css/app.css'

function LandingPage() {
  return (
    <main className="landing-page">
      <nav className="landing-nav" aria-label="Main navigation">
        <a className="brand brand-dark" href="#top" aria-label="ToolLocker home">
          <span className="brand-mark" aria-hidden="true">TL</span>
          <span>ToolLocker</span>
        </a>
        <div className="landing-nav-actions">
          <span className="nav-caption">For workshop owners</span>
          <a className="btn btn-outline btn-sm nav-login" href="#login">Log in <span aria-hidden="true">&#8594;</span></a>
        </div>
      </nav>

      <section className="landing-hero" aria-labelledby="landing-heading">
        <div className="hero-copy">
          <p className="eyebrow">Your workshop, in order</p>
          <h1 id="landing-heading">Lend tools with confidence.</h1>
          <p className="hero-text">
            ToolLocker keeps every borrowed tool accounted for, so you can spend less time chasing returns and more time making things.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary hero-cta" href="#login">Start keeping track <span aria-hidden="true">&#8594;</span></a>
            <a className="hero-secondary" href="#login">I already have an account</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Example of a ToolLocker loan record">
          <div className="visual-topline"><span className="visual-kicker">Active loans</span><span className="visual-count">03</span></div>
          <div className="loan-list">
            <div className="loan-row loan-row-featured">
              <span className="tool-icon" aria-hidden="true">AG</span>
              <span className="loan-info"><strong>Angle Grinder 1</strong><small>with Daniel Okafor</small></span>
              <span className="loan-status status-due">Due today</span>
            </div>
            <div className="loan-row">
              <span className="tool-icon tool-icon-muted" aria-hidden="true">DS</span>
              <span className="loan-info"><strong>Drill Set</strong><small>with Chika Nwosu</small></span>
              <span className="loan-status">In 3 days</span>
            </div>
            <div className="loan-row">
              <span className="tool-icon tool-icon-muted" aria-hidden="true">CS</span>
              <span className="loan-info"><strong>Circular Saw</strong><small>with Emeka Obi</small></span>
              <span className="loan-status">In 6 days</span>
            </div>
          </div>
          <div className="visual-footer"><span className="visual-pulse" aria-hidden="true" /> Everything accounted for</div>
        </div>
      </section>

      <footer className="landing-footer">
        <p><span className="footer-rule" aria-hidden="true" /> Built for the way workshops actually work.</p>
        <div className="footer-points"><span>Simple loan records</span><span>Clear return dates</span><span>Less guesswork</span></div>
      </footer>
    </main>
  )
}

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('Sign in is ready to connect when authentication is added.')
  }

  return (
    <main className="auth-shell">
      <section className="auth-intro" aria-label="ToolLocker introduction">
        <a className="brand" href="#top" aria-label="ToolLocker home">
          <span className="brand-mark" aria-hidden="true">TL</span>
          <span>ToolLocker</span>
        </a>
        <div className="intro-copy">
          <p className="eyebrow">A calmer workshop</p>
          <h1>Know where every tool is.</h1>
          <p className="intro-text">
            Keep lending simple. Track what left the workshop, who has it, and when it is due back.
          </p>
        </div>
        <div className="workshop-note">
          <span className="note-dot" aria-hidden="true" />
          <span>Built for busy workshop owners</span>
        </div>
      </section>

      <section className="auth-panel" aria-labelledby="welcome-heading">
        <div className="auth-card">
          <div className="mobile-brand brand">
            <span className="brand-mark" aria-hidden="true">TL</span>
            <span>ToolLocker</span>
          </div>
          <div className="form-heading">
            <p className="eyebrow">Welcome back</p>
            <h2 id="welcome-heading">Sign in to your workspace</h2>
            <p>Pick up where you left off.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="field">
              <span>Email address</span>
              <input type="email" name="email" placeholder="you@workshop.com" autoComplete="email" required />
            </label>
            <label className="field">
              <span>Password</span>
              <span className="password-wrap">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
                <button
                  className="password-toggle btn btn-ghost btn-xs"
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </span>
            </label>

            <div className="form-options">
              <label className="remember-option">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <button type="button" className="text-button" onClick={() => setMessage('Password reset will be available when authentication is added.')}>Forgot password?</button>
            </div>

            <button className="sign-in-button btn btn-primary" type="submit">Sign in <span aria-hidden="true">&#8594;</span></button>
            {message && <p className="form-message" role="status">{message}</p>}
          </form>

          <p className="signup-prompt">New to ToolLocker? <button type="button" className="text-button">Create an account</button></p>
        </div>
        <p className="legal-copy">By continuing, you agree to keep your workshop records private and secure.</p>
      </section>
    </main>
  )
}

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
