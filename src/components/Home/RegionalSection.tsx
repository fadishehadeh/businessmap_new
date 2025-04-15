
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';
import { useUserLocation } from '@/hooks/use-user-location';

const countries = [
  {
    code: 'CN',
    name: 'China',
    flag: '🇨🇳',
    description: 'Investment services for Chinese investors in key sectors including infrastructure, technology, and manufacturing.',
  },
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    description: 'Resources for US investors focused on energy, finance, technology, and defense sectors.',
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    description: 'Information for UK businesses on Qatar-UK partnerships, education, and service sectors.',
  },
  {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    description: 'Guides for Indian investors in construction, IT, healthcare, and retail sectors.',
  },
  {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    description: 'Resources for German companies in engineering, automotive, and sustainable technology.',
  },
  {
    code: 'JP',
    name: 'Japan',
    flag: '🇯🇵',
    description: 'Information for Japanese investors in technology, infrastructure, and energy.',
  },
  {
    code: 'RU',
    name: 'Russia',
    flag: '🇷🇺',
    description: 'Resources for Russian investors in energy, transportation, and defense industries.',
  },
  {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    description: 'Guides for French companies in luxury retail, aviation, and infrastructure.',
  },
];

const RegionalSection = () => {
  const isMobile = useIsMobile();
  const { countryCode, countryName, isLoading } = useUserLocation();
  
  // Find the user's country in our list, or default to showing all countries
  const userCountry = countries.find(country => country.code === countryCode);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">International Investor Resources</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Access tailored information and resources specific to your region. Our international 
            investment guides provide localized insights for investors from around the world.
          </p>
        </div>
        
        {userCountry && !isLoading && (
          <div className="mb-12 bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center text-4xl md:text-5xl">
                {userCountry.flag}
              </div>
              <div className="flex-grow">
                <div className="mb-1 text-qatari font-medium">Regional Resources</div>
                <h3 className="text-2xl font-bold mb-3">Opportunities for {userCountry.name} Investors</h3>
                <p className="text-gray-600 mb-4">
                  {userCountry.description}
                </p>
                <Button
                  asChild
                  className="bg-qatari hover:bg-qatari-light text-white"
                >
                  <Link to={`/investors/regions/${userCountry.code.toLowerCase()}`}>
                    View {userCountry.name} Investor Guide
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-6">Explore Other Regional Resources</h3>
        
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: isMobile ? 1 : 3,
          }}
          className="w-full"
        >
          <CarouselContent>
            {countries
              .filter(country => country.code !== countryCode)
              .map((country) => (
                <CarouselItem key={country.code} className="md:basis-1/3 lg:basis-1/4">
                  <Link 
                    to={`/investors/regions/${country.code.toLowerCase()}`}
                    className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col h-full shadow-sm transition-all duration-300 hover:shadow-md hover:border-qatari/20 hover:-translate-y-1"
                  >
                    <div className="flex mb-4 items-center">
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mr-3">
                        {country.flag}
                      </div>
                      <h4 className="font-semibold">{country.name}</h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {country.description}
                    </p>
                    <div className="text-qatari font-medium text-sm flex items-center mt-auto">
                      Explore Opportunities
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default RegionalSection;
