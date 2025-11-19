import React from 'react';
import { ScanLine, Battery, CornerDownLeft } from 'lucide-react';
import { Step } from '../types';

const steps: Step[] = [
  {
    title: "Scan QR Code",
    description: "Open the Boltz app and scan the QR code at any rental station. Instant unlock with no deposit for card users.",
    icon: ScanLine
  },
  {
    title: "Take & Charge",
    description: "The power bank pops out with built-in Lightning, USB-C, and Micro-USB cables. Charge on the go.",
    icon: Battery
  },
  {
    title: "Return Anywhere",
    description: "Done? Simply locate a nearby station on the app and push the power bank into an empty slot.",
    icon: CornerDownLeft
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Simple as 1, 2, 3</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Our frictionless rental process gets you powered up in seconds.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-lg group-hover:border-brand-yellow/50 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]">
                  <step.icon className="w-8 h-8 text-brand-yellow" />
                </div>
                
                <div className="absolute top-8 right-8 text-6xl font-display font-bold text-white/5 pointer-events-none select-none group-hover:text-white/10 transition-colors">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold mb-3 font-display text-white">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};