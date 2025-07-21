import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Loading Portfolio...</p>
        </div>
      ) : (
        <header className="App-header">
          <h1>👋 Hai, Welcome to Pugal's Portfolio</h1>
          <p className="update-message">✨ Message updating soon...</p>
        </header>
      )}
    </div>
  );
}

export default App;
