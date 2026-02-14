import React, { useState } from 'react';
import BluePortalLayout from '@/components/Layout/BluePortalLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Info, Plus, Minus, Filter, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Wrapper } from '@googlemaps/react-wrapper';
import GoogleMapComponent from '@/components/Map/GoogleMapComponent';
import {
  municipalities,
  ownershipTypes,
  licenseStatuses,
  businessCategories,
  landmarks,
  mockEstablishments
} from '@/data/mockBusinessData';
import { useLanguage } from '@/context/LanguageContext';

const BusinessTypesPage = () => {
  const { t, dir } = useLanguage();
  const [selectedMunicipality, setSelectedMunicipality] = useState<string>('all');
  const [selectedOwnership, setSelectedOwnership] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('active');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLandmarks, setSelectedLandmarks] = useState<string[]>([]);
  const [capitalRange, setCapitalRange] = useState<number[]>([0, 50000000]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredCount, setFilteredCount] = useState(mockEstablishments.length);
  const [filteredEstablishments, setFilteredEstablishments] = useState(mockEstablishments);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterChange = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      // Apply filters (simplified for demo)
      let filtered = mockEstablishments;

      if (selectedMunicipality !== 'all') {
        filtered = filtered.filter(e => e.municipality === selectedMunicipality);
      }
      if (selectedOwnership !== 'all') {
        filtered = filtered.filter(e => e.ownership === selectedOwnership);
      }
      if (selectedStatus !== 'all') {
        filtered = filtered.filter(e => e.status === selectedStatus);
      }
      if (selectedCategories.length > 0) {
        filtered = filtered.filter(e => selectedCategories.includes(e.category));
      }
      filtered = filtered.filter(e => e.capital >= capitalRange[0] && e.capital <= capitalRange[1]);

      setFilteredCount(filtered.length);
      setFilteredEstablishments(filtered);
      setIsLoading(false);
    }, 800);
  };

  React.useEffect(() => {
    handleFilterChange();
  }, [selectedMunicipality, selectedOwnership, selectedStatus, selectedCategories, capitalRange]);

  // Filter Panel Content (reusable for desktop and mobile)
  const FilterPanelContent = () => (
    <div className="p-6 space-y-6" dir={dir}>
      {/* Panel Title */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-[#19407F]">
          {t('businessTypes.title')}
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          {t('businessTypes.showing')} {filteredCount.toLocaleString()} {t('businessTypes.establishments')}
        </p>
      </div>

      {/* Municipality Selector */}
      <div className="space-y-2">
        <label htmlFor="municipality-select" className="text-sm font-semibold text-gray-700">
          {t('businessTypes.selectMunicipality')}
        </label>
        <Select value={selectedMunicipality} onValueChange={setSelectedMunicipality}>
          <SelectTrigger
            id="municipality-select"
            className="w-full bg-white border-gray-300 text-gray-900"
            aria-label="Select municipality"
          >
            <SelectValue placeholder={t('businessTypes.selectMunicipality')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('businessTypes.allMunicipalities')}</SelectItem>
            {municipalities.map(m => (
              <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Ownership Type Tabs */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">
          {t('businessTypes.ownershipType')}
        </label>
        <div className="flex gap-2 flex-wrap" role="group" aria-label="Ownership type filter">
          {ownershipTypes.map(type => (
            <button
              key={type.id}
              onClick={() => setSelectedOwnership(type.id)}
              aria-pressed={selectedOwnership === type.id}
              aria-label={`Filter by ${type.name} ownership`}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                selectedOwnership === type.id
                  ? 'bg-[#19407F] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:border-[#19407F]'
              }`}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>

      {/* License Status */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">
          {t('businessTypes.licenseStatus')}
        </label>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full bg-white border-gray-300 text-gray-900">
            <SelectValue placeholder={t('businessTypes.licenseStatus')} />
          </SelectTrigger>
          <SelectContent>
            {licenseStatuses.map(status => (
              <SelectItem key={status.id} value={status.id}>{status.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Categories Dropdown */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">
          {t('businessTypes.categories')}
        </label>
        <Select>
          <SelectTrigger className="w-full bg-white border-gray-300 text-gray-900">
            <SelectValue placeholder={t('businessTypes.categories')} />
          </SelectTrigger>
          <SelectContent>
            {businessCategories.map(cat => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.icon} {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Landmarks Dropdown */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">
          {t('businessTypes.landmarks')}
        </label>
        <Select>
          <SelectTrigger className="w-full bg-white border-gray-300 text-gray-900">
            <SelectValue placeholder={t('businessTypes.landmarks')} />
          </SelectTrigger>
          <SelectContent>
            {landmarks.map(landmark => (
              <SelectItem key={landmark.id} value={landmark.id}>
                {landmark.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Capital Range Slider */}
      <div className="space-y-4">
        <label className="text-sm font-semibold text-gray-700">
          {t('businessTypes.capitalRange')}
        </label>
        <div className="px-2">
          <Slider
            min={0}
            max={50000000}
            step={100000}
            value={capitalRange}
            onValueChange={setCapitalRange}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{(capitalRange[0] / 1000000).toFixed(1)}M</span>
          <span>{capitalRange[1] >= 50000000 ? '50M+' : (capitalRange[1] / 1000000).toFixed(1) + 'M'}</span>
        </div>
      </div>

      {/* Population Info Card */}
      <Card className="bg-gradient-to-br from-[#19407F]/5 to-[#FDC300]/5 border-[#19407F]/20">
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-gray-700">{t('businessTypes.populationInfo')}</p>
              <p className="text-xs text-gray-600">
                {t('businessTypes.demographicData')}
              </p>
            </div>
            <Info className="w-5 h-5 text-[#19407F]" />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-3 border-[#19407F] text-[#19407F] hover:bg-[#19407F] hover:text-white"
          >
            {t('businessTypes.more')}
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <BluePortalLayout showFooter={false}>
      <div className="fixed left-0 right-0 bottom-0 top-[317px]" dir={dir}>
        {/* Desktop Filter Panel - Left in English, Right in Arabic */}
        <aside className={`hidden lg:block fixed top-[317px] bottom-0 w-80 bg-white overflow-y-auto shadow-lg border-gray-200 ${dir === 'rtl' ? 'right-0 border-l' : 'left-0 border-r'}`}>
          <FilterPanelContent />
        </aside>

        {/* Main Map Canvas */}
        <main className={`absolute top-0 bottom-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden ${dir === 'rtl' ? 'right-80 left-0' : 'left-80 right-0'}`}>
          {/* Mobile Filter Button */}
          <div className={`lg:hidden absolute top-4 z-30 ${dir === 'rtl' ? 'right-4' : 'left-4'}`}>
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button
                  size="lg"
                  className="bg-[#19407F] hover:bg-[#2557A7] text-white shadow-xl"
                >
                  <Filter className="w-5 h-5 mr-2" />
                  {t('businessTypes.filters')}
                </Button>
              </SheetTrigger>
              <SheetContent side={dir === 'rtl' ? 'right' : 'left'} className="w-full sm:w-96 p-0 overflow-y-auto">
                <div className="sticky top-0 bg-white z-10 p-4 border-b flex items-center justify-between">
                  <SheetTitle className="text-xl font-bold text-[#19407F]">
                    {t('businessTypes.filters')}
                  </SheetTitle>
                </div>
                <FilterPanelContent />
              </SheetContent>
            </Sheet>
          </div>

          {/* Google Maps Embed */}
          <div className="absolute inset-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.3261839952!2d51.18390000000001!3d25.3548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sDoha%2C%20Qatar!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Qatar Business Map"
            />
          </div>

          {/* Zoom Controls */}
          <div className={`absolute bottom-24 flex flex-col gap-2 z-10 ${dir === 'rtl' ? 'left-6' : 'right-6'}`}>
            <Button
              size="icon"
              className="bg-white hover:bg-gray-100 text-gray-900 shadow-lg rounded-lg"
              aria-label="Zoom in"
            >
              <Plus className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              className="bg-white hover:bg-gray-100 text-gray-900 shadow-lg rounded-lg"
              aria-label="Zoom out"
            >
              <Minus className="w-5 h-5" />
            </Button>
          </div>

          {/* Attribution Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#19407F]/90 backdrop-blur-sm text-white text-xs py-2 px-4">
            © 2025 MOCI Qatar | Map data © Google Maps
          </div>

          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-[#19407F] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 animate-slide-up">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-[#FDC300] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-[#FDC300] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-[#FDC300] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span className="font-medium">{t('businessTypes.loadingData')}</span>
              </div>
            </div>
          )}
        </main>
      </div>
    </BluePortalLayout>
  );
};

export default BusinessTypesPage;

