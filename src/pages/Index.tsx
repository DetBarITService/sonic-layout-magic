
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import LiveTwitch from '../components/LiveTwitch';
import Music from '../components/Music';
import FeaturedGallery from '../components/gallery/FeaturedGallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <About />
      <LiveTwitch />
      <Music />
      <FeaturedGallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
