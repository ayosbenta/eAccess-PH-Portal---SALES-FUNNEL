import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MetaPixelTracker from './components/MetaPixelTracker';

function App() {
  return (
    <HashRouter>
      <MetaPixelTracker />
      <div className="bg-gray-50 text-gray-800 font-sans">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;