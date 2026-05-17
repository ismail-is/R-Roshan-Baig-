"use client";

import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Facebook = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Twitter = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Whatsapp = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-blue text-white pt-16 pb-8 relative mt-20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Top Section (Contact Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12 -mt-28 relative z-10">
          
          {/* Green Get In Touch Box */}
          <div className="lg:col-span-1 bg-[#107006] rounded-2xl p-8 shadow-xl relative overflow-hidden">
             {/* Abstract pattern */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="relative z-10">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4">
                  <div className="w-4 h-4 rounded-full border-2 border-saffron flex items-center justify-center"><div className="w-1.5 h-1.5 bg-saffron rounded-full"></div></div>
                  <span className="text-saffron">GET IN TOUCH</span>
                </div>
                <h3 className="font-poppins font-bold text-2xl leading-tight mb-8">
                  Let's Work Together<br/>For A Better Karnataka
                </h3>
                <a href="#" className="inline-flex items-center justify-between w-full bg-white text-navy-blue px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-gray-100 transition-all">
                  Contact Me <ArrowRight size={16} />
                </a>
             </div>
          </div>

          {/* Contact Details Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
             
             <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                   <p className="font-poppins text-xs font-bold mb-1">Phone</p>
                   <p className="font-inter text-xs text-gray-300">+91 80 2222 2222</p>
                </div>
             </div>

             <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                   <p className="font-poppins text-xs font-bold mb-1">Email</p>
                   <p className="font-inter text-xs text-gray-300">office@roshanbaig.in</p>
                </div>
             </div>

             <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                   <p className="font-poppins text-xs font-bold mb-1">Address</p>
                   <p className="font-inter text-xs text-gray-300">#123, Shivajinagar,<br/>Bengaluru - 560051</p>
                </div>
             </div>

             <div>
                <p className="font-poppins text-[10px] font-bold uppercase tracking-widest mb-3 text-gray-300">FOLLOW ME</p>
                <div className="flex items-center gap-3">
                   {[Facebook, Twitter, Instagram, Whatsapp].map((Icon, i) => (
                     <a key={i} href="#" className="w-8 h-8 rounded-full bg-white text-navy-blue flex items-center justify-center hover:bg-saffron hover:text-white transition-colors">
                       <Icon size={14} />
                     </a>
                   ))}
                </div>
             </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-6">
           
           {/* Logo */}
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full border-2 border-saffron flex items-center justify-center bg-white shadow-sm overflow-hidden shrink-0">
                 <div className="w-5 h-5 bg-gradient-to-br from-green to-navy-blue rounded-full"></div>
             </div>
             <div className="flex flex-col">
               <span className="font-poppins font-bold text-lg leading-none tracking-tight">
                 <span className="text-saffron">R. ROSHAN </span>
                 <span className="text-white">BAIG</span>
               </span>
               <span className="text-[9px] text-gray-400 font-inter font-medium uppercase mt-0.5 tracking-wider">Former Minister, Government of Karnataka</span>
             </div>
           </div>

           {/* Slogan */}
           <p className="font-noto-kannada text-sm font-bold text-gray-300 hidden md:block">
             "ಜನಸೇವೆಯೇ ನನ್ನ ಧ್ಯೇಯ - ಕನ್ನಡವೇ ನನ್ನ ಉಸಿರು"
           </p>

           {/* Links */}
           <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-4 text-[10px] font-inter text-gray-300 font-medium">
                 <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                 <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                 <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
              <p className="text-[10px] font-inter text-gray-400">
                © {new Date().getFullYear()} R. Roshan Baig. All Rights Reserved.
              </p>
           </div>

        </div>

      </div>
    </footer>
  );
}
