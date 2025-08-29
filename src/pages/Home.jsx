import React, { useState, useEffect } from 'react';
import { Search, Plane, Shield, Clock, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import SearchResults from '../components/SearchResults';
import BaggageResults from '../components/BaggageResults';
import Blog from '../components/Blog';
import { useTranslation } from '../components/LanguageSwitcher';

export default function Home({ onNavigateToTravelTips, onNavigateToPackingHacks }) {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAirline, setSelectedAirline] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    // Set SEO meta tags
    // Title is now handled by Layout component
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'Überprüfen Sie die Handgepäck- und Gepäckbestimmungen von über 100 Fluggesellschaften. Schnell, zuverlässig und immer aktuell.');
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 
      'Handgepäck, Gepäck, Fluggesellschaft, Airlines, Bestimmungen, Reisen, Koffer');
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowSearch(true);
    }
  };

  const handleAirlineSelect = (airline) => {
    setSelectedAirline(airline);
    setShowSearch(false); // Hide search and show airline page
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Show airline-specific page when an airline is selected
  if (selectedAirline) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <button
              onClick={() => {
                setSelectedAirline(null);
                setShowSearch(false);
                setSearchQuery('');
              }}
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-4"
            >
              <ArrowRight className="w-4 h-4 transform rotate-180" />
              <span>Zurück zur Startseite</span>
            </button>
          </div>
          <BaggageResults airline={selectedAirline} />
        </div>
      </div>
    );
  }

  if (showSearch) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <button
              onClick={() => setShowSearch(false)}
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-4"
            >
              <ArrowRight className="w-4 h-4 transform rotate-180" />
              <span>Zurück zur Startseite</span>
            </button>
            <h2 className="text-3xl font-bold gradient-text mb-4">Airline suchen</h2>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Airline-Name oder Code eingeben..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                autoFocus
              />
            </div>
          </div>
          <SearchResults 
            query={searchQuery}
            onSelectAirline={handleAirlineSelect}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-sky-500/5 to-blue-400/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center slide-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-sky-500 rounded-3xl shadow-2xl mb-8 floating-animation">
              <Plane className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black gradient-text mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              {t('hero.subtitle')}
            </p>
            
            <div className="max-w-2xl mx-auto mb-8 md:mb-12 px-4">
              <div className="mobile-card md:glass-effect rounded-2xl p-2 shadow-xl hover-lift">
                <div className="flex flex-col gap-3 md:gap-2">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder={t('hero.searchPlaceholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="mobile-search pl-12 pr-6 h-14 w-full text-base md:text-lg border-0 bg-transparent focus:ring-0 focus:outline-none placeholder:text-gray-500 rounded-xl"
                    />
                  </div>
                  <button
                    onClick={handleSearch}
                    className="mobile-button touch-friendly h-14 px-6 md:px-8 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold rounded-xl shadow-lg hover-lift transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {t('hero.searchButton')}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 slide-in px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-4 md:mb-6">
              {t('features.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4">
            <div className="mobile-card md:glass-effect rounded-2xl p-6 md:p-8 text-center hover-lift slide-in">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{t('features.accuracy.title')}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {t('features.accuracy.desc')}
              </p>
            </div>

            <div className="mobile-card md:glass-effect rounded-2xl p-6 md:p-8 text-center hover-lift slide-in">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{t('features.ease.title')}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {t('features.ease.desc')}
              </p>
            </div>

            <div className="mobile-card md:glass-effect rounded-2xl p-6 md:p-8 text-center hover-lift slide-in">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{t('features.coverage.title')}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {t('features.coverage.desc')}
              </p>
            </div>
          </div>


        </div>
      </section>

      {/* Blog Section */}
      <Blog 
          onNavigateToTravelTips={onNavigateToTravelTips}
          onNavigateToPackingHacks={onNavigateToPackingHacks}
        />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 slide-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Starten Sie jetzt die Gepäckprüfung
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Vermeiden Sie Überraschungen am Flughafen - prüfen Sie Ihre Gepäckbestimmungen im Voraus
          </p>
          <button
            onClick={() => document.querySelector('input').focus()}
            className="bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover-lift text-lg"
          >
            Kostenlos starten
          </button>
        </div>
      </section>
    </div>
  );
}