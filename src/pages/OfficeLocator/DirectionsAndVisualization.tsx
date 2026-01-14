import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation, Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OfficeLocation } from '@/data/officeLocations';
import BuildingVisualization from './BuildingVisualization';
import RouteSteps from './RouteSteps';

interface DirectionsAndVisualizationProps {
  location: OfficeLocation;
}

const DirectionsAndVisualization: React.FC<DirectionsAndVisualizationProps> = ({ location }) => {
  const [showRoute, setShowRoute] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate total steps
  const getTotalSteps = () => {
    let steps = 1; // Start at entrance
    if (location.floor > 1) {
      steps += 1; // Take elevator
      steps += (location.floor - 2); // Passing floors
      steps += 1; // Exit elevator
    }
    steps += 1; // Navigate to zone
    return steps;
  };

  const totalSteps = getTotalSteps();

  // Animation effect
  useEffect(() => {
    if (showRoute && !isPaused && currentStep < totalSteps - 1) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1500); // 1.5 seconds per step
      return () => clearTimeout(timer);
    } else if (currentStep >= totalSteps - 1) {
      setIsAnimating(false);
    }
  }, [currentStep, showRoute, isPaused, totalSteps]);

  const handleShowRoute = () => {
    setShowRoute(true);
    setCurrentStep(0);
    setIsAnimating(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setCurrentStep(-1);
    setIsAnimating(false);
    setIsPaused(false);
    setShowRoute(false);
  };

  return (
    <div className="space-y-8">
      {/* 1. How to Get There - Full Width at Top */}
      {location.directions && (
        <Card className="shadow-lg border-2 border-gray-200 dark:border-gray-700">
          <CardHeader className="bg-gray-50 dark:bg-gray-800">
            <CardTitle className="text-xl flex items-center gap-2">
              <Navigation className="h-5 w-5 text-qatari" />
              How to Get There
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            {/* Show Route Button */}
            {!showRoute ? (
              <div className="mb-6">
                <Button
                  onClick={handleShowRoute}
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Show Route
                </Button>
              </div>
            ) : (
              <>
                {/* Animation Controls */}
                <div className="flex gap-2 mb-6">
                  <Button
                    onClick={handlePause}
                    size="lg"
                    variant="outline"
                    className="flex-1 h-14 text-lg"
                  >
                    <Pause className="h-5 w-5 mr-2" />
                    {isPaused ? 'Resume' : 'Pause'}
                  </Button>
                  <Button
                    onClick={handleReset}
                    size="lg"
                    variant="outline"
                    className="h-14"
                  >
                    <RotateCcw className="h-5 w-5" />
                  </Button>
                </div>

                {/* Route Steps */}
                <RouteSteps
                  floor={location.floor}
                  zone={location.zone}
                  currentStep={currentStep}
                />

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {location.directions}
                  </p>
                  {location.nearestLandmark && (
                    <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <p className="text-sm font-medium text-yellow-900 dark:text-yellow-100">
                        <strong>Nearest Landmark:</strong> {location.nearestLandmark}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}

      {/* 2. Building Overview */}
      <BuildingVisualization
        floor={location.floor}
        zone={location.zone}
        officeNumber={location.officeNumber}
        showAnimatedRoute={showRoute}
        currentPathStep={currentStep}
      />
    </div>
  );
};

export default DirectionsAndVisualization;

