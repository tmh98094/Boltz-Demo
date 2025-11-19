import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "How do I rent a power bank?",
    answer: "Simply download the Boltz app, scan the QR code on any station, and the power bank will pop out automatically. No deposit required for credit card users."
  },
  {
    question: "What cables are included?",
    answer: "Every Boltz power bank comes with 3 built-in cables: Lightning (iPhone), USB-C (Android/Newer Gadgets), and Micro-USB (Older devices). You don't need to bring your own cable."
  },
  {
    question: "How much does it cost?",
    answer: "It costs $1.00 SGD per hour. The daily maximum cap is $10.00 SGD. If you keep it for more than 24 hours, the daily cap resets."
  },
  {
    question: "Where can I return the power bank?",
    answer: "You can return the power bank to ANY Boltz station in Singapore. Use the app to find the nearest station with an empty slot."
  },
  {
    question: "What happens if I lose the power bank?",
    answer: "If a power bank is not returned within 5 days, it will be considered purchased, and a fee of $49.90 will be charged to your payment method."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-400">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'bg-slate-800/50 border-brand-yellow/50 shadow-[0_0_20px_rgba(250,204,21,0.1)]' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-brand-yellow' : 'text-white'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-yellow shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              
              <div 
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
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