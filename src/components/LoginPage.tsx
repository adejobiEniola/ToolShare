import { useState } from 'react'
import type { FormEvent } from 'react'

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

export default LoginPage
