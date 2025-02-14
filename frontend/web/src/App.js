import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';
import LearningMaterials from './pages/LearningMaterials';
import JobListings from './pages/JobListings';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learning" element={<LearningMaterials />} />
          <Route path="/jobs" element={<JobListings />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
