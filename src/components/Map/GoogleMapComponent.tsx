import React, { useEffect, useRef, useState } from 'react';

interface GoogleMapComponentProps {
  center: { lat: number; lng: number };
  zoom: number;
  establishments?: Array<{
    id: string;
    name: string;
    lat: number;
    lng: number;
    category: string;
  }>;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  center,
  zoom,
  establishments = []
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || map) return;

    const newMap = new google.maps.Map(mapRef.current, {
      center,
      zoom,
      styles: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#e3f2fd' }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#eeeeee' }]
        }
      ],
      mapTypeControl: true,
      streetViewControl: false,
      fullscreenControl: true,
    });

    setMap(newMap);
  }, [mapRef.current]);

  // Update markers when establishments change
  useEffect(() => {
    if (!map) return;

    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));

    // Create new markers
    const newMarkers = establishments.map(establishment => {
      const marker = new google.maps.Marker({
        position: { lat: establishment.lat, lng: establishment.lng },
        map,
        title: establishment.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#19407F',
          fillOpacity: 0.9,
          strokeColor: '#FDC300',
          strokeWeight: 2,
        },
      });

      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; font-family: sans-serif;">
            <h3 style="margin: 0 0 4px 0; color: #19407F; font-size: 14px; font-weight: bold;">
              ${establishment.name}
            </h3>
            <p style="margin: 0; color: #666; font-size: 12px;">
              ${establishment.category}
            </p>
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      return marker;
    });

    setMarkers(newMarkers);
  }, [map, establishments]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full"
      style={{ minHeight: '400px' }}
    />
  );
};

export default GoogleMapComponent;

