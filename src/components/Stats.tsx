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
        <div className="relative z-10 px-6 py-8 sm:px-8 md:px-10 lg:px-12 flex flex-col lg:flex-row justify-between items-stretch gap-6 lg:gap-2">
          
          {stats.map((s, i) => (
            <div key={i} className="flex-1 flex flex-col sm:flex-row items-center lg:items-stretch gap-4 sm:gap-0 relative group">
              
              {/* Stat card wrapper */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="w-full flex items-center justify-center sm:justify-start gap-4 p-3.5 sm:p-2.5 rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/[0.05] transition-all duration-300 cursor-default"
              >
                {/* Glowing Circular Icon Container */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-lg ${s.glow} group-hover:scale-108 transition-all duration-300 relative overflow-hidden`}>
                  {/* Subtle inner glare */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10" />
                  <s.icon size={22} strokeWidth={2} className="relative z-10" />
                </div>

                {/* Text Values */}
                <div className="flex flex-col text-center sm:text-left">
                  <span className="font-poppins font-black text-white text-xl md:text-2xl leading-none tracking-tight">
                    {s.value}
                  </span>
                  <span className="font-inter text-[10px] sm:text-[11px] text-gray-300 font-semibold tracking-wider uppercase mt-1 leading-tight group-hover:text-white transition-colors duration-300">
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
