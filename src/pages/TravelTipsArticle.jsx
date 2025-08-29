import React from 'react';
import { ArrowLeft, CheckCircle, Plane, DollarSign, Clock, Shield, Lightbulb, Package } from 'lucide-react';
import { useTranslation } from '../components/LanguageSwitcher';

export default function TravelTipsArticle({ onBack }) {
  const { t } = useTranslation();

  const tips = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Die richtige Tasche wählen',
      content: 'Investieren Sie in ein leichtes, langlebiges Handgepäck, das die erlaubten Abmessungen maximiert. Weiche Taschen passen oft besser in Gepäckfächer.'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Rollen, nicht falten',
      content: 'Das Rollen von Kleidung spart 30% mehr Platz als das Falten. Verwenden Sie Packwürfel, um Ihre Gegenstände effizient zu organisieren und zu komprimieren.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Schwere Gegenstände tragen',
      content: 'Tragen Sie Ihre schwersten Schuhe, Jacke und Jeans im Flugzeug, um Gewicht und Platz in Ihrem Handgepäck zu sparen.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Mehrzweck-Gegenstände',
      content: 'Packen Sie Gegenstände ein, die mehreren Zwecken dienen: Ein Sarong kann als Handtuch, Decke oder Überwurf verwendet werden. Wählen Sie vielseitige Kleidungsstücke.'
    }
  ];

  const airlineComparison = [
    { airline: 'Ryanair', weight: '10kg', dimensions: '55x40x20cm', price: '€25-50' },
    { airline: 'EasyJet', weight: '15kg', dimensions: '56x45x25cm', price: '€15-35' },
    { airline: 'Lufthansa', weight: '8kg', dimensions: '55x40x23cm', price: '€30-60' },
    { airline: 'Emirates', weight: '7kg', dimensions: '55x38x22cm', price: 'Free' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('common.back')}
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Plane className="w-8 h-8 text-blue-600" />
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Reisetipps
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Tipps für günstiges Reisen nur mit Handgepäck
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Lernen Sie, wie Sie Reisekosten sparen und intelligent nur mit Handgepäck reisen. Ein umfassender Ratgeber für Reisende, die Geld und Zeit sparen möchten.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>5 Min Lesezeit</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Aktualisiert: Januar 2024</span>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum nur mit Handgepäck reisen?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Reisen nur mit Handgepäck ist nicht nur eine Möglichkeit, Geld zu sparen, sondern eine intelligente Strategie, die Ihre Reise flexibler und stressfreier macht. Sie können bis zu 100 Euro pro Reise sparen, das Warten auf Gepäck vermeiden und das Risiko von Gepäckverlust reduzieren.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Geld sparen</h3>
              <p className="text-sm text-gray-600">Sparen Sie 25-100€ pro Reise</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Zeit sparen</h3>
              <p className="text-sm text-gray-600">Vermeiden Sie das Warten auf Gepäck</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Mehr Sicherheit</h3>
              <p className="text-sm text-gray-600">Kein Risiko von Gepäckverlust</p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Grundlegende Tipps für intelligentes Packen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tip.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Airline Comparison */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Gepäckbestimmungen-Vergleich beliebter Airlines</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Airline</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Erlaubtes Gewicht</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Abmessungen</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Zusätzliche Gebühren</th>
                </tr>
              </thead>
              <tbody>
                {airlineComparison.map((airline, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{airline.airline}</td>
                    <td className="py-3 px-4 text-gray-600">{airline.weight}</td>
                    <td className="py-3 px-4 text-gray-600">{airline.dimensions}</td>
                    <td className="py-3 px-4 text-gray-600">{airline.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Packing Checklist */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Grundlegende Packliste</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Grundlegende Kleidung:</h3>
              <ul className="space-y-2">
                {['3-4 vielseitige T-Shirts', 'Eine Jeans + eine leichte Hose', 'Unterwäsche für 5 Tage', 'Bequeme Socken', 'Leichte Jacke'].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Grundausstattung:</h3>
              <ul className="space-y-2">
                {['Körperpflegeartikel (Reisegröße)', 'Handy-Ladegerät', 'Persönliche Medikamente', 'Kopien wichtiger Dokumente', 'Wäschebeutel'].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bereit für intelligentes Reisen?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Verwenden Sie den Gepäck-Checker, um sicherzustellen, dass Ihre Tasche den Airline-Bestimmungen entspricht, bevor Sie reisen.
          </p>
          <button
            onClick={onBack}
            className="btn-primary px-8 py-3 text-lg font-semibold"
          >
            Überprüfen Sie Ihre Tasche jetzt
          </button>
        </div>
      </article>
    </div>
  );
}