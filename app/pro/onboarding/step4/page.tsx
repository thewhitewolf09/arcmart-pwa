'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, ArrowLeft, Check, IndianRupee, Send } from 'lucide-react';

export default function OnboardingStep4() {
  const router = useRouter();

  const [services, setServices] = useState<string[]>([]);

  const availableServices = [
    'Pipe Leakage', 'Water Tank Installation', 'Tap Repair', 'Drain Blockage', 
    'Bathroom Fitting', 'Motor Repair', 'Washing Machine Plumbing'
  ];

  const toggleArrayItem = (item: string, array: string[], setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (array.includes(item)) {
      setter(array.filter(i => i !== item));
    } else {
      setter([...array, item]);
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-primary w-full rounded-full"></div>
          </div>
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-1 text-center">Step 4 of 4</p>
        </div>
        <div className="w-9"></div>
      </div>

      <div className="flex-1 p-5 pb-32">
        <h1 className="text-2xl font-black text-on-surface mb-2">Business Details</h1>
        <p className="text-sm text-on-surface-variant mb-8">What specific jobs do you do, and what is your base visiting charge?</p>
        
        <div className="space-y-8">
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">
              Services Offered <span className="text-error">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {availableServices.map(service => {
                const isSelected = services.includes(service);
                return (
                  <button
                    key={service}
                    onClick={() => toggleArrayItem(service, services, setServices)}
                    className={`px-4 py-2 rounded-full text-xs font-bold border transition-all flex items-center ${
                      isSelected ? 'bg-primary text-on-primary border-primary' : 'bg-surface border-outline-variant text-on-surface-variant'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 mr-1" />}
                    {service}
                  </button>
                );
              })}
            </div>
            <p className="text-[10px] text-on-surface-variant mt-2 ml-1 font-semibold">Select all that apply for "Plumbing Expert".</p>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">
              Base Visit Charge <span className="text-error">*</span>
            </label>
            <div className="relative">
              <IndianRupee className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
              <input 
                type="number" 
                placeholder="249"
                className="w-full bg-surface glass-card border border-outline-variant rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
              />
            </div>
            <p className="text-[10px] text-on-surface-variant mt-2 ml-1 font-semibold">Average in your area is ₹199 - ₹299.</p>
          </div>

        </div>
      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => router.push('/pro/onboarding/pending')}
          disabled={services.length === 0}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Profile <Send className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}
