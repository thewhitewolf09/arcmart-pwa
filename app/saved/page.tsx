'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Mock component for LiveFeedCard since it's defined in discover/page.tsx
// Ideally, this should be extracted to a shared components folder.
// For now, I'll create a simplified version here.
function SavedCard({ name, profession, distance, rating, jobs, verified, available }: any) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128`;

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-4 flex gap-4 active:bg-surface-container transition-colors cursor-pointer shadow-sm relative">
      <div className="relative flex-shrink-0">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container border border-outline-variant/30">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        {available && (
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#25D366] border-2 border-surface-container-lowest rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-label-lg font-bold text-on-surface truncate flex items-center gap-1">
              {name}
              {verified && (
                <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
              )}
            </h3>
            <p className="font-body-sm text-on-surface-variant truncate">{profession}</p>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-3">
          <div className="flex items-center gap-1 bg-surface-container py-0.5 px-2 rounded-md">
            <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-label-sm font-bold text-on-surface">{rating}</span>
          </div>
          <span className="font-body-sm text-on-surface-variant text-[12px]">{jobs} jobs</span>
        </div>
      </div>
      
      {/* Unsave Button */}
      <button className="absolute top-4 right-4 text-primary hover:text-primary/80 transition-colors">
        <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
      </button>
    </div>
  );
}

export default function SavedPage() {
  const savedItems = [
    { id: 1, name: "Ramesh Sharma", profession: "Plumber • Pipe Repair", distance: "1.2 km away", rating: 4.8, jobs: 124, verified: true, available: true },
    { id: 2, name: "Gupta Hardwares", profession: "Pipes & Fittings Supplier", distance: "2.5 km away", rating: 4.5, jobs: 89, verified: false, available: true },
    { id: 3, name: "Anita Designs", profession: "Interior Consultant", distance: "5.0 km away", rating: 4.9, jobs: 42, verified: true, available: false },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <header className="px-4 pt-12 pb-6 bg-surface border-b border-outline-variant/30 sticky top-0 z-20">
        <h1 className="font-headline-md font-bold text-on-surface">Saved</h1>
        <p className="font-body-sm text-on-surface-variant mt-1">Professionals and suppliers you bookmarked</p>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6">
        {savedItems.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4"
          >
            {savedItems.map((item) => (
              <SavedCard key={item.id} {...item} />
            ))}
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center py-20">
            <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[32px] text-on-surface-variant">bookmark_border</span>
            </div>
            <h2 className="font-label-lg font-bold text-on-surface mb-2">No saved items yet</h2>
            <p className="font-body-md text-on-surface-variant max-w-[250px]">
              Tap the bookmark icon on a professional's profile to save them for later.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
