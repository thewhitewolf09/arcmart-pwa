'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import FilterSortSheet from '../../../../components/discovery/FilterSortSheet';
import SupplierCard from '../../../../components/discovery/SupplierCard';
import { useConnect } from '../../../../context/ConnectContext';

export default function SupplierListPage() {
  const params = useParams();
  const router = useRouter();
  const category = (params.category as string) || 'Suppliers';
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedSupplierIds, setSelectedSupplierIds] = useState<string[]>([]);

  // Capitalize category name
  const title = category.charAt(0).toUpperCase() + category.slice(1);

  const toggleSelectionMode = () => {
    setIsSelectionMode(!isSelectionMode);
    if (isSelectionMode) {
      setSelectedSupplierIds([]);
    }
  };

  const handleToggleSelection = (id: string) => {
    setSelectedSupplierIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      return [...prev, id];
    });
  };

  const handleRequestQuote = () => {
    if (selectedSupplierIds.length > 0) {
      router.push(`/quotes/new?supplierIds=${selectedSupplierIds.join(',')}`);
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
          <h1 className="font-headline-md text-[20px]">{title} Suppliers</h1>
          <p className="font-label-sm text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">location_on</span>
            Sector 18, Noida
          </p>
        </div>
        <button
          onClick={toggleSelectionMode}
          className={`px-3 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap ${
            isSelectionMode ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface'
          }`}
        >
          {isSelectionMode ? 'Cancel' : 'Get Quotes'}
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
          <span className="material-symbols-outlined text-[18px]">star</span>
          <span className="font-label-md">Top Rated</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/50 flex-shrink-0 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[18px]">local_shipping</span>
          <span className="font-label-md">Delivery</span>
        </button>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-4 py-4 relative z-10 space-y-4 pb-24">
        <SupplierCard 
          id="1"
          name="Sharma Ceramics"
          distance="2.1 km away"
          rating={4.7}
          reviews={89}
          priceRange="₹₹"
          tags={['Tiles', 'Sanitaryware']}
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDxO4GpTg24zLdjwqAd4vEFjN8d7pgKNI-TmZsh8a32lh5MUil3eLPkeHwG49KrUOizFzqqDTqOQWep4Nhm_MNKqk4dB3yleqjfNWznXN0_8yzyW4Lsdj6qQFj9e9M074vGACSe3bq4553KOeh3KbRod_xjZQUX8HlszzKjqQScO1xxfz3f8wCy5aP3oWIKpQNUpIanKj7QlueoC5nmV5mHuHl0Yk8NEiww47Cas24oycXP2CgUoimqaJVqgecbpTkPwldQQWIWR8o"
          selectionMode={isSelectionMode}
          isSelected={selectedSupplierIds.includes('1')}
          onToggleSelection={() => handleToggleSelection('1')}
        />
        <SupplierCard 
          id="2"
          name="BuildMart"
          distance="4.5 km away"
          rating={4.9}
          reviews={210}
          priceRange="₹₹₹"
          tags={['Tiles', 'Marbles', 'Granite']}
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuD9pT-7N0N92lVvQ5Q4Q83tYkO0fE_1q9qOqQ7qU-Xk3rP2q6uXnLdY5vX9w7g2w7gP3wW8XlR0vH2gXk9gM8qD5yX3oA4zM9xS7vD6lA5tC4vE3rP9qU2sW5hK8oR1lN6yV5xG6wN3lI2kM8pC5uT9fE4lQ2zM3vG0wW7jO8xU6vA3qM9lX6kP4lW5"
          selectionMode={isSelectionMode}
          isSelected={selectedSupplierIds.includes('2')}
          onToggleSelection={() => handleToggleSelection('2')}
        />
      </main>

      {/* Floating Action Button for Quotes */}
      {isSelectionMode && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 left-4 right-4 z-30"
        >
          <button 
            onClick={handleRequestQuote}
            disabled={selectedSupplierIds.length === 0}
            className={`w-full py-4 rounded-full font-label-lg shadow-lg flex items-center justify-center gap-2 transition-colors ${
              selectedSupplierIds.length > 0 
                ? 'bg-primary text-on-primary active:scale-95' 
                : 'bg-surface-container text-on-surface-variant opacity-80 cursor-not-allowed'
            }`}
          >
            <span className="material-symbols-outlined">request_quote</span>
            {selectedSupplierIds.length === 0 
              ? 'Select suppliers for quote' 
              : `Request Quote from ${selectedSupplierIds.length} Supplier${selectedSupplierIds.length > 1 ? 's' : ''}`}
          </button>
        </motion.div>
      )}

      <FilterSortSheet 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        type="suppliers" 
      />
    </div>
  );
}


