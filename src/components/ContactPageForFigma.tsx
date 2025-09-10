import React from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Building2, 
  Navigation, 
  ExternalLink,
  Home,
  Landmark,
  Shield,
  Factory
} from 'lucide-react';

// Simplified Button component for Anima
const Button = ({ children, className, variant = "default", size = "default", ...props }: any) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const variants = {
    default: "bg-[#8B1538] text-white hover:bg-[#7A1230] border-2 border-[#8B1538]",
    outline: "border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white border-2"
  };
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 text-sm"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const ContactPageForFigma = () => {
  const branches = [
    {
      name: "Government services complex (Shhaniya)",
      address: "Government services complex (Shhaniya)",
      icon: Home
    },
    {
      name: "Um-salal Municipality", 
      address: "Um-salal Municipality",
      icon: Landmark
    },
    {
      name: "Government services complex (Al-Rayyan)",
      address: "Government services complex (Al-Rayyan)", 
      icon: Shield
    },
    {
      name: "Government services complex (Um-salal)",
      address: "Government services complex (Um-salal)",
      icon: Factory
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-[#8B1538] to-[#7A1230] flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with the Ministry of Commerce and Industry</p>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us for all your business and consumer needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Call Center */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#8B1538] hover:border-red-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-center group flex flex-col h-full">
              <div className="relative w-full h-32 mb-6 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/80 to-[#8B1538]/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/30">
                    <Phone size={36} className="text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Center</h3>
              <div className="space-y-2 mb-6 flex-grow">
                <p className="text-3xl font-bold text-[#8B1538]">16001</p>
                <p className="text-gray-600">Local investors & citizens</p>
                <p className="text-lg font-semibold text-[#8B1538]">+974 6611 1400</p>
                <p className="text-gray-600">International inquiries</p>
              </div>
              <Button className="w-full mt-auto">
                <Phone size={16} className="mr-2" />
                Call Now
              </Button>
            </div>

            {/* Email Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#8B1538] hover:border-red-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-center group flex flex-col h-full">
              <div className="relative w-full h-32 mb-6 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/80 to-[#8B1538]/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/30">
                    <Mail size={36} className="text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
              <div className="space-y-2 mb-6 flex-grow">
                <p className="text-xl font-bold text-[#8B1538]">info@moci.gov.qa</p>
                <p className="text-gray-600">General inquiries & support</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
              <Button className="w-full mt-auto">
                <Mail size={16} className="mr-2" />
                Send Email
              </Button>
            </div>

            {/* Live Chat */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#8B1538] hover:border-red-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-center group flex flex-col h-full">
              <div className="relative w-full h-32 mb-6 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/80 to-[#8B1538]/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/30">
                    <MessageCircle size={36} className="text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Live Chat</h3>
              <div className="space-y-2 mb-6 flex-grow">
                <p className="text-lg font-semibold text-[#8B1538]">Available 24/7</p>
                <p className="text-gray-600">Instant support & guidance</p>
                <p className="text-sm text-gray-500">Multiple languages supported</p>
              </div>
              <Button className="w-full mt-auto">
                <MessageCircle size={16} className="mr-2" />
                Start Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Office & Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Main Office Information */}
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Headquarters</h2>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-[#8B1538] shadow-lg flex-1 flex flex-col">
                <div className="flex items-start space-x-6 flex-1">
                  <div className="w-16 h-16 bg-[#8B1538] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Building2 size={32} className="text-white" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-[#8B1538] mb-3">Ministry of Commerce and Industry</h3>
                    <div className="space-y-4 flex-1">
                      <div className="flex items-start space-x-3">
                        <MapPin size={20} className="text-[#8B1538] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Address</p>
                          <p className="text-gray-700">1st floor Ministry of Commerce and Industry<br />Lusail City, Qatar</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock size={20} className="text-[#8B1538] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Working Hours</p>
                          <p className="text-gray-700">Sunday - Thursday: 7:00 AM - 2:00 PM<br />Friday - Saturday: Closed</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3 justify-center">
                      <Button>
                        <Navigation size={16} className="mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="outline">
                        <ExternalLink size={16} className="mr-2" />
                        View on Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us on the Map</h2>
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden border-2 border-blue-200 shadow-xl flex-1 flex flex-col">
                <div className="bg-white/90 backdrop-blur-sm p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#8B1538] rounded-full flex items-center justify-center">
                        <MapPin size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Ministry of Commerce and Industry</p>
                        <p className="text-sm text-gray-600">Lusail City, Qatar</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <ExternalLink size={14} className="mr-1" />
                      Open in Maps
                    </Button>
                  </div>
                </div>
                <div className="flex-1 relative bg-gradient-to-br from-blue-100 via-green-50 to-blue-50 min-h-80">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-12 bg-[#8B1538] rounded-lg shadow-lg border-2 border-red-300"></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-[#8B1538] rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-bounce">
                        <MapPin size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Centers */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Centers Across Qatar</h2>
            <p className="text-xl text-gray-600">Visit any of our conveniently located service centers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, index) => {
              const IconComponent = branch.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#8B1538] hover:border-red-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group cursor-pointer flex flex-col h-full">
                  <div className="text-center flex flex-col h-full">
                    <div className="w-14 h-14 bg-[#8B1538] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-base leading-tight">{branch.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{branch.address}</p>
                    <Button size="sm" className="w-full mt-auto">
                      <Navigation size={14} className="mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPageForFigma;
