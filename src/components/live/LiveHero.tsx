
import React from 'react';

const LiveHero = () => {
  return (
    <section className="pt-24 pb-16 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Live on <span className="text-purple-400">Twitch</span>
        </h1>
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-red-400 text-xl">LIVE NOW</span>
        </div>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
          Erlebe interaktive DJ-Sessions und Live-Musikproduktion
        </p>
      </div>
    </section>
  );
};

export default LiveHero;
