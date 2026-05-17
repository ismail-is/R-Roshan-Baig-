"use client";

import { useTranslations, useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Link, usePathname } from '@/i18n/routing';
import { 
  Mail, 
  MapPin, 
  ArrowRight, 
  ChevronUp, 
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

/* ──────── SOCIAL MEDIA VECTOR ICON WRAPPER ──────── */
const SocialIcon = ({ d, size = 16 }: { d: string; size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);

const fbPath = "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z";
const twPath = "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z";
const igPath = "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z";
const waPath = "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z";
const ytPath = "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z";

export default function Footer() {
  const tContact = useTranslations('Contact');
  const tFooter = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();

  const socials = [
    { path: fbPath, color: "hover:bg-[#1877F2]", label: "Facebook", href: "https://www.facebook.com/officialrroshanbaig/" },
    { path: twPath, color: "hover:bg-[#1DA1F2]", label: "Twitter", href: "https://x.com/rroshanbaig?lang=en" },
    { path: igPath, color: "hover:bg-[#E1306C]", label: "Instagram", href: "https://www.instagram.com/officialrroshanbaig/" }
  ];

  // Navigation Links matching Header
  const navLinks = [
    { key: 'home', defaultLabel: 'Home', href: '/' },
    { key: 'about', defaultLabel: 'Biography', href: '/#about' },
    { key: 'vision', defaultLabel: 'Vision', href: '/#vision' },
    { key: 'gallery', defaultLabel: 'Gallery', href: '/gallery' },
    { key: 'news', defaultLabel: 'News', href: '/#news' },
    { key: 'contact', defaultLabel: 'Contact', href: '/#contact' },
  ];

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth-scroll navigation helper
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer 
      id="contact" 
      className="bg-[#05132d] text-white pt-24 pb-10 relative overflow-hidden z-20 border-t border-white/5"
    >
      
      {/* ═══ PATRIOTIC TRICOLOR TOP STRIP ═══ */}
      <div className="absolute top-0 left-0 w-full h-[4px] flex z-20 select-none">
        <div className="flex-1 bg-saffron" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-green" />
      </div>

      {/* ═══ BACKGROUND AMBIENT GLOWS ═══ */}
      <div className="absolute top-0 left-[35%] w-[35%] h-[280px] bg-gradient-to-b from-green/5 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-saffron/3 blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-green/3 blur-[110px] pointer-events-none z-0" />

      <div className="max-w-[1400px] pt-20 mx-auto px-5 md:px-10 relative z-10">

        {/* ═══ RESPONSIVE TOP CONTACT STRIP ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20 mt-12 lg:-mt-36 relative z-10 px-2 lg:px-0">
          
          {/* Left CTA Card: Green Campaign Action Box (4/12 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-gradient-to-br from-green to-green-dark rounded-[2rem] p-8 lg:p-10 shadow-[0_20px_50px_rgba(14,122,61,0.25)] relative overflow-hidden group border border-white/10"
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_white_0.15,_transparent_0.6)] opacity-10 pointer-events-none" />
            
            {/* Sliding reflection overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full min-h-[190px]">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 bg-white/10 rounded-full px-3 py-1 border border-white/15">
                  <Sparkles size={11} className="text-saffron animate-pulse" />
                  <span className="text-[9px] font-black tracking-[0.2em] uppercase text-saffron font-poppins">
                    {tContact('title') || 'GET IN TOUCH'}
                  </span>
                </div>
                
                <h3 className="font-poppins font-black text-2xl lg:text-3xl leading-tight mb-8 text-white tracking-wide">
                  {locale === 'kn' ? (
                    <>ಕರ್ನಾಟಕದ ಪ್ರಗತಿಗಾಗಿ<br />ಕೈಜೋಡಿಸಿ</>
                  ) : (
                    <>Let&apos;s Build A<br />Better Karnataka</>
                  )}
                </h3>
              </div>

              <Link 
                href="/#contact" 
                onClick={(e) => {
                  if (pathname === '/') {
                    e.preventDefault();
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="inline-flex items-center justify-between w-full bg-white text-navy px-6 py-3.5 rounded-full font-poppins font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all hover:bg-cream hover:text-green-dark cursor-pointer"
              >
                {locale === 'kn' ? 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ' : 'Contact Office'}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Cards: Contact Fields (8/12 Cols) (No Phone No) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-8 bg-[#071e4a]/70 backdrop-blur-xl rounded-[2rem] p-8 lg:p-10 border border-white/8 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            
            {/* Info Grid Left Side: Email */}
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 3 }}
                className="flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 bg-white/5 shadow-inner">
                  <Mail size={18} className="text-saffron animate-float" style={{ animationDuration: '4s' }} />
                </div>
                <div>
                  <p className="font-poppins text-[10px] font-black mb-0.5 text-white/55 uppercase tracking-wider">
                    {locale === 'kn' ? 'ಇಮೇಲ್' : 'Email'}
                  </p>
                  <a href="mailto:office@roshanbaig.in" className="font-inter text-sm text-gray-200 font-light hover:text-white transition-colors">
                    office@roshanbaig.in
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Info Grid Right Side: Address & Social */}
            <div className="space-y-6">
              {/* Address */}
              <motion.div 
                whileHover={{ x: 3 }}
                className="flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 bg-white/5 shadow-inner">
                  <MapPin size={18} className="text-green animate-float" style={{ animationDuration: '5s' }} />
                </div>
                <div>
                  <p className="font-poppins text-[10px] font-black mb-0.5 text-white/55 uppercase tracking-wider">
                    {locale === 'kn' ? 'ವಿಳಾಸ' : 'Address'}
                  </p>
                  <p className="font-inter text-xs text-gray-200 font-light leading-relaxed">
                    {tContact('address') || '#13, Shivajinagar,\nBengaluru, Karnataka'}
                  </p>
                </div>
              </motion.div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-white/5">
                <p className="font-poppins text-[10px] font-black uppercase tracking-[0.2em] mb-3.5 text-white/40">
                  {locale === 'kn' ? 'ನಮ್ಮನ್ನು ಫಾಲೋ ಮಾಡಿ' : 'CONNECT WITH US'}
                </p>
                <div className="flex items-center gap-2">
                  {socials.map((soc, i) => (
                    <motion.a 
                      key={i} 
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className={`w-9 h-9 rounded-full bg-white/8 flex items-center justify-center transition-all duration-300 border border-white/5 text-white/85 shadow-sm ${soc.color}`}
                      aria-label={soc.label}
                    >
                      <SocialIcon d={soc.path} size={14} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* ═══ BOTTOM FOOTER BAR ═══ */}
        <div className="border-t border-white/8 pt-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          
          {/* Logo Frame matching Header Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative overflow-hidden rounded-full ring-2 ring-green/20 group-hover:ring-green/45 transition-all w-11 h-11 shadow-md">
              <Image
                src="/images/roshan baig/image copy.png"
                alt="R. Roshan Baig Logo"
                fill
                sizes="44px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="font-poppins font-black text-base tracking-wide leading-none">
                <span className="text-saffron">R. ROSHAN </span>
                <span className="text-white">BAIG</span>
              </span>
              <p className="text-[8px] text-gray-400 font-inter uppercase tracking-[0.15em] font-medium mt-1">
                Former Cabinet Minister, Govt. of Karnataka
              </p>
            </div>
          </Link>

          {/* Patriotic Kannada Quote (Center) */}
          <div className="text-center lg:max-w-md">
            <p className="font-noto-kannada text-sm font-bold text-gray-400 leading-relaxed drop-shadow-sm select-none">
              &ldquo;ಜನಸೇವೆಯೇ ನನ್ನ ಧ್ಯೇಯ — ಕನ್ನಡವೇ ನನ್ನ ಉಸಿರು&rdquo;
            </p>
            <div className="w-12 h-[2px] bg-gradient-to-r from-saffron via-white/50 to-green mx-auto mt-2 rounded-full" />
          </div>

          {/* Navigation Links & Back-To-Top Button */}
          <div className="flex flex-col items-center lg:items-end gap-3.5 relative">
            
            {/* Header Navigation Links embedded in Footer */}
            <nav className="flex flex-wrap items-center justify-center gap-5 text-[11px] font-inter font-semibold text-gray-400">
              {navLinks.map((link) => {
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
                        const hash = link.href.substring(link.href.indexOf('#'));
                        const el = document.querySelector(hash);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }
                    }}
                    className="hover:text-white hover:underline underline-offset-4 transition-all duration-200"
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
            
            <p className="text-[10.5px] font-inter text-gray-500 font-light">
              © {new Date().getFullYear()} R. Roshan Baig. {tFooter('rights') || 'All Rights Reserved.'}
            </p>

            {/* Back to Top Pulsing Trigger */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="absolute -right-4 lg:right-0 -bottom-16 w-11 h-11 rounded-2xl bg-white/5 hover:bg-[#e8ecf3] hover:text-navy text-white flex items-center justify-center border border-white/10 shadow-xl cursor-pointer transition-colors group"
              title="Scroll to Top"
            >
              {/* Outer Saffron/Green Pulsing Halo */}
              <div className="absolute inset-0 rounded-2xl border border-saffron animate-ping opacity-25 pointer-events-none" />
              <ChevronUp size={20} className="group-hover:translate-y-[-2px] transition-transform duration-300" />
            </motion.button>
          </div>

        </div>

      </div>
    </footer>
  );
}
