import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, Target, TrendingUp, Users, Globe } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

const Strategy = () => {
  const strategicPillars = [
    {
      icon: Target,
      title: "Business Development",
      description: "Enhancing the business environment and supporting entrepreneurship",
      image: "/images/image4.jpg",
      imageAlt: "Business innovation hub representing business development and entrepreneurship support"
    },
    {
      icon: TrendingUp,
      title: "Investment Attraction",
      description: "Creating attractive opportunities for local and international investors",
      image: "/images/image1.jpg",
      imageAlt: "Qatar Financial Centre showcasing investment attraction and economic growth"
    },
    {
      icon: Users,
      title: "Consumer Protection",
      description: "Safeguarding consumer rights and ensuring market fairness",
      image: "/images/image5.png",
      imageAlt: "Traditional market representing consumer protection and fair trade practices"
    },
    {
      icon: Globe,
      title: "Industrial Development",
      description: "Promoting national industries and industrial zone development",
      image: "/images/image3.jpg",
      imageAlt: "Doha port facilities representing industrial development and infrastructure"
    }
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container-wide">
          <Button asChild variant="ghost" className="text-qatari hover:text-qatari-dark">
            <Link to="/about" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to About
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/image2.jpg"
        title="The Strategy of the Ministry"
        subtitle="Ministry of Commerce and Industry Strategy 2024-2030"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Strategy Overview */}
      <section className="py-16">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Strategic Vision for the Future
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The Ministry of Commerce and Industry Strategy 2024-2030 outlines our comprehensive roadmap for transforming Qatar's commercial and industrial landscape. This strategic framework guides our efforts to create a competitive, innovative, and sustainable business environment that supports national development goals.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-qatari/5 rounded-lg">
                    <div className="text-2xl font-bold text-qatari mb-2">6</div>
                    <div className="text-sm text-gray-600">Years Strategy</div>
                  </div>
                  <div className="text-center p-4 bg-qatari/5 rounded-lg">
                    <div className="text-2xl font-bold text-qatari mb-2">4</div>
                    <div className="text-sm text-gray-600">Strategic Pillars</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/image6.png"
                  alt="Ministry headquarters representing strategic planning and governance"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-qatari/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Download Strategy Document */}
            <Card className="border-2 border-qatari/20 bg-gradient-to-r from-qatari/5 to-qatari/10 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/image7.png"
                  alt="Qatar's strategic development and economic planning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-qatari/80 to-qatari/40"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <FileText className="w-8 h-8 text-qatari" />
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Download Our Complete Strategy
                  </h3>
                  <p className="text-gray-700 mb-6 max-w-2xl">
                    Access the full Ministry of Commerce and Industry Strategy 2024-2030 document to learn about our detailed plans, objectives, and implementation roadmap.
                  </p>
                  <Button asChild size="lg" className="bg-qatari hover:bg-qatari-dark text-white border-2 border-qatari hover:border-qatari-dark">
                    <a
                      href="/images/strategy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download Strategy PDF
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            {/* Pillars Header with Background Image */}
            <div className="relative mb-16 rounded-2xl overflow-hidden">
              <div
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: "url('/images/hero.jpg')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-qatari/90 to-qatari/60"></div>
                <div className="relative z-10 h-full flex items-center justify-center text-center">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-4 hero-text-shadow">
                      Strategic Pillars
                    </h2>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto hero-text-shadow">
                      Four foundational pillars that drive Qatar's commercial and industrial transformation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategicPillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <Card key={index} className="border-2 border-gray-200 hover:border-qatari transition-all duration-300 group hover:shadow-lg overflow-hidden">
                    {/* Pillar Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <IconComponent className="w-6 h-6 text-qatari" />
                        </div>
                        <h3 className="text-xl font-bold text-white hero-text-shadow">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        {pillar.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Timeline */}
      <section className="py-16">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Implementation Timeline
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="border-2 border-qatari/20 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/image2.jpg"
                    alt="International trade conference representing strategic implementation and global partnerships"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-qatari/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/90 rounded-full backdrop-blur-sm">
                      <span className="text-lg font-bold text-qatari">2024-2030</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Six-Year Strategic Implementation
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our comprehensive strategy spans six years, with detailed milestones and measurable outcomes designed to transform Qatar's commercial and industrial sectors.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-qatari/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-qatari font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Phase 1: Foundation (2024-2025)</h4>
                    <p className="text-gray-700">Establishing frameworks and initial implementation of key strategic initiatives.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-qatari/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-qatari font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Phase 2: Expansion (2026-2027)</h4>
                    <p className="text-gray-700">Scaling successful programs and expanding reach across all sectors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-qatari/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-qatari font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Phase 3: Optimization (2028-2030)</h4>
                    <p className="text-gray-700">Refining processes and achieving full strategic objectives for sustainable growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Strategy;
