import React from 'react';
import { MapPin } from 'lucide-react';

export const MapSection: React.FC = () => {
  return (
    <section id="locations" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/2 space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Always nearby. <br/>
              <span className="text-brand-lime">Never run dry.</span>
            </h2>
            <p className="text-slate-400 text-lg">
              With over 500 stations located in major MRT stations, shopping malls like Ion Orchard, VivoCity, and even your favorite 7-Eleven stores.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-brand-lime/20 flex items-center justify-center text-brand-lime font-bold">1</div>
                <div>
                  <h4 className="font-bold text-white">Shopping Malls</h4>
                  <p className="text-sm text-slate-400">Available at concierge or info counters</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold">2</div>
                <div>
                  <h4 className="font-bold text-white">MRT Stations</h4>
                  <p className="text-sm text-slate-400">Located near ticketing machines</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold">3</div>
                <div>
                  <h4 className="font-bold text-white">Cafes & Bars</h4>
                  <p className="text-sm text-slate-400">Partnered with 100+ F&B outlets</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            {/* Abstract Map Visualization */}
            <div className="aspect-square rounded-3xl bg-slate-800 border border-white/10 relative overflow-hidden group">
              {/* Simulated Map Pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {/* SVG Map Outline of Singapore (Simplified) */}
              <svg viewBox="0 0 400 250" className="absolute inset-0 w-full h-full text-slate-600 fill-current opacity-30 transform scale-90">
                 <path d="M20,120 Q50,100 100,110 T200,130 T300,110 T380,120 L370,180 Q300,200 200,190 T50,170 Z" />
              </svg>

              {/* Animated Hotspots */}
              <div className="absolute top-1/3 left-1/4">
                 <span className="flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-yellow"></span>
                 </span>
                 <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/80 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Jurong East</div>
              </div>

              <div className="absolute top-1/2 left-1/2">
                 <span className="flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-lime"></span>
                 </span>
                 <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/80 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Orchard Road</div>
              </div>

               <div className="absolute bottom-1/3 right-1/4">
                 <span className="flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-accent"></span>
                 </span>
                 <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/80 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Changi Airport</div>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-lg border border-white/10 text-xs text-slate-300 flex items-center gap-2">
                <MapPin size={12} /> Singapore Coverage
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};