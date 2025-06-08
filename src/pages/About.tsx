
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutContent from '../components/about/AboutContent';
import AboutHero from '../components/about/AboutHero';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <AboutHero />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
