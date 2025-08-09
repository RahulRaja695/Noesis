import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.svg';
import header_bottom from '../assets/header_bottom.png';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex items-start justify-between py-6 sm:py-8">

          {/* Logo */}
          <div className="absolute top-0 -translate-y-1/4 z-10">
            <a href="#">
              <img
                className="mt-6 h-20 sm:h-20 md:h-23 lg:h-28 sm:mt-6 md:mt-8 w-auto object-contain"
                src={Logo}
                alt="Noesis Design Studio Logo"
              />
            </a>
          </div>

          {/* Desktop/Tablet Navigation */}
          <div className="hidden md:flex flex-1 justify-center ml-16 sm:ml-24">
            <nav className="flex items-center space-x-6 sm:space-x-10">
              <a href="#works" className="font-medium text-black hover:text-brand-highlight">Works</a>
              <a href="#philosophy" className="font-medium text-black hover:text-brand-highlight">Studio</a>
              <a href="#team" className="font-medium text-black hover:text-brand-highlight">Our Team</a>
            </nav>
          </div>

          {/* Contact Button (Visible on md+ screens) */}
          <div className="hidden md:block">
            <a
              href="#footer"
              className="bg-brand-accent text-white px-5 py-3 rounded-md text-sm font-serif font-medium hover:opacity-90 transition"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Icon (Visible on sm and below) */}
          <div className="md:hidden ml-auto">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <img src="assets/Icons/menu.svg" alt="Menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-md">
          <a href="#works" className="block py-2 text-sm font-medium text-black hover:text-brand-highlight">Works</a>
          <a href="#philosophy" className="block py-2 text-sm font-medium text-black hover:text-brand-highlight">Studio</a>
          <a href="#team" className="block py-2 text-sm font-medium text-black hover:text-brand-highlight">Our Team</a>
        </div>
      )}

      {/* Bottom Notch Decoration */}
      <div className="hidden lg:flex justify-center -mt-4">
        <img className="h-8" src={header_bottom} alt="Notch Decoration" />
      </div>
    </header>
  );
};
