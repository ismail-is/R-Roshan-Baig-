"use client";

import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, BookOpen, Building2, Users, Bird, Plus } from 'lucide-react';
import Image from 'next/image';

export default function Vision() {
  const points = [
    { icon: GraduationCap, title: "Empowering\nYouth" },
    { icon: BookOpen, title: "Quality\nEducation" },
    { icon: Building2, title: "Smart\nInfrastructure" },
    { icon: Users, title: "Inclusive\nDevelopment" },
    { icon: Bird, title: "Harmony\n& Peace" },
  ];

  return (
    <section id="vision" className="py-16 relative overflow-hidden bg-[#0A1128] mx-4 md:mx-12 rounded-[2rem] my-20 shadow-2xl">
      {/* Background overlay (subtle cityscape) */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
         {/* Reusing vidhana soudha image as an abstract architectural overlay */}
         <Image src="/images/vidhana_soudha_bg_1779009062639.png" alt="Cityscape" fill className="object-cover object-bottom" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#000040]/90 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          
          {/* Left Text */}
          <div className="lg:w-2/5 space-y-6">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              <Plus size={14} className="text-saffron stroke-[3]" />
              <span className="text-saffron">VISION FOR KARNATAKA</span>
            </div>
            
            <h2 className="font-poppins text-3xl md:text-4xl font-black text-white leading-tight">
              Building A Better Tomorrow
            </h2>
            
            <p className="font-inter text-gray-300 text-sm md:text-base leading-relaxed">
              A progressive Karnataka that ensures growth, opportunities and harmony for every citizen.
            </p>
            
            <a href="#" className="inline-flex items-center gap-3 bg-white text-navy-blue px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-gray-100 transition-all mt-4">
              Our Vision In Detail <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Icons */}
          <div className="lg:w-3/5 w-full overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex gap-8 min-w-max lg:justify-end">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl border border-white/20 flex items-center justify-center mb-4 transition-all group-hover:border-saffron group-hover:bg-white/10 backdrop-blur-sm">
                    <point.icon size={28} className="text-white group-hover:text-saffron transition-colors" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-poppins font-semibold text-xs text-white leading-tight whitespace-pre-line">
                    {point.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Hide scrollbar CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
