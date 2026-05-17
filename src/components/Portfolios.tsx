"use client";

import { Shield, Camera, Home, Building, Map, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolios() {
  const portfolios = [
    { icon: Shield, title: "Home\nAffairs", accent: "from-green to-green-dark" },
    { icon: Camera, title: "Tourism", accent: "from-saffron to-saffron-dark" },
    { icon: Home, title: "Haj &\nWakf", accent: "from-green to-green-dark" },
    { icon: Building, title: "Urban\nDevelopment", accent: "from-saffron to-saffron-dark" },
    { icon: Map, title: "Infrastructure\nDevelopment", accent: "from-green to-green-dark" },
    { icon: Radio, title: "Information &\nPublic Relations", accent: "from-saffron to-saffron-dark" },
  ];

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden bg-cream">
      {/* Background swoosh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-[250px] bg-gradient-to-r from-saffron/5 via-green/3 to-transparent transform -skew-y-3 -translate-y-1/2 blur-sm" />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="font-poppins text-2xl md:text-3xl font-black text-navy">
            Key Portfolios As <span className="text-saffron">Minister</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {portfolios.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
              className="bg-white p-6 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100/80 flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

              <div className="mb-4 relative z-10">
                <item.icon
                  size={36}
                  strokeWidth={1.4}
                  className={`${item.accent.includes('green') ? 'text-green' : 'text-saffron'} group-hover:scale-110 transition-transform duration-300`}
                />
              </div>
              <h4 className="font-poppins font-bold text-[12px] md:text-[13px] text-navy leading-tight whitespace-pre-line mb-3 relative z-10">
                {item.title}
              </h4>
              <div className={`w-6 h-[2.5px] rounded-full bg-gradient-to-r ${item.accent} opacity-50 group-hover:w-10 group-hover:opacity-80 transition-all duration-300 relative z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
