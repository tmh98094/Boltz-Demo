import React from 'react';
import { Zap, Instagram, Twitter, Facebook } from 'lucide-react';
import { StoreButtons } from './StoreButtons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-brand-black fill-current" />
              </div>
              <span className="font-display font-bold text-xl text-white">Boltz</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Keeping Singapore charged, one power bank at a time. The smartest way to stay connected in the city.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-colors text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-colors text-white">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">For Partners</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Support</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">User Terms</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div id="download" className="scroll-mt-32">
            <h4 className="font-bold text-white mb-6 text-lg">Get the App</h4>
            <p className="text-slate-400 text-sm mb-4">Download now for a free 30-min charge on your first rental.</p>
            <StoreButtons className="flex-col" />
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Boltz Singapore Pte Ltd. All rights reserved.</p>
          <div className="flex gap-6">
             <span>Terms</span>
             <span>Privacy</span>
             <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};