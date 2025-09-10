import React from 'react';

interface PageHeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  overlayType?: 'dark' | 'light' | 'gradient-dark' | 'gradient-light';
  textColor?: 'white' | 'dark';
  height?: 'small' | 'medium' | 'large';
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  overlayType = 'gradient-dark',
  textColor = 'white',
  height = 'medium',
  textAlign = 'center',
  className = ''
}) => {
  // Height classes
  const heightClasses = {
    small: 'h-64 md:h-80',
    medium: 'h-80 md:h-96',
    large: 'h-96 md:h-screen'
  };

  // Overlay classes
  const overlayClasses = {
    'dark': 'bg-black/60',
    'light': 'bg-white/60',
    'gradient-dark': 'bg-gradient-to-r from-gray-900/90 to-gray-900/10',
    'gradient-light': 'bg-gradient-to-r from-white/90 to-white/10'
  };

  // Text color classes
  const textColorClasses = {
    white: 'text-white',
    dark: 'text-gray-900'
  };

  // Text alignment classes
  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <section className={`relative ${heightClasses[height]} ${className}`} aria-labelledby="page-hero-title">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: "center 30%"
        }}
        role="img"
        aria-label="Page banner background"
      >
        {/* Overlay */}
        <div className={`absolute inset-0 ${overlayClasses[overlayType]}`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-wide">
          <div className={`max-w-4xl mx-auto ${textAlignClasses[textAlign]}`}>
            <h1 id="page-hero-title" className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 ${textColorClasses[textColor]} hero-text-shadow`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`text-lg md:text-xl lg:text-2xl ${textColorClasses[textColor]} opacity-90 hero-text-shadow`}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
