import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BluePortalLayout from '@/components/Layout/BluePortalLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building2,
  Calendar,
  TrendingUp,
  Activity,
  Grid3x3,
  MapPin,
  XCircle,
  Sparkles,
  BarChart3,
  TrendingDown
} from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  // Animated counter state
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const kpiData = [
    { label: 'Total Establishment Count', value: 15243, icon: Building2 },
    { label: 'Last Year Establishment Count', value: 12890, icon: Calendar },
    { label: 'Last 6 Months', value: 8456, icon: TrendingUp },
    { label: 'Last 3 Months', value: 4321, icon: Activity },
  ];

  // Animate counters on mount
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters(kpiData.map(kpi => Math.floor(kpi.value * progress)));

      if (currentStep >= steps) {
        setCounters(kpiData.map(kpi => kpi.value));
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: 'Explore Business Types',
      description: 'All registered businesses by regions across the Agro, license status and categories.',
      icon: Grid3x3,
      link: '/blue-portal/business-types'
    },
    {
      title: 'Check Location Readiness',
      description: 'Map shows location suitability for business. On hovering the map, users can view the location and accessibility.',
      icon: MapPin,
      link: '/blue-portal/interactive-map'
    },
    {
      title: 'Monitor Business Closures',
      description: 'Track business closures by regions and date range with interactive map visualizations.',
      icon: XCircle,
      link: '/blue-portal/monitor-closures'
    },
    {
      title: 'Discover New Businesses',
      description: 'Find recently registered businesses by location, date range, and categories.',
      icon: Sparkles,
      link: '/blue-portal/interactive-map'
    },
  ];

  const reports = [
    {
      title: 'Business Overview',
      description: 'High-level view of all business by business, by business type, by license status, by ownership, by municipalities.',
      icon: BarChart3
    },
    {
      title: 'Demographic Reports',
      description: 'Demographic data of all businesses. The reports, by business type, by license status, by ownership, by municipalities.',
      icon: TrendingDown
    },
  ];

  return (
    <BluePortalLayout showFooter={true}>
      {/* Hero Section */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-[#19407F] via-[#2557A7] to-[#19407F] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80)',
          }}
        ></div>

        <div className="container-wide mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                ignite your<br />
                <span className="text-[#FDC300]">business</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Make smarter decisions about your project. Our interactive map, reports,<br />
                and insights.
              </p>
              <Button
                size="lg"
                onClick={() => navigate('/blue-portal/interactive-map')}
                className="bg-[#FDC300] hover:bg-[#FDC300]/90 text-[#19407F] font-semibold px-8 py-3 text-base rounded-md shadow-xl"
              >
                Get Started →
              </Button>
            </div>

            <div className="animate-slide-up hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-2xl border border-white/20">
                <div className="bg-white rounded-md overflow-hidden aspect-video flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                    alt="Dashboard Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="bg-gray-50 py-12">
        <div className="container-wide mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiData.map((kpi, index) => {
              const IconComponent = kpi.icon;
              return (
                <Card
                  key={index}
                  className="bg-white border-2 border-[#19407F]/20 hover:border-[#19407F] hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#19407F] to-[#2557A7] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-[#FDC300]" />
                      </div>

                      {/* Animated Counter */}
                      <div className="text-4xl font-bold text-[#19407F] tabular-nums">
                        {counters[index].toLocaleString()}
                      </div>

                      {/* Label */}
                      <div className="text-sm text-gray-600 font-medium">{kpi.label}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-white py-16">
        <div className="container-wide mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#19407F] mb-2">Our Services</h2>
            <p className="text-gray-600">Explore our comprehensive business solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  onClick={() => navigate(service.link)}
                  className="bg-gradient-to-br from-[#19407F] to-[#2557A7] border-none text-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group h-full"
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6">
                      <Icon className="w-12 h-12 text-[#FDC300] group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-sm text-white/90 leading-relaxed flex-grow">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Reports */}
      <section className="bg-gray-50 py-16 pb-24">
        <div className="container-wide mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#19407F] mb-2">Our Reports</h2>
            <p className="text-gray-600">Comprehensive business intelligence and analytics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reports.map((report, index) => {
              const Icon = report.icon;
              return (
                <Card
                  key={index}
                  className="bg-white border-2 border-gray-200 hover:border-[#19407F] hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <Icon className="w-10 h-10 text-[#19407F] mb-4" />
                        <h3 className="text-2xl font-bold mb-3 text-[#19407F]">{report.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{report.description}</p>
                      </div>
                    </div>

                    {/* Placeholder Chart Visual */}
                    <div className="mt-6 h-48 bg-gradient-to-br from-[#19407F]/10 to-[#FDC300]/10 rounded-lg flex items-center justify-center border border-gray-200">
                      <div className="text-gray-400 text-sm">Chart Visualization</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </BluePortalLayout>
  );
};

export default HomePage;

