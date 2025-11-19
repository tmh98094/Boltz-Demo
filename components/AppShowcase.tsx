import React from 'react';
import { MapPin, Scan, Wallet, Menu, Battery } from 'lucide-react';

export const AppShowcase: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/3 space-y-8 z-10">
            <h2 className="font-display text-4xl font-bold">
              Everything you need, <br />
              <span className="text-brand-lime">right in your pocket.</span>
            </h2>
            <p className="text-slate-400 text-lg">
              The Boltz app is designed for speed. Find stations, track your rental duration, and manage payments all in one place.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Smart Map</h4>
                  <p className="text-slate-400 text-sm">Real-time inventory of power banks and empty slots.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-lime/10 flex items-center justify-center shrink-0">
                  <Wallet className="text-brand-lime" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Digital Wallet</h4>
                  <p className="text-slate-400 text-sm">Seamless payments via Apple Pay, Google Pay, and PayNow.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mockups Display */}
          <div className="lg:w-2/3 relative flex items-center justify-center lg:justify-end gap-6 perspective-1000">
             {/* Screen 1: Map */}
             <div className="w-64 h-[500px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl transform lg:translate-y-12 lg:-rotate-6 relative overflow-hidden z-10 hover:z-20 hover:scale-105 transition-all duration-500">
                <div className="bg-slate-800 h-full w-full relative">
                   <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>
                   {/* Fake UI Elements */}
                   <div className="absolute top-6 left-6 right-6 h-10 bg-white rounded-lg shadow-md flex items-center px-3 gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                   </div>
                   <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-slate-900 rounded-t-3xl p-6">
                      <div className="h-10 w-10 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
                        <Scan className="w-5 h-5 text-black" />
                      </div>
                      <div className="h-2 w-32 bg-slate-700 rounded-full mb-2"></div>
                      <div className="h-2 w-20 bg-slate-800 rounded-full"></div>
                   </div>
                </div>
             </div>

             {/* Screen 2: Scan (Main) */}
             <div className="w-64 h-[500px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl relative overflow-hidden z-20 hover:scale-105 transition-all duration-500">
                <div className="h-full w-full bg-black relative flex flex-col">
                   <div className="absolute inset-0">
                      {/* Camera View Sim */}
                      <div className="w-full h-full bg-slate-800 opacity-50"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-brand-yellow rounded-xl">
                        <div className="absolute top-0 left-0 w-2 h-2 bg-brand-yellow"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 bg-brand-yellow"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-brand-yellow"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-brand-yellow"></div>
                        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></div>
                      </div>
                   </div>
                   <div className="mt-auto p-8 text-center z-10">
                      <p className="text-white font-bold mb-2">Scan QR to Rent</p>
                      <p className="text-slate-400 text-xs">Align the code within the frame</p>
                   </div>
                </div>
             </div>

             {/* Screen 3: Wallet */}
             <div className="hidden md:block w-64 h-[500px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl transform lg:translate-y-12 lg:rotate-6 relative overflow-hidden z-10 hover:z-20 hover:scale-105 transition-all duration-500">
                 <div className="h-full w-full bg-slate-50 flex flex-col">
                    <div className="bg-brand-black p-6 pb-10 rounded-b-3xl">
                       <div className="flex justify-between text-white mb-6">
                          <Menu size={20} />
                          <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
                       </div>
                       <div className="text-slate-400 text-xs mb-1">Balance</div>
                       <div className="text-3xl font-bold text-white">$24.50</div>
                    </div>
                    <div className="p-6 space-y-4">
                       <div className="h-16 bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                             <Battery className="text-blue-500 w-5 h-5" />
                          </div>
                          <div>
                             <div className="h-2 w-24 bg-slate-200 rounded mb-1"></div>
                             <div className="h-2 w-12 bg-slate-100 rounded"></div>
                          </div>
                       </div>
                       <div className="h-16 bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex items-center gap-3">
                           <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                             <Wallet className="text-green-500 w-5 h-5" />
                          </div>
                          <div>
                             <div className="h-2 w-24 bg-slate-200 rounded mb-1"></div>
                             <div className="h-2 w-12 bg-slate-100 rounded"></div>
                          </div>
                       </div>
                    </div>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};