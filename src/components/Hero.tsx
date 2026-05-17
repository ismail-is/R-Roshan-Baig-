"use client";

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Play, Users, Shield, TrendingUp, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

/* ──────── SLIDE DATA ──────── */
const slides = [
  {
    tagline: "A LEGACY OF LEADERSHIP, SERVICE & REPRESENTATION",
    heading1: "R. ROSHAN",
    heading2: "BAIG",
    subtitle: "Former Minister, Government of Karnataka",
    quote: "ಜನಸೇವೆಯೇ ನನ್ನ ಧ್ಯೇಯ, ಕನ್ನಡನಾಡು ನನ್ನ ಉಸಿರು.",
  },
  {
    tagline: "SEVEN-TIME MLA FROM SHIVAJINAGAR, BENGALURU",
    heading1: "PEOPLE'S",
    heading2: "LEADER",
    subtitle: "30+ Years of Dedicated Public Service",
    quote: "ಜನರ ಸೇವೆಯೇ ನನ್ನ ಕರ್ತವ್ಯ.",
  },
  {
    tagline: "MINISTER FOR HOME AFFAIRS, TOURISM & URBAN DEVELOPMENT",
    heading1: "VOICE OF",
    heading2: "KARNATAKA",
    subtitle: "Building a Progressive & Inclusive State",
    quote: "ಸಮಾನತೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿಗಾಗಿ.",
  },
];

/* ──────── ASHOKA CHAKRA SVG WATERMARK ──────── */
const AshokaChakra = ({ className = "" }: { className?: string }) => (
  <svg className={`${className} animate-spin-slow`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke="#000080" strokeWidth="1.5" strokeOpacity="0.08" />
    <circle cx="50" cy="50" r="8" stroke="#000080" strokeWidth="1.2" strokeOpacity="0.1" />
    <circle cx="50" cy="50" r="3" fill="#000080" fillOpacity="0.15" />
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
          stroke="#000080"
          strokeWidth="0.8"
          strokeOpacity="0.08"
        />
      );
    })}
    {/* Small outer half circles */}
    {[...Array(24)].map((_, i) => {
      const angle = (i * 360) / 24 + 7.5;
      const x = 50 + 44 * Math.cos((angle * Math.PI) / 180);
      const y = 50 + 44 * Math.sin((angle * Math.PI) / 180);
      return (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="1"
          fill="#000080"
          fillOpacity="0.12"
        />
      );
    })}
  </svg>
);

/* ──────── INDIAN FLAG WAVE SVG (LEFT) ──────── */
const FlagWaveLeft = () => (
  <svg className="absolute left-0 top-0 h-full w-[120px] md:w-[220px] z-[1] pointer-events-none" viewBox="0 0 200 1000" preserveAspectRatio="none" fill="none">
    <path d="M0 0 L80 0 Q 125 250 65 500 Q 5 750 85 1000 L0 1000 Z" fill="#F28C28" opacity="0.12" />
    <path d="M0 0 L55 0 Q 100 250 40 500 Q -20 750 60 1000 L0 1000 Z" fill="#FFFFFF" opacity="0.22" />
    <path d="M0 0 L30 0 Q 75 250 15 500 Q -45 750 35 1000 L0 1000 Z" fill="#0E7A3D" opacity="0.1" />
  </svg>
);

/* ──────── INDIAN FLAG WAVE SVG (RIGHT) ──────── */
const FlagWaveRight = () => (
  <svg className="absolute right-0 top-0 h-full w-[120px] md:w-[220px] z-[1] pointer-events-none" viewBox="0 0 200 1000" preserveAspectRatio="none" fill="none">
    <path d="M200 0 L120 0 Q 75 250 135 500 Q 195 750 115 1000 L200 1000 Z" fill="#0E7A3D" opacity="0.1" />
    <path d="M200 0 L145 0 Q 100 250 160 500 Q 220 750 140 1000 L200 1000 Z" fill="#FFFFFF" opacity="0.22" />
    <path d="M200 0 L170 0 Q 125 250 185 500 Q 245 750 165 1000 L200 1000 Z" fill="#F28C28" opacity="0.12" />
  </svg>
);

