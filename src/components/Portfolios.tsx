"use client";

import { Shield, Camera, Home, Building, Map, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolios() {
  const portfolios = [
    { icon: Shield, title: "Home Affairs", color: "bg-green" },
    { icon: Camera, title: "Tourism", color: "bg-saffron" },
    { icon: Home, title: "Haj & Wakf", color: "bg-green" },
    { icon: Building, title: "Urban\nDevelopment", color: "bg-saffron" },
    { icon: Map, title: "Infrastructure\nDevelopment", color: "bg-green" },
    { icon: Radio, title: "Information &\nPublic Relations", color: "bg-saffron" },
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden bg-white">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-[300px] bg-gradient-to-r from-saffron/10 via-green/5 to-white transform -skew-y-3 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-0 w-full h-[200px] bg-gradient-to-r from-green/10 via-saffron/5 to-white transform -skew-y-6 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-2xl md:text-3xl font-black text-navy-blue">
            Key Portfolios As <span className="text-saffron">Minister</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {portfolios.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 flex flex-col items-center justify-center text-center group"
            >
              <div className="mb-4 relative">
                {/* Specific colored icon based on array */}
                <item.icon size={40} strokeWidth={1.5} className={item.color === 'bg-green' ? 'text-green' : 'text-saffron'} />
                {/* Small abstract circle */}
                <div className="absolute -top-1 -right-2 w-3 h-3 bg-navy-blue rounded-full opacity-10"></div>
              </div>
              <h4 className="font-poppins font-bold text-xs md:text-sm text-navy-blue leading-tight whitespace-pre-line mb-3">
                {item.title}
              </h4>
              <div className={`w-8 h-1 rounded-full ${item.color}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
