import React, { useState } from 'react';
import { Menu, Search, Eye, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SingleWindowHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Utility Row */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-wide mx-auto px-4">
          <div className="flex justify-start items-center h-10 text-sm">
            {/* Left side - utility items */}
            <div className="flex items-center gap-4">
              <button className="text-black hover:text-[#19407F] transition-colors">
                <Eye className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-1 text-black hover:text-[#19407F] transition-colors">
                <Globe className="h-4 w-4" />
                <span>English</span>
              </button>
              <button className="text-black hover:text-[#19407F] transition-colors">
                تسجيل الدخول
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="bg-white">
        <div className="container-wide mx-auto px-4">
          <div className="flex justify-between items-center h-20" dir="rtl">
            {/* Right side - Logo */}
            <div className="flex items-center">
              <img
                src="/lg.svg"
                alt="Single Window Logo"
                className="h-16"
              />
            </div>

            {/* Left side - Menu and Search */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-[#19407F] hover:text-[#FDC300] transition-colors"
              >
                <Search className="h-6 w-6" />
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#19407F] hover:text-[#FDC300] transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Pattern Banner Strip */}
      <div
        className="h-12 relative overflow-hidden bg-cover bg-center"
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
          <div className="flex items-center h-12" dir="rtl">
            {/* Yellow accent line */}
            <div className="w-1 h-8 bg-[#FDC300] ml-3"></div>
            <div className="text-sm text-gray-600">
              <span className="hover:text-[#19407F] cursor-pointer">الرئيسية</span>
              <span className="mx-2">/</span>
              <span className="text-black font-medium">خريطة الأعمال</span>
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
              placeholder="ابحث..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#19407F]"
              dir="rtl"
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
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto" dir="rtl">
            <div className="p-6">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mb-6 text-[#19407F]"
              >
                <Menu className="h-6 w-6" />
              </button>
              
              {/* Menu items would go here */}
              <nav className="space-y-4">
                <a href="#" className="block text-lg text-gray-800 hover:text-[#19407F] py-2">الرئيسية</a>
                <a href="#" className="block text-lg text-gray-800 hover:text-[#19407F] py-2">الخدمات</a>
                <a href="#" className="block text-lg text-gray-800 hover:text-[#19407F] py-2">عن النافذة الواحدة</a>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default SingleWindowHeader;

