import React from 'react';
import SingleWindowHeader from './SingleWindowHeader';
import BluePortalFooter from './BluePortalFooter';

interface BluePortalLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const BluePortalLayout: React.FC<BluePortalLayoutProps> = ({
  children,
  showFooter = true
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Use SingleWindowHeader - Blue themed header */}
      <SingleWindowHeader />

      {/* Main content */}
      <main className="flex-1 pt-[317px]">
        {children}
      </main>

      {/* New blue-themed footer */}
      {showFooter && <BluePortalFooter />}
    </div>
  );
};

export default BluePortalLayout;

