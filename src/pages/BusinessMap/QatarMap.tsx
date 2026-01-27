import React from 'react';

const QatarMap: React.FC = () => {
  // Qatar coordinates: 25.3548° N, 51.1839° E
  const qatarCenter = { lat: 25.3548, lng: 51.1839 };

  // Google Maps embed URL pointing to Qatar
  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=${qatarCenter.lat},${qatarCenter.lng}&zoom=9&maptype=roadmap`;

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden border-2 border-qatari/20">
      {/* Google Maps Embed */}
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
        title="Qatar Map"
      ></iframe>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 border-2 border-qatari/20 rounded-lg p-4 shadow-lg">
        <h4 className="font-bold mb-3 text-sm" dir="rtl">خريطة قطر</h4>
        <p className="text-xs text-gray-600 dark:text-gray-400" dir="rtl">
          عرض المنشآت التجارية في دولة قطر
        </p>
      </div>
    </div>
  );
};

export default QatarMap;

