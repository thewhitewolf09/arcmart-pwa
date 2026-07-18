'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Search, MapPin, X } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  'Tiles & Flooring', 'Sanitaryware', 'Paints', 
  'Electricals', 'Plumbing', 'Hardware', 'Plywood & Laminates'
];

export default function OnboardingStep2() {
  const router = useRouter();

  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Tiles & Flooring']);
  const [areas, setAreas] = useState<string[]>(['Noida Sector 18', 'Indirapuram']);
  const [areaInput, setAreaInput] = useState('');

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const addArea = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && areaInput.trim()) {
      if (!areas.includes(areaInput.trim())) {
        setAreas([...areas, areaInput.trim()]);
      }
      setAreaInput('');
    }
  };

  const removeArea = (area: string) => {
    setAreas(areas.filter(a => a !== area));
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar & Progress */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg px-4 py-3 flex flex-col justify-center">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Step 2 of 4</span>
          <div className="w-9"></div> {/* Spacer */}
        </div>
        
        <div className="w-full bg-surface-variant rounded-full h-1.5 overflow-hidden">
          <div className="bg-primary h-1.5 rounded-full" style={{ width: '50%' }}></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-6 pb-32">
        <h1 className="text-2xl font-black text-on-surface mb-2 tracking-tight">What do you sell?</h1>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
          Select the product categories you specialize in and define the areas you service.
        </p>

        <div className="space-y-8">
          
          {/* Categories */}
          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-3 block ml-1">
              Select Categories
            </label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => {
                const isSelected = selectedCategories.includes(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                      isSelected 
                        ? 'bg-primary text-on-primary border-primary shadow-sm' 
                        : 'bg-surface-variant text-on-surface-variant border-transparent hover:border-outline-variant'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
            <p className="text-[10px] text-on-surface-variant mt-3 ml-1">
              Select all that apply. This helps homeowners find you faster.
            </p>
          </div>

          <hr className="border-outline-variant/50" />

          {/* Service Areas */}
          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-3 block ml-1">
              Service Localities
            </label>
            
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-on-surface-variant" />
              </div>
              <input 
                type="text"
                value={areaInput}
                onChange={(e) => setAreaInput(e.target.value)}
                onKeyDown={addArea}
                className="w-full pl-12 pr-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition"
                placeholder="Search and press Enter to add..."
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {areas.map(area => (
                <div key={area} className="flex items-center bg-secondary-container/50 border border-secondary/20 text-secondary-dark px-3 py-1.5 rounded-lg text-xs font-bold">
                  <MapPin className="w-3 h-3 mr-1.5 opacity-70" />
                  {area}
                  <button 
                    onClick={() => removeArea(area)}
                    className="ml-2 p-0.5 rounded-full hover:bg-secondary/20 transition"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
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
          href="/supplier/onboarding/step-3"
          className="flex-1 py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          Continue <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}
