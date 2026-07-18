'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface UberSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UberSearchOverlay({ isOpen, onClose }: UberSearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      // Small delay to allow animation to start before focusing (avoids keyboard jump glitch on mobile)
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const recentSearches = ['Plumber near me', 'Electrician', 'Tile Suppliers'];
  const popularCategories = [
    { label: 'Plumbers', icon: 'plumbing' },
    { label: 'Electricians', icon: 'electrical_services' },
    { label: 'Painters', icon: 'format_paint' },
    { label: 'Tile Shops', icon: 'dashboard' },
  ];

  // Dummy results logic
  const hasResults = query.toLowerCase() === 'plumber';
  const showResults = query.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] bg-surface flex flex-col"
        >
          {/* Header & Search Bar */}
          <div className="pt-safe bg-surface-container-lowest border-b border-outline-variant shadow-sm px-4 pb-3 pt-4 flex items-center gap-3">
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-highest transition-colors flex-shrink-0"
            >
              <span className="material-symbols-outlined text-primary">arrow_back</span>
            </button>
            <div className="flex-1 relative">
              <input 
                ref={inputRef}
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, professionals..."
                className="w-full h-12 bg-surface-container pl-12 pr-4 rounded-full font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
              {query && (
                <button 
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-outline-variant/30 rounded-full text-on-surface"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto">
            {!showResults ? (
              <div className="p-4 space-y-8 animate-in fade-in duration-300">
                {/* Recent Searches */}
                <section>
                  <h3 className="font-label-md text-on-surface-variant uppercase tracking-wider mb-3">Recent Searches</h3>
                  <div className="space-y-1">
                    {recentSearches.map((term, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-4 py-3 px-2 active:bg-surface-container rounded-lg cursor-pointer"
                        onClick={() => setQuery(term)}
                      >
                        <span className="material-symbols-outlined text-outline">history</span>
                        <span className="font-body-md text-on-surface">{term}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Popular Categories */}
                <section>
                  <h3 className="font-label-md text-on-surface-variant uppercase tracking-wider mb-4">Popular Categories</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {popularCategories.map((cat, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3 p-3 bg-surface-container-lowest border border-outline-variant rounded-xl cursor-pointer active:scale-95 transition-transform"
                        onClick={() => {
                          onClose();
                          router.push('/discover/services');
                        }}
                      >
                        <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-[20px]">{cat.icon}</span>
                        </div>
                        <span className="font-label-md text-on-surface">{cat.label}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              <div className="p-4">
                {/* Search Results State */}
                {hasResults ? (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <h3 className="font-label-md text-on-surface-variant uppercase tracking-wider mb-2">Results for "{query}"</h3>
                    
                    {/* Fake Result Item */}
                    <div 
                      className="flex items-center gap-4 p-4 bg-surface-container-lowest border border-outline-variant rounded-xl active:scale-[0.98] transition-transform cursor-pointer"
                      onClick={() => {
                        onClose();
                        router.push('/discover/services/plumbers');
                      }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">plumbing</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-headline-md text-[16px]">Plumbers</h4>
                        <p className="font-label-sm text-on-surface-variant">12 Professionals near you</p>
                      </div>
                      <span className="material-symbols-outlined text-outline">chevron_right</span>
                    </div>

                    <div 
                      className="flex items-center gap-4 p-4 bg-surface-container-lowest border border-outline-variant rounded-xl active:scale-[0.98] transition-transform cursor-pointer"
                    >
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxO4GpTg24zLdjwqAd4vEFjN8d7pgKNI-TmZsh8a32lh5MUil3eLPkeHwG49KrUOizFzqqDTqOQWep4Nhm_MNKqk4dB3yleqjfNWznXN0_8yzyW4Lsdj6qQFj9e9M074vGACSe3bq4553KOeh3KbRod_xjZQUX8HlszzKjqQScO1xxfz3f8wCy5aP3oWIKpQNUpIanKj7QlueoC5nmV5mHuHl0Yk8NEiww47Cas24oycXP2CgUoimqaJVqgecbpTkPwldQQWIWR8o" className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-1">
                        <h4 className="font-headline-md text-[16px]">Ramesh Kumar</h4>
                        <p className="font-label-sm text-on-surface-variant">Master Plumber • Sector 18</p>
                      </div>
                      <span className="material-symbols-outlined text-outline">chevron_right</span>
                    </div>
                  </div>
                ) : (
                  /* Empty State */
                  <div className="flex flex-col items-center justify-center pt-20 pb-10 text-center animate-in fade-in duration-300">
                    <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-[40px] text-outline">search_off</span>
                    </div>
                    <h2 className="font-headline-md text-[20px] mb-2">No results found</h2>
                    <p className="font-body-md text-on-surface-variant max-w-[280px]">
                      We couldn't find anything matching "{query}". Try expanding your search area or checking spelling.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
