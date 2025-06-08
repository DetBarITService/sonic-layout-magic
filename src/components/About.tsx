
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-pink-500">DJ</span><span className="text-purple-400">Mike</span><span className="text-pink-500">Morino</span>
          </h2>
          <p className="text-xl text-gray-400">The crazy journey from Germany to Spain</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                From Deutschland to España 🇩🇪➡️🇪🇸
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              What started out as a kid living in Germany has become my 
              creative outlet and journey to Spain. DJ Mike Morino, and 
              I'm currently 26yo about Music. In 2020 that I ended 
              working, So my first album went into shows for them, but
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              when I grow live at virtual clubs through germany. 
              For Techno cover the DJ Mike&Morino Electronic 
              Music. This virtual reality, music, or shows in 
              germany and spain music set to enjoy old dance all  
              about electronic techno.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">Electronic</span>
              <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm">Tech</span>
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">House</span>
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm">DJ Germany</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/lovable-uploads/0ac40b27-9dfe-43d0-aa3c-685cacd955fa.png" 
                alt="DJ Mike Morino"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-2xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
