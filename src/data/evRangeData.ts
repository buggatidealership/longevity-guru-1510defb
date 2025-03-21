
// EV models with their ranges in miles
export const evModels = {
  "teslaModel3": { name: "Tesla Model 3 (SR+)", range: 267 },
  "teslaModelY": { name: "Tesla Model Y (LR)", range: 330 },
  "fordMachE": { name: "Ford Mustang Mach-E", range: 305 },
  "chevyBolt": { name: "Chevy Bolt EV", range: 259 },
  "nissanLeaf": { name: "Nissan Leaf", range: 215 },
  "hyundaiIoniq5": { name: "Hyundai Ioniq 5", range: 303 },
  "kiaEV6": { name: "Kia EV6", range: 310 },
  "volkswagenID4": { name: "Volkswagen ID.4", range: 275 },
  "audiQ4": { name: "Audi Q4 e-tron", range: 241 },
  "bmwi4": { name: "BMW i4", range: 301 },
  "polestar2": { name: "Polestar 2", range: 270 },
  "rivianR1T": { name: "Rivian R1T", range: 314 }
};

export type EVModel = keyof typeof evModels;

// Accurate city distances (in miles)
export const cityDistances: Record<string, Record<string, number>> = {
  "new york": {
    "boston": 215,
    "washington": 225,
    "philadelphia": 95,
    "chicago": 790,
    "los angeles": 2790,
    "miami": 1280,
    "dallas": 1550,
    "denver": 1780,
    "seattle": 2850,
    "san francisco": 2900
  },
  "paris": {
    "london": 285,
    "berlin": 680,
    "madrid": 650,
    "rome": 690,
    "amsterdam": 315,
    "brussels": 165,
    "milan": 525,
    "barcelona": 520,
    "zurich": 305,
    "vienna": 640
  },
  "london": {
    "paris": 285,
    "manchester": 185,
    "edinburgh": 405,
    "dublin": 290,
    "amsterdam": 225,
    "berlin": 580,
    "brussels": 200,
    "madrid": 785,
    "rome": 890,
    "milan": 600
  },
  "tokyo": {
    "osaka": 250,
    "kyoto": 280,
    "nagoya": 215,
    "fukuoka": 650,
    "sapporo": 520,
    "seoul": 720,
    "beijing": 1300,
    "shanghai": 1100,
    "taipei": 1050,
    "hong kong": 1800
  },
  "sydney": {
    "melbourne": 545,
    "brisbane": 575,
    "perth": 2045,
    "adelaide": 850,
    "canberra": 190,
    "auckland": 1345,
    "wellington": 1640,
    "darwin": 1960,
    "hobart": 700,
    "gold coast": 500
  },
  "los angeles": {
    "san francisco": 380,
    "las vegas": 270,
    "san diego": 120,
    "phoenix": 370,
    "seattle": 1135,
    "portland": 965,
    "denver": 1015,
    "dallas": 1435,
    "chicago": 2015,
    "new york": 2790
  },
  "san francisco": {
    "los angeles": 380,
    "portland": 635,
    "seattle": 810,
    "las vegas": 570,
    "denver": 1250,
    "salt lake city": 735,
    "phoenix": 755,
    "chicago": 2130,
    "new york": 2900,
    "boston": 3095
  },
  "chicago": {
    "new york": 790,
    "boston": 985,
    "washington": 700,
    "detroit": 280,
    "milwaukee": 90,
    "minneapolis": 400,
    "kansas city": 510,
    "st louis": 295,
    "denver": 1000,
    "dallas": 925
  },
  "berlin": {
    "paris": 680,
    "london": 580,
    "amsterdam": 420,
    "brussels": 545,
    "prague": 175,
    "vienna": 335,
    "warsaw": 325,
    "copenhagen": 220,
    "stockholm": 540,
    "rome": 890
  },
  "rome": {
    "paris": 690,
    "london": 890,
    "barcelona": 530,
    "madrid": 850,
    "milan": 295,
    "naples": 120,
    "venice": 330,
    "athens": 670,
    "berlin": 890,
    "vienna": 605
  },
  "milan": {
    "paris": 525,
    "rome": 295,
    "venice": 175,
    "zurich": 135,
    "geneva": 250,
    "vienna": 435,
    "munich": 240,
    "florence": 185,
    "lyon": 305,
    "barcelona": 450
  }
};

// Default distance ranges for unknown cities
export const distanceRanges = [
  { min: 20, max: 60 },      // Very local
  { min: 60, max: 120 },     // Nearby city
  { min: 120, max: 250 },    // Regional
  { min: 250, max: 500 },    // Major cities in same region
  { min: 500, max: 1000 },   // Cross-country
  { min: 1000, max: 3000 }   // Long distance/international
];
