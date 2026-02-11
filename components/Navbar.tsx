'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/impact', label: 'Impact' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/donate', label: 'Donate' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-[#0A0E1A]/80 backdrop-blur-lg shadow-lg' 
          : 'bg-white dark:bg-[#0A0E1A] shadow-md'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Syrilla Healthcare Helping Hands Foundation"
              width={60}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0F3F77] dark:text-white hover:text-[#138A4B] dark:hover:text-[#1FA35C] font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#138A4B] dark:bg-[#1FA35C] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-[#1A2030] hover:bg-gray-200 dark:hover:bg-[#2A3447] transition-colors duration-200"
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon 
                icon={theme === 'light' ? faMoon : faSun} 
                className="text-[#0F3F77] dark:text-[#1FA35C] w-5 h-5"
              />
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-[#1A2030] hover:bg-gray-200 dark:hover:bg-[#2A3447] transition-colors duration-200"
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon 
                icon={theme === 'light' ? faMoon : faSun} 
                className="text-[#0F3F77] dark:text-[#1FA35C] w-5 h-5"
              />
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0F3F77] dark:text-white text-2xl p-2"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-[#0F3F77] dark:text-white hover:text-[#138A4B] dark:hover:text-[#1FA35C] font-medium transition-colors duration-200 border-b border-gray-100 dark:border-[#2A3447]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
