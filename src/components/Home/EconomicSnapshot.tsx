import React from 'react';
import { TrendingUp, BarChart, FileCheck, Globe } from 'lucide-react';

const stats = [
  {
    title: "Foreign Ownership",
    value: "100%",
    description: "Full ownership permitted for foreign investors across most economic sectors",
    icon: Globe,
  },
  {
    title: "Global Ranking",
    value: "Top 20",
    description: "Ranked among the top 20 countries for ease of doing business",
    icon: TrendingUp,
  },
  {
    title: "Economic Growth",
    value: "+3.8%",
    description: "Projected annual GDP growth rate for 2025",
    icon: BarChart,
  },
  {
    title: "Tax Benefits",
    value: "0-10%",
    description: "Competitive corporate tax rates with extensive exemptions available",
    icon: FileCheck,
  }
];

const EconomicSnapshot = () => {
  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-fixed opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=2070')"
        }}
      />
      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Qatar Economic Snapshot</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Qatar offers one of the most attractive business environments in the Middle East,
            with robust growth and investor-friendly policies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <div 
                key={stat.title}
                className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-qatari/20"
              >
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-qatari/10 mb-4">
                  <IconComponent className="h-6 w-6 text-qatari" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                <div className="text-3xl font-bold text-qatari mb-3">{stat.value}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EconomicSnapshot;
