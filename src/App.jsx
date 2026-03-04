import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HospitalsList from './pages/HospitalsList';
import BloodBanksList from './pages/BloodBanksList';
import BloodBankDetail from './pages/BloodBankDetail';
import AmbulancesList from './pages/AmbulancesList';
import PharmaciesList from './pages/PharmaciesList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hospitals" element={<HospitalsList />} />
            <Route path="/blood-banks" element={<BloodBanksList />} />
            <Route path="/blood-banks/:id" element={<BloodBankDetail />} />
            <Route path="/ambulances" element={<AmbulancesList />} />
            <Route path="/pharmacies" element={<PharmaciesList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
