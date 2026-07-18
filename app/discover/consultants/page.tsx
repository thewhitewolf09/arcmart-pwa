'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const consultantCategories = [
  { id: 'architects', label: 'Architects', icon: 'architecture', count: 12 },
  { id: 'interior-designers', label: 'Interior Designers', icon: 'chair', count: 18 },
  { id: 'vastu-experts', label: 'Vastu Experts', icon: 'explore', count: 5 },
  { id: 'structural-engineers', label: 'Structural Engineers', icon: 'engineering', count: 8 },
  { id: 'legal-advisors', label: 'Legal Advisors', icon: 'gavel', count: 3 },
];

export default function ConsultantsCategoryPage() {
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
        <h1 className="font-headline-md text-[20px] flex-1">Consultants</h1>
      </header>

      {/* Grid Content */}
      <main className="flex-1 overflow-y-auto px-5 py-6">
        <div className="grid grid-cols-2 gap-4">
          {consultantCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push(`/discover/consultants/${category.id}`)}
              className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm cursor-pointer hover:bg-surface-container transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[24px]">{category.icon}</span>
              </div>
              <div className="text-center">
                <h3 className="font-label-md text-on-surface font-semibold">{category.label}</h3>
                <p className="font-label-sm text-on-surface-variant mt-1">{category.count} Nearby</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
