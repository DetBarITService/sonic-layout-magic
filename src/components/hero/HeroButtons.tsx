
import React from 'react';
import { Play, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
      <Link to="/live">
        <button className="group relative bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl">
          <Play size={20} className="group-hover:animate-pulse" />
          <span>Watch Live on Twitch</span>
        </button>
      </Link>
      
      <Link to="/music">
        <button className="group relative border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm bg-white/10 hover:bg-purple-400">
          <Users size={20} className="group-hover:animate-bounce" />
          <span>Listen to Mix Boby</span>
        </button>
      </Link>
    </div>
  );
};

export default HeroButtons;
