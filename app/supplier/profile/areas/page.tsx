'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, Search, X, MapPin } from 'lucide-react';

const SUGGESTED_AREAS = [
  'Sector 18', 'Sector 62', 'Indirapuram', 'Vaishali', 'Greater Noida West', 'Crossing Republik', 'Kaushambi'
];

export default function EditAreas() {
  const router = useRouter();
  
  const [selectedAreas, setSelectedAreas] = useState<string[]>(['Sector 18', 'Indirapuram', 'Greater Noida West']);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddArea = (area: string) => {
    if (!selectedAreas.includes(area)) {
      setSelectedAreas([...selectedAreas, area]);
    }
    setSearchQuery('');
  };

  const handleRemoveArea = (areaToRemove: string) => {
    setSelectedAreas(selectedAreas.filter(a => a !== areaToRemove));
  };

  const handleSave = () => {
    // Save logic
    router.back();
  };

  const filteredSuggestions = SUGGESTED_AREAS.filter(
    area => area.toLowerCase().includes(searchQuery.toLowerCase()) && !selectedAreas.includes(area)
  );

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Service Areas</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
          Select the localities where you can supply materials or provide services. Homeowners search based on these locations.
        </p>

        {/* Search Input */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-on-surface-variant" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-semibold focus:outline-none focus:border-primary focus:bg-surface transition"
            placeholder="Search localities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Selected Areas */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Selected Areas ({selectedAreas.length})</h3>
          <div className="flex flex-wrap gap-2">
            {selectedAreas.length === 0 ? (
              <p className="text-sm text-on-surface-variant italic">No areas selected yet.</p>
            ) : (
              selectedAreas.map((area) => (
                <div key={area} className="flex items-center px-3 py-1.5 rounded-lg bg-[#0d1c32] text-white font-bold text-sm shadow-sm animate-in zoom-in-95 duration-200">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 opacity-70" />
                  {area}
                  <button 
                    onClick={() => handleRemoveArea(area)}
                    className="ml-2 p-0.5 rounded-full hover:bg-white/20 transition"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Suggestions / Search Results */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">
            {searchQuery ? 'Search Results' : 'Suggested Areas'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {filteredSuggestions.length === 0 && searchQuery ? (
              <p className="text-sm text-on-surface-variant w-full">No matching localities found. <button onClick={() => handleAddArea(searchQuery)} className="text-primary font-bold ml-1 hover:underline">Add "{searchQuery}" anyway</button></p>
            ) : (
              filteredSuggestions.map((area) => (
                <button 
                  key={area} 
                  onClick={() => handleAddArea(area)}
                  className="flex items-center px-3 py-1.5 rounded-lg bg-surface border border-outline-variant text-on-surface font-bold text-sm hover:bg-surface-variant transition active:scale-95"
                >
                  <MapPin className="w-3.5 h-3.5 text-on-surface-variant mr-1.5" />
                  {area}
                </button>
              ))
            )}
          </div>
        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={handleSave}
          className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          <Check className="w-5 h-5 mr-2" /> Save Service Areas
        </button>
      </div>
    </div>
  );
}
