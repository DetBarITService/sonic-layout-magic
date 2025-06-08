
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveHero from '../components/live/LiveHero';
import LiveContent from '../components/live/LiveContent';

const Live = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <LiveHero />
      <LiveContent />
      <Footer />
    </div>
  );
};

export default Live;
