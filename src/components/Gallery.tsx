"use client";

import Image from 'next/image';
import { Plus, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Gallery Section */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                  <Plus size={14} className="text-saffron stroke-[3]" />
                  <span className="text-green">GALLERY</span>
                </div>
                <h2 className="font-poppins text-2xl md:text-3xl font-black text-navy-blue leading-tight">
                  Moments of Service & Leadership
                </h2>
              </div>
              <a href="#" className="inline-flex items-center justify-center bg-white border border-gray-200 text-navy-blue px-5 py-2 rounded-full font-bold text-xs hover:border-gray-300 transition-all whitespace-nowrap">
                View All Photos
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 h-[250px] md:h-[300px]">
               <motion.div whileHover={{ scale: 0.98 }} className="relative rounded-2xl overflow-hidden group">
                 <Image src="/images/roshan baig/roshan baig 6.jpeg" alt="Gallery" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
               </motion.div>
               <div className="grid grid-rows-2 gap-3">
                 <motion.div whileHover={{ scale: 0.98 }} className="relative rounded-2xl overflow-hidden group">
                   <Image src="/images/roshan baig/roshan baig 7.jpeg" alt="Gallery" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                 </motion.div>
                 <motion.div whileHover={{ scale: 0.98 }} className="relative rounded-2xl overflow-hidden group">
                   <Image src="/images/roshan baig/roshan baig 8.jpeg" alt="Gallery" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                 </motion.div>
               </div>
            </div>
          </div>

          {/* Videos Section */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                  <Plus size={14} className="text-saffron stroke-[3]" />
                  <span className="text-green">VIDEOS & SPEECHES</span>
                </div>
                <h2 className="font-poppins text-2xl md:text-3xl font-black text-navy-blue leading-tight">
                  Watch, Listen & Get Inspired
                </h2>
              </div>
              <a href="#" className="inline-flex items-center justify-center bg-white border border-gray-200 text-navy-blue px-5 py-2 rounded-full font-bold text-xs hover:border-gray-300 transition-all whitespace-nowrap">
                View All Videos
              </a>
            </div>

            <motion.div whileHover={{ scale: 0.98 }} className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image src="/images/roshan baig/roshan baig 9.jpeg" alt="Video Thumbnail" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                 <div className="w-16 h-16 bg-navy-blue/90 rounded-full flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 transition-transform">
                   <Play className="text-white ml-1" size={24} />
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
