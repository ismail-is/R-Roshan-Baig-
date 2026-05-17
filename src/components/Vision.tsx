"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { 
  GraduationCap, 
  Building2, 
  Globe, 
  Heart, 
  ArrowRight, 
  Sparkles,
  BookOpen
} from 'lucide-react';

/* ──────── FLOATING GOLD DUST SPARKS ──────── */
const GoldDustParticles = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
    <motion.div
      animate={{
        y: [0, -20, 0],
        x: [0, 12, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-[15%] right-[20%] w-3 h-3 rounded-full bg-saffron/15 blur-[1px]"
    />
    <motion.div
      animate={{
        y: [0, 25, 0],
        x: [0, -12, 0],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
      className="absolute bottom-[25%] left-[20%] w-4 h-4 rounded-full bg-green/15 blur-[1px]"
    />
    <div className="absolute top-[40%] right-[40%] w-2 h-2 rounded-full bg-saffron/20 animate-pulse" />
    <div className="absolute bottom-[40%] left-[45%] w-2 h-2 rounded-full bg-green/20 animate-pulse" style={{ animationDuration: '3s' }} />
  </div>
);

export default function Vision() {
  const t = useTranslations('Vision');
  const params = useParams();
  const locale = params?.locale || 'en';

  const [activePillar, setActivePillar] = useState<number>(0);

  // Curated details for each vision point (localized descriptions)
  const pillarsMetadata = [
    {
      id: "01",
      icon: Building2,
      accent: "saffron",
      color: "from-saffron to-saffron-dark",
      shadow: "shadow-saffron/20",
      description: locale === 'kn'
        ? "ಬೆಂಗಳೂರನ್ನು ಅತ್ಯುನ್ನತ ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆ, ಸುಸ್ಥಿರ ನಗರಾಭಿವೃದ್ಧಿ ಮತ್ತು ಅತ್ಯಾಧುನಿಕ ಸಂಪರ್ಕ ವ್ಯವಸ್ಥೆಯೊಂದಿಗೆ ವಿಶ್ವದರ್ಜೆಯ ಸ್ಮಾರ್ಟ್ ಸಿಟಿಯಾಗಿ ಪರಿವರ್ತಿಸುವುದು."
        : "Transforming Bengaluru into a world-class smart city with superior public transit, sustainable urban planning, and high-speed transit corridors."
    },
    {
      id: "02",
      icon: GraduationCap,
      accent: "green",
      color: "from-green to-green-dark",
      shadow: "shadow-green/20",
      description: locale === 'kn'
        ? "ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಯುವಜನರನ್ನು ಸಬಲೀಕರಿಸಲು ಉನ್ನತ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು, ವೃತ್ತಿಪರ ತರಬೇತಿ ಕೇಂದ್ರಗಳು ಮತ್ತು ಡಿಜಿಟಲ್ ಶಾಲೆಗಳ ಸ್ಥಾಪನೆ."
        : "Establishing advanced scholarship programs, vocational training centers, and modern digital schools to empower underserved youth and minorities."
    },
    {
      id: "03",
      icon: Globe,
      accent: "saffron",
      color: "from-saffron to-saffron-dark",
      shadow: "shadow-saffron/20",
      description: locale === 'kn'
        ? "ಕರ್ನಾಟಕದ ಐತಿಹಾಸಿಕ ಪರಂಪರೆ, ಪರಿಸರ ಪ್ರವಾಸೋದ್ಯಮ ತಾಣಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕೇಂದ್ರಗಳನ್ನು ಜಾಗತಿಕ ಮಟ್ಟದಲ್ಲಿ ಬಿಂಬಿಸಿ ಉದ್ಯೋಗಾವಕಾಶ ಸೃಷ್ಟಿಸುವುದು."
        : "Showcasing Karnataka's pristine heritage corridors, eco-tourism sites, and cultural hubs to stimulate job creation and international investments."
    },
    {
      id: "04",
      icon: Heart,
      accent: "green",
      color: "from-green to-green-dark",
      shadow: "shadow-green/20",
      description: locale === 'kn'
        ? "ಎಲ್ಲಾ ಕುಟುಂಬಗಳಿಗೆ ಘನತೆ, ಸಮಾನತೆ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ಖಚಿತಪಡಿಸಲು ಅಂತರ್ಗತ ಬೆಳವಣಿಗೆ, ಕೋಮು ಸೌಹಾರ್ದತೆ ಮತ್ತು ಬಲಿಷ್ಠ ಸಾಮಾಜಿಕ ಸುರಕ್ಷತೆಯನ್ನು ಒದಗಿಸುವುದು."
        : "Fostering inclusive growth, absolute communal peace, and robust safety nets to ensure dignity, equality, and prosperity for all families in Karnataka."
    }
  ];

  // Dynamic fallback points in English if translation array has fewer items
  const defaultPillarTitles = [
    "Modernizing Bengaluru Infrastructure",
    "Educational Empowerment for Minorities",
    "Promoting Global Tourism",
    "Community Harmony & Welfare"
  ];

  const pillarCards = Array.from({ length: 4 }).map((_, i) => {
    return {
      title: t(`points.${i}`) || defaultPillarTitles[i],
      ...pillarsMetadata[i]
    };
  });

  return (
    <section 
      id="vision" 
      className="relative mx-4 md:mx-10 lg:mx-20 my-24 overflow-hidden rounded-[2.5rem] shadow-[0_35px_80px_rgba(5,21,51,0.45)] border border-white/5"
    >
      
      {/* ═══ DEEP NAVY BACKGROUND WITH PREMIUM WATERMARK ═══ */}
      <div className="bg-[#05132d] py-16 md:py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden text-white">
        
        {/* Architecture Watermark Overlay */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none select-none z-0">
          <Image 
            src="/images/vidhana_soudha_bg_1779009062639.png" 
            alt="Vidhana Soudha" 
            fill 
            className="object-cover object-bottom" 
            priority
            aria-hidden="true" 
          />
        </div>

        {/* Ambient Tricolor Mesh Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-saffron/10 blur-[90px] pointer-events-none z-0" />
        <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-green/10 blur-[110px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05132d]/98 via-[#071e4a]/85 to-[#05132d]/98 pointer-events-none z-0" />

        {/* Floating Sparks */}
        <GoldDustParticles />

        <div className="max-w-[1300px] mx-auto relative z-10">
          
          {/* ═══ SECTION HEADER ═══ */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md"
            >
              <Sparkles size={12} className="text-saffron animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.22em] uppercase text-saffron font-poppins">
                {t('title') || 'VISION FOR KARNATAKA'}
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-poppins text-3xl md:text-5xl font-black tracking-tight leading-none"
            >
              {locale === 'kn' ? (
                <>ಅಭಿವೃದ್ಧಿ ಪಥದಲ್ಲಿ ಕರ್ನಾಟಕ: <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-white">ನಮ್ಮ ಸಂಕಲ್ಪ</span></>
              ) : (
                <>Building A Progressive <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-white">Karnataka</span></>
              )}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-inter text-gray-300 text-sm md:text-[15px] font-light max-w-2xl leading-relaxed"
            >
              {t('subtitle') || 'A comprehensive, forward-looking roadmap to modernize infrastructures, uplift standard of education, promote tourism and safeguard communal peace.'}
            </motion.p>
          </div>

          {/* ═══ DUAL-PANE INTERACTIVE SHOWCASE ═══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* ───── LEFT PANE: SPOTLIGHT DISPLAY (5 COLS) ───── */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              
              {/* Glassmorphic active display box */}
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/8 rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden flex-1 flex flex-col justify-between min-h-[350px]">
                
                {/* Accent indicator glow */}
                <div className={`absolute -top-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-tr ${
                  pillarCards[activePillar].accent === 'saffron' ? 'from-saffron/10 to-saffron/2' : 'from-green/10 to-green/2'
                } blur-2xl pointer-events-none`} />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Active numeric step */}
                      <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                        <span className="font-poppins font-black text-xs tracking-[0.25em] text-white/40 uppercase">
                          {locale === 'kn' ? 'ಧ್ಯೇಯೋದ್ದೇಶ' : 'Vision Pillar'}
                        </span>
                        <span className={`font-cinzel text-xl font-bold ${
                          pillarCards[activePillar].accent === 'saffron' ? 'text-saffron' : 'text-green'
                        }`}>
                          {pillarCards[activePillar].id} / 04
                        </span>
                      </div>

                      {/* Animated Active Icon */}
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 bg-white/5 shadow-inner ${
                        pillarCards[activePillar].accent === 'saffron' ? 'border-saffron/20 text-saffron' : 'border-green/20 text-green'
                      }`}>
                        {(() => {
                          const IconComponent = pillarCards[activePillar].icon;
                          return <IconComponent size={28} strokeWidth={1.5} className="animate-float" style={{ animationDuration: '4s' }} />;
                        })()}
                      </div>

                      {/* Active Title */}
                      <h3 className="font-poppins text-xl md:text-2xl font-black text-white leading-tight mb-4 tracking-wide">
                        {pillarCards[activePillar].title}
                      </h3>

                      {/* Active Narrative Description */}
                      <p className="font-inter text-gray-300 text-[14.5px] leading-relaxed font-light">
                        {pillarCards[activePillar].description}
                      </p>
                    </div>

                    {/* Standardized Cabinet Action Link */}
                    <div className="pt-8 border-t border-white/5 mt-6">
                      <a 
                        href="#contact" 
                        className={`group inline-flex items-center gap-2 font-poppins font-bold text-xs uppercase tracking-wider transition-colors duration-300 ${
                          pillarCards[activePillar].accent === 'saffron' ? 'text-saffron hover:text-white' : 'text-green hover:text-white'
                        }`}
                      >
                        {locale === 'kn' ? 'ನಮ್ಮೊಂದಿಗೆ ಕೈಜೋಡಿಸಿ' : 'Contribute To Vision'} 
                        <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* ───── RIGHT PANE: GRID CARDS NAVIGATION (7 COLS) ───── */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 z-10">
              {pillarCards.map((card, idx) => {
                const isActive = activePillar === idx;
                const IconComp = card.icon;

                return (
                  <motion.div
                    key={idx}
                    onClick={() => setActivePillar(idx)}
                    onMouseEnter={() => setActivePillar(idx)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className={`relative p-7 rounded-[1.8rem] border backdrop-blur-md cursor-pointer transition-all duration-300 flex flex-col justify-between h-[210px] select-none ${
                      isActive 
                        ? `bg-white/[0.04] border-white/20 shadow-2xl ${card.shadow}`
                        : 'bg-white/[0.01] border-white/5 hover:bg-white/[0.02] hover:border-white/10'
                    }`}
                  >
                    {/* Ring highlight overlay on active card */}
                    {isActive && (
                      <div className={`absolute inset-0 rounded-[1.8rem] border-2 bg-gradient-to-br ${
                        card.accent === 'saffron' ? 'from-saffron/30 to-transparent' : 'from-green/30 to-transparent'
                      } pointer-events-none opacity-40`} />
                    )}

                    {/* Card Top Details */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border bg-white/5 transition-all duration-300 ${
                          isActive 
                            ? card.accent === 'saffron' ? 'border-saffron/40 text-saffron' : 'border-green/40 text-green'
                            : 'border-white/5 text-white/50 group-hover:text-white/80'
                        }`}>
                          <IconComp size={20} strokeWidth={1.5} />
                        </div>
                        <span className="font-cinzel text-[11px] font-bold text-white/30 tracking-widest">
                          0{idx + 1}
                        </span>
                      </div>

                      <h4 className={`font-poppins font-bold text-[15px] leading-snug transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                      }`}>
                        {card.title}
                      </h4>
                    </div>

                    {/* Bottom Active indicator */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-3.5 mt-4">
                      <span className="text-[9px] font-bold tracking-widest text-white/30 uppercase">
                        {locale === 'kn' ? 'ಆದ್ಯತೆ' : 'Priority Area'}
                      </span>
                      
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive 
                          ? card.accent === 'saffron' ? 'bg-saffron shadow-[0_0_8px_rgba(242,140,40,0.8)]' : 'bg-green shadow-[0_0_8px_rgba(14,122,61,0.8)]'
                          : 'bg-white/10'
                      }`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
