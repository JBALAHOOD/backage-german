import React, { useEffect } from 'react';
import { Plane, Shield, Clock, Users, ShoppingBag } from 'lucide-react';
import LanguageSwitcher, { useTranslation } from './LanguageSwitcher';

export default function Layout({ children, currentPageName }) {
  const { t, currentLanguage } = useTranslation();
  
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.title = t('seo.title');

    // Remove old meta tags to prevent duplicates on navigation
    document.querySelector('meta[name="description"]')?.remove();
    document.querySelector('meta[name="keywords"]')?.remove();
    document.querySelector('script[type="application/ld+json"]')?.remove();

    const description = document.createElement('meta');
    description.name = 'description';
    description.content = t('seo.description');
    document.head.appendChild(description);

    const keywords = document.createElement('meta');
    keywords.name = 'keywords';
    keywords.content = t('seo.keywords');
    document.head.appendChild(keywords);

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": t('seo.title'),
      "url": window.location.origin,
      "description": t('seo.description'),
      "inLanguage": currentLanguage,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${window.location.origin}/?airline={search_term_string}`,
        "query-input": "required name=search_term_string"
      },
      "mainEntity": {
        "@type": "WebApplication",
        "name": t('seo.title'),
        "applicationCategory": "TravelApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": t('seo.title'),
        "url": window.location.origin
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Hand Luggage",
          "description": "Airline hand luggage size and weight restrictions"
        },
        {
          "@type": "Thing",
          "name": "Checked Baggage",
          "description": "Airline checked baggage policies and fees"
        },
        {
          "@type": "Thing",
          "name": "Travel Tips",
          "description": "Budget travel advice and packing tips"
        }
      ]
    });
    document.head.appendChild(schema);

    // Cleanup function to remove tags when component unmounts
    return () => {
      description.remove();
      keywords.remove();
      schema.remove();
    };
  }, [currentPageName, currentLanguage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
      <style>
        {`
          .gradient-text {
            background: linear-gradient(135deg, #0ea5e9 0%, #1e40af 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .glass-effect {
            backdrop-filter: blur(20px);
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .hover-lift:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
          
          .floating-animation {
            animation: float 3s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .slide-in {
            animation: slideIn 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(30px);
          }
          
          @keyframes slideIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* Header */}
      <header className="glass-effect border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 hover-lift cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-sky-500 rounded-xl flex items-center justify-center shadow-lg">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">{t('hero.title')}</h1>
                <p className="text-xs text-gray-600">{currentLanguage === 'de' ? 'Gepäckbestimmungen prüfen' : 'Check baggage policies'}</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Shield className="w-4 h-4 text-green-500" />
                <span>{currentLanguage === 'de' ? 'Zuverlässige Daten' : 'Reliable Data'}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>{currentLanguage === 'de' ? 'Immer aktuell' : 'Always Updated'}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Users className="w-4 h-4 text-purple-500" />
                <span>100+ Airlines</span>
              </div>
              <LanguageSwitcher />
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="glass-effect border-t border-white/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Plane className="w-5 h-5 text-blue-500 floating-animation" />
              <span className="font-semibold gradient-text">Handgepäck Prüfer</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Kostenlose Überprüfung von Gepäckbestimmungen für alle Airlines weltweit
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500 mb-4">
              <a href="#" className="hover:text-blue-600 transition-colors hover-lift">Datenschutz</a>
              <a href="#" className="hover:text-blue-600 transition-colors hover-lift">Impressum</a>
              <a href="#" className="hover:text-blue-600 transition-colors hover-lift">Kontakt</a>
              <a href="#" className="hover:text-blue-600 transition-colors hover-lift">Über uns</a>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-xs text-gray-400">
                © 2024 Handgepäck Prüfer. Alle Rechte vorbehalten. | Entwickelt mit ❤️ für Reisende
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}