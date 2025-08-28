import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-600 text-gray-100 py-8 border-t border-gray-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://i.ibb.co/N6NqRCsP/image.png" 
                alt="Roof Universe Logo" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Professional roofing services with over 25 years of experience. 
              Licensed, insured, and committed to excellence in every project.
            </p>
          </div>

          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Roof Installation</li>
              <li>Roof Repair</li>
              <li>Emergency Service</li>
              <li>Maintenance</li>
              <li>Waterproofing</li>
              <li>Siding & Gutters</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-2 text-sm">
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@roofuniverse.com</p>
              <p>Address: 123 Construction Ave<br />Business District, ST 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {currentYear} Roof Universe. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;