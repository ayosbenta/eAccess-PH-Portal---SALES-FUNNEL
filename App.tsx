
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LeadCapturePage from './pages/LeadCapturePage';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';
import { FunnelProvider } from './context/FunnelContext';

function App() {
  return (
    <FunnelProvider>
      <HashRouter>
        <div className="bg-gray-50 text-gray-800 font-sans">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<LeadCapturePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </div>
      </HashRouter>
    </FunnelProvider>
  );
}

export default App;
