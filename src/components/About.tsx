"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, UserCheck, TrendingUp, Users, Eye } from 'lucide-react';

/* ──────── ASHOKA CHAKRA SVG WATERMARK ──────── */
const AshokaChakraAbout = ({ className = "" }: { className?: string }) => (
  <svg className={`${className} animate-spin-slow`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke="#000080" strokeWidth="1.2" strokeOpacity="0.04" />
    <circle cx="50" cy="50" r="8" stroke="#000080" strokeWidth="1" strokeOpacity="0.06" />
    <circle cx="50" cy="50" r="3" fill="#000080" fillOpacity="0.1" />
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
          strokeWidth="0.6"
          strokeOpacity="0.05"
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
          r="0.8"
          fill="#000080"
          fillOpacity="0.08"
        />
      );
    })}
  </svg>
);

/* ──────── DYNAMIC BACKGROUND PARTICLES ──────── */
const AboutParticles = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
    {/* Floating Saffron Spark */}
    <motion.div
      animate={{
        y: [0, -16, 0],
        x: [0, 10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-[12%] left-[6%] w-3 h-3 rounded-full bg-saffron/20 blur-[1px]"
    />
    
    {/* Floating Green Spark */}
    <motion.div
      animate={{
        y: [0, 18, 0],
        x: [0, -10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5,
      }}
      className="absolute bottom-[16%] right-[8%] w-3.5 h-3.5 rounded-full bg-green/20 blur-[1px]"
    />
    
    {/* Pulsing Sparks */}
    <div className="absolute top-[45%] left-[40%] w-2 h-2 rounded-full bg-saffron/25 animate-pulse" />
    <div className="absolute bottom-[35%] left-[15%] w-2.5 h-2.5 rounded-full bg-green/20 animate-float" />
    <div className="absolute top-[28%] right-[15%] w-2 h-2 rounded-full bg-saffron/15 animate-float-slow" style={{ animationDelay: '2s' }} />
    <div className="absolute top-[65%] right-[32%] w-1.5 h-1.5 rounded-full bg-green/30 animate-pulse" style={{ animationDuration: '4s' }} />
  </div>
);

export default function About() {
  const t = useTranslations('About');

  const highlights = [
    { icon: UserCheck, label: "Experienced\nLeader" },
    { icon: TrendingUp, label: "Proven\nTrack Record" },
    { icon: Users, label: "People\nCentric" },
    { icon: Eye, label: "Visionary\nLeadership" },
  ];

  return (
    <section id="about" className="section-padding bg-cream relative overflow-hidden">
      
      {/* ═══ ELEGANT TRICOLOR BACKGROUND GLOWS ═══ */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-saffron/10 via-saffron/2 to-transparent blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-green/10 via-green/2 to-transparent blur-[110px] pointer-events-none z-0" />
      <div className="absolute top-[25%] left-[20%] w-[55%] h-[45%] bg-gradient-to-r from-saffron/4 via-white/80 to-green/4 blur-[120px] pointer-events-none z-0" />

      {/* ═══ FLOATING PARTICLES ═══ */}
      <AboutParticles />

      <div className="max-w-[1400px] relative z-10 mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-20 items-center">

          {/* ───── LEFT: MULTI-LAYER INTERACTIVE COLLAGE ───── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[2/3] max-w-[420px] mx-auto">
              
              {/* Background Saffron Grid Dots */}
              <div 
                className="absolute top-0 left-0 w-32 h-32 opacity-25 pointer-events-none -translate-x-6 -translate-y-6"
                style={{ backgroundImage: 'radial-gradient(var(--color-saffron) 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}
              />
              
              {/* Background Green Grid Dots */}
              <div 
                className="absolute bottom-0 right-0 w-32 h-32 opacity-25 pointer-events-none translate-x-6 translate-y-6"
                style={{ backgroundImage: 'radial-gradient(var(--color-green) 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}
              />

              {/* Accent Corner Frame */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-[3.5px] border-l-[3.5px] border-saffron/30 rounded-tl-3xl z-0" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-[3.5px] border-r-[3.5px] border-green/30 rounded-br-3xl z-0" />

              {/* Main Image with 3D perspective hover - Tall aspect shows full standing height */}
              <motion.div
                whileHover={{ scale: 1.015, rotateY: 3, rotateX: -3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_22px_60px_rgba(10,42,102,0.1)] border-[6px] border-white z-2 bg-gray-50"
              >
                <Image
                  src="/images/roshan baig/roshan baig 6.jpeg"
                  alt="R. Roshan Baig"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
              </motion.div>

              {/* Overlapping Top-Left Image (Public Interaction) */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -15 }}
                whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.25, duration: 0.8, type: "spring", stiffness: 60 }}
                whileHover={{ scale: 1.08, rotate: -1, zIndex: 30 }}
                // className="absolute -top-8 -left-10 w-28 h-28 sm:w-34 sm:h-34 rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.12)] border-[4.5px] border-white z-10 cursor-pointer"
              >
                
                <div className="absolute inset-0 bg-gradient-to-tr from-saffron/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Overlapping Bottom-Right Image (Official Duties) */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 15 }}
                whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.45, duration: 0.8, type: "spring", stiffness: 60 }}
                whileHover={{ scale: 1.08, rotate: 1, zIndex: 30 }}
                className="absolute -bottom-8 -right-10 w-28 h-28 sm:w-34 sm:h-34 rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.12)] border-[4.5px] border-white z-10 cursor-pointer"
              >
                <Image
                  src="/images/roshan baig/roshan baig 7.jpeg"
                  alt="R. Roshan Baig in Assembly"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-green/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating Tricolor Glassmorphic Quote Box */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.8, type: "spring", stiffness: 70 }}
                className="absolute bottom-[16%] -left-8 sm:-left-14 z-20 "
              >
                <div className="relative p-[2.5px] rounded-2xl bg-gradient-to-br from-saffron via-white to-green shadow-[0_20px_45px_rgba(14,122,61,0.22)] hover:scale-105 transition-all duration-300 max-w-[195px] glass">
                  <div className="bg-white/92 backdrop-blur-md p-5 rounded-[14px]">
                    <div className="flex gap-1.5 mb-2.5">
                      <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-white border border-gray-300" />
                      <span className="w-2 h-2 rounded-full bg-green animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <h4 className="font-poppins font-black text-navy text-[16px] leading-tight">
                      People<br />
                      <span className="text-saffron">Progress</span><br />
                      <span className="text-green">&amp; Peace</span>
                    </h4>
                    <p className="font-noto-kannada text-[10px] font-bold text-navy/70 mt-2 border-t border-gray-100/60 pt-2 leading-none">
                      ಜನಸೇವೆಯೇ ಸಿದ್ಧಾಂತ
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* ───── RIGHT: CONTENT & VALUES ───── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Elegant Tricolor Label Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-md border border-gray-200/80 rounded-full px-4 py-1.5 shadow-sm">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-white border border-gray-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" style={{ animationDelay: '0.4s' }} />
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-green font-poppins">
                {t('title') || 'A Life in Public Service'}
              </span>
            </div>

            {/* Title with Indian Flag color creativity */}
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-navy leading-[1.15] tracking-tight">
              A Leader With <span className="text-saffron bg-gradient-to-r from-saffron to-saffron bg-clip-text">Experience</span>,<br />
              A Heart For The <span className="text-green">People</span>
            </h2>

            {/* Split Bio Paragraphs (Bio1 serves as Lead, Bio2 as support) */}
            <div className="space-y-4 font-inter text-gray-500 text-[15px] leading-relaxed max-w-xl">
              <p className="font-semibold text-navy/85 text-[15.5px]">
                {t('bio1')}
              </p>
              <p className="text-[14.5px] text-gray-500/90">
                {t('bio2') || 'Throughout his career, he has held key portfolios in the state government, including Minister of Home Affairs, Minister for Urban Development, Infrastructure & Haj, and Minister for Tourism.'}
              </p>
            </div>

            {/* Highlights Grid with Faint Ashoka Chakra Backdrop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 relative">
              
              {/* Rotating Watermark in the grid background */}
              <AshokaChakraAbout className="absolute right-6 top-1/2 -translate-y-1/2 w-44 h-44 opacity-[0.035] pointer-events-none z-0" />

              {highlights.map((h, i) => {
                // Different premium hover accents based on the theme
                const themes = [
                  { border: "hover:border-saffron/30", bg: "group-hover:bg-saffron", text: "text-saffron", iconBg: "bg-saffron/10", shadow: "hover:shadow-saffron/10" },
                  { border: "hover:border-navy/30", bg: "group-hover:bg-navy", text: "text-navy", iconBg: "bg-navy/10", shadow: "hover:shadow-navy/10" },
                  { border: "hover:border-green/30", bg: "group-hover:bg-green", text: "text-green", iconBg: "bg-green/10", shadow: "hover:shadow-green/10" },
                  { border: "hover:border-saffron/30", bg: "group-hover:bg-saffron", text: "text-saffron", iconBg: "bg-saffron/10", shadow: "hover:shadow-saffron/10" }
                ];
                const theme = themes[i % themes.length];
                const [title, desc] = h.label.split('\n');

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className={`glass border border-gray-200/50 rounded-2xl p-4.5 flex items-center gap-4 transition-all duration-300 shadow-sm cursor-default group z-1 ${theme.border} ${theme.shadow}`}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${theme.iconBg} ${theme.text} ${theme.bg} group-hover:text-white`}>
                      <h.icon size={20} strokeWidth={1.8} className="transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h4 className="font-poppins text-[11px] font-black text-navy uppercase tracking-wider leading-none mb-1">
                        {title}
                      </h4>
                      <p className="font-inter text-xs text-gray-500 font-medium">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* High-Interactivity CTA Button */}
            <div className="pt-2">
              <a
                href="#leadership"
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-green to-green-dark text-white px-8 py-4 rounded-full font-poppins font-bold text-sm shadow-[0_8px_25px_rgba(14,122,61,0.22)] hover:shadow-[0_12px_35px_rgba(14,122,61,0.35)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Know More About Me 
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
                
                {/* Sliding flag-colored running overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-saffron via-white/20 to-green opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                
                {/* Secondary standard dark green hover fill */}
                <span className="absolute inset-0 bg-gradient-to-r from-green-dark to-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
