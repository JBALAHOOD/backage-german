import React, { useState, useEffect } from 'react';
import { Ruler, CheckCircle, AlertTriangle, XCircle, Calculator } from 'lucide-react';

export default function BaggageChecker({ airline }) {
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    height: ''
  });
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(null);

  // Standard airline baggage limits (in cm)
  const baggageLimits = {
    'Lufthansa': { maxLength: 55, maxWidth: 40, maxHeight: 23, maxTotal: 118 },
    'Emirates': { maxLength: 55, maxWidth: 40, maxHeight: 25, maxTotal: 120 },
    'Ryanair': { maxLength: 55, maxWidth: 40, maxHeight: 20, maxTotal: 115 },
    'British Airways': { maxLength: 56, maxWidth: 45, maxHeight: 25, maxTotal: 126 },
    'KLM': { maxLength: 55, maxWidth: 35, maxHeight: 25, maxTotal: 115 },
    'Air France': { maxLength: 55, maxWidth: 35, maxHeight: 25, maxTotal: 115 },
    'Turkish Airlines': { maxLength: 55, maxWidth: 40, maxHeight: 23, maxTotal: 118 },
    'Qatar Airways': { maxLength: 50, maxWidth: 37, maxHeight: 25, maxTotal: 112 },
    'Swiss International Air Lines': { maxLength: 55, maxWidth: 40, maxHeight: 23, maxTotal: 118 },
    'Austrian Airlines': { maxLength: 55, maxWidth: 40, maxHeight: 23, maxTotal: 118 }
  };

  const handleInputChange = (field, value) => {
    const numValue = value === '' ? '' : Math.max(0, parseFloat(value) || 0);
    setDimensions(prev => ({
      ...prev,
      [field]: numValue
    }));
  };

  const calculateScore = () => {
    const { length, width, height } = dimensions;
    
    if (!length || !width || !height) {
      setResult(null);
      setScore(null);
      return;
    }

    const airlineName = airline?.airline_name || 'Lufthansa';
    const limits = baggageLimits[airlineName] || baggageLimits['Lufthansa'];
    
    const totalDimensions = parseFloat(length) + parseFloat(width) + parseFloat(height);
    
    // Calculate individual dimension compliance (0-100 for each)
    const lengthScore = Math.min(100, (limits.maxLength / parseFloat(length)) * 100);
    const widthScore = Math.min(100, (limits.maxWidth / parseFloat(width)) * 100);
    const heightScore = Math.min(100, (limits.maxHeight / parseFloat(height)) * 100);
    const totalScore = Math.min(100, (limits.maxTotal / totalDimensions) * 100);
    
    // Overall score is the minimum of all scores
    const overallScore = Math.min(lengthScore, widthScore, heightScore, totalScore);
    
    // Determine result status
    let status, message, color;
    if (overallScore >= 100) {
      status = 'approved';
      message = 'Ihr Gepäck entspricht den Bestimmungen!';
      color = 'green';
    } else if (overallScore >= 80) {
      status = 'warning';
      message = 'Ihr Gepäck könnte grenzwertig sein. Bitte prüfen Sie nochmals.';
      color = 'yellow';
    } else {
      status = 'rejected';
      message = 'Ihr Gepäck überschreitet die erlaubten Maße.';
      color = 'red';
    }

    setScore(Math.round(overallScore));
    setResult({ status, message, color, limits, totalDimensions });
  };

  useEffect(() => {
    calculateScore();
  }, [dimensions, airline]);

  const getStatusIcon = () => {
    if (!result) return <Calculator className="w-6 h-6 text-gray-400" />;
    
    switch (result.status) {
      case 'approved':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'rejected':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return <Calculator className="w-6 h-6 text-gray-400" />;
    }
  };

  const getScoreColor = () => {
    if (!score) return 'text-gray-400';
    if (score >= 100) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = () => {
    if (!score) return 'bg-gray-100';
    if (score >= 100) return 'bg-green-100';
    if (score >= 80) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="glass-effect rounded-2xl p-6 mt-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
          <Ruler className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold gradient-text">Gepäckmaß-Checker</h3>
          <p className="text-sm text-gray-600">Geben Sie die Abmessungen Ihres Gepäcks ein</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Länge (cm)
          </label>
          <input
            type="number"
            value={dimensions.length}
            onChange={(e) => handleInputChange('length', e.target.value)}
            placeholder="z.B. 55"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            min="0"
            step="0.1"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Breite (cm)
          </label>
          <input
            type="number"
            value={dimensions.width}
            onChange={(e) => handleInputChange('width', e.target.value)}
            placeholder="z.B. 40"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            min="0"
            step="0.1"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Höhe (cm)
          </label>
          <input
            type="number"
            value={dimensions.height}
            onChange={(e) => handleInputChange('height', e.target.value)}
            placeholder="z.B. 23"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            min="0"
            step="0.1"
          />
        </div>
      </div>

      {result && (
        <div className="space-y-4">
          {/* Score Display */}
          <div className={`${getScoreBackground()} rounded-xl p-4 text-center`}>
            <div className="flex items-center justify-center space-x-3 mb-2">
              {getStatusIcon()}
              <span className={`text-3xl font-bold ${getScoreColor()}`}>
                {score}/100
              </span>
            </div>
            <p className={`font-medium ${getScoreColor()}`}>
              {result.message}
            </p>
          </div>

          {/* Detailed Information */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-800 mb-3">Detaillierte Analyse</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Ihre Maße:</span>
                <p className="font-medium">
                  {dimensions.length} × {dimensions.width} × {dimensions.height} cm
                </p>
                <p className="text-gray-600">
                  Gesamt: {result.totalDimensions.toFixed(1)} cm
                </p>
              </div>
              <div>
                <span className="text-gray-600">Erlaubte Maße ({airline?.airline_name || 'Lufthansa'}):</span>
                <p className="font-medium">
                  {result.limits.maxLength} × {result.limits.maxWidth} × {result.limits.maxHeight} cm
                </p>
                <p className="text-gray-600">
                  Max. Gesamt: {result.limits.maxTotal} cm
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-blue-50 rounded-xl p-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Tipp</h4>
            <p className="text-sm text-blue-700">
              {score >= 100 
                ? 'Perfekt! Ihr Gepäck sollte problemlos als Handgepäck akzeptiert werden.'
                : score >= 80
                ? 'Ihr Gepäck ist grenzwertig. Kontaktieren Sie die Airline zur Sicherheit.'
                : 'Ihr Gepäck ist zu groß für Handgepäck. Erwägen Sie aufgegebenes Gepäck.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}