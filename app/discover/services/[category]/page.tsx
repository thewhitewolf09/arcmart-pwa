'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import FilterSortSheet from '../../../../components/discovery/FilterSortSheet';
import ProfessionalCard from '../../../../components/discovery/ProfessionalCard';
import { useConnect } from '../../../../context/ConnectContext';

export default function ProfessionalListPage() {
  const params = useParams();
  const router = useRouter();
  const category = (params.category as string) || 'Professionals';
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Capitalize category name
  const title = category.charAt(0).toUpperCase() + category.slice(1);

  // Mock empty state for demonstration
  const isEmpty = category === 'carpenters'; // Pretend carpenters have no results

  const toggleCompareMode = () => {
    setIsCompareMode(!isCompareMode);
    if (isCompareMode) {
      setSelectedIds([]);
    }
  };

  const handleToggleSelection = (id: string) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      if (prev.length < 3) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const handleCompare = () => {
    if (selectedIds.length >= 2) {
      router.push(`/compare?ids=${selectedIds.join(',')}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      {/* Blueprint background */}
      <div className="fixed inset-0 blueprint-grid pointer-events-none z-0 opacity-10"></div>

      {/* Header */}
      <header className="pt-safe px-4 pt-4 pb-4 bg-surface/90 backdrop-blur-md border-b border-outline-variant shadow-sm flex items-center gap-3 sticky top-0 z-20">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-highest transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </button>
        <div className="flex-1">
          <h1 className="font-headline-md text-[20px]">{title}</h1>
          <p className="font-label-sm text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">location_on</span>
            Sector 18, Noida
          </p>
        </div>
        <button
          onClick={toggleCompareMode}
          className={`px-3 py-1.5 rounded-full text-[12px] font-bold ${
            isCompareMode ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface'
          }`}
        >
          {isCompareMode ? 'Cancel' : 'Compare'}
        </button>
      </header>

      {/* Filter & Sort Bar */}
      <div className="px-4 py-3 bg-surface/95 backdrop-blur-md sticky top-[calc(env(safe-area-inset-top)+72px)] z-20 flex gap-2 overflow-x-auto no-scrollbar border-b border-outline-variant/30">
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/50 flex-shrink-0 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[18px]">tune</span>
          <span className="font-label-md">Filters</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/50 flex-shrink-0 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
          <span className="font-label-md text-primary">Verified</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/50 flex-shrink-0 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[18px]">sort</span>
          <span className="font-label-md">Nearest</span>
        </button>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-4 py-4 relative z-10 space-y-4 pb-24">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center pt-20 pb-10 text-center animate-in fade-in duration-300">
            <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[40px] text-outline">search_off</span>
            </div>
            <h2 className="font-headline-md text-[20px] mb-2">No {title} found</h2>
            <p className="font-body-md text-on-surface-variant max-w-[280px]">
              We couldn't find any {category} near you. Try expanding your search area.
            </p>
          </div>
        ) : (
          <>
            <ProfessionalCard 
              id="1"
              name="Ramesh Kumar"
              distance="1.2 km away"
              rating={4.8}
              jobs={124}
              verified={true}
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuD9pT-7N0N92lVvQ5Q4Q83tYkO0fE_1q9qOqQ7qU-Xk3rP2q6uXnLdY5vX9w7g2w7gP3wW8XlR0vH2gXk9gM8qD5yX3oA4zM9xS7vD6lA5tC4vE3rP9qU2sW5hK8oR1lN6yV5xG6wN3lI2kM8pC5uT9fE4lQ2zM3vG0wW7jO8xU6vA3qM9lX6kP4lW5"
              compareMode={isCompareMode}
              isSelectedForCompare={selectedIds.includes('1')}
              onToggleCompare={() => handleToggleSelection('1')}
            />
            <ProfessionalCard 
              id="2"
              name="Singh Electricals"
              distance="2.5 km away"
              rating={4.9}
              jobs={340}
              verified={true}
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDxO4GpTg24zLdjwqAd4vEFjN8d7pgKNI-TmZsh8a32lh5MUil3eLPkeHwG49KrUOizFzqqDTqOQWep4Nhm_MNKqk4dB3yleqjfNWznXN0_8yzyW4Lsdj6qQFj9e9M074vGACSe3bq4553KOeh3KbRod_xjZQUX8HlszzKjqQScO1xxfz3f8wCy5aP3oWIKpQNUpIanKj7QlueoC5nmV5mHuHl0Yk8NEiww47Cas24oycXP2CgUoimqaJVqgecbpTkPwldQQWIWR8o"
              compareMode={isCompareMode}
              isSelectedForCompare={selectedIds.includes('2')}
              onToggleCompare={() => handleToggleSelection('2')}
            />
            <ProfessionalCard 
              id="3"
              name="Ajay Painters"
              distance="3.0 km away"
              rating={4.5}
              jobs={89}
              verified={false}
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuC9pT-7N0N92lVvQ5Q4Q83tYkO0fE_1q9qOqQ7qU-Xk3rP2q6uXnLdY5vX9w7g2w7gP3wW8XlR0vH2gXk9gM8qD5yX3oA4zM9xS7vD6lA5tC4vE3rP9qU2sW5hK8oR1lN6yV5xG6wN3lI2kM8pC5uT9fE4lQ2zM3vG0wW7jO8xU6vA3qM9lX6kP4lW5"
              compareMode={isCompareMode}
              isSelectedForCompare={selectedIds.includes('3')}
              onToggleCompare={() => handleToggleSelection('3')}
            />
            
            <div className="py-2 mt-4 text-center border-t border-outline-variant/30 pt-4">
              <span className="font-label-sm uppercase tracking-widest text-outline">Test Edge Cases</span>
            </div>
            
            <ProfessionalCard 
              id="offline"
              name="Offline Professional"
              distance="Test"
              rating={0}
              jobs={0}
              verified={false}
              compareMode={isCompareMode}
              isSelectedForCompare={selectedIds.includes('offline')}
              onToggleCompare={() => handleToggleSelection('offline')}
            />
            <ProfessionalCard 
              id="closed"
              name="Closed Supplier"
              distance="Test"
              rating={0}
              jobs={0}
              verified={false}
              compareMode={isCompareMode}
              isSelectedForCompare={selectedIds.includes('closed')}
              onToggleCompare={() => handleToggleSelection('closed')}
            />
            <ProfessionalCard 
              id="not-found"
              name="Failing Connection"
              distance="Test"
              rating={0}
              jobs={0}
              verified={false}
              compareMode={isCompareMode}
              isSelectedForCompare={selectedIds.includes('not-found')}
              onToggleCompare={() => handleToggleSelection('not-found')}
            />
            <ProfessionalCard 
              id="connected"
              name="Connected Professional"
              distance="Test"
              rating={0}
              jobs={0}
              verified={false}
              compareMode={isCompareMode}
              isSelectedForCompare={selectedIds.includes('connected')}
              onToggleCompare={() => handleToggleSelection('connected')}
            />
          </>
        )}
      </main>

      {/* Compare Floating Action Button */}
      {isCompareMode && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 left-4 right-4 z-30"
        >
          <button 
            onClick={handleCompare}
            disabled={selectedIds.length < 2}
            className={`w-full py-4 rounded-full font-label-lg shadow-lg flex items-center justify-center gap-2 transition-colors ${
              selectedIds.length >= 2 
                ? 'bg-primary text-on-primary active:scale-95' 
                : 'bg-surface-container text-on-surface-variant opacity-80 cursor-not-allowed'
            }`}
          >
            <span className="material-symbols-outlined">compare</span>
            {selectedIds.length < 2 
              ? 'Select at least 2 to compare' 
              : `Compare ${selectedIds.length} Professionals`}
          </button>
        </motion.div>
      )}

      <FilterSortSheet 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        type="services" 
      />
    </div>
  );
}


