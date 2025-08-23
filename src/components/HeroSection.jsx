import { Search, Plane, Shield, Clock } from 'lucide-react'

export default function HeroSection({ onStartSearch }) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6 leading-tight">
            Handgepäck-Bestimmungen
            <br />
            <span className="text-blue-600">sofort prüfen</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Vermeiden Sie teure Überraschungen am Flughafen. Prüfen Sie die aktuellen 
            Gepäckbestimmungen für über 100 Fluggesellschaften weltweit.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <button 
            onClick={onStartSearch}
            className="btn-primary inline-flex items-center text-lg"
          >
            <Search className="w-5 h-5 mr-3" />
            Jetzt prüfen
          </button>
          <p className="text-sm text-slate-500 mt-3">
            Kostenlos · Keine Registrierung erforderlich
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-6 hover-lift">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Zuverlässige Daten</h3>
            <p className="text-slate-600 text-sm">
              Aktuelle Bestimmungen direkt von den Fluggesellschaften
            </p>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 hover-lift">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Immer aktuell</h3>
            <p className="text-slate-600 text-sm">
              Regelmäßig aktualisierte Informationen zu Größe und Gewicht
            </p>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 hover-lift">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Plane className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">100+ Airlines</h3>
            <p className="text-slate-600 text-sm">
              Umfassende Datenbank aller wichtigen Fluggesellschaften
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 glass-effect rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Warum Gepäckbestimmungen prüfen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">💰 Kosten sparen</h4>
              <p className="text-slate-600 text-sm">
                Vermeiden Sie teure Nachzahlungen am Flughafen durch Übergewicht oder falsche Maße.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">⏰ Zeit sparen</h4>
              <p className="text-slate-600 text-sm">
                Keine langen Warteschlangen oder Umpackaktionen am Check-in-Schalter.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">✈️ Stressfrei reisen</h4>
              <p className="text-slate-600 text-sm">
                Entspannt in den Urlaub starten ohne böse Überraschungen.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">📋 Gut vorbereitet</h4>
              <p className="text-slate-600 text-sm">
                Wissen Sie genau, was Sie mitnehmen dürfen und was nicht.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}