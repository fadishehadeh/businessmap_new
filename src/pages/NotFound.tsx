
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container-wide flex items-center justify-center min-h-[600px] py-20">
        <div className="text-center max-w-lg">
          <h1 className="text-8xl font-bold text-qatari mb-6">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Button asChild className="bg-qatari hover:bg-qatari-light">
            <Link to="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
