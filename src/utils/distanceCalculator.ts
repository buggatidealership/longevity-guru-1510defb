
import { cityDistances, distanceRanges } from "@/data/evRangeData";

// Extract city name from a detailed address
export const extractCityFromAddress = (address: string): string => {
  // Common address formats have city names followed by state/zip/postal codes
  // Try to extract the city part
  
  // Remove postal/zip codes and numeric parts
  let cleaned = address.replace(/\b\d{5}(-\d{4})?\b|\b[A-Z]{1,2}\d{1,2} \d[A-Z]{2}\b|\b\d+\b/g, '');
  
  // Remove common address terms
  cleaned = cleaned.replace(/\b(street|st|avenue|ave|road|rd|boulevard|blvd|lane|ln|drive|dr|court|ct|plaza|plz|square|sq|highway|hwy|parkway|pkwy|apartment|apt|suite|ste|unit|floor|fl|room|rm)\b/gi, '');
  
  // Replace commas with spaces
  cleaned = cleaned.replace(/,/g, ' ');
  
  // Remove multiple spaces
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  
  // If we have "City State" or "City, State" format, take the city part
  const stateSplit = cleaned.match(/(.+?)\s+([A-Z]{2}|alabama|alaska|arizona|arkansas|california|colorado|connecticut|delaware|florida|georgia|hawaii|idaho|illinois|indiana|iowa|kansas|kentucky|louisiana|maine|maryland|massachusetts|michigan|minnesota|mississippi|missouri|montana|nebraska|nevada|new\s+hampshire|new\s+jersey|new\s+mexico|new\s+york|north\s+carolina|north\s+dakota|ohio|oklahoma|oregon|pennsylvania|rhode\s+island|south\s+carolina|south\s+dakota|tennessee|texas|utah|vermont|virginia|washington|west\s+virginia|wisconsin|wyoming)$/i);
  
  if (stateSplit) {
    return stateSplit[1].trim();
  }
  
  // Just return the cleaned text as the best guess for the city
  return cleaned;
};

export const calculateDistance = (start: string, dest: string): number => {
  // Try to extract city names from detailed addresses
  const startCity = extractCityFromAddress(start).toLowerCase().trim();
  const destCity = extractCityFromAddress(dest).toLowerCase().trim();
  
  // Normalize locations by converting to lowercase
  const normalizedStart = startCity;
  const normalizedDest = destCity;
  
  // Check if we have predefined distance between these cities
  if (cityDistances[normalizedStart]?.[normalizedDest]) {
    return cityDistances[normalizedStart][normalizedDest];
  }
  
  // Check reverse direction
  if (cityDistances[normalizedDest]?.[normalizedStart]) {
    return cityDistances[normalizedDest][normalizedStart];
  }
  
  // For locations not in our database, use a more realistic estimation method
  // This is a fallback when we don't have the exact distance data
  
  // First, check if any part of the input matches known cities
  const allCities = Object.keys(cityDistances);
  
  // Find partial matches for start location
  const startMatches = allCities.filter(city => 
    normalizedStart.includes(city) || city.includes(normalizedStart));
  
  // Find partial matches for destination
  const destMatches = allCities.filter(city => 
    normalizedDest.includes(city) || city.includes(normalizedDest));
  
  // If we have partial matches, use the average distance between matching regions
  if (startMatches.length > 0 && destMatches.length > 0) {
    let totalDistance = 0;
    let count = 0;
    
    for (const startCity of startMatches) {
      for (const destCity of destMatches) {
        // Check direct connection
        if (cityDistances[startCity]?.[destCity]) {
          totalDistance += cityDistances[startCity][destCity];
          count++;
        }
        // Check reverse connection
        else if (cityDistances[destCity]?.[startCity]) {
          totalDistance += cityDistances[destCity][startCity];
          count++;
        }
      }
    }
    
    // If we found at least one route between partial matches, return the average
    if (count > 0) {
      return Math.round(totalDistance / count);
    }
  }
  
  // If all else fails, use a distance range based on character codes
  // This is our final fallback for completely unknown locations
  const startChar = normalizedStart.charCodeAt(0) || 97; // 'a' if empty
  const destChar = normalizedDest.charCodeAt(0) || 97;
  
  // Determine a more predictable distance range category (0-5)
  const rangeIndex = ((startChar + destChar) % 6);
  const range = distanceRanges[rangeIndex];
  
  // Generate a more consistent distance within the range
  const seed = (normalizedStart.length * 13 + normalizedDest.length * 17) % 100;
  const variability = range.max - range.min;
  const distance = Math.round(range.min + (seed / 100) * variability);
  
  return distance;
};
