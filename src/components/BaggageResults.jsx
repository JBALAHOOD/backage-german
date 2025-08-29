import { ExternalLink, Luggage, Scale, Ruler, AlertTriangle, Calendar } from 'lucide-react'
import { useTranslation } from './LanguageSwitcher'
import BaggageDimensionChecker from './BaggageDimensionChecker'
import { getAirlineByCode } from '../data/airlines'

// Get baggage data from airline database
const getBaggageInfo = (airline) => {
  // If airline object already has baggage data, use it
  if (airline.handLuggage && airline.checkedBaggage) {
    return {
      handLuggage: airline.handLuggage,
      checkedBaggage: airline.checkedBaggage,
      lastUpdated: airline.lastUpdated || '2024-01-01'
    };
  }
  
  // Try to find airline in database
  let airlineData = getAirlineByCode(airline.airline_code || airline.name);
  
  if (airlineData) {
    return {
      handLuggage: airlineData.handLuggage,
      checkedBaggage: airlineData.checkedBaggage,
      lastUpdated: airlineData.lastUpdated || '2024-01-01'
    };
  }
  
  // Fallback to default values
  return {
    handLuggage: {
      maxWeight: '8 kg',
      maxDimensions: '55 x 40 x 23 cm',
      pieces: 1,
      notes: 'Standard Handgepäck-Bestimmungen'
    },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Variiert' }
    },
    lastUpdated: '2024-01-01'
  };
}

export default function BaggageResults({ airline }) {
  const { t } = useTranslation();
  if (!airline) return null

  const baggageInfo = getBaggageInfo(airline)

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Airline Header */}
      <div className="mobile-card md:card-modern text-center">
        <div className="flex flex-col md:flex-row items-center justify-center mb-4 gap-3 md:gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
            <Luggage className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl md:text-3xl font-bold gradient-text truncate">{airline.name}</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-2 text-sm text-slate-600">
              {airline.iata_code && (
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-medium">
                  {airline.iata_code}
                </span>
              )}
              {airline.country && (
                <span className="truncate">{airline.country}</span>
              )}
            </div>
          </div>
        </div>
        
        {baggageInfo.lastUpdated && (
          <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            {t('baggage.lastUpdated')}: {new Date(baggageInfo.lastUpdated).toLocaleDateString('de-DE')}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        {/* Handgepäck */}
        <div className="mobile-card md:card-modern">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
              <Luggage className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-800">{t('baggage.handLuggage')}</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-2 md:p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center min-w-0">
                <Scale className="w-4 h-4 md:w-5 md:h-5 text-slate-600 mr-2 flex-shrink-0" />
                <span className="font-medium text-slate-700 text-sm md:text-base">{t('baggage.weight')}</span>
              </div>
              <span className="font-bold text-blue-600 text-sm md:text-base">{baggageInfo.handLuggage.maxWeight}</span>
            </div>
            
            <div className="flex items-center justify-between p-2 md:p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center min-w-0">
                <Ruler className="w-4 h-4 md:w-5 md:h-5 text-slate-600 mr-2 flex-shrink-0" />
                <span className="font-medium text-slate-700 text-sm md:text-base">{t('baggage.dimensions')}</span>
              </div>
              <span className="font-bold text-blue-600 text-sm md:text-base">{baggageInfo.handLuggage.maxDimensions}</span>
            </div>
            
            <div className="flex items-center justify-between p-2 md:p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center min-w-0">
                <Luggage className="w-4 h-4 md:w-5 md:h-5 text-slate-600 mr-2 flex-shrink-0" />
                <span className="font-medium text-slate-700 text-sm md:text-base">{t('baggage.pieces')}</span>
              </div>
              <span className="font-bold text-blue-600 text-sm md:text-base">{baggageInfo.handLuggage.pieces} Stück</span>
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
        <div className="mobile-card md:card-modern">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
              <Luggage className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-800">{t('baggage.checkedBaggage')}</h3>
          </div>
          
          <div className="space-y-4">
            {Object.entries(baggageInfo.checkedBaggage).map(([className, info]) => (
              <div key={className} className="border border-slate-200 rounded-lg p-3 md:p-4">
                <h4 className="font-semibold text-slate-700 mb-2 md:mb-3 capitalize text-sm md:text-base">
                  {className === 'economy' ? t('class.economy') : 
                   className === 'business' ? t('class.business') : 
                   className === 'first' ? t('class.first') : className}
                </h4>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 text-sm md:text-base">{t('baggage.weight')}:</span>
                    <span className="font-medium text-sm md:text-base">{info.weight}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 text-sm md:text-base">{t('baggage.dimensions')}:</span>
                    <span className="font-medium text-sm md:text-base">{info.dimensions}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 text-sm md:text-base">{t('baggage.price')}:</span>
                    <span className="font-medium text-green-600 text-sm md:text-base">{info.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Baggage Dimension Checker */}
      <BaggageDimensionChecker airline={airline} />

      {/* Disclaimer */}
      <div className="mobile-card md:card-modern border border-orange-200 bg-orange-50">
        <div className="flex items-start">
          <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-orange-600 mr-2 md:mr-3 mt-1 flex-shrink-0" />
          <div className="min-w-0">
            <h4 className="font-semibold text-orange-800 mb-2 text-sm md:text-base">{t('disclaimer.title')}</h4>
            <p className="text-xs md:text-sm text-orange-700 leading-relaxed">
              {t('disclaimer.text')}
            </p>
            <button className="mt-3 inline-flex items-center text-xs md:text-sm font-medium text-orange-800 hover:text-orange-900">
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1" />
              {t('disclaimer.link')}
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}