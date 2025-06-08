
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-white">Datenschutzerklärung</span>
          </h1>
          
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">1. Datenschutz auf einen Blick</h2>
              <p className="text-gray-300">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-lg font-semibold text-pink-400 mb-2">Datenschutz</h3>
              <p className="text-gray-300">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie 
                dieser Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg font-semibold text-pink-400 mb-2">Server-Log-Dateien</h3>
              <p className="text-gray-300">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes 
                Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
