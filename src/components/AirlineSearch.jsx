import { useState, useEffect } from 'react'
import { Search, X, ArrowLeft } from 'lucide-react'

// Mock airline data - in a real app this would come from an API
const mockAirlines = [
  { id: 1, name: 'Lufthansa', iata_code: 'LH', country: 'Deutschland', logo_url: null },
  { id: 2, name: 'Ryanair', iata_code: 'FR', country: 'Irland', logo_url: null },
  { id: 3, name: 'Eurowings', iata_code: 'EW', country: 'Deutschland', logo_url: null },
  { id: 4, name: 'Air France', iata_code: 'AF', country: 'Frankreich', logo_url: null },
  { id: 5, name: 'KLM', iata_code: 'KL', country: 'Niederlande', logo_url: null },
  { id: 6, name: 'British Airways', iata_code: 'BA', country: 'Großbritannien', logo_url: null },
  { id: 7, name: 'Emirates', iata_code: 'EK', country: 'VAE', logo_url: null },
  { id: 8, name: 'Turkish Airlines', iata_code: 'TK', country: 'Türkei', logo_url: null },
  { id: 9, name: 'Swiss International Air Lines', iata_code: 'LX', country: 'Schweiz', logo_url: null },
  { id: 10, name: 'Austrian Airlines', iata_code: 'OS', country: 'Österreich', logo_url: null },
]

export default function AirlineSearch({ onAirlineSelect, onBack, initialQuery = '' }) {
  const [searchTerm, setSearchTerm] = useState(initialQuery)
  const [filteredAirlines, setFilteredAirlines] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedAirline, setSelectedAirline] = useState(null)

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = mockAirlines.filter(airline =>
        airline.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        airline.code.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredAirlines(filtered)
      setShowDropdown(true)
    } else {
      setFilteredAirlines([])
      setShowDropdown(false)
    }
  }, [searchTerm])

  // Filter airlines on initial load if initialQuery is provided
  useEffect(() => {
    if (initialQuery) {
      const filtered = mockAirlines.filter(airline =>
        airline.name.toLowerCase().includes(initialQuery.toLowerCase()) ||
        airline.code.toLowerCase().includes(initialQuery.toLowerCase())
      )
      setFilteredAirlines(filtered)
      setShowDropdown(true)
    }
  }, [initialQuery])

  const handleAirlineSelect = (airline) => {
    setSearchTerm(airline.name)
    setShowDropdown(false)
    setSelectedAirline(airline)
    onAirlineSelect(airline)
  }

  const clearSearch = () => {
    setSearchTerm('')
    setShowDropdown(false)
    setSelectedAirline(null)
    onAirlineSelect(null)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="mb-4 flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Zurück
        </button>
      )}
      
      <div className="relative">
        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Fluggesellschaft suchen (z.B. Lufthansa, LH)..."
            className="w-full pl-12 pr-12 py-4 text-lg border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent glass-effect"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-4 flex items-center"
            >
              <X className="h-5 w-5 text-slate-400 hover:text-slate-600" />
            </button>
          )}
        </div>

        {/* Dropdown Results */}
        {showDropdown && filteredAirlines.length > 0 && (
          <div className="absolute z-10 w-full mt-2 glass-effect border border-slate-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
            {filteredAirlines.map((airline) => (
              <button
                key={airline.id}
                onClick={() => handleAirlineSelect(airline)}
                className="w-full px-4 py-3 text-left hover:bg-blue-50 flex items-center justify-between group transition-colors"
              >
                <div>
                  <div className="font-medium text-slate-800 group-hover:text-blue-700">
                    {airline.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {airline.iata_code} • {airline.country}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* No Results */}
        {showDropdown && searchTerm.length >= 2 && filteredAirlines.length === 0 && (
          <div className="absolute z-10 w-full mt-2 glass-effect border border-slate-200 rounded-xl shadow-lg p-4">
            <p className="text-slate-500 text-center">
              Keine Fluggesellschaft gefunden für "{searchTerm}"
            </p>
          </div>
        )}
      </div>

      {/* Selected Airline Display */}
      {selectedAirline && (
        <div className="mt-6 glass-effect rounded-xl p-4 border border-blue-200 bg-blue-50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-blue-800">{selectedAirline.name}</h3>
              <p className="text-sm text-blue-600">
                {selectedAirline.iata_code} • {selectedAirline.country}
              </p>
            </div>
            <button
              onClick={clearSearch}
              className="text-blue-600 hover:text-blue-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}