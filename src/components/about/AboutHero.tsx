
import React from 'react';

const AboutHero = () => {
  return (
    <section className="pt-24 pb-16 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          About <span className="text-pink-500">DJ</span>
          <span className="text-purple-400">Mike</span>
          <span className="text-pink-500">Morino</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
          Die verrückte Reise von Deutschland nach Spanien - Entdecke meine Geschichte
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
