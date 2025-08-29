import React, { useState } from 'react';
import { ArrowLeft, Plane, Luggage, Scale, DollarSign, Clock, Star, ExternalLink } from 'lucide-react';
import { useTranslation } from './LanguageSwitcher';
import airlinesData from '../data/airlines_complete.json';

export default function AirlineGuides({ onBack }) {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Get popular airlines from the data
  const popularAirlines = [
    'lufthansa', 'ryanair', 'easyjet', 'emirates', 'british_airways', 
    'air_france', 'klm', 'turkish_airlines', 'swiss', 'eurowings'
  ];

  const categories = [
    { id: 'all', name: 'Alle Airlines', icon: <Plane className="w-4 h-4" /> },
    { id: 'budget', name: 'Budget-Airlines', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'premium', name: 'Premium-Airlines', icon: <Star className="w-4 h-4" /> },
    { id: 'european', name: 'Europäische Airlines', icon: <Plane className="w-4 h-4" /> }
  ];

  const budgetAirlines = ['ryanair', 'easyjet', 'wizz_air', 'vueling', 'norwegian'];
  const premiumAirlines = ['emirates', 'lufthansa', 'british_airways', 'air_france', 'klm', 'swiss'];
  const europeanAirlines = ['lufthansa', 'ryanair', 'easyjet', 'air_france', 'klm', 'british_airways', 'swiss', 'eurowings'];

  const getFilteredAirlines = () => {
    let filtered = Object.entries(airlinesData).filter(([key]) => {
      if (selectedCategory === 'budget') return budgetAirlines.includes(key);
      if (selectedCategory === 'premium') return premiumAirlines.includes(key);
      if (selectedCategory === 'european') return europeanAirlines.includes(key);
      return popularAirlines.includes(key);
    });

    if (searchTerm) {
      filtered = filtered.filter(([key, airline]) => 
        airline.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const AirlineCard = ({ airlineKey, airline }) => {
    const handLuggage = airline.handLuggage || {};
    const checkedBaggage = airline.checkedBaggage?.economy || {};

    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Plane className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{airline.name}</h3>
            <p className="text-sm text-gray-500">{airline.code}</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Hand Luggage */}
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Luggage className="w-4 h-4 text-blue-600" />
              <h4 className="font-semibold text-blue-900">Handgepäck</h4>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-600">Gewicht:</span>
                <span className="font-medium ml-1">{handLuggage.maxWeight || 'N/A'}</span>
              </div>
              <div>
                <span className="text-gray-600">Größe:</span>
                <span className="font-medium ml-1">{handLuggage.maxDimensions || 'N/A'}</span>
              </div>
            </div>
            {handLuggage.additionalInfo && (
              <p className="text-xs text-blue-700 mt-2">{handLuggage.additionalInfo}</p>
            )}
          </div>

          {/* Checked Baggage */}
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-green-600" />
              <h4 className="font-semibold text-green-900">Aufgegebenes Gepäck (Economy)</h4>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-600">Weight:</span>
                <span className="font-medium ml-1">{checkedBaggage.maxWeight || 'N/A'}</span>
              </div>
              <div>
                <span className="text-gray-600">Preis:</span>
                <span className="font-medium ml-1">{checkedBaggage.price || 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* Tips */}
          {airline.tips && airline.tips.length > 0 && (
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Reisetipps</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                {airline.tips.map((tip, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-yellow-600 rounded-full"></div>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t('blog.airlineGuides.title')}</h1>
              <p className="text-gray-600">Vollständige Gepäckratgeber für beliebte Airlines</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Airlines suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Airlines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredAirlines().map(([key, airline]) => (
            <AirlineCard key={key} airlineKey={key} airline={airline} />
          ))}
        </div>

        {getFilteredAirlines().length === 0 && (
          <div className="text-center py-12">
            <Plane className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Keine Airlines gefunden</h3>
            <p className="text-gray-500">Versuchen Sie, Ihre Such- oder Filterkriterien anzupassen</p>
          </div>
        )}
      </div>
    </div>
  );
}