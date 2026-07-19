'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ChevronRight, Check } from 'lucide-react';

export default function ConsultantOnboardingStep2() {
  const router = useRouter();
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const localities = ['Koramangala', 'Indiranagar', 'HSR Layout', 'Whitefield', 'Jayanagar', 'JP Nagar', 'Bellandur'];
  const propertyTypes = ['Apartments / Flats', 'Independent Houses', 'Villas', 'Plots / Land', 'Commercial Office Space', 'Retail Shops'];

  const toggleArea = (area: string) => {
    setSelectedAreas(prev => 
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const isValid = selectedAreas.length > 0 && selectedTypes.length > 0;

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg px-4 py-3 border-b border-outline-variant">
        <div className="flex items-center mb-4 mt-2">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant transition">
            <ArrowLeft className="w-5 h-5 text-on-surface" />
          </button>
          <div className="flex-1">
            <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
              <div className="h-full bg-primary w-2/3 transition-all duration-500 rounded-full"></div>
            </div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-2">Step 2 of 3: Expertise</p>
          </div>
        </div>
        <h1 className="text-2xl font-black text-on-surface">Areas & Specialties</h1>
        <p className="text-sm text-on-surface-variant mt-1">Select the localities and properties you deal in.</p>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-8">
        
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">
            Localities Covered <span className="text-primary">*</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {localities.map(area => {
              const isSelected = selectedAreas.includes(area);
              return (
                <button
                  key={area}
                  onClick={() => toggleArea(area)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition flex items-center ${
                    isSelected 
                      ? 'bg-primary border-primary text-white shadow-md' 
                      : 'bg-surface border-outline-variant text-on-surface-variant hover:border-primary/50'
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4 mr-1.5" />}
                  {area}
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">
            Property Specialties <span className="text-primary">*</span>
          </h3>
          <div className="flex flex-col gap-3">
            {propertyTypes.map(type => {
              const isSelected = selectedTypes.includes(type);
              return (
                <div
                  key={type}
                  onClick={() => toggleType(type)}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition cursor-pointer ${
                    isSelected 
                      ? 'bg-primary/5 border-primary shadow-sm' 
                      : 'bg-surface border-outline-variant hover:border-primary/50'
                  }`}
                >
                  <span className={`text-sm font-bold ${isSelected ? 'text-primary' : 'text-on-surface'}`}>{type}</span>
                  <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition ${
                    isSelected ? 'bg-primary border-primary' : 'border-outline-variant bg-surface'
                  }`}>
                    {isSelected && <Check className="w-4 h-4 text-white" />}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          disabled={!isValid}
          onClick={() => router.push('/consultant/onboarding/step3')}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:shadow-none"
        >
          Continue <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}
