import React from 'react';
import { Briefcase, Users, MapPin, TrendingUp } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Briefcase,
      number: '25,000+',
      label: 'Active Jobs',
      description: 'New opportunities posted daily'
    },
    {
      icon: Users,
      number: '50,000+',
      label: 'Active Users',
      description: 'Professionals finding careers'
    },
    {
      icon: MapPin,
      number: '500+',
      label: 'Cities',
      description: 'Worldwide job opportunities'
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Success Rate',
      description: 'Candidates hired successfully'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the growing community of professionals who have found their dream careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;