/* ──────── KARNATAKA MAP OUTLINE SVG ──────── */
const KarnatakaMap = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M150 10 L180 25 L210 20 L235 40 L260 35 L280 60 L290 90 L285 120 L275 140 L280 170 L270 200 L260 220 L265 250 L255 280 L240 300 L220 310 L200 330 L180 350 L160 370 L140 380 L120 370 L100 350 L85 330 L70 310 L55 290 L45 260 L35 230 L25 200 L20 170 L25 140 L30 110 L40 80 L55 55 L75 35 L100 20 L130 15 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.03" strokeOpacity="0.15" />
    <circle cx="180" cy="280" r="5" fill="currentColor" fillOpacity="0.25" />
    <text x="170" y="295" fontSize="8" fill="currentColor" fillOpacity="0.2" fontWeight="bold">BLR</text>
  </svg>
);

/* ──────── INC HAND SYMBOL SVG ──────── */
const INCHand = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="180" rx="55" ry="70" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.02" strokeOpacity="0.12" />
    <rect x="55" y="60" width="14" height="90" rx="7" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.02" strokeOpacity="0.1" />
    <rect x="75" y="40" width="14" height="110" rx="7" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.02" strokeOpacity="0.1" />
    <rect x="95" y="35" width="14" height="115" rx="7" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.02" strokeOpacity="0.1" />
    <rect x="115" y="45" width="14" height="105" rx="7" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.02" strokeOpacity="0.1" />
    <rect x="35" y="120" width="14" height="60" rx="7" transform="rotate(-30 35 120)" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.02" strokeOpacity="0.1" />
    <rect x="80" y="245" width="40" height="40" rx="5" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.02" strokeOpacity="0.08" />
  </svg>
);

/* ──────── FLOATING DYNAMIC PARTICLES ──────── */
const Particles = () => (
  <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
    {/* Animated Tricolor Confetti Sparks */}
    <div className="absolute top-[8%] left-[15%] w-2 h-2 rounded-full bg-saffron animate-ping opacity-60" style={{ animationDuration: '3s' }} />
    <div className="absolute top-[25%] left-[5%] w-3 h-3 rounded-full bg-saffron/20 animate-float" />
    <div className="absolute top-[68%] left-[8%] w-2.5 h-2.5 rounded-full bg-saffron/15 animate-float-slow" />
    
    <div className="absolute top-[18%] right-[10%] w-2 h-2 rounded-full bg-green animate-ping opacity-60" style={{ animationDuration: '4.5s' }} />
    <div className="absolute top-[55%] right-[5%] w-3 h-3 rounded-full bg-green/20 animate-float-slow" />
    <div className="absolute top-[78%] right-[12%] w-2.5 h-2.5 rounded-full bg-green/15 animate-float" />

    {/* Glowing Gold Particles */}
    <div className="absolute top-[40%] left-[25%] w-1.5 h-1.5 rounded-full bg-yellow-400/30 animate-pulse" />
    <div className="absolute top-[60%] right-[22%] w-2 h-2 rounded-full bg-yellow-400/20 animate-float" />

    {/* Geometric outlines */}
    <div className="absolute top-[12%] right-[30%] w-10 h-10 border border-saffron/10 rounded-xl rotate-12 animate-float-slow" />
    <div className="absolute top-[65%] left-[28%] w-8 h-8 border border-green/10 rounded-full animate-float" />

    {/* Subtly Animated Watermarks */}
    <KarnatakaMap className="absolute top-[8%] left-[2%] w-[240px] h-[340px] text-green opacity-[0.05] animate-float-slow hidden lg:block" />
    <INCHand className="absolute top-[12%] left-[36%] w-[240px] h-[340px] text-saffron opacity-[0.035] animate-float hidden lg:block" />
    <AshokaChakra className="absolute top-[6%] right-[3%] w-[180px] h-[180px] opacity-[0.05] hidden lg:block" />
  </div>
);

