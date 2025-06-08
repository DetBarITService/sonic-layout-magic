
import React from 'react';
import { Play, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroButtons from './hero/HeroButtons';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <HeroContent />
          <HeroButtons />
        </div>
      </div>
    </section>
  );
};

export default Hero;
