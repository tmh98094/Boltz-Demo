import React from 'react';
import { Button } from './Button';
import { StoreButtons } from './StoreButtons';
import { BatteryCharging, MapPin, Smartphone, ShieldCheck, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden selection:bg-brand-yellow selection:text-black">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-brand-yellow/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-yellow text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow"></span>
            </span>
            Live in Singapore
          </div>
          
          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            Power up your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-lime">
              lifestyle.
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-md leading-relaxed">
            Don't let a dead battery stop you. Rent a Boltz power bank from over 500 locations in Singapore. Scan, charge, and return anywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <StoreButtons />
          </div>

          <div className="pt-8 flex items-center gap-8 text-slate-400 text-sm border-t border-white/5 mt-8">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-brand-lime/10 rounded-lg">
                <MapPin className="w-4 h-4 text-brand-lime" />
              </div>
              <span>500+ Stations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-brand-yellow/10 rounded-lg">
                <BatteryCharging className="w-4 h-4 text-brand-yellow" />
              </div>
              <span>Fast Charging</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="p-2 bg-brand-accent/10 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-brand-accent" />
              </div>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>

        {/* Visuals */}
        <div className="relative lg:h-[700px] flex items-center justify-center perspective-1000">
          {/* Floating Phone */}
          <div className="relative w-72 h-[500px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl animate-float overflow-hidden z-20 ring-1 ring-white/10">
             {/* Screen Content */}
             <div className="w-full h-full bg-slate-950 flex flex-col relative">
                {/* Status Bar */}
                <div className="px-6 py-3 flex justify-between items-center">
                  <div className="text-[10px] font-bold text-white">9:41</div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
                  </div>
                </div>

                {/* Map Area */}
                <div className="absolute top-0 left-0 w-full h-2/3 bg-slate-800">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]"></div>
                  
                  {/* Map Markers */}
                  <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-brand-yellow rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <BatteryCharging className="w-4 h-4 text-black" />
                  </div>
                  <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-brand-lime rounded-full border-2 border-white shadow-lg"></div>
                  <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-slate-700 rounded-full border-2 border-white shadow-lg"></div>
                </div>

                {/* Bottom Sheet */}
                <div className="mt-auto bg-white rounded-t-3xl p-6 h-1/2 z-10 relative shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
                   <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-6"></div>
                   <div className="flex items-center justify-between mb-4">
                     <div>
                       <h3 className="text-slate-900 font-bold text-lg">Orchard Central</h3>
                       <p className="text-slate-500 text-xs">200m away • Open 24/7</p>
                     </div>
                     <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                       5+
                     </div>
                   </div>
                   
                   <div className="flex gap-3 mb-6">
                      <div className="flex-1 bg-slate-50 rounded-xl p-3 text-center">
                        <div className="text-xs text-slate-400 mb-1">Cost</div>
                        <div className="text-sm font-bold text-slate-900">$1/hr</div>
                      </div>
                      <div className="flex-1 bg-slate-50 rounded-xl p-3 text-center">
                        <div className="text-xs text-slate-400 mb-1">Cables</div>
                        <div className="text-sm font-bold text-slate-900">All Types</div>
                      </div>
                   </div>

                   <button className="w-full bg-brand-black text-white py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors">
                     Scan to Rent
                   </button>
                </div>
             </div>
          </div>

          {/* Second Phone (Background) */}
          <div className="absolute right-10 bottom-20 w-64 h-[450px] bg-slate-800 rounded-[2.5rem] border-[6px] border-slate-700 opacity-40 blur-[1px] -z-10 rotate-12">
          </div>

          {/* Decorative circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-white/5 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full border-dashed animate-spin-slow"></div>
          
          {/* Floating Badge */}
          <div className="absolute top-20 right-20 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl flex items-center gap-3 animate-float [animation-delay:1s] z-30">
            <div className="bg-brand-yellow p-2 rounded-lg">
              <Star className="w-5 h-5 text-black fill-current" />
            </div>
            <div>
              <div className="text-xs text-slate-300">Rating</div>
              <div className="text-sm font-bold text-white">4.9/5.0</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};