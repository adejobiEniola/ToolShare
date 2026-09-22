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

export default LandingPage
