'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Camera, Image as ImageIcon, Banknote } from 'lucide-react';
import Link from 'next/link';

export default function OnboardingStep3() {
  const router = useRouter();

  const [shopPhoto, setShopPhoto] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const simulatePhotoUpload = () => {
    setShopPhoto('https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80');
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar & Progress */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg px-4 py-3 flex flex-col justify-center">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Step 3 of 4</span>
          <div className="w-9"></div> {/* Spacer */}
        </div>
        
        <div className="w-full bg-surface-variant rounded-full h-1.5 overflow-hidden">
          <div className="bg-primary h-1.5 rounded-full" style={{ width: '75%' }}></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-6 pb-32">
        <h1 className="text-2xl font-black text-on-surface mb-2 tracking-tight">Showcase & Pricing</h1>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
          Add photos of your shop/showroom and provide a rough estimate of your pricing.
        </p>

        <div className="space-y-8">
          
          {/* Photos Upload */}
          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-3 block ml-1">
              Shop Photos
            </label>
            {!shopPhoto ? (
              <div 
                onClick={simulatePhotoUpload}
                className="w-full aspect-[4/3] glass-card rounded-2xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center cursor-pointer hover:bg-surface-variant transition active:scale-[0.98]"
              >
                <div className="flex space-x-4 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-secondary-dark" />
                  </div>
                </div>
                <h3 className="font-bold text-on-surface text-sm mb-1">Upload Photos</h3>
                <p className="text-[10px] text-on-surface-variant">Max 5 photos, 5MB each</p>
              </div>
            ) : (
              <div 
                className="w-full aspect-[4/3] rounded-2xl border border-outline-variant shadow-sm bg-cover bg-center cursor-pointer relative overflow-hidden"
                style={{ backgroundImage: `url(${shopPhoto})` }}
                onClick={simulatePhotoUpload}
              >
                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg font-bold text-xs text-on-surface flex items-center">
                    <Camera className="w-4 h-4 mr-2" /> Edit Photos
                  </div>
                </div>
              </div>
            )}
            <p className="text-[10px] text-on-surface-variant mt-2 ml-1">
              High-quality photos build trust with homeowners.
            </p>
          </div>

          <hr className="border-outline-variant/50" />

          {/* Pricing */}
          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-3 block ml-1">
              Price Range (Tiles & Flooring)
            </label>
            <div className="flex items-center space-x-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-on-surface-variant font-bold">₹</span>
                </div>
                <input 
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full pl-8 pr-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition"
                  placeholder="Min"
                />
              </div>
              <span className="text-on-surface-variant font-bold text-sm">to</span>
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-on-surface-variant font-bold">₹</span>
                </div>
                <input 
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full pl-8 pr-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition"
                  placeholder="Max"
                />
              </div>
            </div>
            <p className="text-[10px] text-on-surface-variant mt-2 ml-1">
              Per square foot. You can refine this later in settings.
            </p>
          </div>

        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30 flex space-x-3">
        <button 
          onClick={() => router.back()}
          className="w-1/3 py-4 rounded-xl border border-outline-variant text-on-surface font-bold text-sm flex items-center justify-center hover:bg-surface-variant transition"
        >
          Back
        </button>
        <Link 
          href="/supplier/onboarding/step-4"
          className="flex-1 py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          Continue <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}
