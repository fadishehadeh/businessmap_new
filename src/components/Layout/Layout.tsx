
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatSupport from '../ChatSupport/ChatSupport';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip Links for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-qatari focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      <a
        href="#main-navigation"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-40 focus:z-50 focus:px-4 focus:py-2 focus:bg-qatari focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Skip to navigation
      </a>

      <Header />
      <main id="main-content" className="flex-grow pt-[220px]" role="main">
        {children}
      </main>
      <ChatSupport />
      <Footer />
    </div>
  );
};

export default Layout;
