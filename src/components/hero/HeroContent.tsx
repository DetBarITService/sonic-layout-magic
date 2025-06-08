
import React from 'react';
import LiveIndicator from './LiveIndicator';

const HeroContent = () => {
  return (
    <>
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
        <span className="text-white animate-pulse">DJ</span>
        <span className="text-pink-500 animate-bounce" style={{ animationDelay: '0.1s' }}>Mike</span>
        <span className="text-purple-400 animate-pulse" style={{ animationDelay: '0.2s' }}>Morino</span>
      </h1>
      
      <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-medium">
        DJ & Twitch Streamer
      </p>
      
      <LiveIndicator />
      
      <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        Bringing you the hottest beats and live streaming experiences from Barcelona.
      </p>
    </>
  );
};

export default HeroContent;
