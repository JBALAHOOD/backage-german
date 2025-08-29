import React, { useState } from 'react';
import { Ruler, CheckCircle, AlertTriangle, XCircle, Calculator, Package } from 'lucide-react';
import { useTranslation } from './LanguageSwitcher';
import { airlines, getAirlineByCode, searchAirlines } from '../data/airlines';

export default function BaggageDimensionChecker({ airline }) {
  const { t } = useTranslation();
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    height: ''
  });
  const [weight, setWeight] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Parse airline dimensions (e.g., "55 x 40 x 23 cm")
  const parseAirlineDimensions = (dimensionString) => {
    const match = dimensionString.match(/(\d+)\s*x\s*(\d+)\s*x\s*(\d+)/i);
    if (match) {
      return {
        length: parseInt(match[1]),
        width: parseInt(match[2]),
        height: parseInt(match[3])
      };
    }
    return { length: 55, width: 40, height: 23 }; // Default values
  };

  const handleInputChange = (dimension, value) => {
    setDimensions(prev => ({
      ...prev,
      [dimension]: value
    }));
  };

  const handleCheck = () => {
    if (dimensions.length && dimensions.width && dimensions.height && weight) {
      setShowResults(true);
    }
  };

  const resetChecker = () => {
    setDimensions({ length: '', width: '', height: '' });
    setWeight('');
    setShowResults(false);
  };

  // Get airline limits from database
  const getAirlineLimits = () => {
    if (!airline) return { length: 55, width: 40, height: 23, weight: 8 };
    
    // First try to find by exact name match
    let airlineData = airline.name ? airlines.find(a => a.name.toLowerCase() === airline.name.toLowerCase()) : null;
    
    // If not found, try to find by partial name match
    if (!airlineData && airline.name) {
      airlineData = airlines.find(a => a.name.toLowerCase().includes(airline.name.toLowerCase()));
    }
    
    // If still not found, try IATA code
    if (!airlineData && airline.iata) {
      airlineData = getAirlineByCode(airline.iata);
    }
    
    if (airlineData) {
      // Parse dimensions from string format "55 x 40 x 20 cm"
      const dimensionMatch = airlineData.handLuggage.maxDimensions.match(/(\d+)\s*x\s*(\d+)\s*x\s*(\d+)/i);
      const weightMatch = airlineData.handLuggage.maxWeight.match(/(\d+(?:\.\d+)?)/); 
      
      if (dimensionMatch && weightMatch) {
        return {
          length: parseInt(dimensionMatch[1]),
          width: parseInt(dimensionMatch[2]),
          height: parseInt(dimensionMatch[3]),
          weight: parseFloat(weightMatch[1])
        };
      }
    }
    
    // Default limits if airline not found
    return { length: 55, width: 40, height: 23, weight: 8 };
  };

  const airlineLimits = getAirlineLimits();

  // Calculate results
  const calculateResults = () => {
    const userDims = {
      length: parseFloat(dimensions.length) || 0,
      width: parseFloat(dimensions.width) || 0,
      height: parseFloat(dimensions.height) || 0
    };
    const userWeight = parseFloat(weight) || 0;

    const results = {
      length: {
        value: userDims.length,
        limit: airlineLimits.length,
        percentage: (userDims.length / airlineLimits.length) * 100,
        status: userDims.length <= airlineLimits.length ? 'pass' : 'fail'
      },
      width: {
        value: userDims.width,
        limit: airlineLimits.width,
        percentage: (userDims.width / airlineLimits.width) * 100,
        status: userDims.width <= airlineLimits.width ? 'pass' : 'fail'
      },
      height: {
        value: userDims.height,
        limit: airlineLimits.height,
        percentage: (userDims.height / airlineLimits.height) * 100,
        status: userDims.height <= airlineLimits.height ? 'pass' : 'fail'
      },
      weight: {
        value: userWeight,
        limit: airlineLimits.weight,
        percentage: (userWeight / airlineLimits.weight) * 100,
        status: userWeight <= airlineLimits.weight ? 'pass' : 'fail'
      }
    };

    const overallStatus = results.length.status === 'pass' && 
                         results.width.status === 'pass' && 
                         results.height.status === 'pass' &&
                         results.weight.status === 'pass' ? 'pass' : 'fail';

    const totalVolume = userDims.length * userDims.width * userDims.height / 1000; // in liters
    const maxVolume = airlineLimits.length * airlineLimits.width * airlineLimits.height / 1000;

    return {
      dimensions: results,
      overallStatus,
      volume: {
        user: totalVolume,
        max: maxVolume,
        percentage: (totalVolume / maxVolume) * 100
      }
    };
  };

  const results = showResults ? calculateResults() : null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'pass': return 'text-green-600 bg-green-50 border-green-200';
      case 'fail': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pass': return <CheckCircle className="w-5 h-5" />;
      case 'fail': return <XCircle className="w-5 h-5" />;
      default: return <AlertTriangle className="w-5 h-5" />;
    }
  };

  return (
    <div className="mobile-card md:card-modern">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
          <Ruler className="w-6 h-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800">Gepäckmaße-Prüfer</h3>
      </div>

      {!showResults ? (
        <div className="space-y-6">
          <p className="text-slate-600">
            Geben Sie die Maße und das Gewicht Ihres Gepäcks ein, um zu prüfen, ob es den Bestimmungen von {airline?.name || 'der Airline'} entspricht.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Länge (cm)
              </label>
              <input
                type="number"
                value={dimensions.length}
                onChange={(e) => handleInputChange('length', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="z.B. 55"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Breite (cm)
              </label>
              <input
                type="number"
                value={dimensions.width}
                onChange={(e) => handleInputChange('width', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="z.B. 40"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Höhe (cm)
              </label>
              <input
                type="number"
                value={dimensions.height}
                onChange={(e) => handleInputChange('height', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="z.B. 23"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Gewicht (kg)
              </label>
              <input
                type="number"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="z.B. 7.5"
              />
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h4 className="font-medium text-slate-700 mb-2">Erlaubte Limits für {airline?.name || 'Standard'}:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-slate-600">Maße:</span>
                <p className="font-medium">{airlineLimits.length} x {airlineLimits.width} x {airlineLimits.height} cm</p>
              </div>
              <div>
                <span className="text-slate-600">Gewicht:</span>
                <p className="font-medium">{airlineLimits.weight} kg</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleCheck}
            disabled={!dimensions.length || !dimensions.width || !dimensions.height || !weight}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            Maße prüfen
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Overall Status */}
          <div className={`p-4 rounded-lg border-2 ${getStatusColor(results.overallStatus)}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {getStatusIcon(results.overallStatus)}
                <span className="ml-2 font-bold text-lg">
                  {results.overallStatus === 'pass' ? 'Gepäck entspricht den Bestimmungen!' : 'Gepäck überschreitet die Limits!'}
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-800 text-lg">Detaillierte Ergebnisse:</h4>
            
            {Object.entries(results.dimensions).map(([dimension, data]) => (
              <div key={dimension} className={`p-4 rounded-lg border ${getStatusColor(data.status)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {getStatusIcon(data.status)}
                    <span className="ml-2 font-medium capitalize">
                      {dimension === 'length' ? 'Länge' : 
                       dimension === 'width' ? 'Breite' : 
                       dimension === 'height' ? 'Höhe' : 'Gewicht'}
                    </span>
                  </div>
                  <span className="font-bold">
                    {data.value} {dimension === 'weight' ? 'kg' : 'cm'} / {data.limit} {dimension === 'weight' ? 'kg' : 'cm'}
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div 
                    className={`h-3 rounded-full transition-all duration-500 ${
                      data.status === 'pass' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${Math.min(data.percentage, 100)}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Auslastung: {data.percentage.toFixed(1)}%</span>
                  <span>
                    {data.status === 'pass' 
                      ? `${(data.limit - data.value).toFixed(1)} ${dimension === 'weight' ? 'kg' : 'cm'} Spielraum`
                      : `${(data.value - data.limit).toFixed(1)} ${dimension === 'weight' ? 'kg' : 'cm'} zu ${dimension === 'weight' ? 'schwer' : 'groß'}`
                    }
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Volume Calculation */}
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <Calculator className="w-5 h-5 text-blue-600 mr-2" />
              <h4 className="font-bold text-blue-800">Volumen-Berechnung</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-blue-700 font-medium">Ihr Gepäck:</span>
                <p className="text-2xl font-bold text-blue-800">{results.volume.user.toFixed(1)} L</p>
              </div>
              <div>
                <span className="text-blue-700 font-medium">Maximum erlaubt:</span>
                <p className="text-2xl font-bold text-blue-800">{results.volume.max.toFixed(1)} L</p>
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full bg-blue-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-500 ${
                    results.volume.percentage <= 100 ? 'bg-blue-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.min(results.volume.percentage, 100)}%` }}
                ></div>
              </div>
              <p className="text-sm text-blue-700 mt-1">
                Volumen-Auslastung: {results.volume.percentage.toFixed(1)}%
              </p>
            </div>
          </div>

          {/* Recommendations */}
          {results.overallStatus === 'fail' && (
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">Empfehlungen:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Prüfen Sie, ob Ihr Gepäck komprimierbar ist</li>
                    <li>• Erwägen Sie ein kleineres Gepäckstück</li>
                    <li>• Kontaktieren Sie die Airline für spezielle Regelungen</li>
                    <li>• Buchen Sie ggf. Aufgabegepäck dazu</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={resetChecker}
              className="flex-1 bg-slate-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-700 transition-all duration-200"
            >
              Neue Prüfung
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center"
            >
              <Package className="w-5 h-5 mr-2" />
              Ergebnis drucken
            </button>
          </div>
        </div>
      )}
    </div>
  );
}