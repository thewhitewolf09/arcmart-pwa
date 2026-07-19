'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import VoiceSearchOverlay from '../search/VoiceSearchOverlay';

interface UberSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UberSearchOverlay({ isOpen, onClose }: UberSearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

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
    if (isOpen || isVoiceOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, isVoiceOpen]);

  const recentSearches = ['Plumber near me', 'Electrician', 'Tile Suppliers'];
  const popularCategories = [
    { label: 'Plumbers', icon: 'plumbing' },
    { label: 'Electricians', icon: 'electrical_services' },
    { label: 'Painters', icon: 'format_paint' },
    { label: 'Tile Shops', icon: 'dashboard' },
  ];

  // SA-10: Autocomplete Logic (Simulated)
  const allPossibleResults = [
    { type: 'category', title: 'Plumbers', subtitle: '12 Professionals near you', icon: 'plumbing' },
    { type: 'category', title: 'Plumbing Materials', subtitle: '4 Suppliers in Noida', icon: 'architecture' },
    { type: 'profile', title: 'Ramesh Kumar', subtitle: 'Master Plumber • Sector 18', avatar: 'https://ui-avatars.com/api/?name=Ramesh+Kumar&background=random' },
    { type: 'profile', title: 'Raj Electricals', subtitle: 'Certified Electrician • Sector 15', avatar: 'https://ui-avatars.com/api/?name=Raj+Electricals&background=random' },
    { type: 'category', title: 'Electricians', subtitle: '8 Professionals near you', icon: 'electrical_services' },
    { type: 'category', title: 'Painters', subtitle: '15 Professionals near you', icon: 'format_paint' },
    { type: 'category', title: 'Tile Suppliers', subtitle: '6 Suppliers near you', icon: 'dashboard' },
  ];

  const searchResults = query.length > 0 
    ? allPossibleResults.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.subtitle.toLowerCase().includes(query.toLowerCase()))
    : [];

  const showResults = query.length > 0;
  const hasResults = searchResults.length > 0;

  const handleSearchSelect = (searchQuery: string) => {
    onClose();
    // Pass query as URL param to the new Advanced Search Hub
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleVoiceSearch = (voiceQuery: string) => {
    setQuery(voiceQuery);
    setTimeout(() => {
      handleSearchSelect(voiceQuery);
    }, 500);
  };

  return (
    <>
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
              <div className="flex-1 relative flex items-center">
                <input 
                  ref={inputRef}
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && query.trim() && handleSearchSelect(query)}
                  placeholder="Search services, professionals..."
                  className="w-full h-12 bg-surface-container pl-12 pr-12 rounded-full font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <span className="material-symbols-outlined absolute left-4 text-on-surface-variant pointer-events-none">
                  search
                </span>
                
                {query ? (
                  <button 
                    onClick={() => setQuery('')}
                    className="absolute right-3 w-7 h-7 flex items-center justify-center bg-outline-variant/30 rounded-full text-on-surface hover:bg-outline-variant/50 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                ) : (
                  <button 
                    onClick={() => setIsVoiceOpen(true)}
                    className="absolute right-2 w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">mic</span>
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
                          onClick={() => handleSearchSelect(cat.label)}
                        >
                          <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center flex-shrink-0">
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
                    <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
                      <div className="flex items-center justify-between mb-2 px-1">
                        <h3 className="font-label-md text-on-surface-variant uppercase tracking-wider">Results for "{query}"</h3>
                        <button onClick={() => handleSearchSelect(query)} className="text-primary text-xs font-bold uppercase tracking-wider">See all</button>
                      </div>
                      
                      {searchResults.map((result, i) => (
                        <div 
                          key={i}
                          className="flex items-center gap-4 p-4 bg-surface-container-lowest border border-outline-variant rounded-xl active:scale-[0.98] transition-transform cursor-pointer shadow-sm hover:border-primary/30"
                          onClick={() => handleSearchSelect(result.title)}
                        >
                          {result.type === 'category' ? (
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-primary">{result.icon}</span>
                            </div>
                          ) : (
                            <img src={result.avatar} className="w-12 h-12 rounded-full object-cover shrink-0" />
                          )}
                          <div className="flex-1 overflow-hidden">
                            <h4 className="font-headline-md text-[16px] truncate">{result.title}</h4>
                            <p className="font-label-sm text-on-surface-variant truncate">{result.subtitle}</p>
                          </div>
                          <span className="material-symbols-outlined text-outline shrink-0">chevron_right</span>
                        </div>
                      ))}
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

      <VoiceSearchOverlay 
        isOpen={isVoiceOpen} 
        onClose={() => setIsVoiceOpen(false)} 
        onSearch={handleVoiceSearch} 
      />
    </>
  );
}
