import React from 'react';
import { Home, Wrench, Shield, Zap, Umbrella, Hammer } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Roof Installation',
      description: 'Complete new roof installations with premium materials and expert craftsmanship.',
      features: ['Asphalt Shingles', 'Metal Roofing', 'Tile Installation', 'Flat Roofs']
    },
    {
      icon: Wrench,
      title: 'Roof Repair',
      description: 'Quick and reliable repair services to fix leaks, damaged shingles, and structural issues.',
      features: ['Leak Repair', 'Shingle Replacement', 'Storm Damage', 'Gutter Repair']
    },
    {
      icon: Shield,
      title: 'Roof Maintenance',
      description: 'Regular maintenance programs to extend your roof\'s lifespan and prevent costly repairs.',
      features: ['Inspections', 'Cleaning', 'Preventive Care', 'Warranty Service']
    },
    {
      icon: Zap,
      title: 'Emergency Service',
      description: '24/7 emergency roofing services for urgent repairs and storm damage.',
      features: ['Storm Response', 'Leak Emergency', 'Tarp Installation', 'Rapid Assessment']
    },
    {
      icon: Umbrella,
      title: 'Waterproofing',
      description: 'Advanced waterproofing solutions to protect your property from water damage.',
      features: ['Basement Sealing', 'Foundation Work', 'Deck Waterproofing', 'Commercial Systems']
    },
    {
      icon: Hammer,
      title: 'Siding & Gutters',
      description: 'Complete exterior solutions including siding installation and gutter systems.',
      features: ['Vinyl Siding', 'Seamless Gutters', 'Downspouts', 'Exterior Trim']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From installation to maintenance, we provide comprehensive roofing solutions 
            tailored to your specific needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                <service.icon className="text-gray-600 group-hover:text-black" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;