export default function Hero() {
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const yBadge = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Track cursor movement for interactive 3D lighting/tilt effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 45;
      const y = (clientY - window.innerHeight / 2) / 45;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const badges = [
    { icon: Users, label: "PEOPLE'S LEADER", accent: "text-saffron", bg: "bg-saffron/10" },
    { icon: Shield, label: "MINORITY VOICE", accent: "text-green", bg: "bg-green/10" },
    { icon: TrendingUp, label: "DEVELOPMENT ADVOCATE", accent: "text-saffron", bg: "bg-saffron/10" },
    { icon: Heart, label: "PUBLIC SERVANT", accent: "text-green", bg: "bg-green/10" },
  ];

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);
  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 8500); // Premium pacing
    return () => clearInterval(timer);
  }, [goNext]);

  const slide = slides[current];

  // Creative Cinematic reveal variants
  const wordRevealVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  const textVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream pt-28 pb-12 sm:pb-16">
      
      {/* ═══ INDIAN FLAG WAVE SHAPES ═══ */}
      <FlagWaveLeft />
      <FlagWaveRight />

      {/* ═══ PARTICLES ═══ */}
      <Particles />

      {/* ═══ DYNAMIC LIGHT SHOW BACKGROUND ═══ */}
      <motion.div style={{ y: yBg, opacity: fade }} className="absolute inset-0 z-0 pointer-events-none select-none">
        
        {/* Fullscreen Vidhana Soudha BG */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/vidhana_soudha_bg_1779009062639.png" 
            alt="Vidhana Soudha Background" 
            fill 
            className="object-cover object-center opacity-[0.16] mix-blend-multiply transition-transform duration-700 ease-out" 
            style={{
              transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px) scale(1.02)`
            }}
            priority 
          />
        </div>

        {/* Ambient Backlight Searchlights (Follows mouse subtly for high interactivity) */}
        <div 
          className="absolute rounded-full bg-gradient-to-tr from-saffron/18 via-saffron/5 to-transparent blur-[90px] w-[450px] h-[450px] transition-transform duration-500 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`,
            top: '15%',
            left: '15%'
          }}
        />
        <div 
          className="absolute rounded-full bg-gradient-to-bl from-green/18 via-green/5 to-transparent blur-[110px] w-[500px] h-[500px] transition-transform duration-500 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)`,
            bottom: '10%',
            right: '10%'
          }}
        />

        {/* Navy Blue Center Aura Glow */}
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-gradient-to-tr from-saffron/8 via-[#000080]/8 to-green/8 blur-[140px] opacity-75 animate-pulse" />

        {/* Laser beam light grid */}
        <div className="absolute inset-0 flex justify-around opacity-25">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-saffron/30 to-transparent" />
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/40 to-transparent" />
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-green/30 to-transparent" />
        </div>
      </motion.div>

      {/* ═══ MAIN LAYOUT CONTAINER ═══ */}
      <div className="max-w-[1440px] relative z-10 mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-6 min-h-[75vh]">

          {/* ───── LEFT: TEXT INFO (CINEMATIC REVEAL SLIDER) ───── */}
          <motion.div style={{ y: yText }} className="lg:col-span-5 flex flex-col justify-center relative z-20 text-left order-2 lg:order-1 mt-6 lg:mt-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Tagline Badge */}
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/60 rounded-full px-4 py-1.5 shadow-sm hover:shadow transition-shadow">
                  <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-green font-poppins">
                    {slide.tagline}
                  </span>
                </div>

                {/* Name Heading with Reveal Animation */}
                <div className="overflow-hidden py-1">
                  <motion.h1 
                    initial="hidden"
                    animate="visible"
                    variants={wordRevealVariants}
                    className="font-poppins font-black leading-[1.0] tracking-[-0.04em]"
                  >
                    <span className="block text-[3rem] sm:text-[4.2rem] lg:text-[4.8rem] xl:text-[5.8rem] text-navy">
                      {slide.heading1}
                    </span>
                    <span className="block text-[3rem] sm:text-[4.2rem] lg:text-[4.8rem] xl:text-[5.8rem] text-green bg-gradient-to-r from-green via-green-dark to-green bg-clip-text text-transparent">
                      {slide.heading2}
                    </span>
                  </motion.h1>
                </div>

                {/* Subtitle */}
                <div className="space-y-1.5">
                  <h2 className="font-poppins text-base sm:text-lg font-bold text-navy leading-snug">
                    {slide.subtitle}
                  </h2>
                  <p className="font-inter text-xs sm:text-sm text-gray-500 flex items-center gap-2">
                    <span className="font-semibold text-green">Seven-Time MLA</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    <span className="hover:text-navy transition-colors">Shivajinagar, Bengaluru</span>
                  </p>
                </div>

                {/* Kannada Quote Accent Box */}
                <div className="relative pl-5 border-l-[3.5px] border-green/30 py-2 bg-gradient-to-r from-green/3 via-transparent to-transparent rounded-r-xl">
                  <span className="absolute -top-3 -left-1 text-4xl font-serif text-green/15 select-none leading-none">&ldquo;</span>
                  <p className="font-noto-kannada text-sm sm:text-base font-bold text-navy/85 italic leading-relaxed">
                    {slide.quote}
                  </p>
                </div>

                {/* Interactive CTAs */}
                <div className="flex flex-wrap gap-3.5 pt-2">
                  <a
                    href="#about"
                    className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-green to-green-dark text-white px-7 py-3.5 rounded-full font-poppins font-bold text-sm shadow-[0_8px_25px_rgba(14,122,61,0.22)] hover:shadow-[0_12px_35px_rgba(14,122,61,0.35)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden relative"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explore My Journey <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-green-dark to-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                  
                  <a
                    href="#gallery"
                    className="group inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-navy border border-gray-200 px-7 py-3.5 rounded-full font-poppins font-bold text-sm shadow-sm hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Watch My Vision
                    <span className="w-5.5 h-5.5 rounded-full bg-gray-100 group-hover:bg-navy group-hover:text-white inline-flex items-center justify-center transition-colors">
                      <Play size={10} className="ml-[1.5px] text-navy group-hover:text-white transition-colors" />
                    </span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Premium Controls */}
            <div className="flex items-center gap-4 mt-8">
              <button onClick={goPrev} className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-navy hover:bg-green hover:text-white hover:border-green transition-all shadow-sm">
                <ChevronLeft size={18} />
              </button>
              {/* Animated Progress Dots */}
              <div className="flex items-center gap-2.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`rounded-full transition-all duration-500 ${
                      i === current
                        ? 'w-9 h-2.5 bg-gradient-to-r from-green to-saffron shadow-sm'
                        : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button onClick={goNext} className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-navy hover:bg-green hover:text-white hover:border-green transition-all shadow-sm">
                <ChevronRight size={18} />
              </button>
              <span className="font-poppins text-xs font-bold text-gray-400 ml-2">
                <span className="text-navy text-base">{String(current + 1).padStart(2, '0')}</span>
                <span className="mx-1">/</span>
                {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </motion.div>

          {/* ───── CENTER: HIGH-CREATIVITY CIRCULAR PORTRAIT (3D TILT + TRICOLOR ROTATION + GLOW) ───── */}
          <div 
            className="lg:col-span-4 flex items-center justify-center relative order-1 lg:order-2 py-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            
            {/* Interactive 3D tilt element */}
            <div 
              className="relative w-[285px] h-[285px] sm:w-[350px] sm:h-[350px] lg:w-[380px] lg:h-[380px] xl:w-[415px] xl:h-[415px] flex items-center justify-center transition-all duration-700 ease-out"
              style={{
                transform: `rotateY(${mousePosition.x * 0.4}deg) rotateX(${mousePosition.y * -0.4}deg) scale(${isHovered ? 1.03 : 1})`,
                perspective: '1000px'
              }}
            >
              
              {/* AURA GLOW - Indian Flag Color Radial Aura waves radiating behind circle when hovered */}
              <div 
                className={`absolute inset-[-12px] rounded-full blur-2xl opacity-60 transition-all duration-700 mix-blend-screen z-0 ${
                  isHovered ? 'scale-110 opacity-80' : 'scale-95 opacity-40'
                }`}
                style={{
                  background: 'radial-gradient(circle, rgba(242,140,40,0.2) 0%, rgba(255,255,255,0.15) 50%, rgba(14,122,61,0.2) 100%)'
                }}
              />

              {/* 1. Indian Flag Tricolor Border Ring (Outer Rotating Layer) */}
              <div 
                className={`absolute inset-0 rounded-full bg-gradient-to-tr from-[#0E7A3D] via-[#FFFFFF] to-[#F28C28] p-[4px] animate-spin-slow shadow-[0_0_55px_rgba(242,140,40,0.22)] opacity-95 transition-all duration-750 ${
                  isHovered ? 'shadow-[0_0_70px_rgba(14,122,61,0.3)]' : ''
                }`}
              >
                <div className="w-full h-full rounded-full bg-cream" />
              </div>
              
              {/* Secondary reverse-rotating border ring for a sparkling optical overlay */}
              <div className="absolute inset-[6px] rounded-full bg-gradient-to-bl from-[#F28C28] via-[#FFFFFF] to-[#0E7A3D] p-[2.5px] opacity-80 animate-spin-slow-reverse">
                <div className="w-full h-full rounded-full bg-cream" />
              </div>

              {/* Navy blue internal accent ring */}
              <div className="absolute inset-[11px] rounded-full border border-navy/10 z-1" />

              {/* 2. Inner Glowing Mask Frame (Subtle backlit inside circle) */}
              <div 
                className="absolute inset-[13px] rounded-full overflow-hidden bg-gradient-to-b from-[#fdfbf7] to-[#f4f0e6] shadow-[inset_0_4px_25px_rgba(0,0,0,0.06),0_18px_45px_rgba(10,42,102,0.15)] flex items-center justify-center border-4 border-white/95 z-2"
              >
                
                {/* Backlit gradients inside the circle */}
                <div className="absolute inset-0 bg-gradient-to-t from-green/12 via-white/50 to-saffron/12 z-0" />
                <div className="absolute -bottom-8 w-full h-[55%] bg-gradient-to-t from-green/22 to-transparent blur-md z-1" />

                {/* 3. The Portrait Image - No Background / Styled seamlessly */}
                <div className="relative w-[92%] h-[92%] rounded-full overflow-hidden">
                  <Image
                    src="/images/roshan baig/image.png"
                    alt="R. Roshan Baig Portrait"
                    fill
                    quality={100}
                    unoptimized={true}
                    className="object-cover object-top scale-102 transition-transform duration-700 ease-out select-none pointer-events-none"
                    style={{
                      transform: isHovered ? 'scale(1.06) translateY(-2px)' : 'scale(1.02) translateY(0px)'
                    }}
                    priority
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
                  />
                </div>
              </div>

              {/* Ashoka Chakra floating watermark centered behind the portrait circle slightly offset */}
              <AshokaChakra className="absolute inset-[24px] opacity-[0.06] z-1 pointer-events-none" />

              {/* 4. Creative floating items around the circle (Floating Tag Badges) */}
             

            
            </div>
          </div>

          {/* ───── RIGHT: DESKTOP LEADER BADGES ───── */}
          <motion.div
            style={{ y: yBadge }}
            className="lg:col-span-3 flex flex-col items-center lg:items-end gap-8 pb-10 relative z-20 order-3 hidden lg:flex"
          >
            {/* 7-Time MLA Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.5 }}
              className="relative flex flex-col items-center group cursor-default"
            >
              {/* Badge container with tricolor top line */}
              <div className="relative w-[125px] h-[125px] bg-white rounded-2xl shadow-[0_12px_32px_rgba(10,42,102,0.06)] hover:shadow-[0_15px_40px_rgba(14,122,61,0.12)] border border-gray-100 flex flex-col items-center justify-center p-3 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-white to-green" />
                
                <span className="font-poppins text-[3rem] font-black text-navy leading-none group-hover:scale-105 transition-transform">7</span>
                <span className="font-inter text-[9px] font-bold text-green tracking-[0.2em] uppercase mt-1">TIME</span>
                <span className="font-inter text-[9px] font-bold text-green tracking-[0.2em] uppercase -mt-0.5">MLA</span>
              </div>
              <div className="flex gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-saffron text-[11px] animate-pulse">★</span>
                ))}
              </div>
            </motion.div>

            {/* Premium Feature Labels */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-3.5 w-full max-w-[245px]"
            >
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/75 hover:bg-white border border-gray-200/60 rounded-2xl p-3 shadow-sm hover:shadow-md hover:-translate-x-2 transition-all duration-350 cursor-default group"
                >
                  <div className={`w-9.5 h-9.5 rounded-xl flex items-center justify-center ${b.bg} group-hover:scale-105 transition-transform`}>
                    <b.icon size={16} strokeWidth={2.5} className={b.accent} />
                  </div>
                  <span className="font-poppins text-[10.5px] font-bold text-navy tracking-[0.05em]">{b.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ═══ MOBILE FLOATING MLA BADGE ═══ */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.6 }}
        className="lg:hidden absolute bottom-6 right-4 z-30 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-gray-100 flex items-center gap-2.5"
      >
        <span className="font-poppins text-2.5rem font-black text-navy leading-none">7</span>
        <div className="flex flex-col">
          <span className="font-inter text-[8px] font-bold text-green tracking-widest uppercase leading-none">TIME MLA</span>
          <span className="font-inter text-[6px] text-gray-400 uppercase mt-0.5">SHIVAJINAGAR</span>
        </div>
      </motion.div>

      {/* ═══ BOTTOM TRICOLOR BAR ACCENT ═══ */}
      <div className="absolute bottom-0 left-0 right-0 h-[4px] flex z-30">
        <div className="flex-1 bg-saffron" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-green" />
      </div>
    </section>
  );
}
