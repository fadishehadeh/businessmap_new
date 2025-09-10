import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import PageHero from '@/components/ui/PageHero';
import {
  Users,
  Package,
  DollarSign,
  MapPin,
  AlertTriangle,
  FileText,
  Percent,
  Info,
  ChevronRight,
  ExternalLink,
  ShoppingCart,
  Clock,
  Phone,
  Menu,
  X,
  CreditCard,
  Wheat,
  MessageSquare,
  Search,
  Carrot,
  Fish,
  Apple,
  Building,
  Gift,
  Tag,
  BookOpen
} from 'lucide-react';

const Consumer = () => {
  const [activeSection, setActiveSection] = useState('supplies');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to services section when section changes
  useEffect(() => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  const consumerSections = [
    {
      id: 'supplies',
      title: 'Supplies',
      icon: Package,
      color: 'bg-qatari',
      description: 'Information about essential supplies and commodities'
    },
    {
      id: 'prices',
      title: 'Commodities Daily Prices',
      icon: DollarSign,
      color: 'bg-qatari',
      description: 'Daily pricing information for essential commodities'
    },
    {
      id: 'addresses',
      title: 'Important Address',
      icon: MapPin,
      color: 'bg-qatari',
      description: 'Important addresses and contact information'
    },
    {
      id: 'recalls',
      title: 'Recalls',
      icon: AlertTriangle,
      color: 'bg-qatari',
      description: 'Product recalls and safety notifications'
    },
    {
      id: 'forms',
      title: 'Form',
      icon: FileText,
      color: 'bg-qatari',
      description: 'Consumer service forms and applications'
    },
    {
      id: 'discounts',
      title: 'Request for license Discounts and Promotions',
      icon: Percent,
      color: 'bg-qatari',
      description: 'License requests for discounts and promotional activities'
    },
    {
      id: 'advice',
      title: 'Advices and guidelines',
      icon: Info,
      color: 'bg-qatari',
      description: 'Consumer advice and helpful guidelines'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/image3.jpg"
        title="Consumer Services"
        subtitle="Essential services and information for consumers and the general public in Qatar"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Services Navigation */}
      <section id="services-section" className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Consumer Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access essential consumer services, information, and resources to protect your rights and interests
              </p>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-lg border-2 border-qatari text-qatari font-semibold"
              >
                <span>Service Categories</span>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Left Side Navigation Layout */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Side Navigation Menu */}
              <div className={`lg:w-1/3 xl:w-1/4 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
                <div className="bg-white rounded-xl shadow-lg border-2 border-qatari p-6 lg:sticky lg:top-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-qatari pb-3 hidden lg:block">
                    Service Categories
                  </h3>
                  <nav className="space-y-2">
                    {consumerSections.map((section) => {
                      const IconComponent = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => {
                            setActiveSection(section.id);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`w-full group p-4 rounded-lg transition-all duration-300 text-left border-2 flex items-center space-x-3 ${
                            activeSection === section.id
                              ? 'border-qatari bg-qatari/10 text-qatari'
                              : 'border-gray-200 hover:border-qatari/50 hover:bg-qatari/5'
                          }`}
                        >
                          <div className={`w-10 h-10 ${section.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                            <IconComponent size={20} className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className={`font-semibold text-base leading-tight transition-colors ${
                              activeSection === section.id ? 'text-qatari' : 'text-gray-900 group-hover:text-qatari'
                            }`}>
                              {section.title}
                            </h4>
                          </div>
                          <ChevronRight
                            size={16}
                            className={`flex-shrink-0 transition-all duration-200 ${
                              activeSection === section.id
                                ? 'text-qatari translate-x-1'
                                : 'text-gray-400 group-hover:text-qatari group-hover:translate-x-1'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Content Area */}
              <div className="lg:w-2/3 xl:w-3/4 min-h-0">
                <div className="bg-white rounded-2xl shadow-lg border-2 border-qatari overflow-hidden">
              {/* Supplies Section */}
              {activeSection === 'supplies' && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <Package size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Supplies</h3>
                      <p className="text-gray-600">Information about essential supplies and commodities</p>
                    </div>
                  </div>

                  {/* Sub-pages Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <CreditCard size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          Conditions for obtaining a Tamween card
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Requirements and procedures for Tamween card application
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <Wheat size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          Supply Commodities and animal feed rations
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Information about available commodities and feed rations
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <MessageSquare size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          SMS service
                        </h4>
                        <p className="text-gray-600 text-sm">
                          SMS notification services for supply updates
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <Search size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          How to get your commodities
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Step-by-step guide to obtain your commodities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Daily Prices Section */}
              {activeSection === 'prices' && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <DollarSign size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Commodities Daily Prices</h3>
                      <p className="text-gray-600">Daily pricing information for essential commodities</p>
                    </div>
                  </div>

                  {/* Sub-pages Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <Carrot size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          Daily vegetable prices
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Current daily prices for local vegetables
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <Package size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          Imported Vegetable Prices
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Pricing for imported vegetables
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <Fish size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          Daily fish prices
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Current daily prices for fish and seafood
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <Apple size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          Imported Fruits Prices
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Pricing for imported fruits
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5 md:col-span-2 lg:col-span-1">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <FileText size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          قائمة السلع والخدمات المنظمة
                        </h4>
                        <p className="text-gray-600 text-sm">
                          List of goods and services subject to price regulation approval
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Important Addresses Section */}
              {activeSection === 'addresses' && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Important Address</h3>
                      <p className="text-gray-600">Important addresses and contact information</p>
                    </div>
                  </div>

                  {/* Sub-pages Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <Building size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          Suppliers address book
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Directory of suppliers and their contact information
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <ShoppingCart size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          Bakeries address book
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Directory of bakeries and their locations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Request for license Discounts and Promotions Section */}
              {activeSection === 'discounts' && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <Percent size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Request for license Discounts and Promotions</h3>
                      <p className="text-gray-600">License requests for discounts and promotional activities</p>
                    </div>
                  </div>

                  {/* Sub-pages Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <FileText size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          التعامل مع نماذج بيان
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Handling statement forms
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <Package size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          السلع و قائمة الجوائز
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Goods and prizes list
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <Gift size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          قائمة الجوائز
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Prizes list
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <Tag size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          قائمة اسعار التنزيلات
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Discount prices list
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <Percent size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          قائمة اسعار العروض
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Promotion prices list
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <BookOpen size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3">
                          دليل المستخدم لإصدار رخصة العروض والتنزيلات
                        </h4>
                        <p className="text-gray-600 text-sm">
                          User guide for issuing promotions and discounts license
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Placeholder for other sections */}
              {!['supplies', 'prices', 'addresses', 'discounts'].includes(activeSection) && (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {consumerSections.find(s => s.id === activeSection)?.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Content for this section will be added soon. Please check back later or contact our support team for assistance.
                  </p>
                  <a
                    href="https://www.moci.gov.qa/en/our-services/consumer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-qatari text-white font-semibold rounded-lg hover:bg-qatari-dark transition-colors duration-200"
                  >
                    <span>Visit the page</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Consumer;
