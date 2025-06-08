
import React from 'react';

const MusicHero = () => {
  return (
    <section className="pt-24 pb-16 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          My <span className="text-pink-500">Music</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
          Entdecke meine neuesten Mixes, Tracks und Kollaborationen
        </p>
      </div>
    </section>
  );
};

export default MusicHero;
