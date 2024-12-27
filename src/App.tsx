import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CountryView } from './pages/CountryView';
import { Player } from './components/Player';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryCode" element={<CountryView />} />
        </Routes>
        <Player />
      </div>
    </Router>
  );
}