
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MusicHero from '../components/music/MusicHero';
import MusicContent from '../components/music/MusicContent';

const Music = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <MusicHero />
      <MusicContent />
      <Footer />
    </div>
  );
};

export default Music;
