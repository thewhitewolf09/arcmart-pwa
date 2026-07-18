'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterSortSheetProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'services' | 'suppliers';
}

export default function FilterSortSheet({ isOpen, onClose, type }: FilterSortSheetProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-scrim/50 z-[100]"
          />
          
          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 w-full bg-surface-container-lowest rounded-t-[32px] z-[101] shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: '85vh' }}
          >
            {/* Handle */}
            <div className="w-full flex justify-center pt-4 pb-2">
              <div className="w-12 h-1.5 bg-outline-variant/50 rounded-full" />
            </div>

            <div className="px-6 pb-4 border-b border-outline-variant/30 flex justify-between items-center">
              <h2 className="font-headline-sm text-[20px]">Sort & Filter</h2>
              <button onClick={onClose} className="text-primary font-label-md uppercase tracking-wide">Done</button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-8 pb-safe">
              
              {/* Sort By */}
              <section>
                <h3 className="font-label-md text-on-surface-variant uppercase tracking-wider mb-4">Sort By</h3>
                <div className="flex flex-wrap gap-2">
                  <FilterChip label="Nearest" active={true} />
                  <FilterChip label="Highest Rated" />
                  <FilterChip label="Most Jobs" />
                  {type === 'suppliers' && <FilterChip label="Lowest Price" />}
                </div>
              </section>

              {/* Status */}
              <section>
                <h3 className="font-label-md text-on-surface-variant uppercase tracking-wider mb-4">Status</h3>
                <div className="flex flex-wrap gap-2">
                  <FilterChip label="Verified Only" active={true} icon="verified" />
                  <FilterChip label="Available Now" />
                </div>
              </section>

              {/* Distance */}
              <section>
                <h3 className="font-label-md text-on-surface-variant uppercase tracking-wider mb-4 flex justify-between">
                  <span>Distance</span>
                  <span className="text-primary">Within 5 km</span>
                </h3>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  defaultValue="5" 
                  className="w-full accent-primary" 
                />
                <div className="flex justify-between text-on-surface-variant font-label-sm mt-2">
                  <span>1 km</span>
                  <span>20 km</span>
                </div>
              </section>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function FilterChip({ label, active = false, icon }: { label: string, active?: boolean, icon?: string }) {
  return (
    <div 
      className={`px-4 py-2 rounded-full border flex items-center gap-2 cursor-pointer transition-colors ${
        active 
          ? 'bg-secondary-container/30 border-primary text-primary font-medium' 
          : 'bg-transparent border-outline-variant text-on-surface hover:bg-surface-container'
      }`}
    >
      {icon && (
        <span className="material-symbols-outlined text-[16px]">
          {icon}
        </span>
      )}
      <span className="font-label-md">{label}</span>
    </div>
  );
}
