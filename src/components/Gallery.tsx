"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { 
  Play, 
  X, 
  Maximize2, 
  ArrowRight, 
  MapPin, 
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

/* ──────── ASHOKA CHAKRA SVG WATERMARK ──────── */
const AshokaChakraGallery = () => (
  <svg 
    className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.035] pointer-events-none animate-spin-slow text-navy z-0 select-none" 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.8" />
    <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.8" />
    <circle cx="50" cy="50" r="2.5" fill="currentColor" />
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
          strokeOpacity="0.8"
        />
      );
    })}
  </svg>
);

/* ──────── DYNAMIC PATRIOTIC SHIMMER BACKGROUND ──────── */
const TricolorSparkles = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
    {/* Floating Saffron Dust */}
    <motion.div
      animate={{
        y: [0, -18, 0],
        x: [0, 8, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[18%] left-[12%] w-3.5 h-3.5 rounded-full bg-saffron/15 blur-[1px]"
    />
    {/* Floating Green Dust */}
    <motion.div
      animate={{
        y: [0, 20, 0],
        x: [0, -8, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-[20%] right-[15%] w-4 h-4 rounded-full bg-green/15 blur-[1px]"
    />
    <div className="absolute top-[45%] left-[28%] w-2 h-2 rounded-full bg-saffron/20 animate-pulse" />
    <div className="absolute bottom-[35%] right-[25%] w-2 h-2 rounded-full bg-green/20 animate-pulse" style={{ animationDuration: '3.5s' }} />
  </div>
);

export default function Gallery() {
  const t = useTranslations('Gallery');
  const params = useParams();
  const locale = params?.locale || 'en';

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Gallery grid data
  const galleryItems = [
    {
      src: "/images/roshan baig/roshan baig.jpeg",
      tag: locale === 'kn' ? 'ಸಚಿವ ಸಂಪುಟ' : 'Governance',
      title: locale === 'kn' ? 'ಸಚಿವ ಸಂಪುಟ ನೀತಿ ಸಭೆ' : 'Cabinet Planning & Policy Development',
      date: "2018",
      location: "Vidhana Soudha, Bengaluru"
    },
    {
      src: "/images/roshan baig/roshan baig 8.jpeg",
      tag: locale === 'kn' ? 'ಜನಸೇವೆ' : 'Public Service',
      title: locale === 'kn' ? 'ಶಿವಾಜಿನಗರದ ಜನರೊಂದಿಗೆ ಸಂವಾದ' : 'Interacting with Shivajinagar Residents',
      date: "2019",
      location: "Shivajinagar, Bengaluru"
    },
    {
      src: "/images/roshan baig/roshan baig 7.jpeg",
      tag: locale === 'kn' ? 'ಶಾಸಕರ ನಾಯಕತ್ವ' : 'Legislative Assembly',
      title: locale === 'kn' ? 'ವಿಧಾನಸಭೆ ಕಲಾಪದಲ್ಲಿ ಭಾಷಣ' : 'Addressing the Assembly during Budget Session',
      date: "2017",
      location: "Legislative Hall, Bengaluru"
    },
    {
      src: "/images/roshan baig/roshan baig 9.jpeg",
      tag: locale === 'kn' ? 'ಭಾಷಣಗಳು' : 'Speeches & Media',
      title: locale === 'kn' ? 'ಅಲ್ಪಸಂಖ್ಯಾತರ ಅಭಿವೃದ್ಧಿ ಸಮಾವೇಶ' : 'State Minority Welfare Keynote Speech',
      date: "2019",
      location: "Palace Grounds, Bengaluru",
      isVideo: true
    }
  ];

  // Lightbox navigation
  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
  }, [lightboxIndex]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
  }, [lightboxIndex]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <section 
      id="gallery" 
      className="section-padding bg-gradient-to-b from-white/95 via-[#f8f7f2]/90 to-white/95 relative overflow-hidden z-10"
    >
      {/* ═══ PATRIOTIC PATRIOTIC ACCENTS ═══ */}
      <div className="absolute top-0 left-0 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-saffron/6 via-saffron/1 to-transparent blur-[110px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-green/6 via-green/1 to-transparent blur-[110px] pointer-events-none z-0" />
      
      {/* Wave lines for premium look */}
      <div className="absolute top-[10%] left-0 w-full h-[150px] bg-gradient-to-r from-saffron/3 via-transparent to-transparent -skew-y-3 pointer-events-none" />
      <div className="absolute bottom-[10%] right-0 w-full h-[150px] bg-gradient-to-l from-green/3 via-transparent to-transparent skew-y-3 pointer-events-none" />

      {/* Ashoka Chakra & Dust Sparks */}
      <AshokaChakraGallery />
      <TricolorSparkles />

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
        
        {/* ═══ HEADER CONTAINER ═══ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200/80 rounded-full px-4.5 py-1.5 shadow-sm">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-white border border-gray-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" style={{ animationDelay: '0.4s' }} />
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-green font-poppins">
                {locale === 'kn' ? 'ಚಿತ್ರಸಂಪುಟ ಮತ್ತು ಮಾಧ್ಯಮ' : 'ARCHIVES & GALLERY'}
              </span>
            </div>
            
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-black text-navy leading-tight tracking-tight">
              {t('title') || 'Moments Of Service & Leadership'}
            </h2>
            <p className="font-inter text-gray-500 text-[14.5px] leading-relaxed font-light">
              {t('subtitle') || 'Explore archival photos capturing major urban infrastructure launches, legislative assembly debates, and community development milestones.'}
            </p>
          </div>

          <Link 
            href="/gallery"
            className="group shrink-0 inline-flex items-center gap-2 bg-navy text-white px-7 py-3.5 rounded-full font-poppins font-bold text-xs uppercase tracking-wider shadow-[0_4px_15px_rgba(10,42,102,0.15)] hover:shadow-[0_8px_25px_rgba(10,42,102,0.3)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              {t('viewAll') || 'View All Photos'}
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-saffron via-white/10 to-green opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            <span className="absolute inset-0 bg-navy-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
          </Link>
        </div>

        {/* ═══ ASYMMETRIC MASONRY GRID ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[500px]">
          
          {/* Card 1: Official Cabinet Session (Landscape, 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            onClick={() => openLightbox(0)}
            className="md:col-span-7 rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(14,122,61,0.08)] group cursor-pointer relative aspect-[16/10] bg-gray-50 min-h-[280px]"
          >
            <Image 
              src={galleryItems[0].src} 
              alt={galleryItems[0].title}
              fill 
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            
            {/* Elegant Hover overlay showing the image title and date */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
              {/* <h3 className="font-poppins font-bold text-sm text-white leading-snug tracking-wide line-clamp-2 mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {galleryItems[0].title}
              </h3> */}
              <div className="flex items-center gap-4 text-[10px] text-white/70 font-inter font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {/* <span className="flex items-center gap-1">
                  <MapPin size={10} className="text-green" />
                  {galleryItems[0].location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={10} className="text-saffron" />
                  {galleryItems[0].date}
                </span> */}
              </div>
            </div>
            <div className="absolute inset-0 bg-navy-dark/5 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
          </motion.div>

          {/* Card 2: Public Address (Tall Portrait, 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            onClick={() => openLightbox(1)}
            className="md:col-span-5 md:row-span-2 rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(14,122,61,0.08)] group cursor-pointer relative h-full min-h-[400px] md:min-h-0 bg-gray-50"
          >
            <Image 
              src={galleryItems[1].src} 
              alt={galleryItems[1].title}
              fill 
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            
            {/* Elegant Hover overlay showing the image title and date */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
              {/* <h3 className="font-poppins font-bold text-sm text-white leading-snug tracking-wide line-clamp-2 mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {galleryItems[1].title}
              </h3> */}
              <div className="flex items-center gap-4 text-[10px] text-white/70 font-inter font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {/* <span className="flex items-center gap-1">
                  <MapPin size={10} className="text-green" />
                  {galleryItems[1].location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={10} className="text-saffron" />
                  {galleryItems[1].date}
                </span> */}
              </div>
            </div>
            <div className="absolute inset-0 bg-navy-dark/5 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
          </motion.div>

          {/* Card 3: Legislative Assembly (Square, 4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            whileHover={{ y: -5 }}
            onClick={() => openLightbox(2)}
            className="md:col-span-4 rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(14,122,61,0.08)] group cursor-pointer relative aspect-[4/3] bg-gray-50 min-h-[220px]"
          >
            <Image 
              src={galleryItems[2].src} 
              alt={galleryItems[2].title}
              fill 
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
            
            {/* Elegant Hover overlay showing the image title and date */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
              {/* <h3 className="font-poppins font-bold text-xs sm:text-sm text-white leading-snug tracking-wide line-clamp-2 mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {galleryItems[2].title}
              </h3> */}
              <div className="flex items-center gap-4 text-[10px] text-white/70 font-inter font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {/* <span className="flex items-center gap-1">
                  <MapPin size={10} className="text-green" />
                  {galleryItems[2].location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={10} className="text-saffron" />
                  {galleryItems[2].date}
                </span> */}
              </div>
            </div>
            <div className="absolute inset-0 bg-navy-dark/5 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
          </motion.div>

          {/* Card 4: Video Speeches (Large Video Block, 3 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -5 }}
            onClick={() => openLightbox(3)}
            className="md:col-span-3 rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(14,122,61,0.08)] group cursor-pointer relative aspect-[4/3] bg-gray-50 min-h-[220px]"
          >
            <Image 
              src={galleryItems[3].src} 
              alt={galleryItems[3].title}
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 bg-black/15 flex items-center justify-center z-10 group-hover:scale-95 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-white/92 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Play size={18} className="text-navy ml-0.5" fill="currentColor" />
              </div>
            </div>

            {/* Elegant Hover overlay showing the image title and date */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
              {/* <h3 className="font-poppins font-bold text-xs sm:text-sm text-white leading-snug tracking-wide line-clamp-2 mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {galleryItems[3].title}
              </h3> */}
              <div className="flex items-center gap-4 text-[10px] text-white/70 font-inter font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {/* <span className="flex items-center gap-1">
                  <MapPin size={10} className="text-green" />
                  {galleryItems[3].location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={10} className="text-saffron" />
                  {galleryItems[3].date}
                </span> */}
              </div>
            </div>
            <div className="absolute inset-0 bg-navy-dark/5 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
          </motion.div>

        </div>
      </div>

      {/* ═══ PREMIUM FULLSCREEN LIGHTBOX OVERLAY ═══ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox} // Close lightbox instantly on backdrop click!
            className="fixed inset-0 z-[200] bg-navy-dark/98 backdrop-blur-xl flex flex-col items-center justify-center p-4 select-none cursor-zoom-out"
          >
            {/* Top Bar for Safe Notch and Control Layout */}
            <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-6 z-[210] pointer-events-none">
              <div className="text-white/50 text-xs font-inter font-semibold tracking-wider bg-black/20 px-3.5 py-1.5 rounded-full border border-white/5 backdrop-blur-sm hidden sm:block">
                {lightboxIndex + 1} / {galleryItems.length}
              </div>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shadow-lg border border-white/15 cursor-pointer ml-auto hover:scale-105 active:scale-95 transition-all"
                aria-label="Close Lightbox"
              >
                <X size={22} />
              </button>
            </div>

            {/* Left navigation arrow */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-5 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center border border-white/10 cursor-pointer transition-all hidden md:flex z-20 pointer-events-auto hover:scale-105 active:scale-95"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Central content canvas */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Intercept click so image itself doesn't close
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="relative w-full max-w-[900px] aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 cursor-default pointer-events-auto"
            >
              <Image 
                src={galleryItems[lightboxIndex].src} 
                alt={galleryItems[lightboxIndex].title} 
                fill 
                className="object-contain" 
                priority
              />
              
              {/* Bottom detail glass overlay inside lightbox */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent border-t border-white/5 text-white">
                <div className="max-w-[700px]">
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-saffron text-white text-[9px] font-black uppercase tracking-widest font-poppins mb-2">
                    {galleryItems[lightboxIndex].tag}
                  </span>
                  <h3 className="font-poppins font-black text-base md:text-xl leading-snug tracking-wide">
                    {galleryItems[lightboxIndex].title}
                  </h3>
                  
                  {/* <div className="flex items-center gap-6 mt-3 text-xs text-white/60 font-inter">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-green" />
                      {galleryItems[lightboxIndex].location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-saffron" />
                      {galleryItems[lightboxIndex].date}
                    </span>
                  </div> */}
                </div>
              </div>
            </motion.div>

            {/* Right navigation arrow */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-5 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center border border-white/10 cursor-pointer transition-all hidden md:flex z-20 pointer-events-auto hover:scale-105 active:scale-95"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Mobile swipe controls indicator */}
            <div className="mt-6 flex md:hidden gap-4 pointer-events-auto">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }} 
                className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center shadow-lg border border-white/5 cursor-pointer active:scale-90 transition-transform"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }} 
                className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center shadow-lg border border-white/5 cursor-pointer active:scale-90 transition-transform"
              >
                <ChevronRight size={20} />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
