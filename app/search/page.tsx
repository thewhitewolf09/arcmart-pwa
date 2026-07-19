'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, SlidersHorizontal, Map as MapIcon, List, BookmarkPlus, Bookmark, Search } from 'lucide-react';
import FilterSheet from '../../components/search/FilterSheet';
import MapView from '../../components/search/MapView';
import SaveSearchPrompt from '../../components/search/SaveSearchPrompt';
import UberSearchOverlay from '../../components/discovery/UberSearchOverlay';

function SearchResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [isSavePromptOpen, setIsSavePromptOpen] = useState(false);
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);

  // Mock results data based on query
  const results = [
    {
      id: 1,
      name: 'Ramesh Kumar',
      profession: 'Master Plumber',
      distance: '1.2 km away',
      rating: 4.8,
      reviews: 124,
      verified: true,
      available: true,
      price: '₹500 Visit',
      avatar: 'https://ui-avatars.com/api/?name=Ramesh+Kumar&background=random'
    },
    {
      id: 2,
      name: 'Singh Electricals',
      profession: 'Certified Electrician',
      distance: '2.5 km away',
      rating: 4.9,
      reviews: 340,
      verified: true,
      available: true,
      price: '₹400 Visit',
      avatar: 'https://ui-avatars.com/api/?name=Singh+Electricals&background=random'
    },
    {
      id: 3,
      name: 'Ajay Painters',
      profession: 'Painting Contractor',
      distance: '3.0 km away',
      rating: 4.5,
      reviews: 89,
      verified: false,
      available: false,
      price: 'Free Est.',
      avatar: 'https://ui-avatars.com/api/?name=Ajay+Painters&background=random'
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      
      {/* App Bar / Header */}
      <div className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant pb-3 pt-safe">
        <div className="flex items-center justify-between px-4 mt-2">
          <div className="flex items-center flex-1">
            <button onClick={() => router.back()} className="p-2 -ml-2 mr-1 rounded-full hover:bg-surface-container-highest transition-colors flex-shrink-0">
              <ArrowLeft className="w-5 h-5 text-on-surface" />
            </button>
            <div 
              onClick={() => setIsSearchOverlayOpen(true)}
              className="flex-1 h-10 bg-surface-container rounded-full flex items-center px-4 cursor-text border border-outline-variant/30 hover:bg-surface-container-high transition-colors"
            >
              <Search className="w-4 h-4 text-on-surface-variant mr-2" />
              <span className="font-body-md text-on-surface truncate flex-1">{query || 'Search...'}</span>
            </div>
          </div>
        </div>

        {/* Action Bar (Filters, Map Toggle, Save) */}
        <div className="flex items-center justify-between px-4 mt-4">
          <div className="flex gap-2">
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="h-8 px-3 rounded-full border border-outline-variant bg-surface flex items-center gap-2 text-xs font-bold text-on-surface hover:bg-surface-container transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
            <button 
              onClick={() => setIsSavePromptOpen(true)}
              className="h-8 px-3 rounded-full border border-outline-variant bg-surface flex items-center gap-2 text-xs font-bold text-on-surface hover:bg-surface-container transition-colors"
            >
              <BookmarkPlus className="w-3.5 h-3.5" />
              Save
            </button>
          </div>

          <div className="flex bg-surface-container rounded-lg p-0.5 border border-outline-variant">
            <button 
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md flex items-center justify-center transition-colors ${viewMode === 'list' ? 'bg-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              <List className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('map')}
              className={`p-1.5 rounded-md flex items-center justify-center transition-colors ${viewMode === 'map' ? 'bg-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              <MapIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 relative ${viewMode === 'map' ? 'overflow-hidden' : 'overflow-y-auto'}`}>
        {viewMode === 'map' ? (
          <div className="absolute inset-0">
            <MapView results={results} />
          </div>
        ) : (
          <div className="p-4 space-y-4 pb-24">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1 mb-2">
              {results.length} results found
            </p>
            
            {results.map((result, i) => (
              <motion.div 
                key={result.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-4 flex gap-4 active:bg-surface-container transition-colors cursor-pointer shadow-sm"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container border border-outline-variant/30">
                    <img src={result.avatar} alt={result.name} className="w-full h-full object-cover" />
                  </div>
                  {result.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-surface-container-lowest rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-center overflow-hidden">
                  <div className="flex justify-between items-start mb-0.5">
                    <h3 className="font-headline-md text-[16px] font-bold text-on-surface truncate pr-2">{result.name}</h3>
                    {result.available && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-[9px] uppercase font-bold tracking-widest flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        Now
                      </span>
                    )}
                  </div>
                  <p className="font-body-sm text-on-surface-variant mb-1.5 truncate">{result.profession} • {result.distance}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-surface-container-high/50 px-1.5 py-0.5 rounded">
                      <span className="material-symbols-outlined text-[12px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label-sm text-on-surface font-bold text-[11px]">{result.rating} ({result.reviews})</span>
                    </div>
                    <span className="font-label-sm text-on-surface font-bold text-[11px]">{result.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Sheets & Overlays */}
      <FilterSheet 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        onApply={(filters) => console.log('Filters applied:', filters)} 
      />
      
      <SaveSearchPrompt 
        isOpen={isSavePromptOpen} 
        onClose={() => setIsSavePromptOpen(false)} 
        query={query} 
      />

      <UberSearchOverlay 
        isOpen={isSearchOverlayOpen} 
        onClose={() => setIsSearchOverlayOpen(false)} 
      />

    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface flex items-center justify-center">Loading search results...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
