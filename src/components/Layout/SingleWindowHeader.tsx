import React, { useState } from 'react';
import { Menu, Search, Eye, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const SingleWindowHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Get page title based on current route
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/' || path === '/blue-portal/home') return 'Home';
    if (path === '/blue-portal/interactive-map') return 'Interactive Map';
    if (path === '/blue-portal/business-types') return 'Business Types';
    if (path === '/blue-portal/monitor-closures') return 'Monitor Business Closures';
    return 'Home';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Utility Row */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-wide mx-auto px-4">
          <div className="flex justify-end items-center h-16 text-sm">
            {/* Right side - utility items */}
            <div className="flex items-center gap-0">
              {/* Eye Icon */}
              <button className="text-gray-700 hover:text-[#19407F] transition-colors px-4 py-2">
                <Eye className="h-5 w-5" />
              </button>

              {/* Vertical Separator */}
              <div className="h-8 w-px bg-gray-300 mx-3"></div>

              {/* Qatar Flag + Arabic */}
              <button className="flex items-center gap-2 text-gray-700 hover:text-[#19407F] transition-colors px-4 py-2">
                <span className="text-2xl">🇶🇦</span>
                <span className="text-base">Arabic</span>
              </button>

              {/* Vertical Separator */}
              <div className="h-8 w-px bg-gray-300 mx-3"></div>

              {/* Login Button - Yellow with hover */}
              <button className="bg-[#FDC300] hover:bg-[#e5b000] text-gray-800 font-medium px-6 py-2 rounded-full transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="bg-white">
        <div className="container-wide mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            {/* Left side - Logo */}
            <div className="flex items-center">
              <img
                src="/logo-main.svg"
                alt="MOCI Logo"
                className="h-16 my-2"
              />
            </div>

            {/* Center - Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="/blue-portal/home" className="text-[#19407F] hover:text-[#FDC300] font-semibold transition-colors">
                Home
              </a>
              <a href="/blue-portal/interactive-map" className="text-[#19407F] hover:text-[#FDC300] font-semibold transition-colors">
                Interactive Map
              </a>
              <a href="/blue-portal/business-types" className="text-[#19407F] hover:text-[#FDC300] font-semibold transition-colors">
                Business Types
              </a>
              <a href="/blue-portal/monitor-closures" className="text-[#19407F] hover:text-[#FDC300] font-semibold transition-colors">
                Monitor Closures
              </a>
            </nav>

            {/* Right side - Menu and Search */}
            <div className="flex items-center gap-4">
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
          <div className="flex items-center h-12">
            {/* Yellow accent line */}
            <div className="w-1 h-8 bg-[#FDC300] mr-3"></div>
            <div className="text-sm text-gray-600">
              <a href="/blue-portal/home" className="hover:text-[#19407F] cursor-pointer">Home</a>
              <span className="mx-2">/</span>
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
              placeholder="Search..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#19407F]"
              autoFocus
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
          <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto">
            <div className="p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="mb-6 text-[#19407F]"
              >
                <Menu className="h-6 w-6" />
              </button>

              {/* Menu items */}
              <nav className="space-y-4">
                <a href="/blue-portal/home" className="block text-lg text-gray-800 hover:text-[#19407F] py-2 border-b border-gray-200">Home</a>
                <a href="/blue-portal/interactive-map" className="block text-lg text-gray-800 hover:text-[#19407F] py-2 border-b border-gray-200">Interactive Map</a>
                <a href="/blue-portal/business-types" className="block text-lg text-gray-800 hover:text-[#19407F] py-2 border-b border-gray-200">Explore Business Types</a>
                <a href="/blue-portal/monitor-closures" className="block text-lg text-gray-800 hover:text-[#19407F] py-2 border-b border-gray-200">Monitor Business Closures</a>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default SingleWindowHeader;

