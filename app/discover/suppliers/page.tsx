'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const suppliers = [
  { id: 'tiles', label: 'Tiles', icon: 'grid_on', count: 8 },
  { id: 'paint', label: 'Paint', icon: 'format_paint', count: 12 },
  { id: 'electrical', label: 'Electrical', icon: 'electrical_services', count: 15 },
  { id: 'plumbing', label: 'Plumbing', icon: 'plumbing', count: 10 },
  { id: 'cement', label: 'Cement', icon: 'foundation', count: 6 },
  { id: 'steel', label: 'Steel', icon: 'hardware', count: 4 },
  { id: 'wood', label: 'Wood & Ply', icon: 'carpenter', count: 9 },
  { id: 'hardware', label: 'Hardware', icon: 'build', count: 21 },
  { id: 'fixtures', label: 'Bath Fixtures', icon: 'bathtub', count: 7 },
];

export default function SuppliersCategoryPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="pt-safe px-4 pt-4 pb-4 bg-surface border-b border-outline-variant shadow-sm flex items-center gap-3 sticky top-0 z-10">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-highest transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </button>
        <h1 className="font-headline-md text-[20px] flex-1">Material Suppliers</h1>
      </header>

      {/* Grid Content */}
      <main className="flex-1 overflow-y-auto px-5 py-6">
        <div className="grid grid-cols-2 gap-4">
          {suppliers.map((supplier, index) => (
            <motion.div
              key={supplier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push(`/discover/suppliers/${supplier.id}`)}
              className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm cursor-pointer hover:bg-surface-container transition-colors"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-[24px]">{supplier.icon}</span>
              </div>
              <div className="text-center">
                <h3 className="font-label-md text-on-surface font-semibold">{supplier.label}</h3>
                <p className="font-label-sm text-on-surface-variant mt-1">{supplier.count} Shops</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
