import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import PageHero from '@/components/ui/PageHero';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  Navigation,
  ExternalLink,
  MessageCircle,
  Globe,
  Users,
  ArrowRight,
  X,
  Home,
  Landmark,
  Shield,
  Factory,
  Smartphone,
  Share2,
  BookOpen,
  HelpCircle
} from 'lucide-react';

const ContactUs = () => {
  const [selectedBranch, setSelectedBranch] = useState<any>(null);

  const branches = [
    {
      name: "Government services complex (Shhaniya)",
      address: "Government services complex (Shhaniya)",
      phone: "+974 4444 5555",
      hours: "Sunday - Thursday: 7:00 AM - 2:00 PM",
      services: ["Business Registration", "Consumer Services", "Document Processing"]
    },
    {
      name: "Um-salal Municipality",
      address: "Um-salal Municipality",
      phone: "+974 4444 5556",
      hours: "Sunday - Thursday: 7:00 AM - 2:00 PM",
      services: ["Municipal Services", "Business Licensing", "Consumer Affairs"]
    },
    {
      name: "Government services complex (Al-Rayyan)",
      address: "Government services complex (Al-Rayyan)",
      phone: "+974 4444 5557",
      hours: "Sunday - Thursday: 7:00 AM - 2:00 PM",
      services: ["Commercial Registration", "Industrial Services", "Consumer Protection"]
    },
    {
      name: "Government services complex (Um-salal)",
      address: "Government services complex (Um-salal)",
      phone: "+974 4444 5558",
      hours: "Sunday - Thursday: 7:00 AM - 2:00 PM",
      services: ["Business Services", "Trade Licensing", "Consumer Support"]
    },
    {
      name: "Industry City (Doha Municipality)",
      address: "Industry City (Doha Municipality)",
      phone: "+974 4444 5559",
      hours: "Sunday - Thursday: 7:00 AM - 2:00 PM",
      services: ["Industrial Licensing", "Manufacturing Support", "Business Development"]
    },
    {
      name: "C-Ring",
      address: "C-Ring",
      phone: "+974 4444 5560",
      hours: "Sunday - Thursday: 7:00 AM - 2:00 PM",
      services: ["General Services", "Document Processing", "Information Desk"]
    },
    {
      name: "Alwakra Municipality",
      address: "Alwakra Municipality",
      phone: "+974 4444 5561",
      hours: "Sunday - Thursday: 7:00 AM - 2:00 PM",
      services: ["Municipal Services", "Business Registration", "Consumer Affairs"]
    },
    {
      name: "Government services complex (Mesaimeer)",
      address: "Government services complex (Mesaimeer)",
      phone: "+974 4444 5562",
      hours: "Sunday - Thursday: 7:00 AM - 2:00 PM",
      services: ["Commercial Services", "Trade Registration", "Consumer Services"]
    },
    {
      name: "Government services complex (Al-Khor)",
      address: "Government services complex (Al-Khor)",
      phone: "+974 4444 5563",
      hours: "Sunday - Thursday: 7:00 AM - 2:00 PM",
      services: ["Business Licensing", "Industrial Services", "Consumer Protection"]
    },
    {
      name: "Government services complex (Aniza)",
      address: "Government services complex (Aniza)",
      phone: "+974 4444 5564",
      hours: "Sunday - Thursday: 7:00 AM - 2:00 PM",
      services: ["Government Services", "Business Support", "Consumer Affairs"]
    },
    {
      name: "Government services complex (Alshamal)",
      address: "Government services complex (Alshamal)",
      phone: "+974 4444 5565",
      hours: "Sunday - Thursday: 7:00 AM - 2:00 PM",
      services: ["Regional Services", "Business Registration", "Consumer Support"]
    },
    {
      name: "Government services complex (The Pearl)",
      address: "Government services complex (The Pearl)",
      phone: "+974 4444 5566",
      hours: "Sunday - Thursday: 7:00 AM - 2:00 PM",
      services: ["Premium Services", "Business Concierge", "Express Processing"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/image1.jpg"
        title="Contact Us"
        subtitle="Get in touch with the Ministry of Commerce and Industry"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container-wide">
          <nav className="text-sm text-gray-600">
            <span>You are here: » Contact us</span>
          </nav>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-gradient-to-br from-qatari/5 to-qatari/10">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for all your business and consumer needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Call Center */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-maroon hover:border-red-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-center group flex flex-col h-full">
              {/* Background Image */}
              <div className="relative w-full h-32 mb-6 rounded-xl overflow-hidden">
                <img
                  src="/images/image2.jpg"
                  alt="Call Center Support"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-maroon/80 to-maroon/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/30">
                    <Phone size={36} className="text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Center</h3>
              <div className="space-y-2 mb-6 flex-grow">
                <p className="text-3xl font-bold text-maroon">16001</p>
                <p className="text-gray-600">Local investors & citizens</p>
                <p className="text-lg font-semibold text-maroon">+974 6611 1400</p>
                <p className="text-gray-600">International inquiries</p>
              </div>
              <Button className="w-full bg-[#8B1538] hover:bg-[#7A1230] text-white border-2 border-[#8B1538] mt-auto">
                <Phone size={16} className="mr-2" />
                Call Now
              </Button>
            </div>

            {/* Email Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-maroon hover:border-red-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-center group flex flex-col h-full">
              {/* Background Image */}
              <div className="relative w-full h-32 mb-6 rounded-xl overflow-hidden">
                <img
                  src="/images/image3.jpg"
                  alt="Email Support"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-maroon/80 to-maroon/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/30">
                    <Mail size={36} className="text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
              <div className="space-y-2 mb-6 flex-grow">
                <p className="text-xl font-bold text-maroon">info@moci.gov.qa</p>
                <p className="text-gray-600">General inquiries & support</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
              <Button className="w-full bg-[#8B1538] hover:bg-[#7A1230] text-white border-2 border-[#8B1538] mt-auto">
                <Mail size={16} className="mr-2" />
                Send Email
              </Button>
            </div>

            {/* Live Chat */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-maroon hover:border-red-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-center group flex flex-col h-full">
              {/* Background Image */}
              <div className="relative w-full h-32 mb-6 rounded-xl overflow-hidden">
                <img
                  src="/images/image4.jpg"
                  alt="Live Chat Support"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-maroon/80 to-maroon/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/30">
                    <MessageCircle size={36} className="text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Live Chat</h3>
              <div className="space-y-2 mb-6 flex-grow">
                <p className="text-lg font-semibold text-maroon">Available 24/7</p>
                <p className="text-gray-600">Instant support & guidance</p>
                <p className="text-sm text-gray-500">Multiple languages supported</p>
              </div>
              <Button className="w-full bg-[#8B1538] hover:bg-[#7A1230] text-white border-2 border-[#8B1538] mt-auto">
                <MessageCircle size={16} className="mr-2" />
                Start Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Office & Map Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Main Office Information */}
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Headquarters
              </h2>

              {/* Main Office Card */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-maroon shadow-lg flex-1 flex flex-col">
                <div className="flex items-start space-x-6 flex-1">
                  <div className="w-16 h-16 bg-maroon rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Building2 size={32} className="text-white" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-maroon mb-3">
                      Ministry of Commerce and Industry
                    </h3>
                    <div className="space-y-4 flex-1">
                      <div className="flex items-start space-x-3">
                        <MapPin size={20} className="text-maroon mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Address</p>
                          <p className="text-gray-700">1st floor Ministry of Commerce and Industry<br />Lusail City, Qatar</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock size={20} className="text-maroon mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Working Hours</p>
                          <p className="text-gray-700">Sunday - Thursday: 7:00 AM - 2:00 PM<br />Friday - Saturday: Closed</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3 justify-center">
                      <Button className="bg-[#8B1538] hover:bg-[#7A1230] text-white border-2 border-[#8B1538]">
                        <Navigation size={16} className="mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="outline" className="border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white border-2">
                        <ExternalLink size={16} className="mr-2" />
                        View on Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Map */}
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Find Us on the Map
              </h2>

              {/* Interactive Map Container */}
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden border-2 border-qatari/20 shadow-xl flex-1 flex flex-col">
                {/* Map Header */}
                <div className="bg-white/90 backdrop-blur-sm p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-qatari rounded-full flex items-center justify-center">
                        <MapPin size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Ministry of Commerce and Industry</p>
                        <p className="text-sm text-gray-600">Lusail City, Qatar</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white border-2">
                      <ExternalLink size={14} className="mr-1" />
                      Open in Maps
                    </Button>
                  </div>
                </div>

                {/* Map Content */}
                <div className="flex-1 relative bg-gradient-to-br from-blue-100 via-green-50 to-blue-50 min-h-80">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 grid-rows-6 h-full">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="border border-gray-300"></div>
                      ))}
                    </div>
                  </div>

                  {/* Roads */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/3 left-0 right-0 h-2 bg-gray-400 opacity-60"></div>
                    <div className="absolute top-2/3 left-0 right-0 h-1 bg-gray-300 opacity-60"></div>
                    <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-gray-300 opacity-60"></div>
                    <div className="absolute left-3/4 top-0 bottom-0 w-2 bg-gray-400 opacity-60"></div>
                  </div>

                  {/* Buildings */}
                  <div className="absolute top-6 left-6 w-12 h-8 bg-gray-300 rounded opacity-70"></div>
                  <div className="absolute top-16 right-8 w-10 h-12 bg-gray-400 rounded opacity-70"></div>
                  <div className="absolute bottom-12 left-12 w-8 h-6 bg-gray-300 rounded opacity-70"></div>
                  <div className="absolute bottom-8 right-16 w-14 h-10 bg-gray-400 rounded opacity-70"></div>

                  {/* Main Building (MOCI) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      {/* Building */}
                      <div className="w-16 h-12 bg-qatari rounded-lg shadow-lg border-2 border-qatari-light"></div>

                      {/* Marker Pin */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-8 bg-qatari rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-bounce">
                          <MapPin size={16} className="text-white" />
                        </div>
                      </div>

                      {/* Info Popup */}
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 border border-gray-200 min-w-max">
                        <div className="text-center">
                          <p className="font-semibold text-gray-900 text-sm">MOCI Headquarters</p>
                          <p className="text-xs text-gray-600">Lusail City</p>
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-gray-200 rotate-45"></div>
                      </div>
                    </div>
                  </div>

                  {/* Compass */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full border border-gray-300 flex items-center justify-center shadow-lg">
                    <div className="text-xs font-bold text-gray-700">N</div>
                    <div className="absolute w-6 h-0.5 bg-qatari transform rotate-0 origin-center"></div>
                  </div>

                  {/* Scale */}
                  <div className="absolute bottom-4 left-4 bg-white/90 rounded px-3 py-1 border border-gray-300 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-0.5 bg-gray-700"></div>
                      <span className="text-xs text-gray-700">1 km</span>
                    </div>
                  </div>
                </div>

                {/* Map Footer */}
                <div className="bg-white/90 backdrop-blur-sm p-3 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-600">Coordinates:</span>
                      <span className="font-mono text-qatari">25.3933°N, 51.5216°E</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Globe size={14} />
                      <span>Interactive Map</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Centers Across Qatar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit any of our conveniently located service centers for in-person assistance
            </p>
          </div>

          {/* Featured Branches */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {branches.slice(0, 4).map((branch, index) => {
              // Define icons for different branch types
              const getIcon = (branchName: string) => {
                if (branchName.includes('Shhaniya')) return Home;
                if (branchName.includes('Municipality')) return Landmark;
                if (branchName.includes('Al-Rayyan')) return Shield;
                if (branchName.includes('Um-salal')) return Factory;
                return Building2;
              };

              const IconComponent = getIcon(branch.name);

              // Define images for different branch types
              const getImage = (branchName: string) => {
                if (branchName.includes('Shhaniya')) return '/images/image1.jpg';
                if (branchName.includes('Municipality')) return '/images/image2.jpg';
                if (branchName.includes('Al-Rayyan')) return '/images/image3.jpg';
                if (branchName.includes('Um-salal')) return '/images/image4.jpg';
                return '/images/image5.jpg';
              };

              const branchImage = getImage(branch.name);

              return (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-maroon hover:border-red-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group cursor-pointer flex flex-col h-full">
                      <div className="text-center flex flex-col h-full">
                        {/* Background Image */}
                        <div className="relative w-full h-32 mb-4 rounded-xl overflow-hidden">
                          <img
                            src={branchImage}
                            alt={branch.name}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-white/50"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-maroon/30 shadow-lg">
                              <IconComponent size={28} className="text-maroon" />
                            </div>
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-3 text-base leading-tight">
                          {branch.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 flex-grow">
                          {branch.address}
                        </p>
                        <Button size="sm" className="w-full bg-[#8B1538] hover:bg-[#7A1230] text-white border-2 border-[#8B1538] mt-auto">
                          <Navigation size={14} className="mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-maroon">{branch.name}</DialogTitle>
                    <DialogDescription>
                      Complete information about this service location
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin size={20} className="text-maroon mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p className="text-gray-700">{branch.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone size={20} className="text-maroon mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-700">{branch.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock size={20} className="text-maroon mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Working Hours</p>
                        <p className="text-gray-700">{branch.hours}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Building2 size={20} className="text-maroon mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Services Available</p>
                        <ul className="text-gray-700 text-sm space-y-1">
                          {branch.services.map((service, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-maroon rounded-full mr-2"></span>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1 bg-[#8B1538] hover:bg-[#7A1230] text-white border-2 border-[#8B1538]">
                        <Navigation size={16} className="mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="outline" className="flex-1 border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white border-2">
                        <Phone size={16} className="mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </DialogContent>
                </Dialog>
              );
            })}
          </div>

          {/* All Branches Grid */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-maroon">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              All Service Locations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {branches.map((branch, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-50 hover:bg-red-50 transition-colors duration-200 border border-gray-200 hover:border-maroon cursor-pointer">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-maroon" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm leading-tight truncate">
                          {branch.name}
                        </h4>
                        <p className="text-gray-600 text-xs truncate">
                          {branch.address}
                        </p>
                      </div>
                      <ArrowRight size={16} className="text-gray-400 flex-shrink-0" />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-maroon">{branch.name}</DialogTitle>
                      <DialogDescription>
                        Complete information about this service location
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin size={20} className="text-maroon mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Address</p>
                          <p className="text-gray-700">{branch.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Phone size={20} className="text-maroon mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Phone</p>
                          <p className="text-gray-700">{branch.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock size={20} className="text-maroon mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Working Hours</p>
                          <p className="text-gray-700">{branch.hours}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Building2 size={20} className="text-maroon mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Services Available</p>
                          <ul className="text-gray-700 text-sm space-y-1">
                            {branch.services.map((service, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-maroon rounded-full mr-2"></span>
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex gap-2 pt-4">
                        <Button className="flex-1 bg-[#8B1538] hover:bg-[#7A1230] text-white border-2 border-[#8B1538]">
                          <Navigation size={16} className="mr-2" />
                          Get Directions
                        </Button>
                        <Button variant="outline" className="flex-1 border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white border-2">
                          <Phone size={16} className="mr-2" />
                          Call Now
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore more ways to get assistance and stay connected with MOCI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mobile App */}
            <div className="text-center bg-white rounded-2xl p-8 border-2 border-maroon hover:border-red-900 transition-all duration-300 hover:shadow-xl flex flex-col h-full group">
              {/* Background Image */}
              <div className="relative w-full h-24 mb-4 rounded-xl overflow-hidden">
                <img
                  src="/images/image1.jpg"
                  alt="Mobile App"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-white/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-maroon/30 shadow-lg">
                    <Smartphone size={24} className="text-maroon" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile App</h3>
              <p className="text-gray-600 mb-4 flex-grow">Download our official app for services on the go</p>
              <Button size="sm" className="bg-[#8B1538] hover:bg-[#7A1230] text-white border-2 border-[#8B1538] mt-auto">
                Download App
              </Button>
            </div>

            {/* Social Media */}
            <div className="text-center bg-white rounded-2xl p-8 border-2 border-maroon hover:border-red-900 transition-all duration-300 hover:shadow-xl flex flex-col h-full group">
              {/* Background Image */}
              <div className="relative w-full h-24 mb-4 rounded-xl overflow-hidden">
                <img
                  src="/images/image2.jpg"
                  alt="Social Media"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-white/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-maroon/30 shadow-lg">
                    <Share2 size={24} className="text-maroon" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Media</h3>
              <p className="text-gray-600 mb-4 flex-grow">Follow us for updates and announcements</p>
              <Button size="sm" className="bg-[#8B1538] hover:bg-[#7A1230] text-white border-2 border-[#8B1538] mt-auto">
                Follow Us
              </Button>
            </div>

            {/* Newsletter */}
            <div className="text-center bg-white rounded-2xl p-8 border-2 border-maroon hover:border-red-900 transition-all duration-300 hover:shadow-xl flex flex-col h-full group">
              {/* Background Image */}
              <div className="relative w-full h-24 mb-4 rounded-xl overflow-hidden">
                <img
                  src="/images/image3.jpg"
                  alt="Newsletter"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-white/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-maroon/30 shadow-lg">
                    <BookOpen size={24} className="text-maroon" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Newsletter</h3>
              <p className="text-gray-600 mb-4 flex-grow">Subscribe to receive important updates</p>
              <Button size="sm" className="bg-[#8B1538] hover:bg-[#7A1230] text-white border-2 border-[#8B1538] mt-auto">
                Subscribe
              </Button>
            </div>

            {/* FAQ */}
            <div className="text-center bg-white rounded-2xl p-8 border-2 border-maroon hover:border-red-900 transition-all duration-300 hover:shadow-xl flex flex-col h-full group">
              {/* Background Image */}
              <div className="relative w-full h-24 mb-4 rounded-xl overflow-hidden">
                <img
                  src="/images/image4.jpg"
                  alt="FAQ"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-white/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-maroon/30 shadow-lg">
                    <HelpCircle size={24} className="text-maroon" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">FAQ</h3>
              <p className="text-gray-600 mb-4 flex-grow">Find answers to commonly asked questions</p>
              <Button size="sm" className="bg-[#8B1538] hover:bg-[#7A1230] text-white border-2 border-[#8B1538] mt-auto">
                View FAQ
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
