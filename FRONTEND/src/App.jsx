import React from 'react';

function App() {
  return (
    <div className="app-container">
      {/* Background Orbs for aesthetic lighting */}
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>

      <main className="content-wrapper">
        <div className="badge">
          <span className="pulse-dot"></span>
          System Online
        </div>

        <h1>Tutorial Project 1</h1>
        
        <p className="description">
          Your modern React workspace is configured and ready. 
          Built with Vite for lightning-fast HMR and styled with elegant vanilla CSS glassmorphism.
        </p>

        <div className="action-buttons">
          <button className="btn btn-primary" onClick={() => alert("Let's build something amazing!")}>
            Get Started
          </button>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Read Docs
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
