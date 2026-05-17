"use client";

import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { 
  Users, 
  Building2, 
  Shield, 
  Compass, 
  Award, 
  Heart, 
  Map, 
  Sparkles, 
  ArrowRight,
  Calendar,
  Clock,
  MapPin
} from 'lucide-react';

/* ──────── ASHOKA CHAKRA WATERMARK BACKGROUND ──────── */
const AshokaChakraBg = () => (
  <svg 
    className="absolute w-[500px] h-[500px] lg:w-[650px] lg:h-[650px] top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-[0.025] pointer-events-none animate-spin-slow-reverse text-saffron select-none" 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.8" />
    <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="50" cy="50" r="2.5" fill="currentColor" />
    {/* 24 Spoke rays */}
    {[...Array(24)].map((_, i) => {
      const angle = (i * 360) / 24;
      return (
        <line
          key={i}
          x1="50"
          y1="50"
          x2={50 + 37 * Math.cos((angle * Math.PI) / 180)}
          y2={50 + 37 * Math.sin((angle * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="0.4"
        />
      );
    })}
  </svg>
);

/* ──────── FLOATING TRICOLOR PARTICLES ──────── */
const ParticleBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
    <motion.div
      animate={{
        y: [0, -25, 0],
        x: [0, 15, 0],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-[20%] left-[8%] w-4 h-4 rounded-full bg-saffron/15 blur-[2px]"
    />
    <motion.div
      animate={{
        y: [0, 30, 0],
        x: [0, -20, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
      className="absolute bottom-[20%] right-[10%] w-5 h-5 rounded-full bg-green/15 blur-[2px]"
    />
    <div className="absolute top-[50%] left-[25%] w-3 h-3 rounded-full bg-saffron/10 animate-pulse" />
    <div className="absolute bottom-[35%] left-[8%] w-3 h-3 rounded-full bg-green/10 animate-float" />
    <div className="absolute top-[30%] right-[20%] w-2 h-2 rounded-full bg-saffron/10 animate-float-slow" style={{ animationDelay: '3s' }} />
    <div className="absolute top-[70%] right-[30%] w-3 h-3 rounded-full bg-green/20 animate-pulse" style={{ animationDuration: '5s' }} />
  </div>
);

export default function Experience() {
  const tAbout = useTranslations('About');
  const tExp = useTranslations('Experience');
  const params = useParams();
  const locale = params?.locale || 'en';
  
  const [activeTab, setActiveTab] = useState<'timeline' | 'expertise'>('timeline');
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for vertical timeline height
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Tab 1: Chronological Timeline
  const timelineMilestones = [
    {
      year: "1985",
      title: tAbout('timeline.t1') || "Entered Public Life & First Elected as MLA (1985)",
      desc: locale === 'kn' 
        ? "ಕರ್ನಾಟಕ ವಿಧಾನ ಸಭೆಗೆ ಆಯ್ಕೆಯಾಗುವ ಮೂಲಕ ಸಾರ್ವಜನಿಕ ಪ್ರಾತಿನಿಧ್ಯ ಮತ್ತು ತಳಮಟ್ಟದ ಸಬಲೀಕರಣದ ಅದ್ಭುತ ವೃತ್ತಿಜೀವನವನ್ನು ಪ್ರಾರಂಭಿಸಿದರು."
        : "Elected to the Karnataka Legislative Assembly from Jayamahal, initiating an illustrious, decades-long journey of public service and community representation.",
      icon: Award,
      accent: "saffron"
    },
    {
      year: "1994",
      title: tAbout('timeline.t2') || "Appointed Minister of Home Affairs",
      desc: locale === 'kn'
        ? "ರಾಜ್ಯದ ಭದ್ರತೆ ಮತ್ತು ಆಡಳಿತಾತ್ಮಕ ನ್ಯಾಯವನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ, ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸಾರ್ವಜನಿಕ ಸುರಕ್ಷತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಸುಧಾರಣೆಗಳನ್ನು ತಂದರು."
        : "Served as the Minister of State for Home Affairs, introducing crucial reforms for community harmony, state security, and civic administrative efficiency.",
      icon: Shield,
      accent: "green"
    },
    {
      year: "1999",
      title: tAbout('timeline.t3') || "Appointed Minister for Tourism",
      desc: locale === 'kn'
        ? "ಕರ್ನಾಟಕವನ್ನು ಜಾಗತಿಕ ಪ್ರವಾಸಿ ತಾಣವಾಗಿ ರೂಪಿಸಲು ಪ್ರವಾಸೋದ್ಯಮ ಮತ್ತು ಮಧ್ಯಮ ಕೈಗಾರಿಕೆಗಳಿಗೆ ಭದ್ರ ಬುನಾದಿ ಹಾಕಿದರು."
        : "Appointed Cabinet Minister for Tourism & Medium Scale Industries, placing Karnataka's rich cultural heritage on the global map and boosting local manufacturing.",
      icon: Compass,
      accent: "saffron"
    },
    {
      year: "2004",
      title: tAbout('timeline.t4') || "Appointed Minister for Urban Development & Haj",
      desc: locale === 'kn'
        ? "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಪ್ರಮುಖ ಮೂಲಸೌಕರ್ಯ ಯೋಜನೆಗಳನ್ನು ಮುನ್ನಡೆಸಿದರು ಮತ್ತು ಹಜ್ ಯಾತ್ರಾರ್ಥಿಗಳಿಗೆ ಆಧುನಿಕ ಸೌಲಭ್ಯಗಳನ್ನು ಕಲ್ಪಿಸಿದರು."
        : "Led Urban Development portfolios to plan and execute key civic infrastructure grids in Bengaluru, while modernizing logistics for international pilgrims.",
      icon: Building2,
      accent: "green"
    },
    {
      year: "2013",
      title: locale === 'kn' ? "ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿ ಹಾಗೂ ಹಜ್ ಸಚಿವರು" : "Minister for Infrastructure Development, Information & Haj",
      desc: locale === 'kn'
        ? "ಬೃಹತ್ ಮೂಲಸೌಕರ್ಯ ಯೋಜನೆಗಳು, ವಿಮಾನ ನಿಲ್ದಾಣಗಳ ನವೀಕರಣ ಮತ್ತು ಕಲ್ಯಾಣ ಕಾರ್ಯಕ್ರಮಗಳ ಜಾರಿಗೆ ಆದ್ಯತೆ ನೀಡಿದರು."
        : "Spearheaded high-impact transport and communication channels, building key airports, state highways, and robust minority welfare systems.",
      icon: Map,
      accent: "saffron"
    },
    {
      year: "2018",
      title: locale === 'kn' ? "ಶಾಸಕರಾಗಿ ೭ನೇ ಬಾರಿಗೆ ಭರ್ಜರಿ ಜಯ" : "Elected MLA for Historic 7th Term",
      desc: locale === 'kn'
        ? "ಶಿವಾಜಿನಗರ ಕ್ಷೇತ್ರದಿಂದ ೭ನೇ ಬಾರಿಗೆ ಭರ್ಜರಿ ಜಯಗಳಿಸಿ, ಜನರ ಅಪ್ರತಿಮ ನಂಬಿಕೆ ಮತ್ತು ಪ್ರೀತಿಯನ್ನು ಗಳಿಸಿದರು."
        : "Secured a historic 7th term in the Karnataka Assembly representing Shivajinagar constituency, reinforcing a legacy of grassroots trust and performance.",
      icon: Sparkles,
      accent: "green"
    }
  ];

  // Tab 2: Portfolio Governance Cards from Translations
  const portfolioIcons = [
    { icon: Building2, color: "from-saffron/10 to-saffron/20 border-saffron/20 text-saffron" }, // Urban Development
    { icon: Shield, color: "from-navy-light/10 to-navy-light/20 border-navy-light/20 text-navy-light" }, // Home Affairs
    { icon: Compass, color: "from-green/10 to-green/20 border-green/20 text-green" }, // Tourism & Industries
    { icon: Users, color: "from-saffron/10 to-saffron/20 border-saffron/20 text-saffron" }, // Haj & Wakf
    { icon: Award, color: "from-green/10 to-green/20 border-green/20 text-green" }, // Seven-Time MLA
    { icon: Heart, color: "from-navy-light/10 to-navy-light/20 border-navy-light/20 text-navy-light" } // Social Activism
  ];

  const cardsCount = 6;
  const portfolioCards = Array.from({ length: cardsCount }).map((_, i) => {
    // Dynamic fallbacks if translated cards do not exist in some locales
    const defaultTitles = [
      "Urban Development",
      "Home Affairs",
      "Tourism & Industries",
      "Haj & Wakf",
      "Seven-Time MLA",
      "Social Activism"
    ];
    const defaultDescs = [
      "Spearheaded major infrastructure and civic projects in Bengaluru as the Minister for Urban Development.",
      "Served as the Minister of Home Affairs, overseeing state security and public order.",
      "Promoted Karnataka's rich heritage globally as Minister for Tourism and Medium & Small Scale Industries.",
      "Ensured smooth and efficient management of Haj operations for pilgrims and community welfare.",
      "Represented the Shivajinagar and Jayamahal constituencies over seven consecutive terms with strong public support.",
      "Advocating for youth empowerment, education, and issues concerning minority communities."
    ];

    return {
      title: tExp(`cards.${i}.title`) || defaultTitles[i],
      desc: tExp(`cards.${i}.desc`) || defaultDescs[i],
      ...portfolioIcons[i]
    };
  });

  return (
    <section 
      id="leadership" 
      ref={sectionRef} 
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#051533] via-[#071E4A] to-[#04122d] overflow-hidden text-white z-10"
    >
      {/* ═══ BACKGROUND ELEMENT & AMBIENT GLOW ═══ */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-saffron/10 via-saffron/2 to-transparent blur-[110px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-green/10 via-green/2 to-transparent blur-[130px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_75%)] pointer-events-none" />

      {/* ═══ ASHOKA CHAKRA WATERMARK ═══ */}
      <AshokaChakraBg />

      {/* ═══ FLOATING SPARKS ═══ */}
      <ParticleBackground />

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
        
        {/* ═══ SECTION HEADER ═══ */}
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4.5 py-2 backdrop-blur-md shadow-inner"
          >
            <span className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-white border border-gray-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" style={{ animationDelay: '0.4s' }} />
            </span>
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-saffron font-poppins">
              {tExp('title') || 'LEADERSHIP & EXPERTISE'}
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-poppins text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl"
          >
            {locale === 'kn' ? (
              <>ಅನುಭವದ ನಾಯಕತ್ವ,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-white to-green">ಜನಪರ ಕಲ್ಯಾಣದ ಸಿದ್ಧಾಂತ</span></>
            ) : (
              <>Driven By Governance,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-white to-green">Guided by Progressive Values</span></>
            )}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-inter text-gray-300 text-[15px] md:text-base max-w-xl leading-relaxed font-light"
          >
            {tExp('subtitle') || 'A legendary public service career bridging local civic administration with major state cabinet development projects.'}
          </motion.p>
        </div>

        {/* ═══ INTERACTIVE SLIDING TAB SELECTOR ═══ */}
        <div className="flex justify-center mb-20 relative z-20">
          <div className="p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md inline-flex gap-2 shadow-xl">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`relative px-6 py-2.5 rounded-full font-poppins font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer select-none ${activeTab === 'timeline' ? 'text-navy-dark' : 'text-white/60 hover:text-white'}`}
            >
              {activeTab === 'timeline' && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-saffron to-saffron-dark shadow-[0_4px_20px_rgba(242,140,40,0.5)]"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              {locale === 'kn' ? 'ಸಾರ್ವಜನಿಕ ಜೀವನ ಪಯಣ' : 'Legislative Career'}
            </button>
            
            <button
              onClick={() => setActiveTab('expertise')}
              className={`relative px-6 py-2.5 rounded-full font-poppins font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer select-none ${activeTab === 'expertise' ? 'text-navy-dark' : 'text-white/60 hover:text-white'}`}
            >
              {activeTab === 'expertise' && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-green to-green-dark shadow-[0_4px_20px_rgba(14,122,61,0.5)]"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              {locale === 'kn' ? 'ಆಡಳಿತ ಕ್ಷೇತ್ರಗಳು' : 'Governance Portfolios'}
            </button>
          </div>
        </div>

        {/* ═══ CONTENT TRANSITION AREA ═══ */}
        <AnimatePresence mode="wait">
          {activeTab === 'timeline' ? (
            
            /* ──────── TAB 1: SCROLL-LINKED VERTICAL TIMELINE ──────── */
            <motion.div
              key="timeline-tab"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative min-h-[800px] w-full"
            >
              {/* Timeline Dynamic Track (Desktop: Centered, Mobile: Left Aligned) */}
              <div className="absolute left-8 lg:left-1/2 top-10 bottom-10 w-[3px] -translate-x-1/2 bg-white/10 rounded-full">
                <motion.div 
                  className="absolute top-0 w-full rounded-full bg-gradient-to-b from-saffron via-white to-green origin-top"
                  style={{ 
                    height: "100%",
                    scaleY: scaleY,
                    boxShadow: "0 0 15px rgba(242,140,40,0.5)" 
                  }}
                />
              </div>

              {/* Milestones Container */}
              <div className="space-y-16 lg:space-y-24 relative">
                {timelineMilestones.map((milestone, idx) => {
                  const isEven = idx % 2 === 0;
                  
                  return (
                    <div key={idx} className="flex flex-col lg:flex-row items-start lg:items-center relative w-full">
                      
                      {/* Left Side Content (Desktop only, otherwise spacer) */}
                      <div className="hidden lg:block lg:w-1/2 pr-16 text-right">
                        {isEven && (
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, type: "spring", bounce: 0.15 }}
                            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:border-saffron/40 hover:bg-white/[0.05] transition-all duration-300 group text-left cursor-default inline-block max-w-[500px]"
                          >
                            <span className="inline-block text-2xl font-black font-cinzel text-saffron tracking-wider mb-2.5">
                              {milestone.year}
                            </span>
                            <h3 className="text-xl font-bold font-poppins text-white leading-snug mb-3 group-hover:text-saffron transition-colors">
                              {milestone.title}
                            </h3>
                            <p className="font-inter text-gray-300 text-sm leading-relaxed font-light">
                              {milestone.desc}
                            </p>
                          </motion.div>
                        )}
                      </div>

                      {/* Timeline Central Node (Date Icon & Pulser) */}
                      <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                        <motion.div 
                          initial={{ scale: 0.6, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
                          whileHover={{ scale: 1.15 }}
                          className={`w-12 h-12 rounded-full flex items-center justify-center border-2 bg-[#071E4A] cursor-pointer relative group ${
                            milestone.accent === 'saffron' ? 'border-saffron shadow-[0_0_12px_rgba(242,140,40,0.3)]' : 'border-green shadow-[0_0_12px_rgba(14,122,61,0.3)]'
                          }`}
                        >
                          <milestone.icon size={20} className={milestone.accent === 'saffron' ? 'text-saffron' : 'text-green'} strokeWidth={1.8} />
                          
                          {/* Pulsing Aura */}
                          <div className={`absolute -inset-1.5 rounded-full -z-10 animate-ping opacity-20 ${
                            milestone.accent === 'saffron' ? 'bg-saffron' : 'bg-green'
                          }`} style={{ animationDuration: '3s' }} />
                        </motion.div>
                      </div>

                      {/* Right Side Content (Desktop right side, Mobile: right column) */}
                      <div className="w-full lg:w-1/2 pl-20 lg:pl-16 text-left">
                        {(!isEven || typeof window !== 'undefined') && (
                          <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, type: "spring", bounce: 0.15 }}
                            className={`bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:bg-white/[0.05] transition-all duration-300 group cursor-default max-w-[500px] ${
                              !isEven ? 'hover:border-green/40' : 'hover:border-saffron/40 lg:hidden'
                            }`}
                          >
                            {/* Year on Mobile View */}
                            <span className={`inline-block text-2xl font-black font-cinzel tracking-wider mb-2.5 ${
                              !isEven ? 'text-green' : 'text-saffron lg:hidden'
                            }`}>
                              {milestone.year}
                            </span>
                            <h3 className={`text-xl font-bold font-poppins text-white leading-snug mb-3 transition-colors ${
                              !isEven ? 'group-hover:text-green' : 'group-hover:text-saffron'
                            }`}>
                              {milestone.title}
                            </h3>
                            <p className="font-inter text-gray-300 text-sm leading-relaxed font-light">
                              {milestone.desc}
                            </p>
                          </motion.div>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Bottom Scrolling Indicator CTA */}
              <div className="flex justify-center mt-20">
                <a 
                  href="#portfolio"
                  className="group inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:border-saffron/40 hover:bg-white/10 text-white px-7 py-3.5 rounded-full font-poppins font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg relative overflow-hidden"
                >
                  <Clock size={14} className="text-saffron animate-pulse" />
                  <span className="relative z-10 flex items-center gap-1.5">
                    {locale === 'kn' ? 'ಸಚಿವ ಸಂಪುಟ ಖಾತೆಗಳು' : 'Explore Portfolios'} 
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
            </motion.div>
          ) : (
            
            /* ──────── TAB 2: EXCELLENCE & GOVERNANCE PORTFOLIOS GRID ──────── */
            <motion.div
              key="expertise-tab"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {portfolioCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6, type: "spring" }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                    borderColor: card.color.includes('saffron') ? 'rgba(242,140,40,0.4)' : 'rgba(14,122,61,0.4)'
                  }}
                  className="relative bg-white/[0.02] backdrop-blur-xl border border-white/8 rounded-3xl p-8 flex flex-col justify-between h-[300px] overflow-hidden group cursor-pointer transition-all duration-300"
                >
                  {/* Glowing background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color.includes('saffron') ? 'from-saffron/[0.02] to-saffron/[0.06]' : 'from-green/[0.02] to-green/[0.06]'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div>
                    {/* Glassmorphic Icon Wrapper */}
                    <div className="relative mb-6 inline-flex">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 bg-white/5 ${
                        card.color.includes('saffron') 
                          ? 'border-saffron/20 text-saffron group-hover:bg-saffron/10 group-hover:border-saffron/40' 
                          : card.color.includes('green') 
                            ? 'border-green/20 text-green group-hover:bg-green/10 group-hover:border-green/40' 
                            : 'border-white/10 text-navy-light group-hover:bg-white/10 group-hover:border-white/30'
                      }`}>
                        <card.icon size={26} strokeWidth={1.4} className="transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110" />
                      </div>
                      
                      {/* Pulse circle indicator */}
                      <div className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border border-navy-dark animate-pulse ${
                        card.color.includes('saffron') ? 'bg-saffron' : card.color.includes('green') ? 'bg-green' : 'bg-navy-light'
                      }`} />
                    </div>

                    <h3 className="font-poppins font-black text-lg md:text-xl text-white leading-tight mb-3 tracking-wide group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    
                    <p className="font-inter text-gray-300 text-sm leading-relaxed font-light line-clamp-4">
                      {card.desc}
                    </p>
                  </div>

                  {/* Card bottom footer detail */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-6">
                    <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase group-hover:text-white/60 transition-colors">
                      {card.color.includes('saffron') ? 'Cabinet Focus' : card.color.includes('green') ? 'Public Service' : 'State Governance'}
                    </span>
                    <span className={`w-6 h-[2.5px] rounded-full transition-all duration-500 group-hover:w-12 ${
                      card.color.includes('saffron') ? 'bg-saffron' : card.color.includes('green') ? 'bg-green' : 'bg-white/30'
                    }`} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
