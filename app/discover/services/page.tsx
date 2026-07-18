'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const services = [
  { id: 'plumbers', label: 'Plumbers', icon: 'plumbing', count: 14 },
  { id: 'electricians', label: 'Electricians', icon: 'electrical_services', count: 22 },
  { id: 'painters', label: 'Painters', icon: 'format_paint', count: 8 },
  { id: 'carpenters', label: 'Carpenters', icon: 'handyman', count: 11 },
  { id: 'masons', label: 'Masons', icon: 'architecture', count: 5 },
  { id: 'welders', label: 'Welders', icon: 'manufacturing', count: 3 },
  { id: 'cleaners', label: 'Cleaners', icon: 'cleaning_services', count: 19 },
  { id: 'labours', label: 'Labours', icon: 'engineering', count: 42 },
];

export default function ServicesCategoryPage() {
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
        <h1 className="font-headline-md text-[20px] flex-1">Services</h1>
      </header>

      {/* Grid Content */}
      <main className="flex-1 overflow-y-auto px-5 py-6">
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push(`/discover/services/${service.id}`)}
              className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm cursor-pointer hover:bg-surface-container transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[24px]">{service.icon}</span>
              </div>
              <div className="text-center">
                <h3 className="font-label-md text-on-surface font-semibold">{service.label}</h3>
                <p className="font-label-sm text-on-surface-variant mt-1">{service.count} Nearby</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
