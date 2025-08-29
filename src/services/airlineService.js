import airlinesData from '../data/airlines_complete.json';

/**
 * Service class for managing airline data
 */
class AirlineService {
  constructor() {
    this.airlines = airlinesData.airlines;
  }

  /**
   * Get all airlines
   * @returns {Object} All airlines data
   */
  getAllAirlines() {
    return this.airlines;
  }

  /**
   * Get airline by code or name
   * @param {string} identifier - Airline code or name
   * @returns {Object|null} Airline data or null if not found
   */
  getAirline(identifier) {
    const normalizedId = identifier.toLowerCase().replace(/\s+/g, '_');
    
    // Try to find by key first
    if (this.airlines[normalizedId]) {
      return { ...this.airlines[normalizedId], id: normalizedId };
    }

    // Try to find by name or code
    for (const [key, airline] of Object.entries(this.airlines)) {
      if (
        airline.name.toLowerCase() === identifier.toLowerCase() ||
        airline.code.toLowerCase() === identifier.toLowerCase()
      ) {
        return { ...airline, id: key };
      }
    }

    return null;
  }

  /**
   * Search airlines by name
   * @param {string} query - Search query
   * @returns {Array} Array of matching airlines
   */
  searchAirlines(query) {
    if (!query || query.length < 2) {
      return [];
    }

    const normalizedQuery = query.toLowerCase();
    const results = [];

    for (const [key, airline] of Object.entries(this.airlines)) {
      if (
        airline.name.toLowerCase().includes(normalizedQuery) ||
        airline.code.toLowerCase().includes(normalizedQuery)
      ) {
        results.push({ ...airline, id: key });
      }
    }

    return results.sort((a, b) => a.name.localeCompare(b.name));
  }

  /**
   * Get airlines by baggage policy criteria
   * @param {Object} criteria - Search criteria
   * @param {string} criteria.maxWeight - Maximum weight (e.g., '10kg')
   * @param {string} criteria.class - Travel class (economy, business, first)
   * @returns {Array} Array of matching airlines
   */
  getAirlinesByBaggagePolicy(criteria = {}) {
    const results = [];
    const { maxWeight, class: travelClass = 'economy' } = criteria;

    for (const [key, airline] of Object.entries(this.airlines)) {
      let matches = true;

      if (maxWeight) {
        const weightValue = parseInt(maxWeight);
        const handLuggageWeight = parseInt(airline.handLuggage.maxWeight);
        
        if (handLuggageWeight > weightValue) {
          matches = false;
        }
      }

      if (matches) {
        results.push({ ...airline, id: key });
      }
    }

    return results;
  }

  /**
   * Get popular airlines (predefined list)
   * @returns {Array} Array of popular airlines
   */
  getPopularAirlines() {
    const popularKeys = ['lufthansa', 'ryanair', 'easyjet', 'emirates', 'british_airways'];
    return popularKeys
      .map(key => this.airlines[key] ? { ...this.airlines[key], id: key } : null)
      .filter(Boolean);
  }

  /**
   * Get airline suggestions for autocomplete
   * @param {string} query - Search query
   * @param {number} limit - Maximum number of suggestions
   * @returns {Array} Array of airline suggestions
   */
  getAirlineSuggestions(query, limit = 5) {
    if (!query || query.length < 1) {
      return this.getPopularAirlines().slice(0, limit);
    }

    const results = this.searchAirlines(query);
    return results.slice(0, limit);
  }

  /**
   * Compare multiple airlines
   * @param {Array} airlineIds - Array of airline IDs to compare
   * @returns {Array} Array of airline data for comparison
   */
  compareAirlines(airlineIds) {
    return airlineIds
      .map(id => this.getAirline(id))
      .filter(Boolean);
  }

  /**
   * Get baggage information for specific airline and class
   * @param {string} airlineId - Airline identifier
   * @param {string} travelClass - Travel class (economy, business, first)
   * @returns {Object|null} Baggage information
   */
  getBaggageInfo(airlineId, travelClass = 'economy') {
    const airline = this.getAirline(airlineId);
    if (!airline) return null;

    const checkedBaggage = airline.checkedBaggage[travelClass] || airline.checkedBaggage.economy;
    
    return {
      airline: airline.name,
      handLuggage: airline.handLuggage,
      checkedBaggage,
      tips: airline.tips
    };
  }

  /**
   * Get airlines with free checked baggage
   * @param {string} travelClass - Travel class
   * @returns {Array} Airlines with free baggage
   */
  getAirlinesWithFreeBaggage(travelClass = 'economy') {
    const results = [];

    for (const [key, airline] of Object.entries(this.airlines)) {
      const baggage = airline.checkedBaggage[travelClass] || airline.checkedBaggage.economy;
      if (baggage && (baggage.price === 'Included' || baggage.price === 'Free')) {
        results.push({ ...airline, id: key });
      }
    }

    return results;
  }
}

// Create and export singleton instance
const airlineService = new AirlineService();
export default airlineService;

// Export class for testing purposes
export { AirlineService };