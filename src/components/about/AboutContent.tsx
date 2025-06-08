
import React from 'react';

const AboutContent = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                From Deutschland to España 🇩🇪➡️🇪🇸
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Was als Kind in Deutschland begann, wurde zu meinem kreativen Outlet und meiner Reise nach Spanien. 
              Ich bin DJ Mike Morino, derzeit 26 Jahre alt und völlig verrückt nach Musik. 2020 endete mein 
              Arbeitsleben, und mein erstes Album führte mich zu Shows für sie.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Als ich anfing, live in virtuellen Clubs durch Deutschland zu spielen, entdeckte ich Techno als 
              DJ Mike & Morino Electronic Music. Diese virtuelle Realität, Musik oder Shows in Deutschland 
              und Spanien - alles dreht sich um elektronische Techno-Musik zum Tanzen.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">Electronic</span>
              <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm">Techno</span>
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">House</span>
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm">DJ Germany</span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">Live Streaming</span>
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

export default AboutContent;
