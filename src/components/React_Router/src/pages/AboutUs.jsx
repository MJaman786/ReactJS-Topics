import React from 'react';
import { Briefcase, Heart, Users } from 'lucide-react';

const stats = [
  { label: 'Founded', value: '2020', icon: Briefcase },
  { label: 'Team Members', value: '50+', icon: Users },
  { label: 'Happy Customers', value: '10k+', icon: Heart },
];

const AboutUs = () => {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Header and Mission */}
        <div className="lg:flex lg:gap-x-10 lg:items-start">
          <div className="lg:w-1/2">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Story</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building the Future, Together.
            </p>
            <p className="mt-6 text-lg text-gray-500">
              Founded on the belief that software should be beautiful, powerful, and simple to use, we set out to revolutionize the industry. Our journey started in a small garage, but our vision quickly grew to encompass global innovation.
            </p>
          </div>
          
          {/* Stats Section */}
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <stat.icon className="h-10 w-10 text-indigo-600 mb-3" />
                  <dd className="text-5xl font-extrabold text-gray-900">{stat.value}</dd>
                  <dt className="text-base font-medium text-gray-500 mt-1">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6 border-b pb-2">Our Core Values</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900">Integrity</h4>
              <p className="mt-3 text-gray-500">We operate with transparency, honesty, and a commitment to doing what's right for our customers and partners.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900">Innovation</h4>
              <p className="mt-3 text-gray-500">We relentlessly pursue new ideas and technologies to deliver the best solutions and stay ahead of the curve.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900">Customer Focus</h4>
              <p className="mt-3 text-gray-500">The customer is at the center of everything we do. We strive to exceed expectations with every interaction.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;