import React from 'react';
import { Zap, Shield, Globe } from 'lucide-react';

const featureList = [
  {
    name: 'Blazing Fast Performance',
    description: 'Optimized infrastructure ensures lightning-fast load times and seamless user experience, even under high traffic.',
    icon: Zap,
    color: 'text-yellow-500',
  },
  {
    name: 'Ironclad Security',
    description: 'We prioritize your data with advanced encryption and continuous monitoring, providing peace of mind and full compliance.',
    icon: Shield,
    color: 'text-green-500',
  },
  {
    name: 'Global Scale',
    description: 'Built to scale with your ambition, our platform supports operations and customers across the world without compromise.',
    icon: Globe,
    color: 'text-blue-500',
  },
];

const Features = () => {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Innovation at Core</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Our platform is built on principles of efficiency, security, and global reach.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {featureList.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 shadow-sm">
                <div className="-mt-6">
                  <div>
                    <span className={`inline-flex items-center justify-center rounded-md p-3 shadow-lg bg-white ${feature.color}`}>
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                  <p className="mt-5 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;