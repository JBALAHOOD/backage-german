import React from 'react';
import { ArrowLeft, Package, Scale, Layers, Zap, CheckCircle, Lightbulb, Shirt } from 'lucide-react';
import { useTranslation } from '../components/LanguageSwitcher';

export default function PackingHacks({ onBack }) {
  const { t } = useTranslation();

  const packingHacks = [
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Rollen, nicht falten',
      description: 'Das Rollen von Kleidung spart bis zu 30% mehr Platz als das Falten. Diese Technik funktioniert besonders gut bei T-Shirts, Jeans und Freizeitkleidung.',
      tip: 'Beginnen Sie von unten und rollen Sie fest, dabei die Luft herausdrücken.'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Packwürfel verwenden',
      description: 'Packwürfel helfen dabei, Ihr Gepäck zu organisieren und Gegenstände effizient zu komprimieren. Sie erleichtern auch das Finden bestimmter Artikel.',
      tip: 'Verwenden Sie verschiedenfarbige Würfel für verschiedene Kleidungsarten.'
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: 'Schwere Gegenstände tragen',
      description: 'Tragen Sie Ihre schwersten Schuhe, Jacke und Jeans im Flugzeug, um Gewicht und Platz in Ihrem Handgepäck zu sparen.',
      tip: 'Schichten Sie Kleidung strategisch - Sie können Schichten an Bord immer entfernen.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Mehrzweck-Gegenstände',
      description: 'Packen Sie Gegenstände ein, die mehreren Zwecken dienen. Ein Sarong kann als Handtuch, Decke oder Überwurf verwendet werden.',
      tip: 'Wählen Sie vielseitige Kleidungsstücke, die gemischt und kombiniert werden können.'
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Gewicht verteilen',
      description: 'Platzieren Sie schwerere Gegenstände am Boden Ihrer Tasche und leichtere oben für bessere Balance.',
      tip: 'Halten Sie häufig verwendete Gegenstände in Außentaschen leicht zugänglich.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Vakuum-Versiegelungstechnik',
      description: 'Verwenden Sie Kompressionsbeutel oder die "Rollen und Drücken"-Methode, um Luft aus der Kleidung zu entfernen.',
      tip: 'Setzen Sie sich beim Schließen auf Ihren Koffer, um alles weiter zu komprimieren.'
    }
  ];

  const spaceMaximizers = [
    'Füllen Sie Schuhe mit Socken, Ladegeräten und kleinen Gegenständen',
    'Nutzen Sie die Innentaschen Ihrer Jacke für Dokumente',
    'Wickeln Sie zerbrechliche Gegenstände in Kleidung statt in Luftpolsterfolie',
    'Packen Sie Unterwäsche und Socken in größere Kleidungsstücke',
    'Nutzen Sie jede Ecke und jeden Winkel Ihrer Tasche',
    'Erwägen Sie das Tragen einer Reiseweste mit mehreren Taschen'
  ];

  const weightSavingTips = [
    'Wählen Sie leichte Gepäckmaterialien',
    'Lassen Sie Baumwolle zu Hause - synthetische Stoffe sind leichter',
    'Bringen Sie nur wesentliche Elektronik mit',
    'Verwenden Sie Reisegrößen-Toilettenartikel',
    'Beschränken Sie sich auf maximal 2-3 Paar Schuhe',
    'Erwägen Sie Wäsche waschen bei längeren Reisen'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Pack-Tricks für maximalen Platz</h1>
              <p className="text-gray-600">Professionelle Techniken zur Maximierung Ihres Handgepäck-Platzes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <div className="text-center mb-6">
            <Package className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meistern Sie die Kunst des effizienten Packens</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lernen Sie professionelle Packtechniken, die von Vielfliegern und Flugbegleitern verwendet werden. 
              Diese bewährten Methoden helfen Ihnen, mehr Gegenstände in Ihr Handgepäck zu packen, ohne die Gewichtsgrenzen zu überschreiten.
            </p>
          </div>
        </div>

        {/* Main Packing Hacks */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Wesentliche Packtechniken</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {packingHacks.map((hack, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                    {hack.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{hack.title}</h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">{hack.description}</p>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm text-blue-800 font-medium">💡 Profi-Tipp: {hack.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Space Maximizers */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Platz-Maximierungs-Tricks</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {spaceMaximizers.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Weight Saving Tips */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Gewichtsreduzierungs-Strategien</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {weightSavingTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Tips */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <Lightbulb className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Denken Sie daran: Übung macht den Meister</h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Die besten Packer wurden nicht über Nacht zu Experten. Üben Sie diese Techniken zu Hause 
            vor Ihrer Reise, und Sie werden erstaunt sein, wie viel Sie in Ihr Handgepäck hineinbekommen!
          </p>
        </div>
      </div>
    </div>
  );
}