
import React, { useState } from 'react';
import { Send, Mail, Instagram, Twitter, MapPin, Phone, Calendar } from 'lucide-react';

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Schreib mir eine Nachricht</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Dein Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="Dein Name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="deine.email@beispiel.de"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Betreff *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Wähle einen Betreff</option>
                  <option value="booking">Event Booking</option>
                  <option value="collaboration">Kollaboration</option>
                  <option value="interview">Interview Anfrage</option>
                  <option value="general">Allgemeine Anfrage</option>
                  <option value="technical">Technische Frage</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                  placeholder="Erzähl mir von deinem Projekt oder Event..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Nachricht senden</span>
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Kontaktiere mich</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-black/20 rounded-lg border border-white/10">
                  <Mail className="text-purple-400 mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-semibold">E-Mail</h3>
                    <p className="text-gray-300">djmikemorino@gmail.com</p>
                    <p className="text-sm text-gray-500">Antwort binnen 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-black/20 rounded-lg border border-white/10">
                  <MapPin className="text-purple-400 mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-semibold">Standort</h3>
                    <p className="text-gray-300">Barcelona, Spanien</p>
                    <p className="text-sm text-gray-500">Verfügbar für Events weltweit</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-black/20 rounded-lg border border-white/10">
                  <Calendar className="text-purple-400 mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-semibold">Verfügbarkeit</h3>
                    <p className="text-gray-300">Bookings für 2024/2025</p>
                    <p className="text-sm text-gray-500">Kollaborationen willkommen</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Folge mir auf Social Media</h3>
              
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3">
                  <Instagram size={20} />
                  <span>@djmikemorino</span>
                </button>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3">
                  <Twitter size={20} />
                  <span>@djmikemorino</span>
                </button>
                
                <button className="w-full bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3">
                  <span className="text-xl">📺</span>
                  <span>Twitch Stream</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
