import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Get In </span><span className="text-yellow-400 drop-shadow-lg">Touch</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Ready to protect your investment? Contact us today for a free estimate 
            or emergency service. We're here to help 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">Phone</h4>
                  <p className="text-gray-200 text-lg font-medium">(555) 123-4567</p>
                  <p className="text-sm text-yellow-400 font-medium">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">Email</h4>
                  <p className="text-gray-200 text-lg">info@roofuniverse.com</p>
                  <p className="text-sm text-yellow-400 font-medium">We respond within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">Address</h4>
                  <p className="text-gray-200">123 Construction Ave<br />Business District, ST 12345</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Clock className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">Business Hours</h4>
                  <p className="text-gray-200">Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p className="text-gray-200">Saturday: 8:00 AM - 4:00 PM</p>
                  <p className="text-gray-200">Sunday: Emergency Service Only</p>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-white">Service Areas</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h5 className="font-semibold text-white mb-2">Primary Areas</h5>
                <ul className="space-y-1 text-sm text-gray-200">
                  <li>Downtown District</li>
                  <li>Westside</li>
                  <li>Suburban Hills</li>
                  <li>Industrial Zone</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-white mb-2">Extended Areas</h5>
                <ul className="space-y-1 text-sm text-gray-200">
                  <li>North County</li>
                  <li>East Valley</li>
                  <li>South Ridge</li>
                  <li>Mountain View</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-300 to-red-400 text-black rounded-xl p-6 shadow-xl border-2 border-red-200">
              <h4 className="font-bold text-xl mb-3">🚨 Emergency Service</h4>
              <p className="text-sm mb-4 leading-relaxed">
                Storm damage? Roof leak? We provide 24/7 emergency roofing services 
                to protect your property from further damage.
              </p>
              <button className="bg-black text-red-300 px-6 py-3 rounded-lg font-bold text-sm hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                Call Emergency Line
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;