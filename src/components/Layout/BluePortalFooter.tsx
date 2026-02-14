import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const BluePortalFooter = () => {
  const { t, dir } = useLanguage();

  const footerSections = [
    {
      title: t('footer.about'),
      links: [
        { label: t('footer.ourStory'), href: '#' },
        { label: t('footer.missionVision'), href: '#' },
      ]
    },
    {
      title: t('footer.sectors'),
      links: [
        { label: t('footer.healthcare'), href: '#' },
        { label: t('footer.finance'), href: '#' },
        { label: t('footer.education'), href: '#' },
        { label: t('footer.logistics'), href: '#' },
      ]
    },
    {
      title: t('footer.insights'),
      links: [
        { label: t('footer.reports'), href: '/reports' },
      ]
    },
    {
      title: t('footer.discoverMore'),
      links: [
        { label: t('footer.caseStudies'), href: '#' },
        { label: t('footer.contactUs'), href: '#' },
        { label: t('footer.terms'), href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#19407F] to-[#2557A7] text-white" dir={dir}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold text-[#FDC300] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-[#FDC300] transition-colors duration-200 text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 py-8">
          <div className={`flex flex-col md:flex-row ${dir === 'rtl' ? 'md:flex-row-reverse' : ''} justify-between items-center gap-6`}>
            {/* Copyright */}
            <div className="text-white/80 text-base">
              {t('footer.copyright')}
            </div>

            {/* Logo */}
            <div className="flex items-center gap-6">
              <div className="bg-white px-6 py-3 rounded-lg">
                <img
                  src="/logo-main.svg"
                  alt="MOCI Logo"
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BluePortalFooter;

