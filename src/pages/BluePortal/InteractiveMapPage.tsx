import React from 'react';
import { Link } from 'react-router-dom';
import BluePortalLayout from '@/components/Layout/BluePortalLayout';
import { Card, CardContent } from '@/components/ui/card';
import {
  Map,
  XCircle,
  Sparkles,
  Target,
  BarChart3,
  Globe
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const InteractiveMapPage = () => {
  const { t, dir } = useLanguage();

  const modules = [
    {
      title: t('service.exploreTypes.title'),
      description: t('service.exploreTypes.desc'),
      icon: Map,
      link: '/blue-portal/business-types',
      available: true
    },
    {
      title: t('service.monitorClosures.title'),
      description: t('service.monitorClosures.desc'),
      icon: XCircle,
      link: '/blue-portal/monitor-closures',
      available: true
    },
    {
      title: t('service.discoverNew.title'),
      description: t('service.discoverNew.desc'),
      icon: Sparkles,
      link: '#',
      available: false
    },
    {
      title: t('interactive.strategicGap.title'),
      description: t('interactive.strategicGap.desc'),
      icon: Target,
      link: '#',
      available: false
    },
    {
      title: t('interactive.distribution.title'),
      description: t('interactive.distribution.desc'),
      icon: BarChart3,
      link: '#',
      available: false
    },
    {
      title: t('interactive.foreignInvestment.title'),
      description: t('interactive.foreignInvestment.desc'),
      icon: Globe,
      link: '#',
      available: false
    },
  ];

  return (
    <BluePortalLayout showFooter={false}>
      {/* Full screen background */}
      <div className="min-h-screen bg-gradient-to-br from-[#19407F] via-[#2557A7] to-[#19407F] py-16" dir={dir}>
        {/* Stylized pattern background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Center overlay panel */}
        <div className="relative z-10 container-wide mx-auto px-6">
          <div className="w-full max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16 animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t('interactive.title')}
              </h1>
              <p className="text-xl text-white/90">
                {t('interactive.subtitle')}
              </p>
            </div>

            {/* Module cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {module.available ? (
                    <Link to={module.link}>
                      <Card className="h-full min-h-[280px] bg-white border-2 border-white/50 hover:border-[#FDC300] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                        <CardContent className="p-8 space-y-5 flex flex-col h-full">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#19407F] to-[#2557A7] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                            <module.icon className="w-8 h-8 text-[#FDC300]" />
                          </div>
                          <h3 className="text-xl font-bold text-[#19407F] group-hover:text-[#2557A7] transition-colors">
                            {module.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                            {module.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ) : (
                    <Card className="h-full min-h-[280px] bg-white/80 border-2 border-gray-200 cursor-not-allowed opacity-60">
                      <CardContent className="p-8 space-y-5 flex flex-col h-full">
                        <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center">
                          <module.icon className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-400">
                          {module.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                          {module.description}
                        </p>
                        <div className="pt-2">
                          <span className="inline-block px-3 py-1 bg-gray-200 text-gray-500 text-xs rounded-full">
                            {t('interactive.comingSoon')}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BluePortalLayout>
  );
};

export default InteractiveMapPage;

