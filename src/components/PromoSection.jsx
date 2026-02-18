import React from 'react';
import { Truck, ShieldCheck, RotateCcw, Clock } from 'lucide-react';

const PromoSection = () => {
  const features = [
    {
      icon: <Truck size={24} />,
      title: 'Free Shipping',
      description: 'On all orders above $50'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Secure Payment',
      description: '100% secure payment'
    },
    {
      icon: <RotateCcw size={24} />,
      title: 'Easy Returns',
      description: '30 days return policy'
    },
    {
      icon: <Clock size={24} />,
      title: '24/7 Support',
      description: 'Contact us anytime'
    }
  ];
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md hover:border-primary-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mr-4 text-primary-600 bg-primary-100 p-3 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;