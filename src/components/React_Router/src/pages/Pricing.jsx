import React from 'react';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$19',
    frequency: '/month',
    features: ['5 Projects', 'Basic Analytics', 'Community Support', '1 GB Storage'],
    cta: 'Start Free Trial',
    isPrimary: false,
  },
  {
    name: 'Professional',
    price: '$49',
    frequency: '/month',
    features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '50 GB Storage', 'Custom Integrations'],
    cta: 'Get Started',
    isPrimary: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    frequency: '/month',
    features: ['Everything in Pro', 'Dedicated Account Manager', '24/7 Phone Support', 'Unlimited Storage', 'SLA Guarantee'],
    cta: 'Contact Sales',
    isPrimary: false,
  },
];

const Pricing = () => {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
          Choose the plan that fits your current needs, and upgrade anytime as you grow.
        </p>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl shadow-xl p-8 ${tier.isPrimary ? 'bg-indigo-600 text-white transform scale-105 transition-all duration-300' : 'bg-white text-gray-900'}`}
            >
              
              {/* Header */}
              <h3 className={`text-2xl font-semibold leading-8 ${tier.isPrimary ? 'text-white' : 'text-gray-900'}`}>
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline">
                <span className={`text-5xl font-extrabold tracking-tight ${tier.isPrimary ? 'text-white' : 'text-gray-900'}`}>
                  {tier.price}
                </span>
                <span className={`ml-1 text-xl font-semibold ${tier.isPrimary ? 'text-indigo-200' : 'text-gray-500'}`}>
                  {tier.frequency}
                </span>
              </p>

              {/* Features List */}
              <ul role="list" className="mt-8 space-y-4 text-left">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className={`flex-shrink-0 h-6 w-6 ${tier.isPrimary ? 'text-white' : 'text-indigo-600'}`} />
                    <p className={`ml-3 text-base ${tier.isPrimary ? 'text-indigo-100' : 'text-gray-500'}`}>{feature}</p>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#"
                className={`mt-8 block w-full rounded-md border border-transparent py-3 text-sm font-semibold text-center transition duration-150 ease-in-out ${
                  tier.isPrimary
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;