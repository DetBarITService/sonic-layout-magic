
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactHero from '../components/contact/ContactHero';
import ContactContent from '../components/contact/ContactContent';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <ContactHero />
      <ContactContent />
      <Footer />
    </div>
  );
};

export default Contact;
