"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight, UserCheck, TrendingUp, Users, Eye, Plus } from 'lucide-react';

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="py-20 bg-[#F8F9FA] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image Side */}
          <div className="relative w-full aspect-square max-w-lg mx-auto lg:mx-0">
            {/* The main image collage (using roshan baig 11.jpeg as placeholder for the main collage/image) */}
            <div className="absolute inset-4 rounded-3xl overflow-hidden shadow-lg bg-gray-200 border-4 border-white">
               <Image 
                  src="/images/roshan baig/roshan baig 11.jpeg" 
                  alt="About R. Roshan Baig" 
                  fill 
                  className="object-cover" 
               />
               {/* Faint grid overlay pattern */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            </div>
            
            {/* Floating Green Box */}
            <div className="absolute bottom-10 -right-4 lg:-right-8 bg-green text-white p-6 rounded-2xl shadow-2xl max-w-[200px] border border-white/20">
              <span className="text-[10px] uppercase font-bold tracking-widest text-saffron block mb-2">Committed to</span>
              <h4 className="font-poppins font-bold text-xl leading-tight">
                People<br/>Progress<br/>& Peace
              </h4>
            </div>
          </div>

          {/* Right Content Side */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              <Plus size={14} className="text-saffron stroke-[3]" />
              <span className="text-green">ABOUT R. ROSHAN BAIG</span>
            </div>
            
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-black text-navy-blue leading-tight">
              A Leader With Experience <br/> A Heart For The People
            </h2>
            
            <p className="font-inter text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
              {t('bio1')} He has served as a Minister in the Government of Karnataka holding multiple key portfolios and has been a strong voice for minority welfare, urban development and inclusive growth.
            </p>

            {/* Features Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-gray-200">
              {[
                { icon: UserCheck, text: "Experienced Leader" },
                { icon: TrendingUp, text: "Proven Track Record" },
                { icon: Users, text: "People Centric" },
                { icon: Eye, text: "Visionary Leadership" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  <div className="text-green bg-green/10 p-3 rounded-xl mb-1">
                    <item.icon size={24} />
                  </div>
                  <span className="font-poppins text-[10px] font-bold text-navy-blue leading-tight w-20">{item.text}</span>
                </div>
              ))}
            </div>

            <a href="#leadership" className="inline-flex items-center gap-2 bg-green text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:bg-[#107006] transition-all">
              Know More About Me <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
