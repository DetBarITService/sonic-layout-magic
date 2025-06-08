
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-white">Impressum</span>
          </h1>
          
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="text-gray-300 space-y-2">
                <p><strong>DJ Mike Morino</strong></p>
                <p>Barcelona, Spanien</p>
                <p>E-Mail: djmikemorino@gmail.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Haftung für Inhalte</h2>
              <p className="text-gray-300">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Urheberrecht</h2>
              <p className="text-gray-300">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
