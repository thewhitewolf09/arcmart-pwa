'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

interface FilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: any) => void;
}

export default function FilterSheet({ isOpen, onClose, onApply }: FilterSheetProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(5000);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [availableToday, setAvailableToday] = useState(false);
  const [rating, setRating] = useState('All');

  const categories = ['All', 'Plumbers', 'Electricians', 'Painters', 'Carpenters', 'Tile Suppliers'];
  const ratings = ['All', '4.5+', '4.0+', '3.0+'];

  const handleApply = () => {
    onApply({
      category: activeCategory,
      maxPrice: priceRange,
      verifiedOnly,
      availableToday,
      minRating: rating
    });
    onClose();
  };

  const handleReset = () => {
    setActiveCategory('All');
    setPriceRange(5000);
    setVerifiedOnly(false);
    setAvailableToday(false);
    setRating('All');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 w-full bg-surface rounded-t-[32px] z-50 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/50 sticky top-0 bg-surface z-10">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-on-surface" />
                <h2 className="text-lg font-bold text-on-surface">Filters</h2>
              </div>
              <button onClick={onClose} className="p-2 -mr-2 text-on-surface-variant hover:text-on-surface rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-8 flex-1 pb-32">
              
              {/* Service Categories */}
              <section>
                <h3 className="text-sm font-bold text-on-surface mb-3">Service Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-colors ${
                        activeCategory === cat 
                          ? 'bg-primary text-on-primary border-primary' 
                          : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant hover:bg-surface-container'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </section>

              {/* Quick Toggles (SA-06, SA-07) */}
              <section className="space-y-4">
                <h3 className="text-sm font-bold text-on-surface mb-3">Quick Filters</h3>
                
                <div 
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-colors ${
                    verifiedOnly ? 'bg-primary/5 border-primary/30' : 'bg-surface-container-lowest border-outline-variant/50'
                  }`}
                  onClick={() => setVerifiedOnly(!verifiedOnly)}
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface text-sm flex items-center">
                      ArcMart Assured Only
                      {verifiedOnly && <CheckCircle2 className="w-4 h-4 text-primary ml-2" />}
                    </span>
                    <span className="text-xs text-on-surface-variant mt-0.5">Show only verified professionals</span>
                  </div>
                  <div className={`w-12 h-6 rounded-full relative transition-colors ${verifiedOnly ? 'bg-primary' : 'bg-outline-variant/50'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${verifiedOnly ? 'left-7' : 'left-1'}`} />
                  </div>
                </div>

                <div 
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-colors ${
                    availableToday ? 'bg-primary/5 border-primary/30' : 'bg-surface-container-lowest border-outline-variant/50'
                  }`}
                  onClick={() => setAvailableToday(!availableToday)}
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface text-sm">Available Today</span>
                    <span className="text-xs text-on-surface-variant mt-0.5">Ready to work immediately</span>
                  </div>
                  <div className={`w-12 h-6 rounded-full relative transition-colors ${availableToday ? 'bg-primary' : 'bg-outline-variant/50'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${availableToday ? 'left-7' : 'left-1'}`} />
                  </div>
                </div>
              </section>

              {/* Price Range (SA-05) */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-on-surface">Max Visit Charge</h3>
                  <span className="text-primary font-bold">Up to ₹{priceRange}</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="10000" 
                  step="500"
                  value={priceRange} 
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-on-surface-variant mt-2 font-semibold">
                  <span>₹500</span>
                  <span>₹10,000+</span>
                </div>
              </section>

              {/* Rating */}
              <section>
                <h3 className="text-sm font-bold text-on-surface mb-3">Minimum Rating</h3>
                <div className="flex flex-wrap gap-2">
                  {ratings.map(r => (
                    <button
                      key={r}
                      onClick={() => setRating(r)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border flex items-center transition-colors ${
                        rating === r 
                          ? 'bg-[#FFF9C4]/50 text-[#F57F17] border-[#F57F17]/30' 
                          : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant hover:bg-surface-container'
                      }`}
                    >
                      {r !== 'All' && <span className="material-symbols-outlined text-[14px] mr-1" style={{fontVariationSettings: "'FILL' 1"}}>star</span>}
                      {r}
                    </button>
                  ))}
                </div>
              </section>

            </div>

            {/* Sticky Action Buttons */}
            <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant/50 flex gap-3 z-20 shadow-[0_-8px_20px_rgba(0,0,0,0.05)]">
              <button 
                onClick={handleReset}
                className="flex-1 py-4 font-bold text-on-surface-variant bg-surface-container hover:bg-surface-container-high rounded-xl transition-colors"
              >
                Clear All
              </button>
              <button 
                onClick={handleApply}
                className="flex-[2] py-4 font-bold text-on-primary bg-primary hover:bg-primary/90 rounded-xl shadow-md transition-colors"
              >
                Apply Filters
              </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
