import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-0">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Professional
            <span className="block text-yellow-400">Roofing Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Protect your investment with premium roofing services. From repairs to complete installations, 
            we deliver excellence that stands the test of time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center space-x-2 group">
              <span>Get Free Estimate</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors duration-200">
              Emergency Service
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <Shield className="text-yellow-400" size={24} />
              </div>
              <div>
                <div className="font-semibold">25+ Years</div>
                <div className="text-gray-400 text-sm">Experience</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <Award className="text-yellow-400" size={24} />
              </div>
              <div>
                <div className="font-semibold">Licensed</div>
                <div className="text-gray-400 text-sm">& Insured</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <Users className="text-yellow-400" size={24} />
              </div>
              <div>
                <div className="font-semibold">1000+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;