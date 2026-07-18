'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, ChevronDown, ChevronUp } from 'lucide-react';

const CATEGORY_DATA = [
  {
    id: 'tiles',
    name: 'Tiles & Flooring',
    subcategories: ['Vitrified Tiles', 'Ceramic Tiles', 'Porcelain', 'Wooden Flooring', 'Marble', 'Granite']
  },
  {
    id: 'sanitary',
    name: 'Sanitaryware & Bath',
    subcategories: ['Wash Basins', 'Toilets & Bidets', 'Faucets & Taps', 'Shower Panels', 'Bathtubs']
  },
  {
    id: 'kitchen',
    name: 'Modular Kitchen',
    subcategories: ['Cabinets', 'Countertops', 'Sinks', 'Chimneys', 'Built-in Appliances']
  },
  {
    id: 'paints',
    name: 'Paints & Wallpapers',
    subcategories: ['Interior Paints', 'Exterior Paints', 'Primers', 'Textured Walls', 'Wallpapers']
  }
];

export default function EditCategories() {
  const router = useRouter();
  
  // State for which categories are expanded
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>({
    'tiles': true
  });

  // State for selected subcategories (store as 'categoryId-subcategoryName')
  const [selectedSubcats, setSelectedSubcats] = useState<string[]>([
    'tiles-Vitrified Tiles',
    'tiles-Ceramic Tiles',
    'sanitary-Wash Basins'
  ]);

  const toggleCategory = (catId: string) => {
    setExpandedCats(prev => ({ ...prev, [catId]: !prev[catId] }));
  };

  const toggleSubcategory = (catId: string, subcat: string) => {
    const key = `${catId}-${subcat}`;
    setSelectedSubcats(prev => {
      if (prev.includes(key)) return prev.filter(k => k !== key);
      return [...prev, key];
    });
  };

  const handleSave = () => {
    // Save logic would go here
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
          <span className="font-bold text-on-surface truncate">Service Categories</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
          Select the products and services you provide. This helps us match you with relevant homeowner leads.
        </p>

        <div className="space-y-4">
          {CATEGORY_DATA.map(category => (
            <div key={category.id} className="glass-card border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleCategory(category.id)}
                className="w-full px-5 py-4 flex items-center justify-between bg-surface hover:bg-surface-variant transition"
              >
                <span className="font-bold text-on-surface text-base">{category.name}</span>
                {expandedCats[category.id] ? (
                  <ChevronUp className="w-5 h-5 text-on-surface-variant" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-on-surface-variant" />
                )}
              </button>
              
              {expandedCats[category.id] && (
                <div className="px-5 pb-4 pt-1 border-t border-outline-variant bg-surface">
                  <div className="flex flex-col space-y-3 mt-3">
                    {category.subcategories.map(sub => {
                      const key = `${category.id}-${sub}`;
                      const isSelected = selectedSubcats.includes(key);
                      
                      return (
                        <label 
                          key={sub} 
                          className="flex items-center space-x-3 cursor-pointer group"
                        >
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                            isSelected 
                              ? 'bg-primary border-primary text-on-primary' 
                              : 'border-outline-variant bg-transparent group-hover:border-primary'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" strokeWidth={3} />}
                          </div>
                          <span className={`text-sm ${isSelected ? 'font-bold text-on-surface' : 'font-medium text-on-surface-variant'}`}>
                            {sub}
                          </span>
                          {/* Hidden actual checkbox for accessibility if needed, though not strictly required for this mock */}
                          <input 
                            type="checkbox" 
                            className="hidden" 
                            checked={isSelected}
                            onChange={() => toggleSubcategory(category.id, sub)} 
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
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
          <Check className="w-5 h-5 mr-2" /> Save Categories
        </button>
      </div>
    </div>
  );
}
