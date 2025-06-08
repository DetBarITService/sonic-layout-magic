
import React from 'react';
import { Play, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-white animate-pulse">DJ</span>
            <span className="text-pink-500 animate-bounce" style={{ animationDelay: '0.1s' }}>Mike</span>
            <span className="text-purple-400 animate-pulse" style={{ animationDelay: '0.2s' }}>Morino</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            DJ & Twitch Streamer
          </p>
          
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400">Live streaming now</span>
          </div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Bringing you the hottest beats and live streaming experiences from Barcelona.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/live">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Play size={20} />
                <span>Watch Live on Twitch</span>
              </button>
            </Link>
            
            <Link to="/music">
              <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2">
                <Users size={20} />
                <span>Listen to Mix Boby</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
