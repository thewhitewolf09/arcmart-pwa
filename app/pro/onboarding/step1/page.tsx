'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { User, Briefcase, ArrowRight, ArrowLeft } from 'lucide-react';

export default function OnboardingStep1() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/4 rounded-full"></div>
          </div>
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-1 text-center">Step 1 of 4</p>
        </div>
        <div className="w-9"></div> {/* Spacer */}
      </div>

      <div className="flex-1 p-5 pb-32">
        <h1 className="text-2xl font-black text-on-surface mb-2">Welcome to ArcMart Pro</h1>
        <p className="text-sm text-on-surface-variant mb-8">Let's start with your basic details to set up your professional profile.</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              Full Name
            </label>
            <div className="relative">
              <User className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
              <input 
                type="text" 
                placeholder="e.g. Arun Sharma"
                className="w-full bg-surface glass-card border border-outline-variant rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              Trade / Profession
            </label>
            <div className="relative">
              <Briefcase className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
              <select className="w-full bg-surface glass-card border border-outline-variant rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition appearance-none">
                <option value="" disabled selected>Select your trade</option>
                <option>Plumbing Expert</option>
                <option>Electrician</option>
                <option>Carpenter</option>
                <option>Painter</option>
                <option>Architect</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              Experience (Years)
            </label>
            <input 
              type="number" 
              placeholder="e.g. 5"
              className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
            />
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => router.push('/pro/onboarding/step2')}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
        >
          Next Step <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}
