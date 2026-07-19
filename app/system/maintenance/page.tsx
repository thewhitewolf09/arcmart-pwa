'use client';

import React from 'react';
import { Settings, Clock } from 'lucide-react';

export default function MaintenanceScreen() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-primary">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-8">
        
        <div className="relative">
          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-md border border-white/20">
            <Settings className="w-16 h-16 text-white animate-[spin_4s_linear_infinite]" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg border-4 border-primary">
            <Settings className="w-6 h-6 text-on-secondary animate-[spin_3s_linear_infinite_reverse]" />
          </div>
        </div>
        
        <div>
          <h1 className="text-4xl font-black text-white mb-4 leading-tight">We're upgrading<br/>ArcMart</h1>
          <p className="text-white/80 font-medium leading-relaxed max-w-[280px] mx-auto text-sm">
            We are performing scheduled maintenance to bring you new features and a faster experience.
          </p>
        </div>

        <div className="w-full max-w-xs bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 text-left mt-6 shadow-xl">
          <div className="flex items-center text-white mb-3">
            <Clock className="w-5 h-5 mr-2 text-secondary" />
            <span className="text-xs font-bold uppercase tracking-widest">Expected Completion</span>
          </div>
          <p className="font-black text-white text-xl">Today at 4:00 PM</p>
          <p className="text-xs text-white/70 mt-1 font-medium">Please check back in a little while.</p>
        </div>
      </div>
    </div>
  );
}
