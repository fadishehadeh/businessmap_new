import React from 'react';
import SingleWindowHeader from './SingleWindowHeader';
import SingleWindowFooter from './SingleWindowFooter';

interface SingleWindowLayoutProps {
  children: React.ReactNode;
}

const SingleWindowLayout: React.FC<SingleWindowLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip Links for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 bg-[#19407F] text-white rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      <SingleWindowHeader />
      
      {/* Main content with top padding to account for fixed header */}
      <main id="main-content" className="flex-grow pt-[204px]" role="main">
        {children}
      </main>
      
      <SingleWindowFooter />
    </div>
  );
};

export default SingleWindowLayout;

