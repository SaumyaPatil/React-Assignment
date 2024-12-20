import React from "react";
import "./App.css";

function App() {
  return (
    <div className="login-container">
      {/* Desktop View */}
      <div className="desktop-view">
        <aside className="info-section">
          <div className="info-box">
            <h2>AI to Detect & Autofix Bad Code</h2>
            <ul>
              <li>30+ Language Support</li>
              <li>10K+ Developers</li>
              <li>100K+ Hours Saved</li>
            </ul>
            <p>Issues Fixed: <strong>500K+</strong></p>
          </div>
        </aside>
        <main className="login-section">
          <h1>Welcome to CodeAnt AI</h1>
          <div className="tab-buttons">
            <button className="tab active">SAAS</button>
            <button className="tab">Self Hosted</button>
          </div>
          <div className="login-buttons">
            <button>Sign in with GitHub</button>
            <button>Sign in with Bitbucket</button>
            <button>Sign in with Azure DevOps</button>
            <button>Sign in with GitLab</button>
          </div>
          <p className="privacy-policy">
            By signing up, you agree to the <a href="#privacy">Privacy Policy</a>.
          </p>
        </main>
      </div>

      {/* Mobile View */}
      <div className="mobile-view">
        <main className="login-section">
          <h1>Welcome to CodeAnt AI</h1>
          <div className="tab-buttons">
            <button className="tab active">SAAS</button>
            <button className="tab">Self Hosted</button>
          </div>
          <div className="login-buttons">
            <button>Sign in with GitHub</button>
            <button>Sign in with Bitbucket</button>
            <button>Sign in with Azure DevOps</button>
            <button>Sign in with GitLab</button>
          </div>
          <p className="privacy-policy">
            By signing up, you agree to the <a href="#privacy">Privacy Policy</a>.
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
