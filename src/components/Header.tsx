
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import SoundVisualizer from './SoundVisualizer';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">
              <span className="text-white">DJ</span>
              <span className="text-pink-500">Mike</span>
              <span className="text-purple-400">Morino</span>
            </div>
            <SoundVisualizer />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-pink-400 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-pink-400 transition-colors">About</a>
            <a href="#live" className="text-white hover:text-pink-400 transition-colors">Live</a>
            <a href="#music" className="text-white hover:text-pink-400 transition-colors">Music</a>
            <a href="#contact" className="text-white hover:text-pink-400 transition-colors">Contact</a>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-pink-400 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-pink-400 transition-colors">About</a>
              <a href="#live" className="text-white hover:text-pink-400 transition-colors">Live</a>
              <a href="#music" className="text-white hover:text-pink-400 transition-colors">Music</a>
              <a href="#contact" className="text-white hover:text-pink-400 transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
