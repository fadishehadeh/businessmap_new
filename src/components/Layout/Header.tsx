
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  Globe,
  Menu,
  Search,
  X
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import NavigationMenuDemo from './NavigationMenu';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { AuthButtons } from '../Auth/AuthButtons';
import { scrollToTop } from '@/hooks/use-scroll-to-top';
import SearchModal from '../Search/SearchModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
    // Add a small delay to ensure navigation starts before scrolling
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 z-40" role="banner">
      {/* Second Tier Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-wide">
          <div className="flex items-center justify-between gap-4 -my-2">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center" aria-label="Qatar Ministry of Commerce and Industry - Home">
                <img
                  src="/images/logo-main.svg"
                  alt="Qatar Ministry of Commerce and Industry Logo"
                  className="h-[156px] md:h-[181px] max-w-[450px] object-contain -my-2"
                />
              </Link>
            </div>

            {/* Right Side - Existing Items */}
            <div className="flex items-center gap-4">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSearch}
                aria-label="Search the website"
                className="text-gray-600 hover:text-qatari"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
              </Button>

              {/* Auth Buttons */}
              <div className="hidden md:flex">
                <AuthButtons />
              </div>

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 text-gray-600 hover:text-qatari"
                    aria-label="Select language - Current: English"
                  >
                    <Globe className="h-4 w-4 mr-1" aria-hidden="true" />
                    <span>EN</span>
                    <ChevronDown className="h-3 w-3" aria-hidden="true" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" role="menu" aria-label="Language options">
                  <DropdownMenuItem role="menuitem">English</DropdownMenuItem>
                  <DropdownMenuItem role="menuitem" lang="ar">العربية</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-qatari border-b border-gray-100">
        <div className="container-wide">
          <div className="flex items-center justify-center py-4">
            {/* Desktop Navigation - Centered */}
            {!isMobile && (
              <nav id="main-navigation" className="hidden lg:flex" role="navigation" aria-label="Main navigation">
                <NavigationMenuDemo />
              </nav>
            )}

            {/* Mobile menu toggle - Positioned absolutely to the right */}
            {isMobile && (
              <div className="absolute right-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMenu}
                  aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-navigation"
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Menu className="h-5 w-5" aria-hidden="true" />
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[115px] bg-white z-30 animate-fade-in overflow-auto">
          <div className="container py-8">
            <nav
              id="mobile-navigation"
              className="flex flex-col space-y-4"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <Link
                to="/about"
                onClick={handleMobileNavClick}
                className="py-2 text-lg border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded"
              >
                About the Ministry
              </Link>
              <Link
                to="/services"
                onClick={handleMobileNavClick}
                className="py-2 text-lg border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded"
              >
                Services Hub
              </Link>
              <Link
                to="/e-services"
                onClick={handleMobileNavClick}
                className="py-2 text-lg border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded"
              >
                E-Services
              </Link>

              <Link
                to="/media-centre/news"
                onClick={handleMobileNavClick}
                className="py-2 text-lg border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded"
              >
                Media Centre
              </Link>
              <Link
                to="/resources"
                onClick={handleMobileNavClick}
                className="py-2 text-lg border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded"
              >
                Resources
              </Link>
              <Link
                to="/contact-us"
                onClick={handleMobileNavClick}
                className="py-2 text-lg border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded"
              >
                Contact Us
              </Link>
              {/* Place AuthButtons at the end of mobile menu */}
              <div className="pt-4">
                <AuthButtons />
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Header;
