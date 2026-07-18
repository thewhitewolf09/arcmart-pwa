import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LocalitySheetProps {
  isOpen: boolean;
  onClose: () => void;
  currentLocality: string;
  onLocalityChange: (newLocality: string) => void;
}

export default function LocalitySheet({ isOpen, onClose, currentLocality, onLocalityChange }: LocalitySheetProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const recentLocalities = ["Indiranagar", "Koramangala", "Whitefield"];
  const popularLocalities = ["HSR Layout", "Jayanagar", "BTM Layout", "Marathahalli", "Bellandur"];

  const handleSelect = (locality: string) => {
    onLocalityChange(locality);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 w-full h-[85vh] bg-surface rounded-t-[32px] z-50 flex flex-col overflow-hidden shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
          >
            {/* Handle */}
            <div className="w-full flex justify-center pt-4 pb-2 shrink-0">
              <div className="w-12 h-1.5 bg-outline-variant/50 rounded-full" />
            </div>

            <div className="px-6 pb-4 shrink-0 flex items-center justify-between">
              <h2 className="font-headline-sm font-bold text-on-surface">Change Locality</h2>
              <button onClick={onClose} className="w-8 h-8 flex items-center justify-center bg-surface-container rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto px-6 pb-8">
              
              {/* Search Bar */}
              <div className="relative mb-6">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for area, street..."
                  className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-2xl py-4 pl-12 pr-4 font-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              {/* Current Location Button */}
              <button className="w-full flex items-center gap-3 py-4 px-4 bg-primary/10 text-primary font-label-lg font-bold rounded-2xl mb-8 hover:bg-primary/20 transition-colors text-left">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
                <div className="flex flex-col">
                  <span>Use current location</span>
                  <span className="font-body-sm font-normal opacity-80">{currentLocality}</span>
                </div>
              </button>

              {/* Recent Localities */}
              {searchQuery === '' && (
                <div className="mb-8">
                  <h3 className="font-label-sm font-bold text-on-surface-variant uppercase tracking-wider mb-3">Recent Searches</h3>
                  <div className="flex flex-col">
                    {recentLocalities.map((loc, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleSelect(loc)}
                        className="flex items-center gap-3 py-3 border-b border-outline-variant/30 last:border-0 hover:bg-surface-container-lowest transition-colors text-left"
                      >
                        <span className="material-symbols-outlined text-on-surface-variant text-[20px]">history</span>
                        <span className="font-body-lg text-on-surface">{loc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Localities */}
              {searchQuery === '' && (
                <div>
                  <h3 className="font-label-sm font-bold text-on-surface-variant uppercase tracking-wider mb-3">Popular in Bangalore</h3>
                  <div className="flex flex-col">
                    {popularLocalities.map((loc, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleSelect(loc)}
                        className="flex items-center gap-3 py-3 border-b border-outline-variant/30 last:border-0 hover:bg-surface-container-lowest transition-colors text-left"
                      >
                        <span className="material-symbols-outlined text-on-surface-variant text-[20px]">trending_up</span>
                        <span className="font-body-lg text-on-surface">{loc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Search Results (Mock) */}
              {searchQuery !== '' && (
                <div>
                  <h3 className="font-label-sm font-bold text-on-surface-variant uppercase tracking-wider mb-3">Results</h3>
                  <div className="flex flex-col">
                    <button 
                      onClick={() => handleSelect(searchQuery)}
                      className="flex items-center gap-3 py-3 border-b border-outline-variant/30 hover:bg-surface-container-lowest transition-colors text-left"
                    >
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">location_on</span>
                      <span className="font-body-lg text-on-surface">{searchQuery} <span className="text-on-surface-variant">, Bangalore</span></span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
