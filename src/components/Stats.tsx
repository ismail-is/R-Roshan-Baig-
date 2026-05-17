"use client";

import { motion } from 'framer-motion';
import { Award, Clock, Briefcase, Heart, Target } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Award, value: "7", label: "Time MLA", color: "from-saffron to-amber-500", glow: "shadow-saffron/20", delay: 0.1 },
    { icon: Clock, value: "30+", label: "Years of Public Service", color: "from-green to-emerald-600", glow: "shadow-green/20", delay: 0.2 },
    { icon: Briefcase, value: "6", label: "Key Portfolios Held", color: "from-saffron to-amber-500", glow: "shadow-saffron/20", delay: 0.3 },
    { icon: Heart, value: "Thousands", label: "Lives Impacted", color: "from-green to-emerald-600", glow: "shadow-green/20", delay: 0.4 },
    { icon: Target, value: "1", label: "Mission - People First", color: "from-saffron to-amber-500", glow: "shadow-saffron/20", delay: 0.5 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-30 mx-4 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-20 -mt-8 md:-mt-12"
    >
      {/* Outer Glow container */}
      <div className="relative rounded-[2rem] p-[1.5px] bg-gradient-to-r from-saffron/30 via-white/20 to-green/30 shadow-[0_20px_50px_rgba(10,42,102,0.15)] overflow-hidden">
        
        {/* Real Glassmorphism backdrop */}
        <div className="absolute inset-0 bg-navy/95 backdrop-blur-2xl z-0" />
        
        {/* Animated ambient tricolor light sweeps inside card */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-saffron/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />

        {/* Content Layout */}
        <div className="relative z-10 px-5 py-6 sm:px-6 sm:py-7 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-6 lg:gap-2">
          
          {stats.map((s, i) => (
            <div 
              key={i} 
              className={`flex items-stretch relative group ${
                i === 0 ? "col-span-1 sm:col-span-2 lg:col-span-1" :
                i === 1 ? "col-span-1 sm:col-span-2 lg:col-span-1" :
                i === 2 ? "col-span-1 sm:col-span-2 lg:col-span-1" :
                i === 3 ? "col-span-1 sm:col-span-3 lg:col-span-1" :
                "col-span-1 sm:col-span-3 lg:col-span-1"
              }`}
            >
              
              {/* Stat card wrapper */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="w-full flex items-center justify-start gap-4 p-3.5 sm:p-3.5 lg:p-2 rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/[0.05] transition-all duration-300 cursor-default"
              >
                {/* Glowing Circular Icon Container */}
                <div className={`w-11 h-11 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-lg ${s.glow} group-hover:scale-108 transition-all duration-300 relative overflow-hidden flex-shrink-0`}>
                  {/* Subtle inner glare */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10" />
                  <s.icon className="w-5.5 h-5.5 sm:w-[22px] sm:h-[22px] relative z-10" strokeWidth={2} />
                </div>

                {/* Text Values */}
                <div className="flex flex-col text-left">
                  <span className="font-poppins font-black text-white text-lg sm:text-lg md:text-xl lg:text-2xl leading-none tracking-tight">
                    {s.value}
                  </span>
                  <span className="font-inter text-[10px] sm:text-[10px] md:text-[11px] text-gray-300 font-semibold tracking-wider uppercase mt-1.5 leading-tight group-hover:text-white transition-colors duration-300">
                    {s.label}
                  </span>
                </div>
              </motion.div>

              {/* Vertical divider visible on Large layouts */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block w-[1px] h-10 bg-gradient-to-b from-transparent via-white/10 to-transparent self-center ml-2" />
              )}
            </div>
          ))}

        </div>

        {/* Dynamic ultra-thin patriotic tricolor bar along the bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] flex">
          <div className="flex-1 bg-saffron" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-green" />
        </div>
      </div>
    </motion.div>
  );
}
