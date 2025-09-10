import React from 'react';
import Layout from '@/components/Layout/Layout';
import PageHero from '@/components/ui/PageHero';
import { 
  TrendingUp, 
  Factory, 
  Handshake, 
  Map, 
  Smartphone,
  ExternalLink,
  Download,
  Globe,
  Building2,
  Users,
  FileText,
  BarChart3
} from 'lucide-react';

const Resources = () => {
  const resourceSections = [
    {
      id: 'invest-qatar',
      title: 'Invest Qatar',
      description: 'Comprehensive investment opportunities and incentives for international investors',
      icon: TrendingUp,
      color: 'bg-qatari',
      links: [
        {
          title: 'Investment Opportunities',
          description: 'Explore key sectors and investment opportunities in Qatar',
          url: 'https://www.investqatar.qa/opportunities',
          type: 'external'
        },
        {
          title: 'Investment Incentives',
          description: 'Tax benefits, grants, and other incentives for investors',
          url: 'https://www.investqatar.qa/incentives',
          type: 'external'
        },
        {
          title: 'Investor Guide',
          description: 'Complete guide for setting up business in Qatar',
          url: '/documents/investor-guide.pdf',
          type: 'download'
        },
        {
          title: 'Free Zones',
          description: 'Information about Qatar\'s free economic zones',
          url: 'https://www.investqatar.qa/free-zones',
          type: 'external'
        }
      ]
    },
    {
      id: 'industrial-portal',
      title: 'Industrial Portal',
      description: 'Gateway to Qatar\'s industrial development and manufacturing sector',
      icon: Factory,
      color: 'bg-qatari',
      links: [
        {
          title: 'Industrial Strategy',
          description: 'Qatar\'s national industrial development strategy',
          url: '/documents/industrial-strategy.pdf',
          type: 'download'
        },
        {
          title: 'Manufacturing Licenses',
          description: 'Apply for manufacturing and industrial licenses',
          url: 'https://www.moci.gov.qa/en/e-services/',
          type: 'external'
        },
        {
          title: 'Industrial Zones',
          description: 'Available industrial land and facilities',
          url: 'https://www.moci.gov.qa/en/our-services/investor/',
          type: 'external'
        },
        {
          title: 'Sector Reports',
          description: 'Industry analysis and sector-specific reports',
          url: '/media-centre/reports',
          type: 'internal'
        }
      ]
    },
    {
      id: 'ppp',
      title: 'Public-Private Partnership (PPP)',
      description: 'Collaborative opportunities between public and private sectors',
      icon: Handshake,
      color: 'bg-qatari',
      links: [
        {
          title: 'PPP Framework',
          description: 'Legal and regulatory framework for PPP projects',
          url: '/documents/ppp-framework.pdf',
          type: 'download'
        },
        {
          title: 'Current Projects',
          description: 'Ongoing and upcoming PPP opportunities',
          url: 'https://www.moci.gov.qa/en/our-services/investor/',
          type: 'external'
        },
        {
          title: 'Application Process',
          description: 'How to participate in PPP projects',
          url: '/documents/ppp-application-guide.pdf',
          type: 'download'
        },
        {
          title: 'Success Stories',
          description: 'Case studies of successful PPP implementations',
          url: '/about/success-stories',
          type: 'internal'
        }
      ]
    },
    {
      id: 'business-map',
      title: 'Business Map',
      description: 'Interactive mapping of business locations and commercial districts',
      icon: Map,
      color: 'bg-qatari',
      links: [
        {
          title: 'Interactive Business Map',
          description: 'Explore business locations across Qatar',
          url: 'https://maps.moci.gov.qa',
          type: 'external'
        },
        {
          title: 'Commercial Districts',
          description: 'Key commercial and business districts in Qatar',
          url: '/documents/commercial-districts.pdf',
          type: 'download'
        },
        {
          title: 'Location Services',
          description: 'Find optimal business locations',
          url: 'https://www.moci.gov.qa/en/our-services/investor/',
          type: 'external'
        },
        {
          title: 'Real Estate for Business',
          description: 'Commercial real estate opportunities',
          url: '/services/business',
          type: 'internal'
        }
      ]
    },
    {
      id: 'app-links',
      title: 'Mobile Applications',
      description: 'Download official MOCI mobile applications for convenient access to services',
      icon: Smartphone,
      color: 'bg-qatari',
      links: [
        {
          title: 'MOCI Services App',
          description: 'Access all MOCI services on your mobile device',
          url: 'https://apps.apple.com/qa/app/moci-services',
          type: 'app-store'
        },
        {
          title: 'Business Registration App',
          description: 'Register and manage your business on the go',
          url: 'https://play.google.com/store/apps/details?id=qa.gov.moci.business',
          type: 'google-play'
        },
        {
          title: 'Consumer Protection App',
          description: 'Report issues and access consumer services',
          url: 'https://apps.apple.com/qa/app/consumer-protection-qatar',
          type: 'app-store'
        },
        {
          title: 'Trade Portal App',
          description: 'International trade and export services',
          url: 'https://play.google.com/store/apps/details?id=qa.gov.moci.trade',
          type: 'google-play'
        }
      ]
    }
  ];

  const getIconForLinkType = (type: string) => {
    switch (type) {
      case 'external':
        return <ExternalLink size={16} />;
      case 'download':
        return <Download size={16} />;
      case 'app-store':
      case 'google-play':
        return <Smartphone size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  const getLinkClassName = (type: string) => {
    const baseClasses = "inline-flex items-center gap-2 text-qatari font-medium hover:text-qatari-dark transition-colors duration-200";
    return baseClasses;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/image3.jpg"
        title="Resources"
        subtitle="Access comprehensive resources, tools, and applications to support your business journey in Qatar"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Resources Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Essential Business Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover a comprehensive collection of resources designed to support investors, businesses, and entrepreneurs in Qatar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={section.id}
                  className="bg-white rounded-xl shadow-lg border-2 border-qatari/20 hover:border-qatari transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-white p-8 text-gray-900 relative border-b-2 border-qatari">
                    <div className="absolute top-4 right-4 opacity-10">
                      <IconComponent size={80} className="text-qatari" />
                    </div>
                    <div className="relative z-10">
                      <IconComponent size={40} className="mb-4 text-qatari" />
                      <h3 className="text-xl font-semibold mb-3 text-qatari">{section.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{section.description}</p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="p-8 space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border-l-4 border-qatari/30 pl-4 py-2">
                        <h4 className="font-semibold text-gray-900 mb-1">{link.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                        <a
                          href={link.url}
                          target={link.type === 'external' || link.type === 'app-store' || link.type === 'google-play' ? '_blank' : undefined}
                          rel={link.type === 'external' || link.type === 'app-store' || link.type === 'google-play' ? 'noopener noreferrer' : undefined}
                          className={getLinkClassName(link.type)}
                        >
                          <span>
                            {link.type === 'download' ? 'Download' : 
                             link.type === 'app-store' ? 'App Store' :
                             link.type === 'google-play' ? 'Google Play' : 'Visit'}
                          </span>
                          {getIconForLinkType(link.type)}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-gray-600">
              Direct links to frequently used resources and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="/e-services"
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-qatari hover:bg-qatari/5 transition-all duration-200 text-center"
            >
              <Globe size={32} className="mx-auto mb-3 text-qatari" />
              <h4 className="font-semibold text-gray-900 mb-2">E-Services</h4>
              <p className="text-sm text-gray-600">Online government services</p>
            </a>

            <a
              href="/services/business"
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-qatari hover:bg-qatari/5 transition-all duration-200 text-center"
            >
              <Building2 size={32} className="mx-auto mb-3 text-qatari" />
              <h4 className="font-semibold text-gray-900 mb-2">Business Services</h4>
              <p className="text-sm text-gray-600">Complete business solutions</p>
            </a>

            <a
              href="/about/national-committees"
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-qatari hover:bg-qatari/5 transition-all duration-200 text-center"
            >
              <Users size={32} className="mx-auto mb-3 text-qatari" />
              <h4 className="font-semibold text-gray-900 mb-2">Committees</h4>
              <p className="text-sm text-gray-600">National committees</p>
            </a>

            <a
              href="/media-centre/reports"
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-qatari hover:bg-qatari/5 transition-all duration-200 text-center"
            >
              <BarChart3 size={32} className="mx-auto mb-3 text-qatari" />
              <h4 className="font-semibold text-gray-900 mb-2">Reports</h4>
              <p className="text-sm text-gray-600">Economic data and analysis</p>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
