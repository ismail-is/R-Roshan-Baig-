"use client";

import { Plus } from 'lucide-react';
import Image from 'next/image';

export default function NewsAndTestimonials() {
  const news = [
    { image: "/images/roshan baig/roshan baig 10.jpeg", date: "20 May 2024", title: "R. Roshan Baig inaugurates development projects in Shivajinagar" },
    { image: "/images/roshan baig/roshan baig 2.jpeg", date: "15 May 2024", title: "Meeting with community members to discuss key local issues" },
    { image: "/images/roshan baig/roshan baig 3.jpeg", date: "10 May 2024", title: "Advocating for minority welfare and education initiatives" }
  ];

  return (
    <section id="news" className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* News Section (Takes 2 columns) */}
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                  <Plus size={14} className="text-saffron stroke-[3]" />
                  <span className="text-green">LATEST NEWS</span>
                </div>
                <h2 className="font-poppins text-2xl md:text-3xl font-black text-navy-blue leading-tight">
                  News & Updates
                </h2>
              </div>
              <a href="#" className="inline-flex items-center justify-center bg-transparent border border-gray-300 text-navy-blue px-5 py-2 rounded-full font-bold text-xs hover:border-gray-400 transition-all whitespace-nowrap">
                View All News
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {news.map((item, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-shadow">
                  <div className="relative h-32 overflow-hidden">
                    <Image src={item.image} alt="News" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] text-gray-500 mb-2 font-inter flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-saffron inline-block"></span> {item.date}
                    </p>
                    <h4 className="font-poppins font-bold text-navy-blue text-sm leading-tight mb-3 group-hover:text-green transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-bold text-navy-blue uppercase tracking-wider group-hover:text-green transition-colors inline-flex items-center gap-1">
                      Read More <span className="text-saffron">→</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section (Takes 1 column) */}
          <div className="lg:col-span-1">
             <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                  <Plus size={14} className="text-saffron stroke-[3]" />
                  <span className="text-green">TESTIMONIALS</span>
                </div>
                <h2 className="font-poppins text-2xl md:text-3xl font-black text-navy-blue leading-tight">
                  Voices Of The People
                </h2>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
                 <div className="text-6xl text-gray-200 font-serif leading-none absolute top-4 left-4">"</div>
                 <p className="relative z-10 font-inter text-gray-600 text-sm italic mt-8 mb-6 leading-relaxed">
                   A true leader who has always stood by the people. His dedication to development is unmatched.
                 </p>
                 <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                    <div>
                      <h4 className="font-poppins font-bold text-navy-blue text-sm">- Abdul Rahman</h4>
                      <p className="font-inter text-gray-500 text-[10px] uppercase tracking-wider">Community Leader</p>
                    </div>
                    {/* Placeholder for the person's face */}
                    <div className="ml-auto w-12 h-12 rounded-lg overflow-hidden relative bg-gray-200 border border-gray-100">
                       <Image src="/images/roshan baig/roshan baig 4.jpeg" alt="Abdul Rahman" fill className="object-cover" />
                    </div>
                 </div>
              </div>
              
              {/* Pagination dots */}
              <div className="flex items-center justify-center gap-1 mt-4">
                <div className="w-4 h-1.5 rounded-full bg-gradient-to-r from-green to-saffron"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}
