"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-saffron/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-saffron font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Reach Out</span>
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-navy-blue mb-6 leading-tight">
            {t('title')}
          </h2>
          <div className="w-24 h-1.5 bg-green mx-auto mb-8 rounded-full"></div>
          <p className="font-poppins text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: MapPin, title: t('address'), val: "Shivajinagar,\nBengaluru, Karnataka", color: "text-saffron", bg: "bg-saffron/10" },
              { icon: Phone, title: t('phone'), val: "+91 XX XXXX XXXX", color: "text-green", bg: "bg-green/10" },
              { icon: Mail, title: t('email'), val: "contact@roshanbaig.com", color: "text-navy-blue", bg: "bg-navy-blue/10" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-start gap-8 transition-all hover:shadow-xl hover:border-gray-200"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center shrink-0`}>
                  <item.icon className={item.color} size={32} />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-navy-blue text-2xl mb-3">{item.title}</h4>
                  <p className="text-gray-600 font-inter text-lg whitespace-pre-line leading-relaxed">{item.val}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy-blue p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-saffron/20 rounded-full blur-[80px] pointer-events-none"></div>
            
            <form className="relative z-10 space-y-8">
              <div className="space-y-2">
                <label className="text-white/80 font-inter text-sm ml-2">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-saffron focus:bg-white/10 transition-all text-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 font-inter text-sm ml-2">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-saffron focus:bg-white/10 transition-all text-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 font-inter text-sm ml-2">Message</label>
                <textarea rows={5} placeholder="How can we help?" className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-saffron focus:bg-white/10 transition-all text-lg resize-none"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(255, 153, 51, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-saffron to-[#e68a2e] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg text-lg uppercase tracking-wider"
              >
                {t('send')} <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
