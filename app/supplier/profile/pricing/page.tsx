'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, ChevronDown, Banknote } from 'lucide-react';

export default function EditPricing() {
  const router = useRouter();
  
  const [pricing, setPricing] = useState([
    { id: 'cat-1', name: 'Tiles & Flooring', min: '45', max: '250', unit: 'per sq ft' },
    { id: 'cat-2', name: 'Sanitaryware & Bath', min: '1500', max: '25000', unit: 'per piece' }
  ]);

  const handlePriceChange = (index: number, field: 'min' | 'max', value: string) => {
    const newPricing = [...pricing];
    newPricing[index][field] = value;
    setPricing(newPricing);
  };

  const handleUnitChange = (index: number, value: string) => {
    const newPricing = [...pricing];
    newPricing[index].unit = value;
    setPricing(newPricing);
  };

  const handleSave = () => {
    // Save logic
    router.back();
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Edit Price Ranges</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
          Set indicative price ranges for your categories. This helps match you with homeowners who have the right budget.
        </p>

        <div className="space-y-6">
          {pricing.map((item, index) => (
            <div key={item.id} className="glass-card rounded-2xl p-5 border border-outline-variant shadow-sm relative overflow-hidden">
              <div className="flex items-center mb-4">
                <Banknote className="w-4 h-4 text-primary mr-2" />
                <h3 className="font-bold text-sm text-on-surface">{item.name}</h3>
              </div>
              
              <div className="flex space-x-3 mb-4">
                <div className="flex-1 relative">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant absolute -top-2 left-2 bg-surface px-1 z-10">
                    Min Price (₹)
                  </label>
                  <input 
                    type="number"
                    value={item.min}
                    onChange={(e) => handlePriceChange(index, 'min', e.target.value)}
                    className="w-full px-3 py-3 bg-transparent border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition"
                  />
                </div>
                <div className="flex-1 relative">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant absolute -top-2 left-2 bg-surface px-1 z-10">
                    Max Price (₹)
                  </label>
                  <input 
                    type="number"
                    value={item.max}
                    onChange={(e) => handlePriceChange(index, 'max', e.target.value)}
                    className="w-full px-3 py-3 bg-transparent border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant absolute -top-2 left-2 bg-surface px-1 z-10">
                  Unit
                </label>
                <div className="relative">
                  <select 
                    value={item.unit}
                    onChange={(e) => handleUnitChange(index, e.target.value)}
                    className="w-full px-3 py-3 bg-transparent border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition appearance-none"
                  >
                    <option value="per sq ft">per sq ft</option>
                    <option value="per piece">per piece</option>
                    <option value="per box">per box</option>
                    <option value="per job">per job</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-on-surface-variant absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={handleSave}
          className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          <Check className="w-5 h-5 mr-2" /> Save Pricing
        </button>
      </div>
    </div>
  );
}
