import React, { useState, createContext, useContext } from 'react';
import { Globe, Check } from 'lucide-react';

// Language Context
const LanguageContext = createContext();

// Language Provider
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('de');

  const switchLanguage = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  // Initialize language from localStorage
  React.useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && (savedLang === 'de' || savedLang === 'en')) {
      setCurrentLanguage(savedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language Switcher Component
export default function LanguageSwitcher() {
  const { currentLanguage, switchLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-200 touch-friendly"
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-xl">{currentLang.flag}</span>
        <span className="hidden sm:inline text-sm font-medium text-gray-700">
          {currentLang.name}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  switchLanguage(language.code);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left hover:bg-blue-50 active:bg-blue-100 flex items-center justify-between transition-all duration-200 touch-friendly ${
                  currentLanguage === language.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                </div>
                {currentLanguage === language.code && (
                  <Check className="w-4 h-4 text-blue-600" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Translation hook
export const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  const translations = {
    de: {
      // SEO Meta
      'seo.title': 'Gepäck-Checker – Handgepäck Größe & Gewicht für jede Airline',
      'seo.description': 'Prüfen Sie sofort, ob Ihr Handgepäck bei Lufthansa, Ryanair, EasyJet und mehr erlaubt ist. Vollständiger Gepäckbestimmungen-Ratgeber.',
      'seo.keywords': 'Handgepäck, Airline-Gepäck, Gepäckbestimmungen, Lufthansa, Ryanair, EasyJet, Koffergewicht, Koffermaße',
      
      // Navigation
      'nav.home': 'Startseite',
      'nav.comparison': 'Vergleichen',
      'nav.about': 'Über uns',
      'nav.blog': 'Blog',
      
      // Hero Section
      'hero.title': 'Handgepäck Prüfer',
      'hero.subtitle': 'Überprüfen Sie Gepäckbestimmungen aller Airlines in Sekunden',
      'hero.searchPlaceholder': 'Airline suchen (z.B. Lufthansa, Emirates)',
      'hero.searchButton': 'Jetzt prüfen',
      
      // Features
      'features.title': 'Warum Handgepäck Prüfer wählen?',
      'features.subtitle': 'Die optimale Lösung für die Überprüfung von Gepäckbestimmungen vor der Reise',
      'features.accuracy.title': '100% Genauigkeit',
      'features.accuracy.desc': 'Aktuelle und geprüfte Informationen aus offiziellen Airline-Quellen',
      'features.ease.title': 'Einfache Bedienung',
      'features.ease.desc': 'Benutzerfreundliche und schnelle Oberfläche für alle benötigten Informationen',
      'features.coverage.title': 'Umfassende Abdeckung',
      'features.coverage.desc': 'Alle nationalen und internationalen Airlines an einem Ort',
      

      
      // Baggage
      'baggage.handLuggage': 'Handgepäck',
      'baggage.checkedBaggage': 'Aufgabegepäck',
      'baggage.weight': 'Gewicht',
      'baggage.dimensions': 'Maße',
      'baggage.pieces': 'Anzahl',
      'baggage.price': 'Preis',
      'baggage.lastUpdated': 'Zuletzt aktualisiert',
      
      // Classes
      'class.economy': 'Economy Class',
      'class.business': 'Business Class',
      'class.first': 'First Class',
      
      // Common
      'common.back': 'Zurück zur Startseite',
      'common.search': 'Suchen',
      'common.loading': 'Laden...',
      'common.error': 'Fehler aufgetreten',
      
      // Disclaimer
      'disclaimer.title': 'Wichtiger Hinweis',
      'disclaimer.text': 'Die angezeigten Informationen dienen nur als Orientierung. Gepäckbestimmungen können sich ändern und variieren je nach Tarif, Strecke und Buchungsklasse. Bitte prüfen Sie die aktuellen Bestimmungen direkt bei der Fluggesellschaft oder in Ihren Buchungsunterlagen.',
      'disclaimer.link': 'Zur offiziellen Website',
      
      // Blog
      'blog.title': 'Reisetipps & Ratgeber',
      'blog.subtitle': 'Expertenrat für kluge Reisende',
      'blog.readMore': 'Weiterlesen',
      'blog.travelTips.title': 'Tipps für günstiges Reisen nur mit Handgepäck',
      'blog.travelTips.excerpt': 'Lernen Sie, wie Sie clever packen und Geld sparen, indem Sie nur mit Handgepäck reisen. Wichtige Tipps für Budget-Reisende.',

    },
    en: {
      // SEO Meta
      'seo.title': 'Baggage Checker – Hand Luggage Size & Weight for Every Airline',
      'seo.description': 'Instantly check if your carry-on bag is allowed on Lufthansa, Ryanair, EasyJet and more. Complete baggage policy guide.',
      'seo.keywords': 'carry-on luggage, airline baggage, baggage rules, lufthansa, ryanair, easyjet, bag weight, bag dimensions',
      
      // Navigation
      'nav.home': 'Home',
      'nav.comparison': 'Compare',
      'nav.about': 'About',
      'nav.blog': 'Blog',
      
      // Hero Section
      'hero.title': 'Baggage Checker',
      'hero.subtitle': 'Check baggage policies for all airlines in seconds',
      'hero.searchPlaceholder': 'Search airline (e.g. Lufthansa, Emirates)',
      'hero.searchButton': 'Check Now',
      
      // Features
      'features.title': 'Why Choose Baggage Checker?',
      'features.subtitle': 'The optimal solution for checking baggage policies before travel',
      'features.accuracy.title': '100% Accuracy',
      'features.accuracy.desc': 'Current and verified information from official airline sources',
      'features.ease.title': 'Easy to Use',
      'features.ease.desc': 'User-friendly and fast interface for all needed information',
      'features.coverage.title': 'Comprehensive Coverage',
      'features.coverage.desc': 'All national and international airlines in one place',
      

      
      // Baggage
      'baggage.handLuggage': 'Hand Luggage',
      'baggage.checkedBaggage': 'Checked Baggage',
      'baggage.weight': 'Weight',
      'baggage.dimensions': 'Dimensions',
      'baggage.pieces': 'Pieces',
      'baggage.price': 'Price',
      'baggage.lastUpdated': 'Last Updated',
      
      // Classes
      'class.economy': 'Economy Class',
      'class.business': 'Business Class',
      'class.first': 'First Class',
      
      // Common
      'common.back': 'Back to Home',
      'common.search': 'Search',
      'common.loading': 'Loading...',
      'common.error': 'Error occurred',
      
      // Disclaimer
      'disclaimer.title': 'Important Notice',
      'disclaimer.text': 'The displayed information is for guidance only. Baggage policies may change and vary by fare, route, and booking class. Please check current policies directly with the airline or in your booking documents.',
      'disclaimer.link': 'To official website',
      
      // Blog
      'blog.title': 'Travel Tips & Guides',
      'blog.subtitle': 'Expert advice for smart travelers',
      'blog.readMore': 'Read More',
      'blog.travelTips.title': 'Tips for Cheap Travel with Hand Luggage Only',
      'blog.travelTips.excerpt': 'Learn how to pack smart and save money by traveling with carry-on luggage only. Essential tips for budget travelers.',

    }
  };

  const t = (key) => {
    return translations[currentLanguage]?.[key] || key;
  };

  return { t, currentLanguage };
};