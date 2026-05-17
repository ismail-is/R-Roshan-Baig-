"use client";

import { Award, Clock, Briefcase, Heart, Target } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Award, number: "7", label: "Time MLA" },
    { icon: Clock, number: "30+", label: "Years of Public Service" },
    { icon: Briefcase, number: "6", label: "Key Portfolios Held" },
    { icon: Heart, number: "Thousands", label: "Lives Impacted" },
    { icon: Target, number: "1", label: "Mission - People First" },
  ];

  return (
    <div className="bg-navy-blue py-6 relative z-30 shadow-xl rounded-full mx-4 md:mx-12 lg:mx-24 -mt-8 mb-16 overflow-hidden border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-saffron/10 via-transparent to-green/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className={`flex items-center gap-4 px-4 ${i === 0 ? 'pl-0' : ''} ${i === stats.length - 1 ? 'pr-0 border-r-0' : ''}`}>
              <div className="text-saffron">
                <stat.icon size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-white text-xl leading-none">{stat.number}</span>
                <span className="font-inter text-[10px] text-gray-300 tracking-wider uppercase mt-1">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
