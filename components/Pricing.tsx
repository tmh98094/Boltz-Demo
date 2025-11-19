import React from 'react';
import { Check, CreditCard, Smartphone } from 'lucide-react';
import { Button } from './Button';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    title: "Pay As You Go",
    price: "$1.00",
    features: [
      "Per hour charging",
      "Daily cap at $10.00",
      "No subscription needed",
      "Return anywhere"
    ]
  },
  {
    title: "Member Pass",
    price: "$19.90",
    features: [
      "Unlimited rentals per month",
      "Keep up to 24 hours per rental",
      "Exclusive app skins",
      "Priority support"
    ],
    popular: true
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-slate-400">No hidden fees. Pay only for what you use.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'bg-white/10 border-brand-yellow shadow-2xl shadow-brand-yellow/10' : 'bg-white/5 border-white/10 hover:bg-white/10'} flex-1 min-w-[300px]`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-black px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-slate-200 mb-2">{plan.title}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold font-display text-white">{plan.price}</span>
                <span className="text-slate-400">{plan.popular ? '/month' : '/hour'}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-brand-lime/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-brand-lime" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                className="w-full"
              >
                {plan.popular ? 'Get Membership' : 'Start Renting'}
              </Button>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="border-t border-white/10 pt-12 text-center">
          <p className="text-slate-400 text-sm mb-6 uppercase tracking-widest font-medium">We Accept</p>
          <div className="flex flex-wrap justify-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
               <CreditCard className="w-5 h-5 text-white" />
               <span className="font-bold text-white">VISA</span>
             </div>
             <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
               <div className="flex -space-x-2">
                 <div className="w-4 h-4 rounded-full bg-red-500/80"></div>
                 <div className="w-4 h-4 rounded-full bg-orange-500/80"></div>
               </div>
               <span className="font-bold text-white">Mastercard</span>
             </div>
             <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
               <Smartphone className="w-5 h-5 text-brand-accent" />
               <span className="font-bold text-white">PayNow</span>
             </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
               <span className="font-bold text-white italic">GrabPay</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};