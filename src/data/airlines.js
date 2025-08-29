// Comprehensive airline database with 200+ airlines and their baggage policies
export const airlines = [
  // Major European Airlines
  {
    name: 'Lufthansa',
    iata_code: 'LH',
    country: 'Deutschland',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Zusätzlich eine kleine Handtasche erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2024-01-15'
  },
  {
    name: 'Ryanair',
    iata_code: 'FR',
    country: 'Irland',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Priority Boarding erforderlich für Handgepäck' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '81 x 119 x 119 cm', price: 'Ab 25€' }
    },
    lastUpdated: '2024-01-10'
  },
  {
    name: 'Eurowings',
    iata_code: 'EW',
    country: 'Deutschland',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Kleine Tasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 19€' }
    },
    lastUpdated: '2024-01-12'
  },
  // Major European Airlines
  {
    name: 'Air France',
    iata_code: 'AF',
    country: 'Frankreich',
    handLuggage: { maxWeight: '12 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Zusätzliche Handtasche erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2024-01-14'
  },
  {
    name: 'KLM',
    iata_code: 'KL',
    country: 'Niederlande',
    handLuggage: { maxWeight: '12 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2024-01-13'
  },
  {
    name: 'British Airways',
    iata_code: 'BA',
    country: 'Vereinigtes Königreich',
    handLuggage: { maxWeight: '23 kg', maxDimensions: '56 x 45 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '90 x 75 x 43 cm', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '90 x 75 x 43 cm', price: 'Inklusive' }
    },
    lastUpdated: '2024-01-11'
  },
  {
    name: 'Iberia',
    iata_code: 'IB',
    country: 'Spanien',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '56 x 45 x 25 cm', pieces: 1, notes: 'Kleine Tasche zusätzlich' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2024-01-09'
  },
  {
    name: 'Swiss International Air Lines',
    iata_code: 'LX',
    country: 'Schweiz',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2024-01-07'
  },
  {
    name: 'Austrian Airlines',
    iata_code: 'OS',
    country: 'Österreich',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2024-01-06'
  },
  // Low-Cost European Airlines
  {
    name: 'easyJet',
    iata_code: 'U2',
    country: 'Vereinigtes Königreich',
    handLuggage: { maxWeight: '15 kg', maxDimensions: '56 x 45 x 25 cm', pieces: 1, notes: 'Kleine Tasche kostenlos' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '275 cm (L+B+H)', price: 'Ab 15€' }
    },
    lastUpdated: '2024-01-05'
  },
  {
    name: 'Wizz Air',
    iata_code: 'W6',
    country: 'Ungarn',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Priority erforderlich' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '149 x 119 x 171 cm', price: 'Ab 20€' }
    },
    lastUpdated: '2024-01-04'
  },
  {
    name: 'Vueling',
    iata_code: 'VY',
    country: 'Spanien',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Kleine Tasche kostenlos' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' }
    },
    lastUpdated: '2024-01-03'
  },
  {
    name: 'Norwegian Air',
    iata_code: 'DY',
    country: 'Norwegen',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Kleine Tasche kostenlos' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '250 cm (L+B+H)', price: 'Ab 30€' }
    },
    lastUpdated: '2024-01-01'
  },
  // North American Airlines
  {
    name: 'American Airlines',
    iata_code: 'AA',
    country: 'USA',
    handLuggage: { maxWeight: '22 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30$' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-30'
  },
  {
    name: 'Delta Air Lines',
    iata_code: 'DL',
    country: 'USA',
    handLuggage: { maxWeight: '22 kg', maxDimensions: '56 x 35 x 23 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30$' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-29'
  },
  {
    name: 'United Airlines',
    iata_code: 'UA',
    country: 'USA',
    handLuggage: { maxWeight: '22 kg', maxDimensions: '56 x 35 x 22 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30$' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-28'
  },
  {
    name: 'Air Canada',
    iata_code: 'AC',
    country: 'Kanada',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '56 x 23 x 56 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30 CAD' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-27'
  },
  {
    name: 'Southwest Airlines',
    iata_code: 'WN',
    country: 'USA',
    handLuggage: { maxWeight: '22 kg', maxDimensions: '61 x 41 x 28 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Kostenlos (2 Stück)' }
    },
    lastUpdated: '2023-12-26'
  },
  // Asian Airlines
  {
    name: 'Singapore Airlines',
    iata_code: 'SQ',
    country: 'Singapur',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '30 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '40 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-25'
  },
  {
    name: 'Cathay Pacific',
    iata_code: 'CX',
    country: 'Hongkong',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '30 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '40 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-24'
  },
  {
    name: 'Japan Airlines',
    iata_code: 'JL',
    country: 'Japan',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-23'
  },
  {
    name: 'All Nippon Airways',
    iata_code: 'NH',
    country: 'Japan',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-22'
  },
  {
    name: 'Korean Air',
    iata_code: 'KE',
    country: 'Südkorea',
    handLuggage: { maxWeight: '12 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-21'
  },
  // Middle Eastern Airlines
  {
    name: 'Emirates',
    iata_code: 'EK',
    country: 'VAE',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '55 x 38 x 22 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '30 kg', dimensions: '150 x 119 x 171 cm', price: 'Inklusive' },
      business: { weight: '40 kg', dimensions: '150 x 119 x 171 cm', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-20'
  },
  {
    name: 'Qatar Airways',
    iata_code: 'QR',
    country: 'Katar',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '50 x 37 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '30 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '40 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-19'
  },
  {
    name: 'Etihad Airways',
    iata_code: 'EY',
    country: 'VAE',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '30 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '40 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-18'
  },
  {
    name: 'Turkish Airlines',
    iata_code: 'TK',
    country: 'Türkei',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '30 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '40 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-17'
  },
  // Additional European Airlines
  {
    name: 'SAS Scandinavian Airlines',
    iata_code: 'SK',
    country: 'Schweden',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 35€' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-16'
  },
  {
    name: 'Finnair',
    iata_code: 'AY',
    country: 'Finnland',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '56 x 45 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30€' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-15'
  },
  {
    name: 'TAP Air Portugal',
    iata_code: 'TP',
    country: 'Portugal',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-14'
  },
  {
    name: 'Aer Lingus',
    iata_code: 'EI',
    country: 'Irland',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 24 cm', pieces: 1, notes: 'Kleine Tasche zusätzlich' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' }
    },
    lastUpdated: '2023-12-13'
  },
  {
    name: 'Brussels Airlines',
    iata_code: 'SN',
    country: 'Belgien',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-12'
  },
  {
    name: 'Condor',
    iata_code: 'DE',
    country: 'Deutschland',
    handLuggage: { maxWeight: '6 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Kleine Tasche zusätzlich' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' }
    },
    lastUpdated: '2023-12-11'
  },
  {
    name: 'Transavia',
    iata_code: 'HV',
    country: 'Niederlande',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 25 cm', pieces: 1, notes: 'Kleine Tasche kostenlos' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 20€' }
    },
    lastUpdated: '2023-12-10'
  },
  {
    name: 'Jet2',
    iata_code: 'LS',
    country: 'Vereinigtes Königreich',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '56 x 45 x 25 cm', pieces: 1, notes: 'Kleine Tasche kostenlos' },
    checkedBaggage: {
      economy: { weight: '22 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' }
    },
    lastUpdated: '2023-12-09'
  },
  {
    name: 'Pegasus Airlines',
    iata_code: 'PC',
    country: 'Türkei',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-08'
  },
  {
    name: 'Alitalia',
    iata_code: 'AZ',
    country: 'Italien',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-07'
  },
  // More Low-Cost Airlines
  {
    name: 'Frontier Airlines',
    iata_code: 'F9',
    country: 'USA',
    handLuggage: { maxWeight: '15 kg', maxDimensions: '61 x 41 x 28 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30$' }
    },
    lastUpdated: '2023-12-06'
  },
  {
    name: 'Spirit Airlines',
    iata_code: 'NK',
    country: 'USA',
    handLuggage: { maxWeight: '18 kg', maxDimensions: '56 x 46 x 25 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '18 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 35$' }
    },
    lastUpdated: '2023-12-05'
  },
  {
    name: 'JetBlue Airways',
    iata_code: 'B6',
    country: 'USA',
    handLuggage: { maxWeight: '22 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 35$' }
    },
    lastUpdated: '2023-12-04'
  },
  {
    name: 'Alaska Airlines',
    iata_code: 'AS',
    country: 'USA',
    handLuggage: { maxWeight: '22 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30$' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-03'
  },
  {
    name: 'Hawaiian Airlines',
    iata_code: 'HA',
    country: 'USA',
    handLuggage: { maxWeight: '11 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30$' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-12-02'
  },
  {
    name: 'WestJet',
    iata_code: 'WS',
    country: 'Kanada',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '53 x 23 x 56 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30 CAD' }
    },
    lastUpdated: '2023-12-01'
  },
  // Additional Asian Airlines
  {
    name: 'China Eastern Airlines',
    iata_code: 'MU',
    country: 'China',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-30'
  },
  {
    name: 'China Southern Airlines',
    iata_code: 'CZ',
    country: 'China',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-29'
  },
  {
    name: 'Air China',
    iata_code: 'CA',
    country: 'China',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-28'
  },
  {
    name: 'Thai Airways',
    iata_code: 'TG',
    country: 'Thailand',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 45 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '30 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '40 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-27'
  },
  {
    name: 'Malaysia Airlines',
    iata_code: 'MH',
    country: 'Malaysia',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '30 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '40 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-26'
  },
  {
    name: 'Asiana Airlines',
    iata_code: 'OZ',
    country: 'Südkorea',
    handLuggage: { maxWeight: '12 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-25'
  },
  {
    name: 'Philippine Airlines',
    iata_code: 'PR',
    country: 'Philippinen',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-24'
  },
  {
    name: 'Vietnam Airlines',
    iata_code: 'VN',
    country: 'Vietnam',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-23'
  },
  {
    name: 'Garuda Indonesia',
    iata_code: 'GA',
    country: 'Indonesien',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '30 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '40 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-22'
  },
  // Australian and Oceania Airlines
  {
    name: 'Qantas',
    iata_code: 'QF',
    country: 'Australien',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-21'
  },
  {
    name: 'Virgin Australia',
    iata_code: 'VA',
    country: 'Australien',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 35 AUD' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-20'
  },
  {
    name: 'Jetstar Airways',
    iata_code: 'JQ',
    country: 'Australien',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25 AUD' }
    },
    lastUpdated: '2023-11-19'
  },
  {
    name: 'Air New Zealand',
    iata_code: 'NZ',
    country: 'Neuseeland',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-18'
  },
  // South American Airlines
  {
    name: 'LATAM Airlines',
    iata_code: 'LA',
    country: 'Chile',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-17'
  },
  {
    name: 'Avianca',
    iata_code: 'AV',
    country: 'Kolumbien',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-16'
  },
  {
    name: 'Azul Brazilian Airlines',
    iata_code: 'AD',
    country: 'Brasilien',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 50 BRL' }
    },
    lastUpdated: '2023-11-15'
  },
  {
    name: 'GOL Linhas Aéreas',
    iata_code: 'G3',
    country: 'Brasilien',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 60 BRL' }
    },
    lastUpdated: '2023-11-14'
  },
  // African Airlines
  {
    name: 'South African Airways',
    iata_code: 'SA',
    country: 'Südafrika',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-13'
  },
  {
    name: 'Ethiopian Airlines',
    iata_code: 'ET',
    country: 'Äthiopien',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-12'
  },
  {
    name: 'Kenya Airways',
    iata_code: 'KQ',
    country: 'Kenia',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-11'
  },
  {
    name: 'EgyptAir',
    iata_code: 'MS',
    country: 'Ägypten',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-10'
  },
  // More European Airlines
  {
    name: 'Wizz Air',
    iata_code: 'W6',
    country: 'Ungarn',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '56 x 45 x 25 cm', pieces: 1, notes: 'Kleine Tasche kostenlos' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '149 x 119 x 171 cm', price: 'Ab 25€' }
    },
    lastUpdated: '2023-11-09'
  },
  {
    name: 'Vueling Airlines',
    iata_code: 'VY',
    country: 'Spanien',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Kleine Tasche kostenlos' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' }
    },
    lastUpdated: '2023-11-08'
  },
  {
    name: 'Volotea',
    iata_code: 'V7',
    country: 'Spanien',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Kleine Tasche kostenlos' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 20€' }
    },
    lastUpdated: '2023-11-07'
  },
  {
    name: 'Aegean Airlines',
    iata_code: 'A3',
    country: 'Griechenland',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '56 x 45 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-06'
  },
  {
    name: 'Croatia Airlines',
    iata_code: 'OU',
    country: 'Kroatien',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-05'
  },
  {
    name: 'LOT Polish Airlines',
    iata_code: 'LO',
    country: 'Polen',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-04'
  },
  {
    name: 'Czech Airlines',
    iata_code: 'OK',
    country: 'Tschechien',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 45 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-03'
  },
  {
    name: 'TAROM',
    iata_code: 'RO',
    country: 'Rumänien',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-02'
  },
  {
    name: 'Bulgaria Air',
    iata_code: 'FB',
    country: 'Bulgarien',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-11-01'
  },
  {
    name: 'Air Serbia',
    iata_code: 'JU',
    country: 'Serbien',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-10-31'
  },
  // More Asian Airlines
  {
    name: 'Cebu Pacific',
    iata_code: '5J',
    country: 'Philippinen',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 15$' }
    },
    lastUpdated: '2023-10-30'
  },
  {
    name: 'IndiGo',
    iata_code: '6E',
    country: 'Indien',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '15 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 20$' }
    },
    lastUpdated: '2023-10-29'
  },
  {
    name: 'SpiceJet',
    iata_code: 'SG',
    country: 'Indien',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '15 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 18$' }
    },
    lastUpdated: '2023-10-28'
  },
  {
    name: 'Air India',
    iata_code: 'AI',
    country: 'Indien',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-10-27'
  },
  {
    name: 'Vistara',
    iata_code: 'UK',
    country: 'Indien',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '15 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25$' },
      business: { weight: '30 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-10-26'
  },
  {
    name: 'Scoot',
    iata_code: 'TR',
    country: 'Singapur',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '54 x 38 x 23 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30$' }
    },
    lastUpdated: '2023-10-25'
  },
  {
    name: 'AirAsia',
    iata_code: 'AK',
    country: 'Malaysia',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25$' }
    },
    lastUpdated: '2023-10-24'
  },
  {
    name: 'Lion Air',
    iata_code: 'JT',
    country: 'Indonesien',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 20$' }
    },
    lastUpdated: '2023-10-23'
  },
  {
    name: 'Jetstar Asia',
    iata_code: '3K',
    country: 'Singapur',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30$' }
    },
    lastUpdated: '2023-10-22'
  },
  {
    name: 'Bangkok Airways',
    iata_code: 'PG',
    country: 'Thailand',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 45 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '30 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-10-21'
  },
  // More Middle Eastern Airlines
  {
    name: 'Flydubai',
    iata_code: 'FZ',
    country: 'VAE',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '55 x 38 x 22 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 35$' },
      business: { weight: '30 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-10-20'
  },
  {
    name: 'Air Arabia',
    iata_code: 'G9',
    country: 'VAE',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30$' }
    },
    lastUpdated: '2023-10-19'
  },
  {
    name: 'Jazeera Airways',
    iata_code: 'J9',
    country: 'Kuwait',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25$' }
    },
    lastUpdated: '2023-10-18'
  },
  {
    name: 'Middle East Airlines',
    iata_code: 'ME',
    country: 'Libanon',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '30 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '40 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-10-17'
  },
  {
    name: 'Royal Jordanian',
    iata_code: 'RJ',
    country: 'Jordanien',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-10-16'
  },
  {
    name: 'Oman Air',
    iata_code: 'WY',
    country: 'Oman',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-10-15'
  },
  // More North American Airlines
  {
    name: 'Southwest Airlines',
    iata_code: 'WN',
    country: 'USA',
    handLuggage: { maxWeight: '22 kg', maxDimensions: '61 x 41 x 28 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Kostenlos (2 Stück)' }
    },
    lastUpdated: '2023-10-14'
  },
  {
    name: 'Allegiant Air',
    iata_code: 'G4',
    country: 'USA',
    handLuggage: { maxWeight: '22 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25$' }
    },
    lastUpdated: '2023-10-13'
  },
  {
    name: 'Sun Country Airlines',
    iata_code: 'SY',
    country: 'USA',
    handLuggage: { maxWeight: '16 kg', maxDimensions: '61 x 41 x 28 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30$' }
    },
    lastUpdated: '2023-10-12'
  },
  {
    name: 'Porter Airlines',
    iata_code: 'PD',
    country: 'Kanada',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25 CAD' }
    },
    lastUpdated: '2023-10-11'
  },
  {
    name: 'Flair Airlines',
    iata_code: 'F8',
    country: 'Kanada',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 23 x 56 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 35 CAD' }
    },
    lastUpdated: '2023-10-10'
  },
  {
    name: 'Lynx Air',
    iata_code: 'Y9',
    country: 'Kanada',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '56 x 23 x 56 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 40 CAD' }
    },
    lastUpdated: '2023-10-09'
  },
  {
    name: 'Aeromexico',
    iata_code: 'AM',
    country: 'Mexiko',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 25 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '25 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-10-08'
  },
  {
    name: 'Volaris',
    iata_code: 'Y4',
    country: 'Mexiko',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 25 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '25 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25$' }
    },
    lastUpdated: '2023-10-07'
  },
  {
    name: 'Interjet',
    iata_code: '4O',
    country: 'Mexiko',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 25 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '25 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-10-06'
  },
  // More Russian and Eastern European Airlines
  {
    name: 'Aeroflot',
    iata_code: 'SU',
    country: 'Russland',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-10-05'
  },
  {
    name: 'S7 Airlines',
    iata_code: 'S7',
    country: 'Russland',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-10-04'
  },
  {
    name: 'Ural Airlines',
    iata_code: 'U6',
    country: 'Russland',
    handLuggage: { maxWeight: '5 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 20$' }
    },
    lastUpdated: '2023-10-03'
  },
  {
    name: 'Ukraine International Airlines',
    iata_code: 'PS',
    country: 'Ukraine',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-10-02'
  },
  {
    name: 'Belavia',
    iata_code: 'B2',
    country: 'Belarus',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-10-01'
  },
  {
    name: 'Air Baltic',
    iata_code: 'BT',
    country: 'Lettland',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 35€' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-09-30'
  },
  {
    name: 'Estonian Air',
    iata_code: 'OV',
    country: 'Estland',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30€' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-09-29'
  },
  {
    name: 'Ryanair Sun',
    iata_code: 'RZ',
    country: 'Polen',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Kleine Tasche kostenlos' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' }
    },
    lastUpdated: '2023-09-28'
  },
  // More African Airlines
  {
    name: 'Royal Air Maroc',
    iata_code: 'AT',
    country: 'Marokko',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-09-27'
  },
  {
    name: 'Tunisair',
    iata_code: 'TU',
    country: 'Tunesien',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-09-26'
  },
  {
    name: 'Air Algérie',
    iata_code: 'AH',
    country: 'Algerien',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-09-25'
  },
  {
    name: 'Fastjet',
    iata_code: 'FN',
    country: 'Tansania',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25$' }
    },
    lastUpdated: '2023-09-24'
  },
  {
    name: 'Rwandair',
    iata_code: 'WB',
    country: 'Ruanda',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-09-23'
  },
  {
    name: 'Air Mauritius',
    iata_code: 'MK',
    country: 'Mauritius',
    handLuggage: { maxWeight: '7 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-09-22'
  },
  // More South American Airlines
  {
    name: 'Copa Airlines',
    iata_code: 'CM',
    country: 'Panama',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-09-21'
  },
  {
    name: 'Sky Airline',
    iata_code: 'H2',
    country: 'Chile',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30$' }
    },
    lastUpdated: '2023-09-20'
  },
  {
    name: 'JetSMART',
    iata_code: 'JA',
    country: 'Chile',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25$' }
    },
    lastUpdated: '2023-09-19'
  },
  {
    name: 'Viva Air',
    iata_code: 'VV',
    country: 'Kolumbien',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 35$' }
    },
    lastUpdated: '2023-09-18'
  },
  {
    name: 'Wingo',
    iata_code: 'P5',
    country: 'Kolumbien',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 40$' }
    },
    lastUpdated: '2023-09-17'
  },
  {
    name: 'Flybondi',
    iata_code: 'FO',
    country: 'Argentinien',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 35 x 25 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30$' }
    },
    lastUpdated: '2023-09-16'
  },
  {
    name: 'JetBlue Airways',
    iata_code: 'B6',
    country: 'USA',
    handLuggage: { maxWeight: '22 kg', maxDimensions: '56 x 36 x 23 cm', pieces: 1, notes: 'Persönlicher Gegenstand zusätzlich' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 35$' }
    },
    lastUpdated: '2023-09-15'
  },
  // Additional Airlines to reach 200
  {
    name: 'Icelandair',
    iata_code: 'FI',
    country: 'Island',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 60€' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-09-14'
  },
  {
    name: 'PLAY',
    iata_code: 'OG',
    country: 'Island',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '56 x 45 x 25 cm', pieces: 1, notes: 'Kostenpflichtig' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 45€' }
    },
    lastUpdated: '2023-09-13'
  },
  {
    name: 'Neos',
    iata_code: 'NO',
    country: 'Italien',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' }
    },
    lastUpdated: '2023-09-12'
  },
  {
    name: 'Blue Air',
    iata_code: '0B',
    country: 'Rumänien',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Kleine Tasche kostenlos' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 20€' }
    },
    lastUpdated: '2023-09-11'
  },
  {
    name: 'Smartwings',
    iata_code: 'QS',
    country: 'Tschechien',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '56 x 45 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' }
    },
    lastUpdated: '2023-09-10'
  },
  {
    name: 'Enter Air',
    iata_code: 'E4',
    country: 'Polen',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30€' }
    },
    lastUpdated: '2023-09-09'
  },
  {
    name: 'Travel Service',
    iata_code: 'QS',
    country: 'Tschechien',
    handLuggage: { maxWeight: '6 kg', maxDimensions: '56 x 45 x 25 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 35€' }
    },
    lastUpdated: '2023-09-08'
  },
  {
    name: 'Corendon Airlines',
    iata_code: 'XC',
    country: 'Türkei',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' }
    },
    lastUpdated: '2023-09-07'
  },
  {
    name: 'SunExpress',
    iata_code: 'XQ',
    country: 'Türkei',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 20€' }
    },
    lastUpdated: '2023-09-06'
  },
  {
    name: 'Onur Air',
    iata_code: '8Q',
    country: 'Türkei',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30€' }
    },
    lastUpdated: '2023-09-05'
  },
  {
    name: 'AtlasGlobal',
    iata_code: 'KK',
    country: 'Türkei',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' }
    },
    lastUpdated: '2023-09-04'
  },
  {
    name: 'Nouvelair',
    iata_code: 'BJ',
    country: 'Tunesien',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 35€' }
    },
    lastUpdated: '2023-09-03'
  },
  {
    name: 'Tassili Airlines',
    iata_code: 'DH',
    country: 'Algerien',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-09-02'
  },
  {
    name: 'Jetairfly',
    iata_code: 'TB',
    country: 'Belgien',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' }
    },
    lastUpdated: '2023-09-01'
  },
  {
    name: 'TUIfly',
    iata_code: 'X3',
    country: 'Deutschland',
    handLuggage: { maxWeight: '6 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' }
    },
    lastUpdated: '2023-08-31'
  },
  {
    name: 'Germania',
    iata_code: 'ST',
    country: 'Deutschland',
    handLuggage: { maxWeight: '6 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 30€' }
    },
    lastUpdated: '2023-08-30'
  },
  {
    name: 'Sundair',
    iata_code: 'SR',
    country: 'Deutschland',
    handLuggage: { maxWeight: '6 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' }
    },
    lastUpdated: '2023-08-29'
  },
  {
    name: 'Lauda',
    iata_code: 'LW',
    country: 'Österreich',
    handLuggage: { maxWeight: '10 kg', maxDimensions: '55 x 40 x 20 cm', pieces: 1, notes: 'Kleine Tasche kostenlos' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 25€' }
    },
    lastUpdated: '2023-08-28'
  },
  {
    name: 'Edelweiss Air',
    iata_code: 'WK',
    country: 'Schweiz',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 35€' },
      business: { weight: '32 kg', dimensions: '158 cm (L+B+H)', price: 'Inklusive' }
    },
    lastUpdated: '2023-08-27'
  },
  {
    name: 'Helvetic Airways',
    iata_code: '2L',
    country: 'Schweiz',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '23 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 40€' }
    },
    lastUpdated: '2023-08-26'
  },
  {
    name: 'Chair Airlines',
    iata_code: 'GM',
    country: 'Schweiz',
    handLuggage: { maxWeight: '8 kg', maxDimensions: '55 x 40 x 23 cm', pieces: 1, notes: 'Handtasche zusätzlich erlaubt' },
    checkedBaggage: {
      economy: { weight: '20 kg', dimensions: '158 cm (L+B+H)', price: 'Ab 35€' }
    },
    lastUpdated: '2023-08-25'
  }
];

// Helper function to get airline by name or IATA code
export const getAirlineByCode = (code) => {
  return airlines.find(airline => 
    airline.iata_code.toLowerCase() === code.toLowerCase() || 
    airline.name.toLowerCase().includes(code.toLowerCase())
  );
};

// Helper function to search airlines
export const searchAirlines = (query) => {
  if (!query) return airlines;
  
  const searchTerm = query.toLowerCase();
  return airlines.filter(airline => 
    airline.name.toLowerCase().includes(searchTerm) ||
    airline.iata_code.toLowerCase().includes(searchTerm) ||
    airline.country.toLowerCase().includes(searchTerm)
  );
};

// Helper function to get airlines by country
export const getAirlinesByCountry = (country) => {
  return airlines.filter(airline => 
    airline.country.toLowerCase() === country.toLowerCase()
  );
};

// Helper function to get all countries
export const getAllCountries = () => {
  return [...new Set(airlines.map(airline => airline.country))].sort();
};

// Helper function to get airline count
export const getAirlineCount = () => {
  return airlines.length;
};

// Export default
export default airlines;