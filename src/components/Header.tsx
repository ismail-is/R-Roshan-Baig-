"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Vision', href: '#vision' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 flex-shrink-0">
            {/* Placeholder for Logo Image - you can replace src with actual logo if available */}
            <div className="w-full h-full rounded-full border-2 border-saffron flex items-center justify-center bg-white shadow-sm overflow-hidden">
                <div className="w-6 h-6 bg-gradient-to-br from-green to-navy-blue rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-bold text-xl leading-none tracking-tight">
              <span className="text-navy-blue">R. ROSHAN </span>
              <span className="text-green">BAIG</span>
            </span>
            <span className="text-[10px] text-gray-500 font-inter font-medium tracking-wide uppercase mt-1">Former Minister, Government of Karnataka</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center justify-center flex-1 mx-8">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-navy-blue font-semibold hover:text-green transition-colors font-inter text-sm relative group"
                >
                  {link.name}
                  {link.name === 'Home' && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-green"></span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="hidden xl:flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-bold font-inter text-navy-blue">
            <Link href={pathname} locale="en" className={pathname.startsWith('/en') || pathname === '/' ? 'text-navy-blue' : 'text-gray-400 hover:text-navy-blue'}>EN</Link>
            <span className="text-gray-300">|</span>
            <Link href={pathname} locale="kn" className={pathname.startsWith('/kn') ? 'text-navy-blue' : 'text-gray-400 hover:text-navy-blue'}>ಕನ್ನಡ</Link>
          </div>
          
          <Link href="#contact" className="bg-green text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#107006] transition-colors shadow-sm">
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-navy-blue p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="xl:hidden bg-white shadow-xl absolute top-full left-0 w-full overflow-hidden border-t border-gray-100"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-inter font-bold text-navy-blue border-b border-gray-50 pb-3 hover:text-green transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4">
                 <div className="flex items-center gap-3 text-lg font-bold font-inter text-navy-blue">
                    <Link href={pathname} locale="en" className={pathname.startsWith('/en') || pathname === '/' ? 'text-navy-blue' : 'text-gray-400'}>EN</Link>
                    <span className="text-gray-300">|</span>
                    <Link href={pathname} locale="kn" className={pathname.startsWith('/kn') ? 'text-navy-blue' : 'text-gray-400'}>ಕನ್ನಡ</Link>
                </div>
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-green text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-sm">
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
