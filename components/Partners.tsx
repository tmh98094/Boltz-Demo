import React from 'react';
import { Building2, ShoppingBag, Train, Coffee } from 'lucide-react';

export const Partners: React.FC = () => {
  const partners = [
    { name: "CapitaLand", icon: Building2 },
    { name: "SMRT", icon: Train },
    { name: "7-Eleven", icon: ShoppingBag },
    { name: "Starbucks", icon: Coffee },
    { name: "VivoCity", icon: Building2 },
    { name: "Sentosa", icon: Map },
  ];

  return (
    <section className="py-12 border-b border-white/5 bg-brand-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <p className="text-center text-slate-500 text-sm font-medium tracking-widest uppercase mb-8">
          Trusted by Singapore's Best Venues
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-2 group cursor-default">
              <partner.icon className="w-6 h-6 text-slate-400 group-hover:text-brand-yellow transition-colors" />
              <span className="font-display font-bold text-xl text-slate-400 group-hover:text-white transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper for the Sentosa icon
function Map(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  );
}