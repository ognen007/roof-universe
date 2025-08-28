import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <img 
              src="https://i.ibb.co/N6NqRCsP/image.png" 
              alt="Roof Universe Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-700">
            <div className="flex items-center space-x-1">
              <Phone size={16} className="text-yellow-400" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={16} className="text-yellow-400" />
              <span>info@roofuniverse.com</span>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-white border-gray-200">
            <nav className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <Phone size={16} className="text-yellow-400" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <Mail size={16} className="text-yellow-400" />
                  <span>info@roofuniverse.com</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;