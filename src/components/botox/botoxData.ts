
// Treatment area data with units range and average cost
export const treatmentAreas = {
  forehead: {
    name: "Forehead Lines",
    unitsRange: [10, 30],
    defaultUnits: 20
  },
  glabellar: {
    name: "Glabellar Lines (Frown Lines/11s)",
    unitsRange: [15, 40],
    defaultUnits: 25
  },
  crowsFeet: {
    name: "Crow's Feet",
    unitsRange: [10, 30],
    defaultUnits: 24
  },
  bunnyLines: {
    name: "Bunny Lines (Nose)",
    unitsRange: [5, 15],
    defaultUnits: 10
  },
  perioral: {
    name: "Perioral Lines (around mouth)",
    unitsRange: [4, 10],
    defaultUnits: 6
  },
  masseter: {
    name: "Masseter (jaw slimming)",
    unitsRange: [20, 60],
    defaultUnits: 40
  },
  neckBands: {
    name: "Neck Bands (Platysmal Bands)",
    unitsRange: [25, 60],
    defaultUnits: 40
  },
  underarms: {
    name: "Underarms (Hyperhidrosis)",
    unitsRange: [50, 100],
    defaultUnits: 50
  }
};

// Country-specific pricing
export const countryPricing = {
  usa: { currency: 'USD', symbol: '$', min: 10, max: 20, avg: 15 },
  uk: { currency: 'GBP', symbol: '£', min: 8, max: 15, avg: 12 },
  canada: { currency: 'CAD', symbol: 'CA$', min: 9, max: 16, avg: 12 },
  australia: { currency: 'AUD', symbol: 'A$', min: 12, max: 22, avg: 17 },
  eu: { currency: 'EUR', symbol: '€', min: 8, max: 18, avg: 13 },
  uae: { currency: 'AED', symbol: 'AED', min: 40, max: 80, avg: 60 },
  india: { currency: 'INR', symbol: '₹', min: 350, max: 600, avg: 450 },
  brazil: { currency: 'BRL', symbol: 'R$', min: 40, max: 90, avg: 65 },
  japan: { currency: 'JPY', symbol: '¥', min: 1500, max: 3000, avg: 2200 },
  southkorea: { currency: 'KRW', symbol: '₩', min: 10000, max: 30000, avg: 20000 },
  singapore: { currency: 'SGD', symbol: 'S$', min: 15, max: 25, avg: 20 },
  custom: { currency: 'Custom', symbol: '$', min: 15, max: 15, avg: 15 }
};
