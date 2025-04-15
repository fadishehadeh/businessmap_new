
import { useState, useEffect } from 'react';

interface UserLocation {
  countryCode: string | null;
  countryName: string | null;
  isLoading: boolean;
  error: string | null;
}

export function useUserLocation(): UserLocation {
  const [locationData, setLocationData] = useState<UserLocation>({
    countryCode: null,
    countryName: null,
    isLoading: true,
    error: null,
  });
  
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // For demo purposes, we'll just simulate geolocation
        // In a real implementation, you would use a geolocation API service
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Randomly select a country for demo purposes
        // In production, this would be the actual result from a geolocation API
        const countries = [
          { code: 'US', name: 'United States' },
          { code: 'GB', name: 'United Kingdom' },
          { code: 'CN', name: 'China' },
          { code: 'IN', name: 'India' },
          { code: 'DE', name: 'Germany' },
        ];
        
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        
        setLocationData({
          countryCode: randomCountry.code,
          countryName: randomCountry.name,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        console.error('Error fetching location:', error);
        setLocationData({
          countryCode: null,
          countryName: null,
          isLoading: false,
          error: 'Failed to determine your location. Please select your country manually.',
        });
      }
    };
    
    fetchLocation();
  }, []);
  
  return locationData;
}
