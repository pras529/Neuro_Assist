import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
    const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return setError('No authentication token found');

      try {
        const userData = await fetchUserProfile(token);
        setUser(userData);
      } catch (err) {
        setError(err.message || 'Failed to fetch user profile');
      }
    };

    loadUserProfile();
  }, []);
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome to the Neuro-Assist Dashboard!</p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
      {user ? <p>Welcome, {user.name}</p> : <p>Loading user data...</p>}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;