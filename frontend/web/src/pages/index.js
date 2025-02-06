import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to Neuro-Assist</h1>
        <p>An AI-powered platform for neurodiverse individuals.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Index;