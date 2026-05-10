import React from 'react';

function Home() {
  return (
    <div className="app-container">
      {/* Background Orbs for aesthetic lighting */}
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>

      <div className="hero-text-section">
        <div className="badge">
          <span className="pulse-dot"></span>
          Free to use • No credit card needed
        </div>

        <h1>
          Track every rupee.<br/>
          <span className="text-accent">Know where it goes.</span>
        </h1>
        
        <p className="description">
          Spendly helps you log expenses, spot patterns, and stay<br/>
          on budget — without the spreadsheet headache.
        </p>

        <div className="action-buttons">
          <button className="btn btn-primary">
            Create free account
          </button>
          <button className="btn btn-secondary">
            See how it works
          </button>
        </div>
      </div>

      <main className="content-wrapper dashboard-mockup">
        <div className="mockup-header">
          <span className="mockup-dot red"></span>
          <span className="mockup-dot yellow"></span>
          <span className="mockup-dot green"></span>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">This month</span>
            <div className="stat-value">₹18,240</div>
            <span className="stat-change positive">+12% vs last</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Budget left</span>
            <div className="stat-value">₹6,760</div>
            <span className="stat-change neutral">43% remaining</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Transactions</span>
            <div className="stat-value">34</div>
            <span className="stat-change subdued">this month</span>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-item">
            <span className="progress-label">Food</span>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '70%', background: 'var(--accent-2)' }}></div>
            </div>
          </div>
          <div className="progress-item">
            <span className="progress-label">Travel</span>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '50%', background: '#3b82f6' }}></div>
            </div>
          </div>
          <div className="progress-item">
            <span className="progress-label">Bills</span>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '40%', background: 'var(--accent-1)' }}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
