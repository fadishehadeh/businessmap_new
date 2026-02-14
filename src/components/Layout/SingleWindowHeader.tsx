import React, { useState } from 'react';
import { Menu, Search, Eye, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const SingleWindowHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, dir } = useLanguage();

  // Get page title based on current route
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/' || path === '/blue-portal/home') return t('header.home');
    if (path === '/blue-portal/interactive-map') return t('header.interactiveMap');
    if (path === '/blue-portal/business-types') return t('header.businessTypes');
    if (path === '/blue-portal/monitor-closures') return t('header.monitorClosures');
    return t('header.home');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" dir={dir}>
      {/* Top Utility Row */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-wide mx-auto px-4">
          <div className="flex justify-end items-center h-16 text-sm">
            {/* Utility items - Always on the right in English, left in Arabic */}
            <div className={`flex items-center gap-0 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              {/* Eye Icon */}
              <button className="text-gray-700 hover:text-[#19407F] transition-colors px-4 py-2">
                <Eye className="h-5 w-5" />
              </button>

              {/* Vertical Separator */}
              <div className="h-8 w-px bg-gray-300 mx-3"></div>

              {/* Qatar Flag + Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-gray-700 hover:text-[#19407F] transition-colors px-4 py-2"
              >
                <span className="text-2xl">🇶🇦</span>
                <span className="text-base">{language === 'en' ? t('header.arabic') : t('header.english')}</span>
              </button>

              {/* Vertical Separator */}
              <div className="h-8 w-px bg-gray-300 mx-3"></div>

              {/* Login Button - Yellow with hover */}
              <button className="bg-[#FDC300] hover:bg-[#e5b000] text-gray-800 font-medium px-6 py-2 rounded-full transition-colors">
                {t('header.signIn')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="bg-white">
        <div className="container-wide mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            {/* Search and Menu - Left in English, Right in Arabic */}
            <div className={`flex items-center gap-4 ${dir === 'rtl' ? 'order-3' : 'order-1'}`}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-[#19407F] hover:text-[#FDC300] transition-colors p-2"
              >
                <Search className="h-7 w-7" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-[#19407F] hover:bg-[#FDC300] text-white hover:text-[#19407F] transition-colors p-3 rounded lg:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Center - Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 order-2">
              <a href="/blue-portal/home" className="text-[#19407F] hover:text-[#FDC300] font-semibold transition-colors">
                {t('header.home')}
              </a>
              <a href="/blue-portal/interactive-map" className="text-[#19407F] hover:text-[#FDC300] font-semibold transition-colors">
                {t('header.interactiveMap')}
              </a>
              <a href="/blue-portal/business-types" className="text-[#19407F] hover:text-[#FDC300] font-semibold transition-colors">
                {t('header.businessTypes')}
              </a>
              <a href="/blue-portal/monitor-closures" className="text-[#19407F] hover:text-[#FDC300] font-semibold transition-colors">
                {t('header.monitorClosures')}
              </a>
            </nav>

            {/* Logo - Right in English, Left in Arabic */}
            <div className={`flex items-center ${dir === 'rtl' ? 'order-1' : 'order-3'}`}>
              <img
                src="/logo-main.svg"
                alt="MOCI Logo"
                className="h-16 my-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blue Pattern Banner Strip */}
      <div
        className="h-[62px] relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/strip.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
      </div>

      {/* Breadcrumb Row */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-wide mx-auto px-4">
          <div className={`flex items-center h-12 ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
            {/* Yellow accent line */}
            <div className={`w-1 h-8 bg-[#FDC300] ${dir === 'rtl' ? 'ml-3' : 'mr-3'}`}></div>
            <div className="text-sm text-gray-600">
              <a href="/blue-portal/home" className="hover:text-[#19407F] cursor-pointer">{t('header.home')}</a>
              <span className="mx-2">{dir === 'rtl' ? '\\' : '/'}</span>
              <span className="text-black font-medium">{getPageTitle()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4">
          <div className="container-wide mx-auto">
            <input
              type="text"
              placeholder={t('header.search')}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#19407F]"
              autoFocus
              dir={dir}
            />
          </div>
        </div>
      )}

      {/* Mobile Menu Slide-out */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-out Menu */}
          <div className={`fixed top-0 ${dir === 'rtl' ? 'right-0' : 'left-0'} h-full w-80 bg-white shadow-xl z-50 overflow-y-auto`} dir={dir}>
            <div className="p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="mb-6 text-[#19407F]"
              >
                <Menu className="h-6 w-6" />
              </button>

              {/* Menu items */}
              <nav className="space-y-4">
                <a href="/blue-portal/home" className="block text-lg text-gray-800 hover:text-[#19407F] py-2 border-b border-gray-200">{t('header.home')}</a>
                <a href="/blue-portal/interactive-map" className="block text-lg text-gray-800 hover:text-[#19407F] py-2 border-b border-gray-200">{t('header.interactiveMap')}</a>
                <a href="/blue-portal/business-types" className="block text-lg text-gray-800 hover:text-[#19407F] py-2 border-b border-gray-200">{t('header.businessTypes')}</a>
                <a href="/blue-portal/monitor-closures" className="block text-lg text-gray-800 hover:text-[#19407F] py-2 border-b border-gray-200">{t('header.monitorClosures')}</a>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default SingleWindowHeader;

