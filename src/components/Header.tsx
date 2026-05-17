"use client";

import { useState, useEffect, useCallback } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Declaring the motion-wrapped Link component for mobile stagger animations
const MotionLink = motion(Link);

const NAV_LINKS = [
  { key: 'home', defaultLabel: 'Home', href: '/' },
  { key: 'about', defaultLabel: 'Biography', href: '/#about' },
  { key: 'vision', defaultLabel: 'Vision', href: '/#vision' },
  { key: 'gallery', defaultLabel: 'Gallery', href: '/gallery' },
  { key: 'news', defaultLabel: 'News', href: '/#news' },
  { key: 'contact', defaultLabel: 'Contact', href: '/#contact' },
];

export default function Header() {
  const pathname = usePathname();
  const tNav = useTranslations('Navigation');
  const locale = useLocale();
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');

  // Scroll listener for backdrop blur effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS
      .filter((l) => l.href.includes('#'))
      .map((l) => l.href.substring(l.href.indexOf('#') + 1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Smooth-scroll navigation helper
  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1) {
      const hash = href.substring(hashIndex);
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  // Check active state
  const isActive = (href: string) => {
    const isHomepage = pathname === '/';
    if (href === '/') return activeSection === '/' && isHomepage;
    if (href.includes('#')) {
      const hash = href.substring(href.indexOf('#'));
      return activeSection === hash && isHomepage;
    }
    // For route links like '/gallery'
    return pathname.endsWith(href);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'header-scrolled py-2'
            : 'header-top py-3 md:py-4'
        }`}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-saffron via-green to-navy z-10" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between pt-3">
          
          {/* ===== LOGO ===== */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group relative z-10"
            aria-label="R. Roshan Baig - Home"
          >
            {/* Logo Image */}
            <div className={`relative overflow-hidden rounded-full ring-2 ring-green/20 group-hover:ring-green/40 transition-all duration-300 shadow-md group-hover:shadow-lg ${
              scrolled ? 'w-10 h-10 sm:w-11 sm:h-11' : 'w-11 h-11 sm:w-12 sm:h-12'
            }`}>
              <Image
                src="/images/roshan baig/image copy.png"
                alt="R. Roshan Baig Logo"
                fill
                sizes="48px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>

            {/* Name Text */}
            <div className="flex flex-col">
              <span className={`font-poppins font-bold leading-tight tracking-tight text-navy transition-all duration-300 ${
                scrolled ? 'text-[14px] sm:text-[15px] lg:text-[17px]' : 'text-[15px] sm:text-[16px] lg:text-[18px]'
              }`}>
                R. ROSHAN <span className="text-green">BAIG</span>
              </span>
              <span className={`font-inter font-medium tracking-[0.08em] uppercase text-gray-400 transition-all duration-300 hidden sm:block ${
                scrolled ? 'text-[8px] lg:text-[9px] mt-0.5' : 'text-[9px] lg:text-[10px] mt-0.5'
              }`}>
                Former Minister, Govt. of Karnataka
              </span>
            </div>
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isHash = link.href.includes('#');
              const isHomepage = pathname === '/';
              const label = tNav(link.key) || link.defaultLabel;

              return (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={(e) => {
                    if (isHash && isHomepage) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className={`
                    relative px-3 xl:px-4 py-2 text-[12px] xl:text-[13px] font-inter font-semibold 
                    transition-all duration-300 group rounded-lg
                    ${isActive(link.href)
                      ? 'text-green'
                      : 'text-gray-600 hover:text-navy'
                    }
                  `}
                >
                  {label}
                  {/* Hover underline */}
                  <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] bg-green rounded-full transition-all duration-300 ${
                    isActive(link.href) ? 'w-5' : 'w-0 group-hover:w-4'
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* ===== RIGHT ACTIONS ===== */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-4 relative z-10">
            {/* Language Switcher - Always Visible */}
            <div className="flex items-center bg-gray-100/80 backdrop-blur-md p-0.5 sm:p-1 rounded-full border border-gray-200 shadow-sm text-[9px] sm:text-[11px] font-poppins font-black uppercase tracking-wider relative z-10">
              <Link
                href={pathname}
                locale="en"
                className={`px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-full transition-all ${
                  locale === 'en'
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-gray-500 hover:text-navy'
                }`}
              >
                EN
              </Link>
              <Link
                href={pathname}
                locale="kn"
                className={`px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-full transition-all ${
                  locale === 'kn'
                    ? 'bg-navy text-white shadow-sm font-bold'
                    : 'text-gray-500 hover:text-navy font-bold'
                }`}
              >
                ಕನ್ನಡ
              </Link>
            </div>

            {/* CTA Trigger - Desktop only */}
            <Link
              href="/#contact"
              onClick={(e) => {
                const isHomepage = pathname === '/';
                if (isHomepage) {
                  e.preventDefault();
                  handleNavClick('#contact');
                }
              }}
              className="hidden lg:block bg-navy hover:bg-navy-dark text-white px-5 py-2.5 rounded-full font-poppins font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              Contact
            </Link>

            {/* ===== MOBILE MENU TRIGGER ===== */}
            <button
              onClick={() => setMobileOpen(true)}
              className="flex lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200/80 bg-white/80 backdrop-blur-md items-center justify-center text-navy shadow-sm hover:shadow-md transition-all cursor-pointer relative z-10"
              aria-label="Open menu"
            >
              <Menu size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={2.5} />
            </button>
          </div>

        </div>
      </header>

      {/* ===== MOBILE SLIDE-IN NAV DRAWER ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-[160] w-full max-w-[320px] bg-white shadow-2xl flex flex-col lg:hidden border-l border-gray-100"
            >
              {/* Mobile Drawer Header */}
              <div className="p-5 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green to-green-dark flex items-center justify-center shadow-md">
                    <span className="font-poppins font-black text-white text-[10px]">RB</span>
                  </div>
                  <span className="font-poppins font-bold text-sm tracking-tight text-navy">
                    R. Roshan Baig
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-navy cursor-pointer transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => {
                    const isHash = link.href.includes('#');
                    const isHomepage = pathname === '/';
                    const label = tNav(link.key) || link.defaultLabel;

                    return (
                      <MotionLink
                        key={link.key}
                        href={link.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i + 0.1, duration: 0.3 }}
                        onClick={(e) => {
                          if (isHash && isHomepage) {
                            e.preventDefault();
                            handleNavClick(link.href);
                          } else {
                            setMobileOpen(false);
                          }
                        }}
                        className={`
                          flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-poppins font-semibold 
                          transition-all duration-200 group
                          ${isActive(link.href)
                            ? 'bg-green/8 text-green'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-navy'
                          }
                        `}
                      >
                        <span className="flex items-center gap-3">
                          <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                            isActive(link.href) ? 'bg-green scale-125' : 'bg-gray-300 group-hover:bg-navy'
                          }`} />
                          {label}
                        </span>
                        <ChevronRight size={16} className={`transition-all duration-200 ${
                          isActive(link.href) ? 'text-green opacity-100' : 'opacity-0 group-hover:opacity-60 group-hover:translate-x-0.5'
                        }`} />
                      </MotionLink>
                    );
                  })}
                </div>
              </nav>

              {/* Mobile Bottom Actions */}
              <div className="px-4 pb-6 pt-4 border-t border-gray-100 space-y-3">
                {/* Language Switcher */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="flex items-center gap-2"
                >
                  <Link
                    href={pathname}
                    locale="en"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 text-center bg-navy text-white py-3 rounded-xl font-poppins font-bold text-[13px] shadow-sm hover:bg-navy-dark transition-all"
                  >
                    English
                  </Link>
                  <Link
                    href={pathname}
                    locale="kn"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 text-center bg-gray-100 text-navy py-3 rounded-xl font-poppins font-bold text-[13px] border border-gray-200 hover:bg-gray-200 transition-all font-bold"
                  >
                    ಕನ್ನಡ
                  </Link>
                </motion.div>

                {/* CTA */}
                <MotionLink
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href="/#contact"
                  onClick={(e) => {
                    const isHomepage = pathname === '/';
                    if (isHomepage) {
                      e.preventDefault();
                      handleNavClick('#contact');
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green to-green-dark text-white py-3.5 rounded-xl font-poppins font-bold text-[14px] shadow-[0_4px_15px_rgba(14,122,61,0.25)] hover:shadow-[0_6px_20px_rgba(14,122,61,0.35)] transition-all cursor-pointer"
                >
                  <Phone size={15} />
                  Get In Touch
                </MotionLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
