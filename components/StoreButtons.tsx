import React from 'react';

interface StoreButtonsProps {
  className?: string;
}

export const StoreButtons: React.FC<StoreButtonsProps> = ({ className = '' }) => (
  <div className={`flex flex-wrap gap-4 ${className}`}>
    {/* Apple */}
    <a href="#" className="flex items-center gap-3 bg-white/5 hover:bg-white/15 border border-white/10 px-5 py-3 rounded-xl transition-all duration-300 group hover:border-white/20 hover:scale-105">
      <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
        <path d="M17.8 10.6c-.2-1.5.6-2.6 1.9-3.2-.9-1.3-2.3-1.5-2.8-1.5-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.7-1.3 0-2.5.8-3.2 2-1.4 2.3-.3 5.8 1 7.8.7 1 1.5 2.1 2.5 2.1.9 0 1.3-.6 2.5-.6 1.1 0 1.5.6 2.5.6.9 0 1.7-1 2.4-2.1.7-1 1-1.4 1-1.4s-.8-.3-1.2-1.7zM15.2 5.6c.6-.8 1-1.8.9-2.7-.8 0-1.9.6-2.5 1.3-.5.7-.9 1.7-.8 2.6.9.1 1.9-.4 2.4-1.2z"/>
      </svg>
      <div className="flex flex-col items-start">
        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Download on the</span>
        <span className="text-lg font-display font-bold leading-none text-white">App Store</span>
      </div>
    </a>

    {/* Google */}
    <a href="#" className="flex items-center gap-3 bg-white/5 hover:bg-white/15 border border-white/10 px-5 py-3 rounded-xl transition-all duration-300 group hover:border-white/20 hover:scale-105">
      <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
        <path d="M4 18.4l7.4-7.4L4 3.6v14.8zM19.6 11L5.6 3c-.3-.2-.7-.2-1 0L12.9 11l6.7 0zM12.9 11L4.6 19c.3.2.7.2 1 0l14-8L12.9 11zM13.6 11.7L20.4 15c.5.3.9 0 .9-.6v-4.8c0-.6-.4-.9-.9-.6l-6.8 2.7z"/>
      </svg>
      <div className="flex flex-col items-start">
        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Get it on</span>
        <span className="text-lg font-display font-bold leading-none text-white">Google Play</span>
      </div>
    </a>
  </div>
);