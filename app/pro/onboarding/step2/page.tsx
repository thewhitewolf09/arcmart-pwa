'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Languages, ArrowRight, ArrowLeft, Check } from 'lucide-react';

export default function OnboardingStep2() {
  const router = useRouter();

  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);

  const allAreas = ['Sector 18', 'Sector 50', 'Indirapuram', 'Greater Noida West', 'Kaushambi', 'Vaishali', 'Noida Extension'];
  const allLangs = ['Hindi', 'English', 'Punjabi', 'Bengali'];

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
            <div className="h-full bg-primary w-2/4 rounded-full"></div>
          </div>
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-1 text-center">Step 2 of 4</p>
        </div>
        <div className="w-9"></div>
      </div>

      <div className="flex-1 p-5 pb-32">
        <h1 className="text-2xl font-black text-on-surface mb-2">Service Area</h1>
        <p className="text-sm text-on-surface-variant mb-8">Where do you provide your services, and what languages do you speak?</p>
        
        <div className="space-y-8">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              Base City
            </label>
            <div className="relative">
              <MapPin className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
              <select className="w-full bg-surface glass-card border border-outline-variant rounded-xl pl-12 pr-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition appearance-none">
                <option value="" disabled selected>Select your city</option>
                <option>Delhi NCR</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">
              Areas Covered
            </label>
            <div className="flex flex-wrap gap-2">
              {allAreas.map(area => {
                const isSelected = selectedAreas.includes(area);
                return (
                  <button
                    key={area}
                    onClick={() => toggleArrayItem(area, selectedAreas, setSelectedAreas)}
                    className={`px-4 py-2 rounded-full text-xs font-bold border transition-all flex items-center ${
                      isSelected ? 'bg-primary text-on-primary border-primary' : 'bg-surface border-outline-variant text-on-surface-variant'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 mr-1" />}
                    {area}
                  </button>
                );
              })}
            </div>
            <p className="text-[10px] text-on-surface-variant mt-2 ml-1 font-semibold">Select all localities you are willing to travel to.</p>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">
              Languages Spoken
            </label>
            <div className="flex flex-wrap gap-2">
              {allLangs.map(lang => {
                const isSelected = languages.includes(lang);
                return (
                  <button
                    key={lang}
                    onClick={() => toggleArrayItem(lang, languages, setLanguages)}
                    className={`px-4 py-2 rounded-full text-xs font-bold border transition-all flex items-center ${
                      isSelected ? 'bg-secondary text-on-secondary border-secondary' : 'bg-surface border-outline-variant text-on-surface-variant'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 mr-1" />}
                    {lang}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => router.push('/pro/onboarding/step3')}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
        >
          Next Step <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}
