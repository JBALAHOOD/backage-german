import React, { useState, useEffect } from 'react';
import { Plane, ArrowLeft } from 'lucide-react';
import { searchAirlines, getAirlineCount } from '../data/airlines';


export default function SearchResults({ query, onSelectAirline }) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query && query.length >= 2) {
      searchAirlinesData(query);
    } else {
      setResults([]);
    }
  }, [query]);

  const searchAirlinesData = async (searchTerm) => {
    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const searchResults = searchAirlines(searchTerm);
      // Transform results to match expected format
      const transformedResults = searchResults.map((airline, index) => ({
        id: airline.iata_code || `airline-${index}`,
        airline_name: airline.name,
        airline_name_english: airline.name,
        airline_code: airline.iata_code,
        country: airline.country,
        handLuggage: airline.handLuggage,
        checkedBaggage: airline.checkedBaggage
      }));
      setResults(transformedResults.slice(0, 8)); // Show more results with expanded database
    } catch (error) {
      console.error('Fehler beim Suchen der Airlines:', error);
    }
    setIsLoading(false);
  };

  const handleAirlineSelect = (airline) => {
    if (onSelectAirline) {
      onSelectAirline(airline);
    }
  };

  if (!query || query.length < 2) return null;

  return (
    <div className="max-w-2xl mx-auto mt-6 slide-in">
      <div className="glass-effect border-0 shadow-xl rounded-2xl overflow-hidden">
        {isLoading ? (
          <div className="p-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-2">Suche läuft...</p>
          </div>
        ) : results.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {results.map((airline, index) => (
              <button
                key={airline.id}
                onClick={() => handleAirlineSelect(airline)}
                className="w-full flex items-center gap-4 p-4 hover:bg-blue-50 transition-all duration-200 group text-left hover-lift"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-sky-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {airline.airline_name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {airline.country} {airline.airline_code && `• ${airline.airline_code}`}
                  </p>
                </div>
                <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors transform rotate-180" />
              </button>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Plane className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600 font-medium">Keine Ergebnisse gefunden</p>
            <p className="text-sm text-gray-500 mt-1">Versuchen Sie es mit anderen Suchbegriffen</p>
          </div>
        )}
      </div>
    </div>
  );
}