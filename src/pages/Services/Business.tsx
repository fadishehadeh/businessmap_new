import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageHero from '@/components/ui/PageHero';
import {
  Building2,
  FileText,
  Scale,
  Users,
  Briefcase,
  HelpCircle,
  UserCheck,
  ClipboardList,
  BookOpen,
  Shield,
  ChevronRight,
  ExternalLink,
  Menu,
  X,
  Globe,
  Download,
  Link,
  Factory,
  Crown,
  Handshake,
  UserPlus,
  Building,
  Landmark
} from 'lucide-react';

const Business = () => {
  const [activeSection, setActiveSection] = useState('delisting');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to services section when section changes
  useEffect(() => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  const businessSections = [
    {
      id: 'delisting',
      title: 'Procedures for delisting companies',
      icon: Building2,
      color: 'bg-qatari',
      description: 'Complete guide for company deletion and liquidation procedures'
    },
    {
      id: 'procedures',
      title: 'Procedures',
      icon: ClipboardList,
      color: 'bg-qatari',
      description: 'All procedures for local and foreign investors'
    },
    {
      id: 'obligations',
      title: 'Obligations',
      icon: FileText,
      color: 'bg-qatari',
      description: 'Legal obligations and compliance requirements'
    },
    {
      id: 'laws',
      title: 'Laws and Regulations',
      icon: Scale,
      color: 'bg-qatari',
      description: 'Legal framework and regulatory guidelines'
    },
    {
      id: 'forms',
      title: 'Forms',
      icon: FileText,
      color: 'bg-qatari',
      description: 'Official forms and documentation'
    },
    {
      id: 'company-types',
      title: 'Companies Type',
      icon: Building2,
      color: 'bg-qatari',
      description: 'Different types of business entities'
    },
    {
      id: 'faq',
      title: 'Commerce FAQ',
      icon: HelpCircle,
      color: 'bg-qatari',
      description: 'Frequently asked questions about commerce'
    },
    {
      id: 'consulting',
      title: 'Consulting Firms Platform',
      icon: Users,
      color: 'bg-qatari',
      description: 'Platform for consulting and clearance companies'
    },
    {
      id: 'vendor',
      title: 'Vendor Registration',
      icon: UserCheck,
      color: 'bg-qatari',
      description: 'Registration process for vendors'
    },
    {
      id: 'auditors',
      title: 'Auditors Lists',
      icon: Briefcase,
      color: 'bg-qatari',
      description: 'Approved auditors and accounting firms'
    },
    {
      id: 'manual',
      title: 'Procedures Manual',
      icon: BookOpen,
      color: 'bg-qatari',
      description: 'Comprehensive procedures manual'
    },
    {
      id: 'ip',
      title: 'Intellectual Property Rights',
      icon: Shield,
      color: 'bg-qatari',
      description: 'Intellectual property protection and rights'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/image2.jpg"
        title="Business Services"
        subtitle="Comprehensive services for businesses, investors, and commercial entities in Qatar"
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
                Business Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select a service category to access detailed information, procedures, and requirements
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
                    {businessSections.map((section) => {
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
                            <h4 className={`font-semibold text-sm leading-tight transition-colors ${
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
              {activeSection === 'delisting' && (
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <Building2 size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Procedures for delisting companies</h3>
                      <p className="text-gray-600">Complete guide for company deletion and liquidation procedures</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* FAQ Style Content */}
                    <div className="space-y-6">
                      <div className="border-l-4 border-qatari pl-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          What are the requirements to delete a commercial record?
                        </h4>
                        <p className="text-gray-700">
                          In case there isn't a commercial license or a facility registration of a company, deleting a company can be done through filling the deleting form, without any further requirements.
                        </p>
                      </div>

                      <div className="border-l-4 border-qatari pl-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          How to delete a commercial record?
                        </h4>
                        <div className="text-gray-700 space-y-2">
                          <p>• In case the record is active, deletion or liquidation form shall be submitted.</p>
                          <p>• If the record was expired for more than 90 days period, the register is deleted through application to the department and fulfilling the requirements.</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-qatari pl-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          What are the procedures to delete a company with a commercial license and facility registration?
                        </h4>
                        <p className="text-gray-700">
                          If the company is local, its deletion needs the stamp of Labor Department at the Ministry of Labour and Social Affairs. If there is a foreign partner, besides the stamp of the Ministry of Labour and Social Affairs, General Tax Authority's stamp is required as well.
                        </p>
                      </div>

                      <div className="border-l-4 border-qatari pl-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Is it possible to delete a pawned company?
                        </h4>
                        <p className="text-gray-700">
                          No, it is required to release the company first.
                        </p>
                      </div>

                      <div className="border-l-4 border-qatari pl-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Are there any fees on deletion procedures?
                        </h4>
                        <p className="text-gray-700">
                          No, there aren't any.
                        </p>
                      </div>

                      <div className="border-l-4 border-qatari pl-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Are home licenses holders obligated to pay taxes?
                        </h4>
                        <p className="text-gray-700">
                          According to the General Tax Authority, home licenses holders are not obligated to pay taxes, although they are required to register at "Dhareeba" portal and issue a tax card.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Procedures Section */}
              {activeSection === 'procedures' && (
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <ClipboardList size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Procedures</h3>
                      <p className="text-gray-600">All procedures for local and foreign investors</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-qatari/10 border border-qatari/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-qatari-dark mb-3">
                        Investment Procedures Portal
                      </h4>
                      <p className="text-qatari-dark mb-4">
                        To review all procedures related to the local and foreign investors, please visit the Procedures page in Qatar's Investment portal (Invest in Qatar). Qatar's investment portal provides all the necessary information for the local and foreign investor.
                      </p>
                      <div className="space-y-2 text-qatari-dark">
                        <p>• <strong>Procedure requirements</strong></p>
                        <p>• <strong>Procedure steps</strong></p>
                        <p>• <strong>E-service steps</strong> (if available)</p>
                        <p>• <strong>Location information</strong></p>
                        <p>• <strong>Cost details</strong></p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Local Investor Procedures</h4>
                        <p className="text-gray-700 mb-4">
                          Comprehensive procedures for Qatari nationals and local businesses.
                        </p>
                        <a
                          href="https://www.moci.gov.qa/en/our-services/investor/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-qatari font-medium hover:text-qatari-dark"
                        >
                          <span>Access Local Procedures</span>
                          <ExternalLink size={16} className="ml-2" />
                        </a>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Foreign Investor Procedures</h4>
                        <p className="text-gray-700 mb-4">
                          Detailed procedures for international investors and foreign businesses.
                        </p>
                        <a
                          href="https://www.moci.gov.qa/en/our-services/investor/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-qatari font-medium hover:text-qatari-dark"
                        >
                          <span>Access Foreign Procedures</span>
                          <ExternalLink size={16} className="ml-2" />
                        </a>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Additional Resources</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Shareholder Guide</strong> to the General Assembly of Qatari Shareholding Companies (Public and Private)</li>
                        <li>• <strong>MOCI Cloud Kitchen Guide</strong> for food service businesses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Obligations Section */}
              {activeSection === 'obligations' && (
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <FileText size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Obligations</h3>
                      <p className="text-gray-600">Legal obligations and compliance requirements for businesses</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-qatari/10 border border-qatari/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-qatari-dark mb-3">
                        Important Notice for Investors
                      </h4>
                      <p className="text-qatari-dark">
                        Here follows a set of obligations that you must comply with when working and doing business in Qatar:
                      </p>
                    </div>

                    <div className="space-y-4">
                      {[
                        "Make sure to display the commercial register and license in a prominent place at the licensed site to avoid committing a legal violation.",
                        "It is necessary to place the license number on your shop's sign to avoid committing any violations or being subject to penalties.",
                        "It is prohibited to house workers on the shop's premises. If you are providing workers with housing within the shop, you must remove them immediately to avoid any penalties.",
                        "To avoid legal liability, make sure to renew the commercial register and licenses 30 days before their expiry.",
                        "Make sure to update information relating to the commercial register and commercial licenses in case of any changes.",
                        "Make sure to obtain the necessary approvals from concerned parties before signing the lease contract for service activities in a residential area.",
                        "When choosing a service activity in a residential area, make sure to comply with the urban planning and organizational standards by visiting the branches of the ministry in the area.",
                        "It is your duty as a merchant to provide detailed invoices to consumers. The invoice must be in Arabic in addition to any another language.",
                        "Check the name of commercial activities before applying for a commercial register through the ministry's mobile application or by visiting the ministry's nearest branch.",
                        "It is prohibited to conduct any commercial activity other than the activities permitted in the register and commercial license.",
                        "If you wish to offer promotions or discounts, you must first obtain a license from the Market Control and Licensing Department at the consumer sector. You can seek the approval through the electronic services of the Ministry: services.moci.gov.qa",
                        "Please obtain preliminary approval from the Commercial Licenses department before signing the lease contract for the site to be licensed."
                      ].map((obligation, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-white border border-gray-200 rounded-lg">
                          <div className="w-6 h-6 bg-qatari rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          </div>
                          <p className="text-gray-700">{obligation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Laws and Regulations Section */}
              {activeSection === 'laws' && (
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <Scale size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Laws and Regulations</h3>
                      <p className="text-gray-600">Legal framework and regulatory guidelines for businesses</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-qatari/10 border border-qatari/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-qatari-dark mb-3">
                        Law No. 13 of 2000 and its amendments
                      </h4>
                      <p className="text-qatari-dark mb-4">
                        Qatar's investment law regulating the investment of non-Qatari capital in economic activities
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Investment of non-Qatari capital</h4>
                        <div className="space-y-3 text-gray-700">
                          <p><strong>Article (2) 2.1:</strong> Subject to the provisions of clause (3) of this Article, foreign investors may invest in all sectors of the national economy provided that they have one or more Qatari partners whose contribution is no less than 51% of the capital and that the company has been appropriately established according to Provisions of the law.</p>

                          <p><strong>2-2:</strong> Based a decision by the minister, non-Qatari investors may exceed the proportion of their contribution of the 49% up to 100% of project capital, in the fields of agriculture, industry, health, education, tourism, development, exploitation of natural resources, energy, mining and business consultancy, technical, information technology, cultural, sports, entertainment and distribution services.</p>

                          <p><strong>2-3:</strong> Non-Qatari investors are prohibited from investing in the following areas:</p>
                          <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Banks and insurance companies, except those exempted by a decision by the Council of Ministers.</li>
                            <li>Commercial and real estate agencies.</li>
                          </ul>

                          <p><strong>2.4:</strong> Non-Qatari investors may hold a percentage not exceeding (49%) of the share capital of Qatari shareholding companies listed on the Qatar Stock Exchange after the Ministry approves the proposed percentage in the Company's Memorandum of Association and Articles of Association. Non-Qatari investors may also exceed this percentage after the approval of the Council of Ministers upon the proposal of the Minister. Gulf Cooperation Council (GCC) citizens will be treated as Qataris in regard to owning company shares listed on the Qatar Exchange.</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Additional Resources</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <strong>Business Activities Guide</strong> for non-Qatari Investment</li>
                          <li>• Complete Law No. 13 of 2000 and its amendments (downloadable)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Company Types Section */}
              {activeSection === 'company-types' && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <Building2 size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Companies Type</h3>
                      <p className="text-gray-600">Different types of business entities available in Qatar</p>
                    </div>
                  </div>

                  {/* Sub-pages Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 mx-auto">
                          <Handshake size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3 text-center">
                          General Partnership Company
                        </h4>
                        <p className="text-gray-600 text-sm text-center">
                          A general partnership company is a company formed between two persons or more, in which the partners assume joint responsibility to the extent of all their funds for the partnership's obligations.
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 mx-auto">
                          <UserPlus size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3 text-center">
                          Simple Partnership Company
                        </h4>
                        <p className="text-gray-600 text-sm text-center">
                          A simple partnership company consists of two categories of partners: Jointly and severally liable partners who run the company, and Sleeping or silent partners who have invested capital but are not liable beyond their shares.
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 mx-auto">
                          <UserCheck size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3 text-center">
                          Sole Proprietorship Company
                        </h4>
                        <p className="text-gray-600 text-sm text-center">
                          A sole proprietorship company means every economic activity the capital of which is fully owned by one natural person or corporate entity.
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 mx-auto">
                          <Building size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3 text-center">
                          Shareholding Company
                        </h4>
                        <p className="text-gray-600 text-sm text-center">
                          A shareholding company is a company whose capital is divided into tradable shares that are equal in value. Shareholders shall not be liable for the company's debts except to the extent of the value of their shares.
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 mx-auto">
                          <Crown size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3 text-center">
                          Private Shareholding Company
                        </h4>
                        <p className="text-gray-600 text-sm text-center">
                          A number of founding shareholders, not less than five persons, may establish a private shareholding company. The private shareholding company shall not be publicly listed. Capital shall not be less than two million Qatari Riyals.
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 mx-auto">
                          <Building2 size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3 text-center">
                          Limited Liability Company
                        </h4>
                        <p className="text-gray-600 text-sm text-center">
                          A limited liability company is a company the partners of which are not more than fifty (50) and not less than two partners. Partners are responsible only to the extent of their shareholding in the capital.
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 mx-auto">
                          <Landmark size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3 text-center">
                          Holding Company
                        </h4>
                        <p className="text-gray-600 text-sm text-center">
                          A holding company is a shareholding, limited liability or sole proprietorship company that financially and managerially controls another one or more companies.
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 mx-auto">
                          <Globe size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3 text-center">
                          Foreign Companies – exempted by ministerial order
                        </h4>
                        <p className="text-gray-600 text-sm text-center">
                          Companies involved in contracts at the state and licensed by a ministerial order. Non-Qatari stake may exceed 49% of the company capital for state contracts.
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gray-100 border-2 border-qatari rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-qatari/5">
                      <div className="flex flex-col">
                        <div className="w-16 h-16 bg-qatari rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 mx-auto">
                          <Briefcase size={32} className="text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-qatari mb-3 text-center">
                          Audit Firms/Bureaus
                        </h4>
                        <p className="text-gray-600 text-sm text-center">
                          Audit firms/bureaus practice the profession of auditing and reviewing companies' accounts. This is the profession of legal accountant governed by Law No. (30) of 2004.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Commerce FAQ Section */}
              {activeSection === 'faq' && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <HelpCircle size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Commerce FAQ</h3>
                      <p className="text-gray-600">Questions relating to commercial records</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        question: "Can I sell a branch of my trade register?",
                        answer: "A commercial registry branch may be sold under a documented sale contract"
                      },
                      {
                        question: "How can I close my commercial register?",
                        answer: "Companies can be closed after liquidation is completed, but establishments can be written off without liquidation"
                      },
                      {
                        question: "Can I add partners to my Commercial Register? How?",
                        answer: "Yes, partners could be added to the Commercial Register, and this could be done through a documented sale contract, in addition to the authority's approval in case the activity requires that."
                      },
                      {
                        question: "Who is authorized to sign?",
                        answer: "The authorized signatory is the person who is officially authorized by partners to sign the company's commercial register. It is not necessary for the authorized signatory to be a partner in the Commercial Register, and he might be a director of the company."
                      },
                      {
                        question: "How can I add or delete an authorized signatory? What are the required documents?",
                        answer: "In case of the addition or cancellation of an authorized signatory, the consent of the partners is required, and the request should be noted in the register by an authorized signatory. In the case of a one-person company or establishment, the change in the register is requested by an authorized person. In the case of joint stock companies, a letter from the Chairman of the Board of Directors or the Deputy Chairman of the Board of Directors and the approval of the Companies Control Department is required."
                      },
                      {
                        question: "Is it possible to add a partner to a branch other than the partners listed in the main register?",
                        answer: "It is not possible to add a partner to a branch that is related to the main branch, if the partners in the main branch own it."
                      },
                      {
                        question: "What are the required documents in case of transferring the ownership of a commercial register to the heirs of a deceased person?",
                        answer: "In case of requesting a change in the commercial register by adding heirs, then a death certificate is required, in addition to a settlement of succession, and a sale contract or judiciary decision noting the allocation of shares among heirs. A request to amend the articles of association is also required."
                      },
                      {
                        question: "How can a partner or owner in a commercial register be changed? What are the required documents?",
                        answer: "A letter signed by the partners in the case of more than one partner, in addition to the sales contract, the form, and the external approvals if required. In case of an establishment or a single-person establishment, then the sales contract is required, in addition to a letter from the owner, photocopies of the cards and external approvals if required."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="border-l-4 border-qatari pl-6 py-4 bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {faq.question}
                        </h4>
                        <p className="text-gray-700">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Consulting Firms Platform Section */}
              {activeSection === 'consulting' && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <Users size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Consulting Firms and Clearance Companies Platform</h3>
                      <p className="text-gray-600">Platform for consulting and clearance companies</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-qatari/10 border border-qatari/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-qatari-dark mb-3">
                        Platform Overview
                      </h4>
                      <p className="text-qatari-dark mb-4">
                        The Ministry of Commerce and Industry has launched the Consulting Firms and Clearance Companies Platform as part of its efforts to provide consulting and transaction clearance services for local and non-Qatari investors.
                      </p>
                      <p className="text-qatari-dark">
                        The ministry aims, through this platform, to deliver proactive services that meet investors' needs, while continuously enhancing and developing these services to align with current and future investor requirements.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-6">
                        <Users size={32} className="text-qatari mb-4" />
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">List of Approved Consulting and Clearance Companies</h4>
                        <p className="text-gray-700 mb-4">
                          Access the complete directory of approved consulting firms and clearance companies.
                        </p>
                        <a
                          href="https://www.moci.gov.qa/en/our-services/investor/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-qatari font-medium hover:text-qatari-dark"
                        >
                          <span>View List</span>
                          <ExternalLink size={16} className="ml-2" />
                        </a>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-6">
                        <FileText size={32} className="text-qatari mb-4" />
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements for Registration</h4>
                        <p className="text-gray-700 mb-4">
                          Requirements for Declaring and Registering Consulting Firms and Clearance Companies with the Ministry of Commerce and Industry.
                        </p>
                        <a
                          href="https://www.moci.gov.qa/en/our-services/investor/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-qatari font-medium hover:text-qatari-dark"
                        >
                          <span>View Requirements</span>
                          <ExternalLink size={16} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Vendor Registration Section */}
              {activeSection === 'vendor' && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <UserCheck size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Vendor Registration</h3>
                      <p className="text-gray-600">Registration process for vendors</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-qatari/10 border border-qatari/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-qatari-dark mb-3">
                        Vendor Registration Information
                      </h4>
                      <p className="text-qatari-dark mb-4">
                        Dear visitor, Please be informed that to qualify as a regular vendor/supplier with the Procurement section, Ministry of Commerce and Industry you should register by filling in the specified Vendor/Supplier Registration Form.
                      </p>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h5 className="font-semibold text-yellow-800 mb-2">Notice:</h5>
                        <p className="text-yellow-700">
                          The purpose of this form is not for providing a Certificate of Commercial Registration, it is for registering the vendor/supplier in MOCI Procurement section and the data records won't be used for any other purpose or entity.
                        </p>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Local Vendor Registration</h4>
                      <p className="text-gray-700 mb-4">Please fill the form below with proper information:</p>

                      <div className="space-y-4 text-gray-700">
                        <p><strong>Required Information:</strong></p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Contact method by Procurement Section</li>
                          <li>Company Name*</li>
                          <li>Country*</li>
                          <li>Area Code* (Qatar +974)</li>
                          <li>Phone Number*</li>
                          <li>Email*</li>
                          <li>City*</li>
                        </ul>
                      </div>

                      <div className="mt-6">
                        <a
                          href="https://www.moci.gov.qa/en/our-services/investor/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-qatari text-white font-semibold rounded-lg hover:bg-qatari-dark transition-colors duration-200"
                        >
                          <span>Access Registration Form</span>
                          <ExternalLink size={16} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Auditors Lists Section */}
              {activeSection === 'auditors' && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <Briefcase size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Auditors Lists</h3>
                      <p className="text-gray-600">Approved auditors and accounting firms</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <Briefcase size={32} className="text-qatari mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Auditor Services Guide</h4>
                      <p className="text-gray-700 mb-4">
                        Comprehensive guide for auditor services and requirements.
                      </p>
                      <a
                        href="https://www.moci.gov.qa/en/our-services/investor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-qatari font-medium hover:text-qatari-dark"
                      >
                        <span>View Guide</span>
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <BookOpen size={32} className="text-qatari mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Auditing Profession Guide</h4>
                      <p className="text-gray-700 mb-4">
                        Professional guidelines for auditing practices and standards.
                      </p>
                      <a
                        href="https://www.moci.gov.qa/en/our-services/investor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-qatari font-medium hover:text-qatari-dark"
                      >
                        <span>View Guide</span>
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Procedures Manual Section */}
              {activeSection === 'manual' && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <BookOpen size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Procedures Manual of Ministry</h3>
                      <p className="text-gray-600">Comprehensive procedures manual</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <Download size={32} className="text-qatari mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Ministry Procedures Manual – Arabic</h4>
                      <p className="text-gray-700 mb-4">
                        Complete procedures manual in Arabic language.
                      </p>
                      <a
                        href="https://www.moci.gov.qa/en/our-services/investor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-qatari font-medium hover:text-qatari-dark"
                      >
                        <span>Download Arabic Manual</span>
                        <Download size={16} className="ml-2" />
                      </a>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <Download size={32} className="text-qatari mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Ministry Procedures Manual – English</h4>
                      <p className="text-gray-700 mb-4">
                        Complete procedures manual in English language.
                      </p>
                      <a
                        href="https://www.moci.gov.qa/en/our-services/investor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-qatari font-medium hover:text-qatari-dark"
                      >
                        <span>Download English Manual</span>
                        <Download size={16} className="ml-2" />
                      </a>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <Shield size={32} className="text-qatari mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Anti-Money Laundering Compliance Guidance</h4>
                      <p className="text-gray-700 mb-4">
                        Anti-Money Laundering/Combating the Financing of Terrorism Compliance Guidance for Commercial Companies.
                      </p>
                      <a
                        href="https://www.moci.gov.qa/en/our-services/investor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-qatari font-medium hover:text-qatari-dark"
                      >
                        <span>View Guidance</span>
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Intellectual Property Rights Section */}
              {activeSection === 'ip' && (
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center mr-4">
                      <Shield size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Intellectual Property Rights</h3>
                      <p className="text-gray-600">Intellectual property protection and rights</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <Shield size={32} className="text-qatari mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Protect your trademark in Qatar</h4>
                      <p className="text-gray-700 mb-4">
                        Guidelines and procedures for trademark protection in Qatar.
                      </p>
                      <a
                        href="https://www.moci.gov.qa/en/our-services/investor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-qatari font-medium hover:text-qatari-dark"
                      >
                        <span>Learn More</span>
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <Globe size={32} className="text-qatari mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Protect your trademark overseas using the Madrid System</h4>
                      <p className="text-gray-700 mb-4">
                        International trademark protection through the Madrid System.
                      </p>
                      <a
                        href="https://www.moci.gov.qa/en/our-services/investor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-qatari font-medium hover:text-qatari-dark"
                      >
                        <span>Learn More</span>
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <Link size={32} className="text-qatari mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Global Brand Database</h4>
                      <p className="text-gray-700 mb-4">
                        Access the global brand database for trademark searches.
                      </p>
                      <a
                        href="https://www.moci.gov.qa/en/our-services/investor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-qatari font-medium hover:text-qatari-dark"
                      >
                        <span>Access Database</span>
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Placeholder for remaining sections */}
              {!['delisting', 'procedures', 'obligations', 'laws', 'company-types', 'faq', 'consulting', 'vendor', 'auditors', 'manual', 'ip'].includes(activeSection) && (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {businessSections.find(s => s.id === activeSection)?.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Content for this section will be added soon. Please check back later or contact our support team for assistance.
                  </p>
                  <a
                    href="https://www.moci.gov.qa/en/our-services/investor/"
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

export default Business;
