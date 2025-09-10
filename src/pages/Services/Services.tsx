import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Link } from 'react-router-dom';
import { Building2, Users, ArrowRight, FileText } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

const Services = () => {
  const serviceCategories = [
    {
      title: "Business",
      description: "Comprehensive services for businesses, investors, and commercial entities",
      href: "/services/business",
      icon: Building2,
      color: "bg-qatari",
      services: [
        "Procedures for delisting companies",
        "Company registration procedures", 
        "Legal obligations and compliance",
        "Laws and regulations",
        "Business forms and documentation",
        "Company types and structures",
        "Commerce FAQ",
        "Consulting firms platform",
        "Vendor registration",
        "Auditors lists",
        "Ministry procedures manual",
        "Intellectual property rights"
      ]
    },
    {
      title: "Consumer",
      description: "Essential services and information for consumers and the general public",
      href: "/services/consumer",
      icon: Users,
      color: "bg-qatari",
      services: [
        "Supplies and commodities",
        "Daily commodity prices",
        "Important addresses",
        "Product recalls",
        "Consumer forms",
        "License discount requests",
        "Promotions and offers",
        "Consumer advice and guidelines"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/image1.jpg"
        title="Services Hub"
        subtitle="Your gateway to comprehensive business and consumer services provided by the Ministry of Commerce and Industry"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Services Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Choose Your Service Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access specialized services tailored to your needs. Whether you're a business owner or a consumer,
                we have comprehensive solutions to serve you better.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {serviceCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={category.title}
                    className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-qatari/20 hover:border-qatari/40"
                  >
                    {/* Header */}
                    <div className="bg-white p-10 text-gray-900 relative border-b-2 border-qatari">
                      <div className="absolute top-6 right-6 opacity-10">
                        <IconComponent size={100} className="text-qatari" />
                      </div>
                      <div className="relative z-10 text-left">
                        <IconComponent size={48} className="mb-4 text-qatari" />
                        <h3 className="text-xl font-semibold mb-3 text-qatari">{category.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{category.description}</p>
                      </div>
                    </div>

                    {/* Services Preview */}
                    <div className="p-8 text-left">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Services Include:</h4>
                      <ul className="space-y-2 mb-8">
                        {category.services.slice(0, 4).map((service, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <div className="w-2 h-2 bg-qatari rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="font-medium leading-relaxed">{service}</span>
                          </li>
                        ))}
                        {category.services.length > 4 && (
                          <li className="text-qatari font-medium italic pl-5">
                            And {category.services.length - 4} more specialized services...
                          </li>
                        )}
                      </ul>

                      {/* CTA Button */}
                      <Link
                        to={category.href}
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-qatari text-white text-base font-semibold rounded-lg hover:bg-qatari-dark transition-all duration-200 group-hover:shadow-lg transform group-hover:-translate-y-1"
                      >
                        <span>Explore {category.title} Services</span>
                        <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive Service Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our Services Hub provides streamlined access to all Ministry services. Each category offers detailed procedures,
              requirements, and step-by-step guidance to help you complete your transactions efficiently.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-qatari/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText size={32} className="text-qatari" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Procedures</h3>
                <p className="text-gray-600">Step-by-step guidance for all services</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-qatari/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-qatari" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">Professional assistance when you need it</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-qatari/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight size={32} className="text-qatari" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Access</h3>
                <p className="text-gray-600">Fast navigation to the services you need</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
