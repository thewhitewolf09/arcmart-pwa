'use client';

import React from 'react';
import { X, Check } from 'lucide-react';

interface LeadsFilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadsFilterSheet({ isOpen, onClose }: LeadsFilterSheetProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Sheet */}
      <div className="fixed bottom-0 left-0 w-full bg-surface rounded-t-[32px] z-[101] shadow-2xl transform transition-transform border-t border-outline-variant p-6 pb-safe flex flex-col max-h-[90vh]">
        
        {/* Handle */}
        <div className="w-12 h-1.5 bg-outline-variant rounded-full mx-auto mb-6" />

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-on-surface tracking-tight">Filter Leads</h2>
          <button onClick={onClose} className="p-2 bg-surface-variant rounded-full text-on-surface-variant hover:text-on-surface transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto scrollbar-hide space-y-8 flex-1">
          {/* Status Section */}
          <div>
            <h3 className="text-sm font-bold text-on-surface mb-3 uppercase tracking-wider">Status</h3>
            <div className="flex flex-wrap gap-2">
              {['All Leads', 'New Matches', 'Contacted', 'Converted', 'Not Relevant'].map((status, idx) => (
                <button 
                  key={idx}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold border ${
                    idx === 1 
                      ? 'bg-primary/10 border-primary text-primary flex items-center' 
                      : 'bg-surface border-outline-variant text-on-surface-variant'
                  }`}
                >
                  {idx === 1 && <Check className="w-4 h-4 mr-1.5" />}
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Time Section */}
          <div>
            <h3 className="text-sm font-bold text-on-surface mb-3 uppercase tracking-wider">Time Range</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Today', 'This Week', 'This Month', 'Older'].map((time, idx) => (
                <button 
                  key={idx}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold border text-center ${
                    idx === 0 
                      ? 'bg-primary/10 border-primary text-primary' 
                      : 'bg-surface border-outline-variant text-on-surface-variant'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          
          {/* Categories Section */}
          <div>
            <h3 className="text-sm font-bold text-on-surface mb-3 uppercase tracking-wider">Category</h3>
            <div className="space-y-2">
              {['Tiles & Flooring', 'Sanitaryware', 'Modular Kitchen', 'Paints & Wallpapers'].map((cat, idx) => (
                <label key={idx} className="flex items-center space-x-3 p-3 border border-outline-variant rounded-xl bg-surface">
                  <input type="checkbox" defaultChecked={idx === 0} className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary accent-primary" />
                  <span className="text-sm font-medium text-on-surface">{cat}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex space-x-3">
          <button onClick={onClose} className="flex-1 py-4 bg-surface-variant border border-outline-variant text-on-surface font-bold rounded-xl transition hover:bg-outline-variant">
            Reset
          </button>
          <button onClick={onClose} className="flex-[2] py-4 bg-primary text-on-primary font-bold rounded-xl transition shadow-lg hover:shadow-xl hover:bg-primary/90">
            Apply Filters
          </button>
        </div>

      </div>
    </>
  );
}
