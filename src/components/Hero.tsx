"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Play, Plus, Users, Shield, TrendingUp, Heart } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative pt-32 pb-16 min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Abstract tricolor wave approximation using CSS gradients */}
        <motion.div 
          animate={{ rotate: [12, 15, 12], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[120%] bg-gradient-to-br from-saffron/20 via-white/40 to-green/10 blur-[100px] opacity-80"
        ></motion.div>
        <motion.div 
          animate={{ rotate: [-5, 0, -5], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[80%] bg-gradient-to-tl from-navy-blue/10 via-transparent to-green/5 blur-[100px] opacity-60"
        ></motion.div>
        {/* Placeholder for Vidhana Soudha BG */}
        <div className="absolute right-[20%] top-[10%] w-[60%] h-[90%] opacity-20 mix-blend-multiply">
           <Image src="/images/vidhana_soudha_bg_1779009062639.png" alt="Background" fill className="object-contain object-right-bottom" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              <Plus size={14} className="text-saffron stroke-[3]" />
              <span className="text-green">A LEGACY OF LEADERSHIP, SERVICE & REPRESENTATION</span>
            </div>
            
            <h1 className="font-poppins font-black leading-[0.9] tracking-tighter">
              <span className="block text-[4rem] sm:text-[5rem] lg:text-[6.5rem] text-navy-blue">R. ROSHAN</span>
              <span className="block text-[4rem] sm:text-[5rem] lg:text-[6.5rem] text-green">BAIG</span>
            </h1>
            
            <div className="space-y-1">
              <h2 className="font-poppins text-lg sm:text-2xl font-bold text-navy-blue">
                Former Minister, Government of Karnataka
              </h2>
              <p className="font-inter font-semibold text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                <span className="text-green">Seven-Time MLA</span>
                <span className="text-gray-400">|</span>
                <span>Shivajinagar, Bengaluru</span>
              </p>
            </div>
            
            {/* Quote */}
            <div className="relative pl-6 py-2">
              <span className="absolute top-0 left-0 text-4xl font-serif text-gray-300">"</span>
              <p className="font-noto-kannada text-lg sm:text-xl font-bold text-navy-blue italic leading-relaxed">
                ಜನಸೇವೆಯೇ ನನ್ನ ಧ್ಯೇಯ, <br/> ಕನ್ನಡವೇ ನನ್ನ ಉಸಿರು.
              </p>
              <span className="absolute bottom-[-10px] right-[40%] text-4xl font-serif text-saffron opacity-40">"</span>
            </div>
            
            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#about" className="group flex items-center gap-3 bg-green text-white px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-[#107006] transition-all">
                Explore My Journey <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#videos" className="group flex items-center gap-3 bg-white text-navy-blue border border-gray-200 px-6 py-3 rounded-full font-bold text-sm shadow-sm hover:border-gray-300 transition-all">
                Watch My Vision <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center"><Play size={10} className="ml-0.5" /></div>
              </a>
            </div>
            <div className="pt-2">
               <a href="#" className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-navy-blue px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-all">
                  <span className="text-saffron">▶</span> ಕನ್ನಡದಲ್ಲಿ ಓದಿ
               </a>
            </div>
          </motion.div>

          {/* Right Image & Badges Content */}
          <div className="lg:col-span-6 relative h-[500px] lg:h-[700px] w-full mt-12 lg:mt-0">
            {/* The Cutout Image with mix-blend-darken to remove white bg */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
              className="absolute bottom-0 right-0 md:right-[10%] w-full md:w-[90%] h-[90%] z-10"
            >
              <div className="relative w-full h-full drop-shadow-2xl">
                <Image 
                  src="/images/roshan baig/roshan baig.jpeg" 
                  alt="R. Roshan Baig" 
                  fill 
                  className="object-contain object-bottom mix-blend-darken filter contrast-125 saturate-110"
                  priority
                />
              </div>
            </motion.div>

            {/* Badges and Info (Floating) */}
            <div className="absolute top-10 right-0 z-20 flex flex-col items-end gap-8 w-full">
              
              {/* 7 Time MLA Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{ duration: 0.8, delay: 0.5, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                className="flex flex-col items-center justify-center relative w-32 h-32"
              >
                {/* Wreath approximation */}
                <div className="absolute inset-0 border-[3px] border-green/30 rounded-full border-dashed animate-spin-slow"></div>
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg border border-white">
                  <span className="font-poppins text-4xl font-black text-navy-blue leading-none">7</span>
                  <span className="font-inter text-[10px] font-bold text-green tracking-widest uppercase">Time MLA</span>
                </div>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-saffron text-xs">★</span>
                  ))}
                </div>
              </motion.div>

              {/* Vertical Features List */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, y: [0, 5, 0] }}
                transition={{ duration: 0.8, delay: 0.7, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 space-y-4"
              >
                {[
                  { icon: Users, text: "PEOPLE'S LEADER", color: "text-saffron" },
                  { icon: Shield, text: "MINORITY VOICE", color: "text-green" },
                  { icon: TrendingUp, text: "DEVELOPMENT ADVOCATE", color: "text-saffron" },
                  { icon: Heart, text: "PUBLIC SERVANT", color: "text-green" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon size={18} className={item.color} />
                    <span className="font-poppins text-xs font-bold text-navy-blue tracking-wide">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
