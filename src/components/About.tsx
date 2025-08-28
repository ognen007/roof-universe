import React from 'react';
import { CheckCircle, Users, Clock, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '1000+', label: 'Satisfied Customers' },
    { icon: Clock, number: '25+', label: 'Years Experience' },
    { icon: Award, number: '500+', label: 'Projects Completed' },
    { icon: CheckCircle, number: '100%', label: 'Satisfaction Rate' }
  ];

  const benefits = [
    'Licensed and insured professionals',
    'Premium materials and warranties',
    'Free detailed estimates',
    '24/7 emergency service',
    'Competitive pricing',
    'Local family-owned business'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-yellow-500">Roof Universe</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 25 years of experience in the roofing industry, Roof Universe has built a 
              reputation for excellence, reliability, and outstanding customer service. We're not 
              just contractors – we're your neighbors, committed to protecting your most valuable investment.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-yellow-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200">
              Learn More About Us
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Professional roofing team"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-black">25+</div>
              <div className="text-sm text-black font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-yellow-400" size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;