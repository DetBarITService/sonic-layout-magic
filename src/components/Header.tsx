
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SoundVisualizer from './SoundVisualizer';
import AnimatedLogo from './AnimatedLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <AnimatedLogo />
            </Link>
            <SoundVisualizer />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-colors ${isActive('/') ? 'text-pink-400' : 'text-white hover:text-pink-400'}`}>Home</Link>
            <Link to="/about" className={`transition-colors ${isActive('/about') ? 'text-pink-400' : 'text-white hover:text-pink-400'}`}>About</Link>
            <Link to="/live" className={`transition-colors ${isActive('/live') ? 'text-pink-400' : 'text-white hover:text-pink-400'}`}>Live</Link>
            <Link to="/music" className={`transition-colors ${isActive('/music') ? 'text-pink-400' : 'text-white hover:text-pink-400'}`}>Music</Link>
            <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-pink-400' : 'text-white hover:text-pink-400'}`}>Contact</Link>
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
              <Link to="/" className={`transition-colors ${isActive('/') ? 'text-pink-400' : 'text-white hover:text-pink-400'}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className={`transition-colors ${isActive('/about') ? 'text-pink-400' : 'text-white hover:text-pink-400'}`} onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/live" className={`transition-colors ${isActive('/live') ? 'text-pink-400' : 'text-white hover:text-pink-400'}`} onClick={() => setIsMenuOpen(false)}>Live</Link>
              <Link to="/music" className={`transition-colors ${isActive('/music') ? 'text-pink-400' : 'text-white hover:text-pink-400'}`} onClick={() => setIsMenuOpen(false)}>Music</Link>
              <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-pink-400' : 'text-white hover:text-pink-400'}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
