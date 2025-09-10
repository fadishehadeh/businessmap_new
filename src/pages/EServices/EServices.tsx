import React from 'react';
import Layout from '@/components/Layout/Layout';
import PageHero from '@/components/ui/PageHero';
import { 
  Globe, 
  Building2, 
  ShoppingCart, 
  Factory, 
  Shield, 
  AlertTriangle,
  FileText,
  Users,
  TrendingUp,
  ExternalLink,
  LogIn,
  Search,
  DollarSign,
  MessageSquare
} from 'lucide-react';

const EServices = () => {
  const eServices = [
    {
      title: "Single Window Services",
      description: "Complete business establishment and renewal processes digitally through one integrated platform.",
      features: [
        "Comprehensive Establishment",
        "Comprehensive Renewal (up to 5 years for CR or CP or both of them)"
      ],
      icon: Globe,
      buttonText: "Sign In",
      buttonLink: "https://www.moci.gov.qa/en/e-services/",
      color: "bg-blue-500"
    },
    {
      title: "Investor Services",
      description: "Get instant approvals for commercial activities without visiting multiple departments.",
      icon: Building2,
      buttonText: "Sign In",
      buttonLink: "https://www.moci.gov.qa/en/e-services/",
      color: "bg-green-500"
    },
    {
      title: "Supply Services",
      description: "Manage ration cards, check distributor locations, and track supply quotas online.",
      icon: ShoppingCart,
      buttonText: "Sign In",
      buttonLink: "https://www.moci.gov.qa/en/e-services/",
      color: "bg-orange-500"
    },
    {
      title: "Industrial Services Platform",
      description: "Complete all industrial project transactions through one smart platform.",
      icon: Factory,
      buttonText: "Sign In",
      buttonLink: "https://www.moci.gov.qa/en/e-services/",
      color: "bg-purple-500"
    },
    {
      title: "Economic Concentration Approval",
      description: "Report economic concentration processes online without visiting offices.",
      subtitle: "(mergers, acquisitions, and analogous processes)",
      icon: TrendingUp,
      buttonText: "Apply",
      buttonLink: "https://www.moci.gov.qa/en/e-services/",
      color: "bg-indigo-500"
    },
    {
      title: "Report Anti-competitive Practices",
      description: "Report suspicious anti-competitive practices through a secure channel.",
      subtitle: "A secret channel to report suspicion of anti-competitive practices",
      icon: Shield,
      buttonText: "Apply",
      buttonLink: "https://www.moci.gov.qa/en/e-services/",
      color: "bg-red-500"
    },
    {
      title: "Trade Development and Investment Promotion",
      description: "Obtain export certificates for small businesses and workshops to export products easily.",
      icon: TrendingUp,
      buttonText: "Apply",
      buttonLink: "https://www.moci.gov.qa/en/e-services/",
      color: "bg-teal-500"
    },
    {
      title: "Investment Opportunities",
      description: "Access investment opportunities from major foreign and local companies in Qatar.",
      icon: DollarSign,
      buttonText: "Apply",
      buttonLink: "https://www.moci.gov.qa/en/e-services/",
      color: "bg-yellow-500"
    },
    {
      title: "Product Recalls",
      description: "View all product recalls recorded by the Consumer Protection Department.",
      icon: AlertTriangle,
      buttonText: "View Recalls",
      buttonLink: "https://www.moci.gov.qa/en/e-services/",
      color: "bg-red-600"
    },
    {
      title: "Price Evaluation and Follow-up System",
      description: "Register and manage price lists for services in commercial establishments.",
      features: [
        "Registration of services price list",
        "Adding new items or deleting registered items from the service price list",
        "Increasing or decreasing the prices of items registered in the service price list"
      ],
      icon: DollarSign,
      buttonText: "Login",
      buttonLink: "https://www.moci.gov.qa/en/e-services/",
      color: "bg-green-600"
    },
    {
      title: "Report a Complaint",
      description: "Report complaints about products, services, pricing, or misleading advertising.",
      icon: MessageSquare,
      buttonText: "Apply",
      buttonLink: "https://www.moci.gov.qa/en/e-services/",
      color: "bg-blue-600"
    },
    {
      title: "Monopolistic Practices Report",
      description: "Download forms to report violations of competition protection laws.",
      icon: Shield,
      buttonText: "Apply",
      buttonLink: "https://www.moci.gov.qa/en/e-services/",
      color: "bg-gray-600"
    },
    {
      title: "The Unified Economic Register",
      description: "Access comprehensive business registration and management services.",
      icon: FileText,
      buttonText: "Login",
      buttonLink: "https://www.moci.gov.qa/en/e-services/",
      color: "bg-qatari"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/image6.png"
        title="E-Services"
        subtitle="Digital services and online platforms provided by the Ministry of Commerce and Industry"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* E-Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Digital Services Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access comprehensive online services for businesses, investors, consumers, and industry stakeholders. 
                Complete your transactions digitally with our integrated e-services platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border-2 border-qatari rounded-xl p-6 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                  >
                    {/* Icon */}
                    <div className="flex justify-start mb-4">
                      <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <IconComponent size={32} className="text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow text-left">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>

                      {service.subtitle && (
                        <p className="text-qatari font-medium mb-3">
                          {service.subtitle}
                        </p>
                      )}

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {service.features && (
                        <ul className="text-gray-600 mb-4 space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-qatari mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto pt-4">
                      <a
                        href={service.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-qatari text-white font-semibold rounded-lg hover:bg-qatari-dark transition-colors duration-200 group-hover:shadow-lg"
                      >
                        <span>{service.buttonText}</span>
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EServices;
