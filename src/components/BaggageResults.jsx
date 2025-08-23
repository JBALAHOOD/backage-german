import { ExternalLink, Luggage, Scale, Ruler, AlertTriangle, Calendar } from 'lucide-react'
import BaggageChecker from './BaggageChecker'

// Mock baggage data - in a real app this would come from an API
const getBaggageInfo = (airline) => {
  const mockData = {
    'Lufthansa': {
      handLuggage: {
        maxWeight: '8 kg',
        maxDimensions: '55 x 40 x 23 cm',
        pieces: 1,
        notes: 'Zusätzlich eine kleine Handtasche erlaubt'
      },
      checkedBaggage: {
        economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
        business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
      },
      lastUpdated: '2024-01-15'
    },
    'Ryanair': {
      handLuggage: {
        maxWeight: '10 kg',
        maxDimensions: '55 x 40 x 20 cm',
        pieces: 1,
        notes: 'Priority Boarding erforderlich für Handgepäck'
      },
      checkedBaggage: {
        economy: { weight: '20 kg', dimensions: '81 x 119 x 119 cm', price: 'Ab 25€' },
      },
      lastUpdated: '2024-01-10'
    },
    'Eurowings': {
      handLuggage: {
        maxWeight: '8 kg',
        maxDimensions: '55 x 40 x 23 cm',
        pieces: 1,
        notes: 'Kleine Tasche zusätzlich erlaubt'
      },
      checkedBaggage: {
        economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 19€' },
      },
      lastUpdated: '2024-01-12'
    }
  }
  
  return mockData[airline.name] || {
    handLuggage: {
      maxWeight: '8 kg',
      maxDimensions: '55 x 40 x 23 cm',
      pieces: 1,
      notes: 'Standard Handgepäck-Bestimmungen'
    },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Variiert' },
    },
    lastUpdated: '2024-01-01'
  }
}

export default function BaggageResults({ airline }) {
  if (!airline) return null

  const baggageInfo = getBaggageInfo(airline)

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Airline Header */}
      <div className="glass-effect rounded-2xl p-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4">
            <Luggage className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold gradient-text">{airline.name}</h2>
            <div className="flex items-center justify-center gap-4 mt-2 text-sm text-slate-600">
              {airline.iata_code && (
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-medium">
                  {airline.iata_code}
                </span>
              )}
              {airline.country && (
                <span>{airline.country}</span>
              )}
            </div>
          </div>
        </div>
        
        {baggageInfo.lastUpdated && (
          <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            Letzte Aktualisierung: {new Date(baggageInfo.lastUpdated).toLocaleDateString('de-DE')}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Handgepäck */}
        <div className="glass-effect rounded-2xl p-6">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <Luggage className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Handgepäck</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center">
                <Scale className="w-5 h-5 text-slate-600 mr-2" />
                <span className="font-medium text-slate-700">Gewicht</span>
              </div>
              <span className="font-bold text-blue-600">{baggageInfo.handLuggage.maxWeight}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center">
                <Ruler className="w-5 h-5 text-slate-600 mr-2" />
                <span className="font-medium text-slate-700">Maße</span>
              </div>
              <span className="font-bold text-blue-600">{baggageInfo.handLuggage.maxDimensions}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center">
                <Luggage className="w-5 h-5 text-slate-600 mr-2" />
                <span className="font-medium text-slate-700">Anzahl</span>
              </div>
              <span className="font-bold text-blue-600">{baggageInfo.handLuggage.pieces} Stück</span>
            </div>
            
            {baggageInfo.handLuggage.notes && (
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-yellow-800">{baggageInfo.handLuggage.notes}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Aufgabegepäck */}
        <div className="glass-effect rounded-2xl p-6">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
              <Luggage className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Aufgabegepäck</h3>
          </div>
          
          <div className="space-y-4">
            {Object.entries(baggageInfo.checkedBaggage).map(([className, info]) => (
              <div key={className} className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-700 mb-3 capitalize">
                  {className === 'economy' ? 'Economy Class' : 
                   className === 'business' ? 'Business Class' : 
                   className === 'first' ? 'First Class' : className}
                </h4>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Gewicht:</span>
                    <span className="font-medium">{info.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Maße:</span>
                    <span className="font-medium">{info.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Preis:</span>
                    <span className="font-medium text-green-600">{info.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="glass-effect rounded-2xl p-6 border border-orange-200 bg-orange-50">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-orange-800 mb-2">Wichtiger Hinweis</h4>
            <p className="text-sm text-orange-700 leading-relaxed">
              Die angezeigten Informationen dienen nur als Orientierung. Gepäckbestimmungen können sich ändern und 
              variieren je nach Tarif, Strecke und Buchungsklasse. Bitte prüfen Sie die aktuellen Bestimmungen 
              direkt bei der Fluggesellschaft oder in Ihren Buchungsunterlagen.
            </p>
            <button className="mt-3 inline-flex items-center text-sm font-medium text-orange-800 hover:text-orange-900">
              <ExternalLink className="w-4 h-4 mr-1" />
              Zur offiziellen Website
            </button>
          </div>
        </div>
      </div>
      
      {/* Baggage Dimension Checker */}
      <BaggageChecker airline={airline} />
    </div>
  )
}