"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, Building2, Megaphone, Map, Heart, Plus, ArrowRight } from 'lucide-react';

export default function Experience() {
  const t = useTranslations('Experience');

  const cards = [
    { icon: Users, title: "Minority Welfare\nAdvocate" },
    { icon: Building2, title: "Urban Development\nVisionary" },
    { icon: Megaphone, title: "Public Relations\nExpert" },
    { icon: Map, title: "Infrastructure\nDeveloper" },
    { icon: Heart, title: "Community\nFirst Leader" },
  ];

  return (
    <section id="leadership" className="py-20 bg-[#F8F9FA] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="lg:w-1/3 space-y-6">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              <Plus size={14} className="text-saffron stroke-[3]" />
              <span className="text-green">LEADERSHIP & EXPERTISE</span>
            </div>
            
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-black text-navy-blue leading-[1.1]">
              Driven By Experience<br/>Guided By Values
            </h2>
            
            <p className="font-inter text-gray-600 text-sm md:text-base leading-relaxed">
              Decades of governance experience and a commitment to inclusive development.
            </p>
            
            <a href="#" className="inline-flex items-center gap-3 bg-transparent border border-gray-300 text-navy-blue px-6 py-2.5 rounded-full font-bold text-sm hover:border-navy-blue transition-colors mt-2">
              View All Experience <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Side Cards */}
          <div className="lg:w-2/3 w-full overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex gap-6 min-w-max">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center justify-center text-center w-[200px] h-[220px]"
                >
                  {/* Custom icon style to match image (Green people, orange accents) */}
                  <div className="mb-6 relative">
                    <card.icon size={48} strokeWidth={1.5} className="text-green relative z-10" />
                    {/* Add orange accent circle behind icon */}
                    <div className="absolute -top-1 -right-2 w-4 h-4 bg-saffron rounded-full z-0 opacity-80"></div>
                  </div>
                  <h4 className="font-poppins font-bold text-sm text-navy-blue leading-tight whitespace-pre-line">
                    {card.title}
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
