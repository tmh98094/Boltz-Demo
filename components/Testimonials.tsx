import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Sarah Lim",
    role: "Student",
    location: "NUS",
    rating: 5,
    content: "Literally a life saver! My phone died right before I needed to call a Grab at Clarke Quay. Found a Boltz station in 2 mins."
  },
  {
    name: "James Tan",
    role: "Sales Executive",
    location: "Raffles Place",
    rating: 5,
    content: "I use this almost every day between meetings. The fact that I can return it at any MRT station on my way home is genius."
  },
  {
    name: "Priya K.",
    role: "Tourist",
    location: "Marina Bay",
    rating: 4,
    content: "Super easy to use for tourists. Didn't need to pay a huge deposit, just tapped my credit card and I was good to go."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Locals Love Boltz</h2>
          <p className="text-slate-400">Join thousands of happy users across the island.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-3xl relative group hover:-translate-y-2 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-brand-yellow/20 w-10 h-10 rotate-12" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < item.rating ? 'text-brand-yellow fill-brand-yellow' : 'text-slate-700'}`} 
                  />
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed mb-6 min-h-[80px]">"{item.content}"</p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-yellow to-brand-lime p-[2px]">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white">
                    {item.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <div className="text-xs text-slate-500 flex items-center gap-1">
                    <span>{item.role}</span>
                    <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};