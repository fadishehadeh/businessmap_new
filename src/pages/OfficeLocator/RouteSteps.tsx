import React from 'react';

interface PathStep {
  floor: number;
  zone?: string;
  description: string;
  isEntrance?: boolean;
  isDestination?: boolean;
}

interface RouteStepsProps {
  floor: number;
  zone: string;
  currentStep: number;
}

const RouteSteps: React.FC<RouteStepsProps> = ({ floor, zone, currentStep }) => {
  const getFloorLabel = (floorNum: number): string => {
    if (floorNum === 1) return 'Ground';
    return `Floor ${floorNum - 1}`;
  };

  // Generate path from entrance to office
  const generatePath = (): PathStep[] => {
    const path: PathStep[] = [];

    // Start at entrance (Ground floor)
    path.push({
      floor: 1,
      description: 'Start at Main Entrance (Ground Floor)',
      isEntrance: true
    });

    // If not on ground floor, add elevator step
    if (floor > 1) {
      path.push({
        floor: 1,
        zone: 'B',
        description: 'Take elevator in Zone B'
      });

      // Add intermediate floors if going up multiple floors
      for (let f = 2; f < floor; f++) {
        path.push({
          floor: f,
          description: `Passing ${getFloorLabel(f)}`
        });
      }

      path.push({
        floor: floor,
        description: `Exit elevator at ${getFloorLabel(floor)}`
      });
    }

    // Navigate to the zone
    if (zone !== 'B' || floor === 1) {
      path.push({
        floor: floor,
        zone: zone,
        description: `Navigate to Zone ${zone}`,
        isDestination: true
      });
    } else {
      path.push({
        floor: floor,
        zone: zone,
        description: `You have arrived at Zone ${zone}`,
        isDestination: true
      });
    }

    return path;
  };

  const pathSteps = generatePath();

  if (currentStep < 0) return null;

  return (
    <div className="mt-6 space-y-2">
      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
        ROUTE STEPS
      </p>
      {pathSteps.map((step, index) => (
        <div
          key={index}
          className={`
            p-3 rounded-lg border-2 transition-all duration-300
            ${index === currentStep
              ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-400 scale-105'
              : index < currentStep
              ? 'bg-green-50 dark:bg-green-900/20 border-green-400'
              : 'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600'
            }
          `}
        >
          <div className="flex items-center gap-3">
            <div
              className={`
                w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                ${index === currentStep
                  ? 'bg-blue-600 text-white'
                  : index < currentStep
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-400 text-white'
                }
              `}
            >
              {index + 1}
            </div>
            <p className={`
              text-sm
              ${index === currentStep
                ? 'text-blue-900 dark:text-blue-100 font-semibold'
                : index < currentStep
                ? 'text-green-900 dark:text-green-100'
                : 'text-gray-600 dark:text-gray-400'
              }
            `}>
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RouteSteps;

