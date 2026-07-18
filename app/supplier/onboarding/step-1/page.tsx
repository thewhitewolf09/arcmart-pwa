'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Store, User, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function OnboardingStep1() {
  const router = useRouter();

  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar & Progress */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg px-4 py-3 flex flex-col justify-center">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Step 1 of 4</span>
          <div className="w-9"></div> {/* Spacer */}
        </div>
        
        <div className="w-full bg-surface-variant rounded-full h-1.5 overflow-hidden">
          <div className="bg-primary h-1.5 rounded-full" style={{ width: '25%' }}></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-6 pb-32">
        <h1 className="text-2xl font-black text-on-surface mb-2 tracking-tight">Business Details</h1>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
          Let's start with the basics. This information will be visible on your public profile.
        </p>

        <div className="space-y-6">
          
          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
              Business Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Store className="h-5 w-5 text-on-surface-variant" />
              </div>
              <input 
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition"
                placeholder="e.g. Jai Durga Tiles"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
              Owner Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-on-surface-variant" />
              </div>
              <input 
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition"
                placeholder="e.g. Amit Sharma"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-on-surface-variant" />
              </div>
              <input 
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition"
                placeholder="e.g. +91 98765 43210"
              />
            </div>
            <p className="text-[10px] text-on-surface-variant mt-2 ml-1">
              This number will be used by homeowners to contact you.
            </p>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
              City
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-on-surface-variant" />
              </div>
              <input 
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition"
                placeholder="e.g. Noida"
              />
            </div>
          </div>

        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <Link 
          href="/supplier/onboarding/step-2"
          className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          Continue <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}
