"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  MapPin, 
  Briefcase, 
  Users, 
  TrendingUp, 
  Landmark, 
  CheckCircle2,
  Calendar,
  ShieldCheck,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

export default function PoliticalCareer() {
  const [activeSection, setActiveSection] = useState<'stats' | 'presence' | 'acumen'>('stats');

  const ministries = [
    "Minister of Home Affairs",
    "Minister for Tourism and Haj",
    "Minister for Medium & Small Scale Industries",
    "Minister for Infrastructure",
    "Minister for Information, Public Relations and Haj",
    "Minister For Urban Development, City Corporations, Urban Land Transport KUWSDB & KUIDFC, Haj Information & Wakf",
    "Minister of Bangalore Development Authority",
  ];

  const presencePoints = [
    "Thoroughbred Bangalorean. Political career has been confined to constituencies in Bangalore Central since day one without ever losing grip over the areas that he has represented.",
    "Tremendous rapport with the Tamilian masses in the city who account for 5.5 lakh votes in the city. His rapport is impeccable because of his fluency in the language, his association with all the local Tamil sangamas (Tamil fraternal units), frequent grants to Tamil associations and help extended to community leaders in establishment of Tamil schools.",
    "Mr. Baig’s presence in the Muslim community is second-to-none in Bangalore. He has been looked at as the community leader ever since the 80s. His grassroot connections with the Muslim community ranges from direct involvement in mosques to educational institutes (he was the Vice Chairman of Al-Ameen Educational Institute as well as the founding member of the reputed Bismillah Education Trust which has several schools and a PU college in Bangalore) to organizing grand feasts such as Mushairas (literary functions) and festival celebrations.",
    "He is also a key figure in all the prominent Muslim Associations in the city as well as the State since he’s been Haj & Wakf minister several times in his career.",
    "Muslims of Karnataka support him tremendously especially because he lobbied extensively to create state-of-the-art Haj Bhavan in Bangalore, which was inaugurated in his tenure as the Haj Minister.",
    "He has significant support from the Hindu and the Christian communities because of his well-known secular values. This fact can be ascertained and verified because he has bagged votes from these communities election-after-election in both Shivajinagar and Jayamahal constituencies.",
    "R Roshan Baig has also been the Chairman of city-based Dussehra, Ganesha Chaturthi, Maha Shivratri organizing committees along with several other Hindu and Tamil festivals. He has had a reputation of organizing grand festivities in the area for these festivals."
  ];

  const acumenPoints = [
    "While he respects other aspirants and their political ambitions, it’s no secret that the other aspirants haven’t proved their mettle in electoral battles, which is a crucial factor in politics.",
    "R Roshan Baig is certainly well-known and assimilated with the grassroot political wokers in the city but he also exercises his political acumen that he has in terms of money-management, people-management and the network required on the grassroot level which is crucial to win elections. He’s aware of all the nuances that an electoral battle requires.",
    "R Roshan Baig has won elections comfortably with sizable votes from every community for 7 times straight."
  ];

  return (
    <section id="political-career" className="relative py-20 lg:py-32 bg-[#f4f7fa] overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] bg-gradient-to-bl from-green/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-tr from-saffron/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle Pattern Grid */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'radial-gradient(var(--color-navy) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-full px-5 py-2 shadow-sm mb-6"
          >
            <Landmark className="w-4 h-4 text-saffron" />
            <span className="text-[11px] font-black tracking-[0.2em] uppercase text-navy font-poppins">
              A Storied Legacy
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-navy tracking-tight leading-[1.1]"
          >
            Political <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-green">Career & Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 font-inter max-w-2xl mx-auto text-sm sm:text-base px-4"
          >
            An unwavering commitment to grassroots development, minority welfare, and state infrastructure spanning over three decades.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Navigation Tabs (Horizontal scrolling on mobile, vertical on desktop) */}
          <div className="w-full lg:w-1/3 shrink-0 lg:sticky lg:top-32 z-20">
            {/* Scrollable Container for Mobile */}
            <div className="flex overflow-x-auto lg:flex-col gap-4 pb-6 lg:pb-0 scrollbar-hide snap-x px-1 -mx-1 sm:px-0 sm:mx-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style dangerouslySetInnerHTML={{__html: `
                .scrollbar-hide::-webkit-scrollbar { display: none; }
              `}} />
              
              <button
                onClick={() => setActiveSection('stats')}
                className={`shrink-0 w-[85vw] sm:w-[320px] lg:w-full text-left p-6 sm:p-7 rounded-[2rem] transition-all duration-500 border relative overflow-hidden snap-center group ${
                  activeSection === 'stats' 
                    ? 'bg-navy border-navy shadow-[0_20px_40px_rgba(10,42,102,0.25)] text-white scale-[1.02] lg:scale-100' 
                    : 'bg-white border-gray-100 shadow-sm hover:shadow-xl text-navy hover:border-saffron/30 hover:-translate-y-1 lg:hover:translate-y-0 lg:hover:translate-x-2'
                }`}
              >
                {activeSection === 'stats' && (
                  <motion.div layoutId="activeTabIndicator" className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-saffron to-green rounded-r-full hidden lg:block" />
                )}
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors shadow-inner ${
                    activeSection === 'stats' ? 'bg-white/10' : 'bg-gray-50 group-hover:bg-saffron/10'
                  }`}>
                    <Award className={`w-7 h-7 ${activeSection === 'stats' ? 'text-saffron' : 'text-gray-400 group-hover:text-saffron'}`} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-black text-[16px] sm:text-[18px]">Quick Stats & Portfolios</h3>
                    <p className={`text-xs sm:text-sm font-inter mt-1.5 font-medium ${activeSection === 'stats' ? 'text-white/60' : 'text-gray-400'}`}>
                      Ministries & Constituencies
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveSection('presence')}
                className={`shrink-0 w-[85vw] sm:w-[320px] lg:w-full text-left p-6 sm:p-7 rounded-[2rem] transition-all duration-500 border relative overflow-hidden snap-center group ${
                  activeSection === 'presence' 
                    ? 'bg-navy border-navy shadow-[0_20px_40px_rgba(10,42,102,0.25)] text-white scale-[1.02] lg:scale-100' 
                    : 'bg-white border-gray-100 shadow-sm hover:shadow-xl text-navy hover:border-green/30 hover:-translate-y-1 lg:hover:translate-y-0 lg:hover:translate-x-2'
                }`}
              >
                {activeSection === 'presence' && (
                  <motion.div layoutId="activeTabIndicator" className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-saffron to-green rounded-r-full hidden lg:block" />
                )}
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors shadow-inner ${
                    activeSection === 'presence' ? 'bg-white/10' : 'bg-gray-50 group-hover:bg-green/10'
                  }`}>
                    <Users className={`w-7 h-7 ${activeSection === 'presence' ? 'text-green' : 'text-gray-400 group-hover:text-green'}`} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-black text-[16px] sm:text-[18px]">Community Presence</h3>
                    <p className={`text-xs sm:text-sm font-inter mt-1.5 font-medium ${activeSection === 'presence' ? 'text-white/60' : 'text-gray-400'}`}>
                      Roots in Bangalore Central
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveSection('acumen')}
                className={`shrink-0 w-[85vw] sm:w-[320px] lg:w-full text-left p-6 sm:p-7 rounded-[2rem] transition-all duration-500 border relative overflow-hidden snap-center group ${
                  activeSection === 'acumen' 
                    ? 'bg-navy border-navy shadow-[0_20px_40px_rgba(10,42,102,0.25)] text-white scale-[1.02] lg:scale-100' 
                    : 'bg-white border-gray-100 shadow-sm hover:shadow-xl text-navy hover:border-saffron/30 hover:-translate-y-1 lg:hover:translate-y-0 lg:hover:translate-x-2'
                }`}
              >
                {activeSection === 'acumen' && (
                  <motion.div layoutId="activeTabIndicator" className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-saffron to-green rounded-r-full hidden lg:block" />
                )}
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors shadow-inner ${
                    activeSection === 'acumen' ? 'bg-white/10' : 'bg-gray-50 group-hover:bg-saffron/10'
                  }`}>
                    <TrendingUp className={`w-7 h-7 ${activeSection === 'acumen' ? 'text-saffron' : 'text-gray-400 group-hover:text-saffron'}`} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-black text-[16px] sm:text-[18px]">Electoral Acumen</h3>
                    <p className={`text-xs sm:text-sm font-inter mt-1.5 font-medium ${activeSection === 'acumen' ? 'text-white/60' : 'text-gray-400'}`}>
                      A Proven Track Record
                    </p>
                  </div>
                </div>
              </button>
            </div>
            
            {/* Mobile Scroll Indicator */}
            <div className="flex items-center justify-center gap-2 mt-2 lg:hidden text-gray-400 text-xs font-poppins font-bold uppercase tracking-widest animate-pulse">
              <ChevronRight className="w-3 h-3" /> Swipe to explore <ChevronRight className="w-3 h-3" />
            </div>
          </div>

          {/* Content Display Area */}
          <div className="w-full lg:w-2/3 min-h-[500px]">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: QUICK STATS */}
              {activeSection === 'stats' && (
                <motion.div
                  key="stats"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-6 sm:space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* MLA Terms Card */}
                    <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(10,42,102,0.08)] transition-all relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-saffron/10 to-transparent rounded-bl-full pointer-events-none" />
                      
                      <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mb-8 border border-saffron/20 group-hover:scale-110 transition-transform">
                        <Calendar className="w-7 h-7 text-saffron" />
                      </div>
                      <h4 className="font-poppins font-black text-5xl sm:text-6xl text-navy mb-2 tracking-tight">7<span className="text-2xl sm:text-3xl text-gray-400 font-bold ml-1">Times</span></h4>
                      <p className="font-poppins font-bold text-xs text-saffron uppercase tracking-widest mb-8">MLA Terms (1985-2019)</p>
                      
                      <div className="space-y-3 mt-6">
                        <div className="flex items-center justify-between text-sm font-inter bg-gray-50/80 px-5 py-3.5 rounded-xl border border-gray-100/50">
                          <span className="font-bold text-navy flex items-center gap-2"><MapPin className="w-4 h-4 text-green" /> Shivajinagar</span>
                          <span className="text-gray-500 font-medium bg-white px-2 py-1 rounded-md shadow-sm text-xs">1985 – 1999</span>
                        </div>
                        <div className="flex items-center justify-between text-sm font-inter bg-gray-50/80 px-5 py-3.5 rounded-xl border border-gray-100/50">
                          <span className="font-bold text-navy flex items-center gap-2"><MapPin className="w-4 h-4 text-green" /> Jayamahal</span>
                          <span className="text-gray-500 font-medium bg-white px-2 py-1 rounded-md shadow-sm text-xs">1999 – 2008</span>
                        </div>
                        <div className="flex items-center justify-between text-sm font-inter bg-gray-50/80 px-5 py-3.5 rounded-xl border border-gray-100/50">
                          <span className="font-bold text-navy flex items-center gap-2"><MapPin className="w-4 h-4 text-green" /> Shivajinagar</span>
                          <span className="text-gray-500 font-medium bg-white px-2 py-1 rounded-md shadow-sm text-xs">2008 – 2019</span>
                        </div>
                      </div>
                    </div>

                    {/* Assembly Memberships Card */}
                    <div className="bg-gradient-to-br from-[#05132d] to-[#0a2046] border border-[#14326b] rounded-[2.5rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(5,19,45,0.4)] text-white relative overflow-hidden group">
                      <div className="absolute -right-10 -bottom-10 opacity-[0.03] pointer-events-none transform group-hover:scale-110 transition-transform duration-700">
                        <Landmark className="w-64 h-64 text-white" />
                      </div>
                      
                      {/* Decorative Tricolor Top Line */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                        <div className="flex-1 bg-saffron" />
                        <div className="flex-1 bg-white" />
                        <div className="flex-1 bg-green" />
                      </div>

                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10 group-hover:bg-white/20 transition-colors">
                        <Award className="w-7 h-7 text-saffron" />
                      </div>
                      <h4 className="font-poppins font-black text-3xl sm:text-4xl mb-4 leading-tight">Legislative <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-white">Assembly</span></h4>
                      <p className="font-inter text-sm sm:text-base text-white/70 mb-6 leading-relaxed">
                        Distinguished Member of the 8th, 10th, 11th, 12th, 13th, 14th, 15th and 16th Karnataka Legislative Assembly.
                      </p>
                      
                      <div className="absolute bottom-8 right-8 w-16 h-16 border-4 border-white/5 rounded-full flex items-center justify-center">
                        <span className="font-poppins font-black text-xl text-white/20">8x</span>
                      </div>
                    </div>
                  </div>

                  {/* Ministries List (Bento Box Style) */}
                  <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-gray-100 pb-8">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center shrink-0">
                          <Briefcase className="w-8 h-8 text-green" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-black text-2xl sm:text-3xl text-navy leading-none mb-2">Cabinet Ministries</h3>
                          <p className="font-inter text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest">Key Portfolios Held</p>
                        </div>
                      </div>
                      <div className="hidden sm:flex bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
                        <span className="font-poppins font-black text-xl text-navy">07</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      {ministries.map((ministry, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + (idx * 0.05) }}
                          className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 group ${
                            idx === 5 ? 'md:col-span-2 bg-gradient-to-r from-gray-50 to-white' : 'bg-white hover:bg-gray-50'
                          } ${idx % 2 === 0 ? 'border-saffron/10 hover:border-saffron/30' : 'border-green/10 hover:border-green/30'}`}
                        >
                          <div className={`mt-0.5 w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-sm ${
                            idx % 2 === 0 ? 'bg-saffron/10 text-saffron group-hover:bg-saffron group-hover:text-white' : 'bg-green/10 text-green group-hover:bg-green group-hover:text-white'
                          }`}>
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <p className="font-inter text-[14px] sm:text-[15px] text-gray-700 leading-snug group-hover:text-navy font-semibold">
                            {ministry}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: COMMUNITY PRESENCE */}
              {activeSection === 'presence' && (
                <motion.div
                  key="presence"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden group">
                    {/* Decorative Map BG */}
                    <div className="absolute right-0 top-0 opacity-[0.02] pointer-events-none transform group-hover:scale-105 transition-transform duration-1000">
                      <MapPin className="w-[30rem] h-[30rem] -mt-32 -mr-32" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                      <div>
                        <h3 className="font-poppins font-black text-3xl sm:text-4xl text-navy flex items-center gap-4 mb-3">
                          <span className="w-2 h-10 bg-gradient-to-b from-green to-saffron rounded-full inline-block" />
                          Bangalore Central &<br />Shivajinagar
                        </h3>
                        <p className="font-inter text-sm text-gray-500 max-w-md ml-6">
                          A deeply rooted connection with diverse communities, built on trust, service, and inclusive development.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-5 relative z-10">
                      {presencePoints.map((point, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + (idx * 0.08) }}
                          className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 border ${
                            idx === 2 
                              ? 'bg-gradient-to-br from-green/5 to-transparent border-green/10' 
                              : idx === 4
                              ? 'bg-gradient-to-br from-saffron/5 to-transparent border-saffron/10'
                              : 'bg-white hover:bg-gray-50/50 border-gray-100 hover:border-gray-200'
                          }`}
                        >
                          {/* Quote mark accent for visual interest */}
                          <div className="absolute top-4 left-4 text-4xl font-serif text-navy/5 leading-none select-none">&ldquo;</div>
                          
                          <p className="font-inter text-[15px] sm:text-[16px] text-gray-700 leading-relaxed relative z-10 font-medium">
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: ELECTORAL ACUMEN */}
              {activeSection === 'acumen' && (
                <motion.div
                  key="acumen"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-6 sm:space-y-8"
                >
                  <div className="grid grid-cols-1 gap-6 sm:gap-8">
                    {acumenPoints.map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.1 + (idx * 0.1) }}
                        className={`relative rounded-[2.5rem] p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden group border ${
                          idx === 2 
                            ? 'bg-gradient-to-br from-[#05132d] to-[#0a2046] border-[#14326b] text-white shadow-[0_20px_50px_rgba(5,19,45,0.4)] hover:-translate-y-1 transition-transform' 
                            : 'bg-white/80 backdrop-blur-xl border-gray-100 hover:shadow-[0_20px_40px_rgba(10,42,102,0.06)] hover:-translate-y-1 transition-all'
                        }`}
                      >
                        {/* Background subtle elements */}
                        {idx === 2 && (
                          <div className="absolute right-0 top-0 w-64 h-64 bg-saffron/10 rounded-full blur-3xl pointer-events-none" />
                        )}

                        <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-inner ${
                            idx === 2 ? 'bg-white/10 text-saffron backdrop-blur-md' : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 text-green'
                          }`}>
                            <ShieldCheck className="w-8 h-8" />
                          </div>
                          <div>
                            {idx === 0 && <h4 className="font-poppins font-black text-xl text-navy mb-3">Proven Mettle</h4>}
                            {idx === 1 && <h4 className="font-poppins font-black text-xl text-navy mb-3">Strategic Grassroot Network</h4>}
                            {idx === 2 && <h4 className="font-poppins font-black text-xl text-white mb-3">Community Consensus</h4>}
                            
                            <p className={`font-inter text-[15px] sm:text-[17px] leading-relaxed font-medium ${
                              idx === 2 ? 'text-white/80' : 'text-gray-600'
                            }`}>
                              {point}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Visual Accent Banner */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-saffron/10 via-white to-green/10 rounded-[2.5rem] p-8 sm:p-12 border border-white shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-white to-green opacity-50" />
                    
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(242,140,40,0.2)] mb-6">
                      <TrendingUp className="w-10 h-10 text-saffron" />
                    </div>
                    <h4 className="font-poppins font-black text-3xl sm:text-4xl text-navy mb-4 tracking-tight">7 Consecutive Victories</h4>
                    <p className="font-inter text-gray-600 sm:text-lg max-w-2xl font-medium">Demonstrating unmatched grassroot connection and robust political strategies in electoral battles across decades.</p>
                  </motion.div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
