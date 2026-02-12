import React from 'react';
import { Link } from 'react-router-dom';

const BluePortalFooter = () => {
  const footerSections = [
    {
      title: 'About',
      links: [
        { label: 'Our Story', href: '#' },
        { label: 'Mission & Vision', href: '#' },
      ]
    },
    {
      title: 'Sectors',
      links: [
        { label: 'Healthcare', href: '#' },
        { label: 'Finance', href: '#' },
        { label: 'Education', href: '#' },
        { label: 'Logistics', href: '#' },
      ]
    },
    {
      title: 'Insights',
      links: [
        { label: 'Reports', href: '/reports' },
      ]
    },
    {
      title: 'Discover More',
      links: [
        { label: 'Case Studies', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: 'Terms & Conditions', href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#19407F] to-[#2557A7] text-white">
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-white/80 text-base">
              © 2025 MOCI Qatar. All rights reserved.
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

